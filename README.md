# BMAD Cafe - Monorepo Project

Dự án này chứa website thuyết trình cho phương pháp BMAD Method.

## 📂 Cấu trúc dự án
- `/presentation-web`: Ứng dụng Next.js chính cho bài thuyết trình.
- `BMAD_Agentic_Engineering.pdf`: Tài liệu gốc.

## 🎨 Ngôn ngữ thiết kế (Design System)
Website được thiết kế dựa trên một **Custom Design System** sử dụng thuần Tailwind CSS, mang phong cách **"Modern Developer / High-tech Dark Mode"**.

Các trụ cột thiết kế chính:
1. **Bảng màu Semantic:**
   - **Deep Navy (`#0A192F`):** Màu nền chủ đạo, tạo không gian chuyên nghiệp, công nghệ cao và chống mỏi mắt.
   - **Agile Green (`#10B981`):** Màu thứ cấp (Secondary), đại diện cho sự thành công, luồng công việc trơn tru (Agile) và các thành phần AI Agent.
   - **Issue Orange (`#F59E0B`):** Màu nhấn (Accent), dùng để cảnh báo, chỉ ra các vấn đề của "Vibe Coding" (Context Loss, Hallucination) hoặc lỗi do con người.
2. **Phong cách thị giác (Glassmorphism & Glow):**
   - Các component dạng thẻ (Card) sử dụng nền kính mờ trong suốt (`bg-white/5`), viền mỏng (`border-white/10`) kết hợp với hiệu ứng phát sáng nhẹ (Subtle Glow) bằng box-shadow để tạo chiều sâu.
3. **Nghệ thuật chữ (Typography):**
   - **Geist Sans:** Dùng cho tiêu đề lớn và nội dung chính để tạo sự hiện đại, rõ ràng.
   - **Geist Mono:** Dùng có chủ đích cho nhãn (labels), code, và các khái niệm kỹ thuật để nhấn mạnh bản chất "công cụ dành cho lập trình viên".
4. **Chuyển động (Motion):**
   - Sử dụng `framer-motion` cho các hiệu ứng chuyển cảnh điện ảnh (Cinematic) và mượt mà (Fluid), giúp việc trình bày các concept kỹ thuật không bị khô khan.

## 👀 Cách xem bài thuyết trình

### Option 1: Tải PDF (nhanh nhất)
Tải file PDF đã xuất sẵn tại [`docs/BMAD_Agentic_Engineering_Presentation.pdf`](./docs/BMAD_Agentic_Engineering_Presentation.pdf) — bao gồm đầy đủ 37 trang với tất cả hiệu ứng đã được render.

### Option 2: Chạy website (đầy đủ animation)
```bash
cd presentation-web
pnpm install
pnpm dev
```
Mở trình duyệt tại `http://localhost:3000` để xem bài thuyết trình với đầy đủ animation và hiệu ứng chuyển cảnh.

---

## 🛠 Cách phát triển
1. Di chuyển vào thư mục web: `cd presentation-web`
2. Cài đặt: `pnpm install`
3. Chạy dev: `pnpm dev`
4. Xuất PDF: `node export-pdf.js` (yêu cầu dev server đang chạy)
