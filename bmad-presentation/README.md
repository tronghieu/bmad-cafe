# BMAD Presentation

Website này là một **interactive presentation website** dùng để trình bày `BMAD Method` trên web theo kiểu `slide-by-slide`.

Nó không phải landing page marketing, cũng không phải tài liệu tham khảo đầy đủ về BMAD. Mục tiêu của project này là:

- kể lại BMAD như một phương pháp làm phần mềm với AI có cấu trúc
- dùng cho trình chiếu, workshop, hoặc demo trực tiếp
- biến nội dung trình bày thành một deck web có thể điều hướng bằng bàn phím và click

## Mục đích nội dung

Deck hiện tại tập trung vào các ý chính sau:

- điểm mạnh và điểm gãy của `vibe coding`
- khác biệt giữa `vibe coding` và `context engineering`
- BMAD như một phương pháp dựa trên vai trò, tài liệu, artifact, review, và traceability
- các case study, cách áp dụng, và các tính năng nổi bật như `Party Mode`

Nguồn nội dung chính:

- [CONTENT_FRAMEWORK.md](/Users/luutronghieu/Projects/bmad-cafe/bmad-presentation/CONTENT_FRAMEWORK.md)
- [DESIGN_LANGUAGE.md](/Users/luutronghieu/Projects/bmad-cafe/bmad-presentation/DESIGN_LANGUAGE.md)

## Mục đích kỹ thuật

Project này dùng `Next.js + React` để:

- tách mỗi slide thành một component riêng
- giữ điều hướng kiểu slider thống nhất cho toàn deck
- hỗ trợ mini animation, deep link theo slide, và responsive cho desktop / tablet / mobile

Assets minh họa nằm trong:

- [public/assets](/Users/luutronghieu/Projects/bmad-cafe/bmad-presentation/public/assets)

## Chạy local

Chạy từ chính thư mục này, không chạy từ repo root:

```bash
cd /Users/luutronghieu/Projects/bmad-cafe/bmad-presentation
pnpm dev
```

Build production:

```bash
cd /Users/luutronghieu/Projects/bmad-cafe/bmad-presentation
pnpm build
pnpm start
```

## Ghi chú

- Đây là deck web đang được biên tập liên tục, nên cấu trúc slide và wording có thể còn thay đổi.
- Nếu chỉnh nội dung, cập nhật `CONTENT_FRAMEWORK.md` trước hoặc cùng lúc với slide component để tránh lệch giữa spec và bản render.
