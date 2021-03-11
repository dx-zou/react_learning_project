import { useEffect } from 'react';

const Index = () => {
  const draw = () => {
    const canvas = document.querySelector('#tutorial');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 10);
    ctx.lineTo(100, 60);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();
  };
  useEffect(() => {
    draw();
  }, []);
  return (
    <div>
      <canvas id='tutorial' width='300' height='300' />
    </div>
  );
};

export default Index;
