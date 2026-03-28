import fs from "fs";
import pkg from "svg-path-parser";

const { parseSVG, makeAbsolute } = pkg;

const TWO_PI = Math.PI * 2;

/* ------------------ HELPERS ------------------ */

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function cubicBezier(p0, p1, p2, p3, t) {
  const x =
    Math.pow(1 - t, 3) * p0.x +
    3 * Math.pow(1 - t, 2) * t * p1.x +
    3 * (1 - t) * Math.pow(t, 2) * p2.x +
    Math.pow(t, 3) * p3.x;

  const y =
    Math.pow(1 - t, 3) * p0.y +
    3 * Math.pow(1 - t, 2) * t * p1.y +
    3 * (1 - t) * Math.pow(t, 2) * p2.y +
    Math.pow(t, 3) * p3.y;

  return { x, y };
}

function quadraticBezier(p0, p1, p2, t) {
  const x =
    Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;

  const y =
    Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;

  return { x, y };
}

/* ------------------ SAMPLING ------------------ */

function samplePath(commands, samplesPerSegment = 20) {
  let points = [];
  let current = { x: 0, y: 0 };
  let startPoint = null;

  for (let cmd of commands) {
    if (cmd.code === "M") {
      current = { x: cmd.x, y: cmd.y };
      startPoint = current;
    } else if (cmd.code === "L") {
      const target = { x: cmd.x, y: cmd.y };

      for (let t = 0; t <= 1; t += 1 / samplesPerSegment) {
        points.push({
          x: lerp(current.x, target.x, t),
          y: lerp(current.y, target.y, t),
        });
      }

      current = target;
    } else if (cmd.code === "C") {
      const p0 = current;
      const p1 = { x: cmd.x1, y: cmd.y1 };
      const p2 = { x: cmd.x2, y: cmd.y2 };
      const p3 = { x: cmd.x, y: cmd.y };

      for (let t = 0; t <= 1; t += 1 / samplesPerSegment) {
        points.push(cubicBezier(p0, p1, p2, p3, t));
      }

      current = p3;
    } else if (cmd.code === "Q") {
      const p0 = current;
      const p1 = { x: cmd.x1, y: cmd.y1 };
      const p2 = { x: cmd.x, y: cmd.y };

      for (let t = 0; t <= 1; t += 1 / samplesPerSegment) {
        points.push(quadraticBezier(p0, p1, p2, t));
      }

      current = p2;
    } else if (cmd.code === "Z") {
      if (startPoint) {
        const target = startPoint;

        for (let t = 0; t <= 1; t += 1 / samplesPerSegment) {
          points.push({
            x: lerp(current.x, target.x, t),
            y: lerp(current.y, target.y, t),
          });
        }

        current = target;
      }
    }
  }

  return points;
}

/* ------------------ NORMALIZE ------------------ */

function normalize(points) {
  let minX = Infinity,
    maxX = -Infinity;
  let minY = Infinity,
    maxY = -Infinity;

  for (let p of points) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const scale = Math.max(maxX - minX, maxY - minY);

  return points.map((p) => ({
    x: ((p.x - cx) / scale) * 300,
    y: ((p.y - cy) / scale) * 300,
  }));
}

/* ------------------ DFT ------------------ */

function dft(points) {
  const N = points.length;
  const X = [];

  for (let k = -Math.floor(N / 2); k < Math.floor(N / 2); k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < N; n++) {
      const phi = (TWO_PI * k * n) / N;

      re += points[n].x * Math.cos(phi) + points[n].y * Math.sin(phi);
      im += -points[n].x * Math.sin(phi) + points[n].y * Math.cos(phi);
    }

    re /= N;
    im /= N;

    const freq = k;
    const amp = Math.sqrt(re * re + im * im);
    const phase = Math.atan2(im, re);

    X.push({ re, im, freq, amp, phase });
  }

  return X.sort((a, b) => b.amp - a.amp);
}

/*-----------------------Distance normalisation---------------------- */

function reorderPoints(points) {
  if (points.length === 0) return points;

  let ordered = [points[0]];
  let remaining = points.slice(1);

  while (remaining.length) {
    let last = ordered[ordered.length - 1];

    let nearestIndex = 0;
    let minDist = Infinity;

    for (let i = 0; i < remaining.length; i++) {
      const dx = remaining[i].x - last.x;
      const dy = remaining[i].y - last.y;
      const dist = dx * dx + dy * dy;

      if (dist < minDist) {
        minDist = dist;
        nearestIndex = i;
      }
    }

    ordered.push(remaining[nearestIndex]);
    remaining.splice(nearestIndex, 1);
  }

  return ordered;
}

/* ------------------ MAIN ------------------ */

const svg = fs.readFileSync("./public/face.svg", "utf8");

const pathMatches = [...svg.matchAll(/d="([^"]+)"/g)];

let allPoints = [];

for (let match of pathMatches) {
  let d = match[1].trim();

  if (!d.startsWith("M") && !d.startsWith("m")) {
    d = "M 0 0 " + d;
  }

  let commands = parseSVG(d);
  commands = makeAbsolute(commands);

  const pts = samplePath(commands, 6);
  allPoints.push(...pts);
}

console.log("Points:", allPoints.length);

if (allPoints.length === 0) {
  console.error("❌ No points extracted");
  process.exit(1);
}

// allPoints = reorderPoints(allPoints);

allPoints = normalize(allPoints);

const coeffs = dft(allPoints);

fs.writeFileSync("./public/fourier.json", JSON.stringify(coeffs));

console.log("✅ Fourier coefficients generated!");
