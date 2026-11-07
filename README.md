# Đề tài: **Tìm hiểu React 19 + Vite + TanStack và ứng dụng quản lý thực đơn Bếp Việt**

Đồ án môn học: **Các Công Nghệ Lập Trình Hiện Đại**

---

## Mục Lục
1. [Mục Tiêu Hệ Thống](#-mục-tiêu-hệ-thống)
2. [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
3. [Cấu Trúc Thư Mục Dự Án](#-cấu-trúc-thư-mục-dự-án)
4. [Hướng Dẫn Cài Đặt và Chạy Dự Án (Local)](#-hướng-dẫn-cài-đặt-và-chạy-dự-án-local)
5. [Tài Liệu & Minh Chứng](#-tài-liệu--minh-chứng)

---

## Mục Tiêu Hệ Thống
* Vận dụng các kiến thức cốt lõi của **React 19** (Component, Props, State, Hooks).
* Làm chủ hệ thống quản lý dữ liệu bất đồng bộ phía máy chủ (Server State) với **TanStack Query v5** (Caching, Invalidation, Optimistic Update, Rollback).
* Triển khai định tuyến mượt mà theo URL bằng **TanStack Router**.
* Xây dựng giao diện trực quan, hiện đại bằng **Tailwind CSS**.
* Mô phỏng môi trường mạng thực tế thông qua **Mock REST API** (`json-server` và custom server giả lập độ trễ, lỗi API).

---

## Công Nghệ Sử Dụng
* **Core Frontend:** React 19, TypeScript, Vite
* **State Management & Routing:** TanStack Query v5, TanStack Router
* **Styling:** Tailwind CSS
* **Mock Backend:** JSON Server (`db.json`) & Custom Node.js Server (`server.cjs`)
* **Quản lý mã nguồn:** Git & GitHub ([mihthi/BepViet-react](https://github.com/mihthi/BepViet-react))

---

## Cấu Trúc Thư Mục Dự Án
```text
BepViet-react/
├── src/
│   ├── components/       # Các thành phần giao diện (Header, Modal, Menu, Management,...)
│   ├── hooks/            # Custom Hooks xử lý logic (useFilter, useSearchAndSort, usePhanTrang)
│   ├── services/         # Lớp giao tiếp API (foodApi.ts sử dụng fetch)
│   ├── types/            # Khai báo định nghĩa kiểu dữ liệu TypeScript (food.ts)
│   ├── App.tsx           # Component điều phối chính & Cấu hình Router/QueryClient
│   ├── main.tsx          # Điểm khởi đầu ứng dụng
│   └── index.css         # Cấu hình Tailwind CSS
├── db.json               # Cơ sở dữ liệu mẫu cho Mock API
├── server.cjs            # Máy chủ API tùy chỉnh mô phỏng độ trễ và lỗi HTTP 500
├── package.json          # Khai báo dependencies và scripts
└── vite.config.ts        # Cấu hình Vite & plugin

```

---

## Hướng Dẫn Cài Đặt và Chạy Dự Án (Local)

Để chạy thử mã nguồn của dự án trên máy cá nhân, bạn thực hiện các bước sau:

### 1. Yêu cầu hệ thống

* **Node.js**: Phiên bản `v22.0.0` trở lên.
* **npm**: Phiên bản `10.x` trở lên.

### 2. Clone repository về máy và cài đặt thư viện

Mở Terminal tại thư mục bạn muốn lưu dự án và chạy các lệnh sau:

```bash
# Clone repository
git clone [https://github.com/mihthi/BepViet-react.git](https://github.com/mihthi/BepViet-react.git)

# Di chuyển vào thư mục dự án
cd BepViet-react

# Cài đặt các thư viện phụ thuộc
npm install

```

### 3. Khởi chạy ứng dụng

Tùy theo nhu cầu kiểm thử (chế độ thông thường hoặc chế độ kiểm thử lỗi mạng), bạn có thể chọn một trong hai cách sau:

#### Cách 1 - Chạy chế độ Mock API thông thường (Cổng 3001)

Mở **2 cửa sổ Terminal** riêng biệt để chạy đồng thời Mock Server và Vite Dev Server:

* **Terminal 1 (Chạy API Server):**
```bash
npm run server

```


* **Terminal 2 (Chạy Frontend):**
```bash
npm run dev

```



#### Cách 2 - Chạy chế độ Lab kiểm thử lỗi API & độ trễ (Cổng 4000)

Chế độ này sử dụng `server.cjs` để mô phỏng độ trễ mạng thực tế (1.5s) và xác suất trả về lỗi HTTP 500 (dùng để kiểm thử cơ chế Rollback của TanStack Query).

* **Terminal 1 (Chạy Lab API Server):**
```bash
npm run api

```


* **Terminal 2 (Chạy Frontend):**
```bash
npm run dev

```



Truy cập ứng dụng trên trình duyệt tại địa chỉ: `http://localhost:3000`

---

## Tài Liệu & Minh Chứng

* **Báo cáo đồ án chi tiết (Google Docs):** (https://drive.google.com/file/d/1bhZC1U4sq7I5WpmwkxhEOdk5uFK8zgmh/view?usp=drive_link)]
* **Repository GitHub:** [mihthi/BepViet-react](https://github.com/mihthi/BepViet-react)

```

```
