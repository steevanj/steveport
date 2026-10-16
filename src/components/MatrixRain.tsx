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

    const chars = '01{}[]<>/\\|=+-*&^%$#@!~ABCDEFabcdef0123456789';
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);
    const colors = ['#2563eb', '#1d4ed8', '#7c3aed', '#6d28d9'];

    const draw = () => {
      ctx.fillStyle = 'rgba(248, 250, 252, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '13px "Share Tech Mono", monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const colorIdx = Math.random() > 0.95 ? 3 : Math.random() > 0.85 ? 2 : 1;
        ctx.fillStyle = colorIdx >= 2 ? colors[colorIdx] + '44' : colors[colorIdx] + '66';

        ctx.fillText(char, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
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
      style={{ opacity: 0.12, zIndex: 0 }}
    />
  );
}
