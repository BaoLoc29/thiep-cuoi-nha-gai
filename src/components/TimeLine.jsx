import React from "react";
import DSC_5062 from "../assets/images/DSC_5062.jpg";
import DSC_5109 from "../assets/images/DSC_5109.jpg";
import DSC_BOTTOM from "../assets/images/DSC_BOTTOM.jpg";
import heart from "../assets/images/heart.png";
import endpicture from "../assets/images/pic.png";
import useInViewOnce from "../hook/useInViewOnce.js";

const TimeLine = ({ guestName }) => {
  const invite = useInViewOnce(0.3);

  const ceremony = useInViewOnce(0.25);

  const calendar = useInViewOnce(0.3);

  const days = [
    ["", "", "", "", "", 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, "", "", "", "", "", ""],
  ];

  return (
    <section className="text-center flex flex-col justify-center items-center overflow-hidden p-4">
      <div className="flex flex-col gap-8 py-4">
        <p
          ref={invite.ref}
          className={`
            text-2xl font-cormorant tracking-[1px] uppercase mb-0
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${invite.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          Trân Trọng Kính Mời
        </p>
        <div
          className={`
            inline-block
            mx-3
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${invite.show ? "opacity-100 scale-100" : "opacity-0 scale-[0.15]"}
          `}
        >
          <p className="text-[32px] font-pinyon tracking-[1px] -mb-2">
            {guestName}
          </p>
          <div className="border-b-2 border-gray-300"></div>
        </div>
        <p
          className={`
          font-cormorant
          uppercase
          text-lg
          mb-0
          transform-gpu
          will-change-transform
          transition-[transform,opacity]
          duration-[5000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${invite.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
        >
          Đến dự tiệc cưới thân mật <br /> của gia đình chúng tôi
        </p>
      </div>

      <div className="flex gap-2 items-center py-4">
        <div className="flex-1 justify-center">
          <img
            src={DSC_5062}
            alt="album 1"
            className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${invite.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          />
        </div>

        <div className="flex-[1.2] justify-center">
          <img
            src={DSC_BOTTOM}
            alt="album 2"
            className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                invite.show
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }
            `}
          />
        </div>

        <div className="flex-1 justify-center">
          <img
            src={DSC_5109}
            alt="album 3"
            className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${invite.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          />
        </div>
      </div>
      <div ref={ceremony.ref}>
        <div className="font-serif text-center py-5">
          <p className="text-2xl font-cormorant font-black tracking-[1px] uppercase mb-1">
            Tiệc Mừng Lễ Vu Quy
          </p>

          <p className="italic text-xl mb-0">Vào lúc</p>
        </div>
        <div className="flex items-center w-96">
          <div className="flex-1 text-center">
            <p
              className={`
              text-lg
              flex-1
              text-center
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              delay-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
            >
              11:00
            </p>
          </div>
          <div className="h-24 w-px bg-gray-400"></div>
          <div className="flex-1 text-center">
            <p
              className={`
              text-lg 
              tracking-[1px] 
              mb-2
              transform-gpu
              will-change-transform
              transition-[opacity,transform]
              duration-[5000ms]
              delay-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
            `}
            >
              Thứ Hai
            </p>

            <p
              className={`
            my-0 
            text-4xl 
            font-bold 
            leading-none
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            delay-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${ceremony.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
            >
              31
            </p>

            <p
              className={`
              text-lg 
              tracking-[1px] 
              my-2
              transform-gpu
              will-change-transform
              transition-[opacity,transform]
              duration-[5000ms]
              delay-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            >
              Tháng 8
            </p>
          </div>
          <div className="h-24 w-px bg-gray-400"></div>
          <div className="flex-1 text-center">
            <p
              className={`
              text-lg
              flex-1
              text-center
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              delay-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
            >
              Năm 2026
            </p>
          </div>
        </div>
        <div
          className={`
          text-base 
          italic
          transform-gpu
          will-change-transform
          transition-[opacity,transform]
          duration-[5000ms]
          delay-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          <p>(Tức ngày 19 tháng 7 năm Bính Ngọ)</p>
        </div>
      </div>

      {/* Lịch */}
      <div ref={calendar.ref} className="w-full pb-2">
        <div className="flex items-end justify-between">
          <p
            className={`
            // w-[50%]
            text-5xl
           text-green-800 
            font-pinyon 
            mb-2
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${calendar.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
            `}
          >
            Tháng 8
          </p>
          <p className="text-7xl shrink-0 font-black text-green-800 font-sans mb-1">
            2026
          </p>
        </div>

        {/* Calendar */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white">
              {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                <th
                  key={d}
                  className="border border-black py-2 text-base font-semibold"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {days.map((week, i) => (
              <tr key={i}>
                {week.map((day, index) => (
                  <td
                    key={index}
                    className="relative h-12 border border-green-800 text-center align-middle text-lg text-green-800"
                  >
                    {day === 31 ? (
                      <>
                        <img
                          src={heart}
                          alt="Heart"
                          className={`
                            absolute
                            h-20
                            -top-3
                            pointer-events-none
                            transition-opacity
                            duration-[5000ms]
                            ${calendar.show ? "opacity-100 animate-heartbeat" : "opacity-0"}
                          `}
                        />

                        <span
                          className={`
                            relative 
                            font-bold 
                            z-999
                            transform-gpu
                            will-change-transform
                            transition-[opacity,transform]
                            duration-[5000ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${calendar.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                          `}
                        >
                          31
                        </span>
                      </>
                    ) : (
                      day
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <img
          src={endpicture}
          alt=""
          className={`
            w-full 
            h-auto
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            delay-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${calendar.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
        />
      </div>
      <div>
        <p
          className={`
            font-pinyon 
            text-4xl
            my-3
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${calendar.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          Địa điểm tổ chức
        </p>
        <div className="w-full bg-gray-200 rounded-3xl py-6">
          <p className="text-xl mb-2 font-bold">Tại Tư Gia Nhà Gái</p>
          <p className="text-base mb-0 px-5">
            Ấp Vĩnh Thạnh B, Xã Vĩnh Hải, TP. Cần Thơ
          </p>
          <div className=" p-4 overflow-hidden rounded-md">
            <iframe
              title="Địa điểm tổ chức lễ cưới"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d373.8674562621749!2d106.09525597757907!3d9.381480633438331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjInNTMuMCJOIDEwNsKwMDUnNDIuOSJF!5e1!3m2!1svi!2s!4v1783846030301!5m2!1svi!2s"
              className="h-[300px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Button */}
          <div className="mt-2 flex justify-center">
            <a
              href="https://maps.app.goo.gl/xxKbw9eTC9nNs99s7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-800 px-10 py-2 text-base font-bold uppercase text-white 
              shadow-lg transition hover:bg-green-700 active:scale-95"
            >
              XEM TRÊN GOOGLE MAP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
