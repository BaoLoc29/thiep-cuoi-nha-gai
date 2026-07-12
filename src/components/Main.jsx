import React from "react";
import heart from "../assets/images/heart.png";
import chure from "../assets/images/CHURE.jpg";
import codau from "../assets/images/CODAU.jpg";
import useInViewOnce from "../hook/useInViewOnce.js";

const Main = () => {
  const { ref, show } = useInViewOnce(0.5);

  return (
    <section ref={ref} className="text-center overflow-hidden px-4">
      <p
        className={`
          font-pinyon
          text-xl
          tracking-[1px]
          transform-gpu
          will-change-transform
          transition-[opacity,transform]
          duration-[5000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        "Hôn nhân là chuyện cả đời, <br></br>
        Yêu người vừa ý, cưới người mình thương..."
      </p>
      <div className="relative flex flex-col pb-2">
        {/* box 2 ông bà sui */}
        <div className="w-full flex justify-between">
          {/* <div className="w-px self-stretch bg-gray-400"></div> */}
          {/* NHÀ GÁI */}
          <div
            className={`
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-28"}
            `}
          >
            <p className="mb-2 font-cafeta text-lg">NHÀ GÁI</p>
            <p className="mb-0 uppercase font-cafeta text-lg">Ông Lâm Khươl</p>
            <p className="mb-0 uppercase font-cafeta text-lg">Bà Lý Thị Thủy</p>
            <p className="mb-0 font-mono text-sm tracking-[1px]">
              Vĩnh Hải, Cần Thơ
            </p>
          </div>
          {/* NHÀ TRAI */}
          <div
            className={`
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-28"}
            `}
          >
            <p className="mb-2 font-cafeta text-lg">NHÀ TRAI</p>
            <p className="mb-0 uppercase font-cafeta text-lg">
              Ông Trần Văn Phúc
            </p>
            <p className="mb-0 uppercase font-cafeta text-lg">
              Bà Nguyễn Thị Mỹ Dung
            </p>
            <p className="mb-0 font-mono text-sm tracking-[1px]">
              Phú Lâm, An Giang
            </p>
          </div>
        </div>

        <div className="relative flex justify-center h-20">
          <img
            src={heart}
            alt="heart"
            className="absolute -top-4 w-36 animate-heartbeat"
          />
        </div>

        {/* box cô dâu & chú rể */}
        <div className="w-full flex justify-between">
          <div>
            <p className="mb-2 font-cormorant text-xl">TRƯỞNG NỮ</p>
            <p
              className={`
                text-[55px]
                font-amsterdam
                mb-0
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
            >
              Lâm Thị Thel
            </p>
          </div>
          <div>
            <p className="mb-2 font-cormorant text-xl">ÚT NAM</p>
            <p
              className={`
                text-[55px]
                font-amsterdam
                mb-0
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
            >
              Trần Bảo Lộc
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 gap-3 p-3">
        <div className="flex justify-center w-1/2">
          <img
            src={codau}
            alt="codau"
            className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-28"}
            `}
          />
        </div>
        <div className="flex justify-center w-1/2">
          <img
            src={chure}
            alt="chú rể"
            className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-28"}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
