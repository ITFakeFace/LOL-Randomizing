import { useEffect, useRef } from 'react';
import './ResultPlayerTile.css';

export const ResultPlayerTile = ({ name }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    console.log(`result of player ${name} has been created`);

    // Xóa và thêm lại class để kích hoạt lại animation
    if (elementRef.current) {
      elementRef.current.classList.remove("init-event"); // Xóa class để khởi tạo lại animation

      // Thêm lại class sau 1 khoảng thời gian nhỏ để kích hoạt animation
      requestAnimationFrame(() => {
        elementRef.current.classList.add("init-event");
      });
    }

  }, [name]);

  return (
    <div ref={elementRef} className='player-tile'>
      <img
        className='champion-img'
        src="/assets/LOL_assets/championi_icon.png"
        alt="Logo"
      />
      <span className='champion-name'>{name}</span>
    </div>
  );
};
