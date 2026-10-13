import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!~';
    const columns = Math.floor(canvas.width / 18);
    const drops: number[] = Array(columns).fill(1);
    const colors = ['#00ff41', '#00cc33', '#ff2222', '#cc1111'];

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '14px "Share Tech Mono", monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const colorIdx = Math.random() > 0.95 ? 3 : Math.random() > 0.85 ? 2 : 1;
        ctx.fillStyle = colorIdx >= 2 ? colors[colorIdx] + '66' : colors[colorIdx] + '99';

        ctx.fillText(char, i * 18, drops[i] * 18);

        if (drops[i] * 18 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.18, zIndex: 0 }}
    />
  );
}
