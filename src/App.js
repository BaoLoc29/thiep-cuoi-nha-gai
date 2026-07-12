import Album from "./components/Album";
import End from "./components/End";
import Hero from "./components/Hero";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import "./App.css";
import InvalidInvite from "./components/InvalidInvite";

function App() {
  const { code } = useParams();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [loading, setLoading] = useState(true);
  const [guestName, setGuestName] = useState("");

  const [invalidType, setInvalidType] = useState("");

  useEffect(() => {

    // Không có code
    if (!code) {
      setInvalidType("missing");
      setLoading(false);
      return;
    }

    fetch(
      `https://script.google.com/macros/s/AKfycbzaMn0--b_eqQgB7AAMEzxIwpS77aZdwqNKn5cWARNchKWQThCtvOy21nkArWpWmmiz-Q/exec?code=${code}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGuestName(data.guestName);
        } else {
          setInvalidType("invalid");
        }
      })
      .catch(() => {
        setInvalidType("invalid");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  useEffect(() => {
    const autoPlay = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch { }

      window.removeEventListener("click", autoPlay);
      window.removeEventListener("touchstart", autoPlay);
    };

    window.addEventListener("click", autoPlay);
    window.addEventListener("touchstart", autoPlay);

    return () => {
      window.removeEventListener("click", autoPlay);
      window.removeEventListener("touchstart", autoPlay);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  // Đang kiểm tra mã khách mời
  if (loading) {
    return (
      <div className="min-h-dvh bg-[#F5F8F4] flex items-center justify-center">
        <div className="text-center">
          {/* Loading Circle */}
          <div className="relative mx-auto w-20 h-20">
            {/* vòng nền */}
            <div className="absolute inset-0 rounded-full border-2 border-green-900/15"></div>

            {/* vòng quay */}
            <div className="absolute inset-0 rounded-full border-t-[3px] border-green-800 animate-spin"></div>
          </div>

          {/* Title */}
          <p className="mt-8 text-6xl font-amsterdam text-green-900">Welcome</p>

          {/* Subtitle */}
          <p className="mt-3 font-cormorant uppercase tracking-[6px] text-green-800">
            ĐANG MỞ THIỆP CƯỚI
          </p>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-700 animate-bounce"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-700 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-800 animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      </div>
    );
  }

  // Không có code hoặc code sai
  if (invalidType) {
    return <InvalidInvite type={invalidType} />;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/mpeg.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-full max-w-[420px] bg-white shadow-2xl">
        <Hero />
        <Main />
        <TimeLine guestName={guestName} />
        <Album />
        <End code={code} />
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 left-4 bg-white shadow-lg p-3 rounded-full text-green-700 text-xl z-999"
        >
          <FaMusic className={isPlaying ? "spin-slow" : ""} />
        </button>
      </div>
    </div>
  );
}

export default App;
