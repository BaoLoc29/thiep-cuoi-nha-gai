import React, { useEffect, useState } from "react";
import DSC_TOP from "../assets/images/DSC_TOP.jpg";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Ảnh */}
      <img src={DSC_TOP} alt="Ảnh cưới" className="w-full h-auto block" />

      {/* Gradient trắng */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[60%]
          bg-gradient-to-t
          from-white
          via-white/80
          to-transparent
        "
      />

      {/* Nội dung */}
      <div className="absolute inset-0 flex flex-col justify-between text-center text-gray-900 px-4">
        {/* Thư Mời Cưới */}
        <div>
          <p
            className={`
              mt-8
              text-2xl
              font-extralight
              tracking-[6px]
              font-serif
              transform-gpu
              will-change-transform
              transition-[opacity,transform]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}
            `}
          >
            Thư Mời Cưới
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {/* Tên cô dâu chú rể */}
          <p
            className={`
              font-amsterdam
              text-7xl
              mb-0
              tracking-[2px]
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              origin-center
              ${animate ? "opacity-100 scale-100" : "opacity-0 scale-[0.15]"}
            `}
          >
            Thị Thel & Bảo Lộc
          </p>

          {/* Thời gian + ngày cưới */}
          <div>
            <p
              className={`
                text-3xl
                font-cafeta
                font-medium
                mb-2
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
            >
              11:00 | Thứ Hai
            </p>

            <p
              className={`
                text-4xl
                tracking-[6px]
                font-bold
                font-cafeta
                mb-7
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
            >
              31.08.2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
