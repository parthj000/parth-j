module.exports = {
    theme: {
      extend: {
        keyframes: {
          marquee3d: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(-200%)' },
          },
        },
        animation: {
          marquee3d: 'marquee3d 12s linear infinite',
        },
      },
    },
  };
  