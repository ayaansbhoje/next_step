// AnimatedBackground.jsx
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Draw static black background
    const drawStaticBackground = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    // Gold color for the gradient
    const goldColor = { r: 212, g: 175, b: 55 };
    
    // Gradient size
    const gradientSize = canvas.width * 0.55;
    
    // Position and velocity for two gradients
    const gradientPositions = [
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: 2, vy: 1.5 },
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: -1.5, vy: 1.2 }
    ];
    
    // Opacity for each gradient
    const opacities = [0.7, 0.4];
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw static black background
      drawStaticBackground();
      
      // Update gradient positions and draw gradients
      gradientPositions.forEach((pos, i) => {
        // Update position
        pos.x += pos.vx;
        pos.y += pos.vy;
        
        // Bounce off edges
        if (pos.x < 0 || pos.x > canvas.width) pos.vx *= -1;
        if (pos.y < 0 || pos.y > canvas.height) pos.vy *= -1;
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          pos.x, pos.y, 0,
          pos.x, pos.y, gradientSize
        );
        
        // Set opacity based on which gradient this is
        gradient.addColorStop(0, `rgba(${goldColor.r}, ${goldColor.g}, ${goldColor.b}, ${opacities[i]})`);
        gradient.addColorStop(1, `rgba(${goldColor.r}, ${goldColor.g}, ${goldColor.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;