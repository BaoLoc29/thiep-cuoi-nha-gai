import React from "react";
import { FaHeartBroken } from "react-icons/fa";

const InvalidInvite = ({ type = "missing" }) => {
  const isMissing = type === "missing";

  return (
    <section className="min-h-dvh bg-gradient-to-b from-[#f8f4ef] via-white to-[#f8f4ef] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-2xl w-full max-w-[420px] p-4 text-center">
          <div className="mx-auto mt-7 w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
            <FaHeartBroken className="text-red-500 text-7xl" />
          </div>

          <p className="my-7 text-6xl font-amsterdam text-[#2c4b3d]">Oops...</p>

          <h2 className="my-7 text-2xl font-cormorant uppercase tracking-[2px]">
            Không thể mở thiệp
          </h2>

          <p className="my-7 text-gray-600 leading-8 text-lg">
            {isMissing
              ? "Liên kết bạn vừa mở chưa đầy đủ nên chúng mình không thể xác định được khách mời."
              : "Khách mời không tồn tại hoặc đã bị thay đổi nên chúng mình không thể mở thiệp."}
          </p>

          <div className="w-32 h-px bg-gray-300 mx-auto my-8"></div>

          <p className="text-gray-500 leading-8">
            Vui lòng sử dụng đúng liên kết được gửi từ
            <br />
            cô dâu hoặc chú rể.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-6xl">
            <p className="mb-0 font-amsterdam text-[#2c4b3d] tracking-[4px]">
              Thị Thel & Bảo Lộc
            </p>
            <p className="m-4 uppercase tracking-[4px] text-base text-gray-400">
              Wedding Invitation 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvalidInvite;
