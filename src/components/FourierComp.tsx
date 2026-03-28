import { useEffect, useRef } from "react";

export default function Fourier() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let coeffs = [];
    let time = 0;
    let path = [];
    let animationId;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      const container = containerRef.current;

      const size = Math.min(container.clientWidth, window.innerHeight * 0.5);

      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      canvas.width = size * dpr;
      canvas.height = size * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    fetch("/fourier.json")
      .then((res) => res.json())
      .then((data) => {
        coeffs = data.slice(0, 300);

        const dt = (Math.PI * 1.5) / coeffs.length;

        function draw() {
          const W = canvas.clientWidth;
          const H = canvas.clientHeight;

          ctx.clearRect(0, 0, W, H);

          ctx.save();
          ctx.translate(W / 2, H / 2);

          let x = 0;
          let y = 0;

          for (let c of coeffs) {
            const prevx = x;
            const prevy = y;

            x += c.amp * Math.cos(c.freq * time + c.phase);
            y += c.amp * Math.sin(c.freq * time + c.phase);

            // circles
            ctx.strokeStyle = "rgba(255,255,255,0.8)";
            ctx.beginPath();
            ctx.arc(prevx, prevy, c.amp, 0, Math.PI * 2);
            ctx.stroke();

            // arms
            ctx.strokeStyle = "rgba(255,255,255,0.6)";
            ctx.beginPath();
            ctx.moveTo(prevx, prevy);
            ctx.lineTo(x, y);
            ctx.stroke();
          }

          path.unshift({ x, y });

          ctx.beginPath();
          ctx.moveTo(path[0].x, path[0].y);

          for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
          }

          ctx.strokeStyle = "#00ffff";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.restore();

          time += dt;

          if (time > Math.PI * 2) {
            time = 0;
            path = [];
          }

          animationId = requestAnimationFrame(draw);
        }

        draw();
      });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "min(400px, 70vw)",
        aspectRatio: "1 / 1",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
