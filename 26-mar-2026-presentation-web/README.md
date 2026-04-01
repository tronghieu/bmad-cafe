This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🎨 Design Language (Design System)

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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 👀 Viewing the Presentation

### Option 1: Download PDF (fastest)
Download the pre-exported PDF at [`../docs/BMAD_Agentic_Engineering_Presentation.pdf`](../docs/BMAD_Agentic_Engineering_Presentation.pdf) — includes all 37 slides with all effects rendered.

### Option 2: Run website (full animation)
```bash
pnpm install
pnpm dev
```
Open your browser at `http://localhost:3000` to view the presentation with full animations and transitions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🛠 Development

1. Install: `pnpm install`
2. Run dev: `pnpm dev`
3. Export PDF: `node export-pdf.js` (requires dev server running)
