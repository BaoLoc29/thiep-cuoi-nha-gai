import React, { useState } from "react";
import DSC_BOTTOM from "../assets/images/DSC_BOTTOM.jpg";
import { Form, Input, Select, InputNumber, Modal } from "antd";

const End = ({ code }) => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [attendValue, setAttendValue] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzaMn0--b_eqQgB7AAMEzxIwpS77aZdwqNKn5cWARNchKWQThCtvOy21nkArWpWmmiz-Q/exec",
        {
          method: "POST",
          body: JSON.stringify({
            code,
            message: values.message || "",
            attend: values.attend,
            guestCount: values.guestCount,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Không thể kết nối máy chủ");
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      form.resetFields();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setAttendValue(values.attend);
      setOpenModal(true);
      // setTimeout(() => {
      //   setOpenModal(true);
      // }, 900);
    } catch (err) {
      alert("Gửi thất bại, vui lòng thử lại.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-6 px-4">
      <div className="flex flex-col gap-4 text-center pb-6">
        <span className="text-2xl font-cormorant uppercase">
          Bạn sẽ đến chứ?
        </span>
        <span className="text-lg font-cormorant">
          Chúng tôi rất mong được đón tiếp bạn trong ngày trọng đại. Sự hiện
          diện của bạn là niềm vui và hạnh phúc đối với gia đình chúng tôi.
        </span>
      </div>
      <div className="max-w-xl mx-auto rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-xl border border-green-100">
        <Form
          form={form}
          layout="vertical"
          disabled={loading}
          onFinish={onFinish}
        >
          <Form.Item
            label={
              <span className="text-base font-semibold">Lời chúc phúc</span>
            }
            name="message"
          >
            <Input.TextArea
              rows={5}
              placeholder="Gửi lời chúc đến cô dâu & chú rể..."
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-semibold">
                Quý khách sẽ tham dự chứ?
              </span>
            }
            name="attend"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn",
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Chọn"
              classNames={{
                popup: {
                  root: "custom-select-dropdown",
                },
              }}
              options={[
                {
                  value: "Có",
                  label: "Có, tôi sẽ tham dự",
                },
                {
                  value: "Không",
                  label: "Xin lỗi, tôi bận mất rồi",
                },
              ]}
            />
          </Form.Item>

          <Form.Item noStyle shouldUpdate>
            {({ getFieldValue }) =>
              getFieldValue("attend") === "Có" ? (
                <Form.Item
                  label="Số lượng khách tham dự"
                  name="guestCount"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số lượng khách",
                    },
                  ]}
                >
                  <InputNumber
                    size="large"
                    min={1}
                    max={5}
                    className="w-full"
                    placeholder="Ví dụ: 2"
                  />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <button
            type="submit"
            disabled={loading}
            className={`
    rounded-lg
    px-10
    py-2
    text-base
    font-bold
    uppercase
    text-white
    shadow-lg
    transition
    w-full
    flex
    items-center
    justify-center
    gap-2
    ${
      loading
        ? "bg-green-600 cursor-not-allowed opacity-70"
        : "bg-green-800 hover:bg-green-700 active:scale-95"
    }
  `}
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}

            {loading ? "Đang gửi..." : "Gửi Lời Chúc"}
          </button>
        </Form>
      </div>

      <Modal
        open={openModal}
        footer={null}
        centered
        closable={false}
        getContainer={false}
        width={380}
        onCancel={() => setOpenModal(false)}
      >
        <div className="flex flex-col items-center pb-2">
          <span className="text-8xl font-amsterdam font-thin text-green-800">
            Thank you !!!
          </span>

          {attendValue === "Có" ? (
            <p className="mt-4 text-lg text-gray-600 leading-8">
              ❤️ Cảm ơn bạn đã xác nhận tham dự.
              <br />
              ❤️ Sự hiện diện của bạn là niềm vui và hạnh phúc của vợ chồng tụi
              mình.
              <br />
              ❤️ Hẹn gặp bạn vào ngày hôm đó nhé!
            </p>
          ) : (
            <p className="mt-4 text-lg text-gray-600 leading-8">
              ❤️ Cảm ơn bạn đã phản hồi.
              <br />
              ❤️ Dù không thể tham dự nhưng lời chúc phúc của bạn vẫn vô cùng ý
              nghĩa đối với vợ chồng tụi mình.
              <br />
              ❤️ Chúc bạn thật nhiều sức khỏe và hạnh phúc bên gia đình.
            </p>
          )}

          <button
            onClick={() => setOpenModal(false)}
            className="rounded-lg bg-green-800 px-8 py-3 text-white font-semibold hover:bg-green-700 transition"
          >
            Đóng
          </button>
        </div>
      </Modal>

      <div className="relative overflow-hidden mt-6">
        <img src={DSC_BOTTOM} alt="chú rể" className="w-full h-auto block" />

        <div
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            w-4/5
            py-4
            rounded-2xl
          bg-black/20
            backdrop-blur-md
            border border-white/20
            shadow-2xl
            text-center
          "
        >
          <p className="text-6xl font-amsterdam text-white drop-shadow-2xl mb-6">
            Thị Thel & Bảo Lộc
          </p>

          <p className="text-3xl font-ephesis text-white drop-shadow-lg mb-6 tracking-[2px]">
            Thank You !!!
          </p>

          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-4"></div>

          <p className="text-white uppercase tracking-[6px] text-base mb-0 font-pinyon font-bold">
            31 • 08 • 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default End;
