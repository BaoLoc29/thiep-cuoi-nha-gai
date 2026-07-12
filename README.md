Trong Tailwind CSS, bạn nên thiết kế theo hướng mobile-first. Tức là:
sm (Mặc định): Điện thoại.
md:: Máy tính bảng (≥ 768px).
lg:: Máy tính bàn (≥ 1024px).

1. Mặc định (Mobile First)

h-28

Không có sm:, md:, lg: phía trước.

=> Có nghĩa là: Mọi màn hình đều dùng h-28 trước.

Ví dụ: Điện thoại 390px => h-28

2. md: (Khi màn hình >= 768px)

md:h-44

Ví dụ: Khi màn hình đang ở kích thước LỚN HƠN HOẶC = 768 mới nhận lệnh h-44
