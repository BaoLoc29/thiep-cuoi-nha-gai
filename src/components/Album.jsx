import album from "../assets/images/album.png";
import React, { useState, useEffect } from "react";
import useInViewOnce from "../hook/useInViewOnce.js";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Album = () => {
  const [images, setImages] = useState([]);
  const { ref, show } = useInViewOnce(0.15);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwJEONJtojK6BmTgu4433iUtUDv1Ed31X80xtMtalx1wDoF0P1p65T5S77mDyyaBu-S/exec",
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <section className="px-4 overflow-hidden">
      <div className="flex items-center justify-between h-14 ">
        <p
          ref={ref}
          className={`
            font-ephesis 
            text-3xl
            mb-0
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          Album hình cưới
        </p>
        <div className="w-1/2 h-28 overflow-hidden relative">
          <img
            src={album}
            alt="Album"
            className="absolute inset-0 w-[460px] h-full max-w-none object-cover object-center"
          />
        </div>
      </div>
      <PhotoProvider>
        <div className="bg-gray-100 grid grid-cols-2 gap-3 p-3">
          {[...images]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((img, index) => (
              <PhotoView key={img.id} src={img.url}>
                <img
                  key={img.id}
                  src={img.url}
                  alt={img.name}
                  style={{
                    transitionDelay: `${index * 250}ms`,
                  }}
                  className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                show
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
              }
            `}
                />
              </PhotoView>
            ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Album;
