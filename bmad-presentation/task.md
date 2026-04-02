# BMAD Presentation Slide Fix Plan

## Mục tiêu

Tài liệu này dùng để ghi lại kế hoạch sửa các slide đang có vấn đề trong deck `bmad-presentation`.

Mục tiêu của phase lập kế hoạch:

- ghi nhận lỗi thực tế trên từng slide dựa trên ảnh review
- chỉ ra loại vấn đề: mất nội dung, bị slider đè, lẫn ghi chú sản xuất, hình trình bày yếu, nội dung lặp
- đề xuất hướng cải thiện theo style mong muốn: chia khối rõ ràng, nhiều icon minh hoạ màu sắc, giảm wall of text
- đề xuất animation phù hợp cho phase triển khai sau
- tách rõ phần cần sửa về nội dung, layout, visual, và motion để phase implement làm tuần tự

## Nguyên tắc đánh giá chung

- Giữ deck theo tinh thần kỹ thuật, rõ ràng, low-hype như trong `README.md` và `CONTENT_FRAMEWORK.md`
- Hình ảnh chỉ đóng vai trò hỗ trợ, không thay thế cấu trúc lập luận
- Ưu tiên layout dạng block/card/diagram thay vì paragraph dài
- Ưu tiên icon màu sắc để giúp quét ý nhanh
- Loại bỏ toàn bộ câu chữ mang tính ghi chú nội bộ hoặc prompt sản xuất slide
- Tránh lặp ý giữa title, subtitle, body, caption
- Kiểm tra an toàn hiển thị với slider, pagination, navigation, và responsive
- Animation phải hỗ trợ việc kể chuyện, không gây nhiễu

## Lỗi hệ thống cần xử lý xuyên suốt

### Typography / phân bổ không gian

- Gần như toàn bộ nhóm slide text-first đang bị lỗi headline dồn cục sang bên trái
- Nhiều tiêu đề bị bó vào cột quá hẹp trong khi phần còn lại của slide vẫn còn rất nhiều không gian trống
- Hệ quả:
- nhịp đọc khó chịu
- khối chữ đen nặng, đập vào mắt quá sớm
- slide mất cân bằng thị giác
- phần nội dung chính trông như bị nhồi vào một phía

**Task hệ thống cho phase sửa**
- Rà soát lại rule `max-width`, `line-length`, và phân bổ cột cho toàn bộ headline ở các slide text-first / hero / editorial
- Thiết kế lại khung headline theo từng loại slide, không dùng một rule bó hẹp cho mọi trường hợp
- Với slide có không gian trống lớn, phải tái phân bổ layout thay vì chỉ ép headline xuống nhiều dòng
- Ưu tiên headline ngắn hơn, line-break chủ động hơn, và khối nội dung cân bằng hơn giữa hai vùng trái-phải
- Kiểm tra lại sau khi sửa bằng ảnh chụp toàn bộ deck để đảm bảo lỗi này được xử lý đồng loạt chứ không vá từng slide riêng lẻ

## Mẫu task cho từng slide

Mỗi slide sẽ được ghi theo cấu trúc:

### Slide XX — [Tên slide]

**Tình trạng hiện tại**
- Chưa cập nhật

**Vấn đề phát hiện**
- TBD

**Nguyên nhân giả định**
- TBD

**Hướng sửa nội dung**
- TBD

**Hướng sửa layout / visual**
- TBD

**Icon / minh hoạ đề xuất**
- TBD

**Animation đề xuất**
- TBD

**Checklist implement phase sau**
- TBD

---

## Danh sách task theo slide

### Slide 02 — Lưu Trọng Hiếu

**Tình trạng hiện tại**
- Slide giới thiệu diễn giả dùng bố cục 2 cột: ảnh chân dung lớn bên trái, thông tin tên + mô tả + danh sách kinh nghiệm bên phải
- Có 1 chip `CIO @ Vtech`, sau đó danh sách kinh nghiệm dạng line list và 1 câu quote ở đáy slide

**Vấn đề phát hiện**
- Nội dung bị lặp: `CIO @ Vtech` xuất hiện cả ở chip nổi bật và trong danh sách kinh nghiệm
- Slide vẫn mang cảm giác `wall of text` ở nửa phải vì phần kinh nghiệm đang là danh sách dài, ít phân tầng thị giác
- Dòng `Ex-CTO Agilead Global & CEO Agilearn` quá dài, tạo cảm giác nặng chữ và dễ phá nhịp scan
- Ảnh chân dung minh hoạ đang chiếm diện tích lớn nhưng chưa tạo thêm giá trị thông tin; tỷ lệ hình so với phần nội dung làm bố cục bị lệch trái
- Style ảnh hiện tại là portrait minh hoạ mềm, chưa thật sự đồng bộ với hướng muốn dùng nhiều icon màu sắc theo block
- Vùng quote ở đáy slide nằm khá sát khu vực pagination / navigation, cần xem như một rủi ro safe-area dù ảnh hiện tại chưa đè trực tiếp
- Icon hiện tại quá ít và quá nhỏ; chưa giúp người xem quét nhanh các vai trò hoặc mốc nghề nghiệp

**Nguyên nhân giả định**
- Slide đang dùng cấu trúc profile truyền thống: 1 ảnh lớn + 1 list CV, phù hợp cho bio page nhưng chưa phù hợp ngôn ngữ trình chiếu
- Chưa có chiến lược gom nhóm kinh nghiệm thành cụm ý nghĩa, nên mọi dòng đang có trọng số thị giác gần như nhau
- Chưa dành riêng vùng an toàn cho footer controls của deck khi đặt quote ở mép dưới

**Hướng sửa nội dung**
- Bỏ lặp `CIO @ Vtech`: chỉ giữ một lần ở khu vực nhấn mạnh chính
- Rút mô tả mở đầu thành câu ngắn, sắc hơn, thiên về định vị diễn giả thay vì văn xuôi dài
- Chuyển danh sách kinh nghiệm thành 3 đến 4 nhóm năng lực hoặc chặng nghề nghiệp, ví dụ:
- `Leadership`
- `Product`
- `Technology`
- `Transformation / AI adoption`
- Rút gọn các job title dài, ưu tiên giữ brand và vai trò chính thay vì nhồi đầy một dòng
- Cân nhắc bỏ quote cuối nếu không tạo thêm giá trị; nếu giữ thì phải biến thành statement ngắn, đủ khác với phần mô tả phía trên

**Hướng sửa layout / visual**
- Thay danh sách line-by-line bằng các khối card hoặc stat block có icon riêng cho từng nhóm kinh nghiệm
- Giảm độ áp đảo của ảnh chân dung: thu nhỏ ảnh, crop chặt hơn, hoặc đặt ảnh vào card gọn hơn để nhường diện tích cho các block thông tin
- Tạo một vùng `speaker snapshot` ở cột phải gồm 3 đến 4 card ngang/dọc, mỗi card chỉ chứa 1 ý chính
- Tăng phân tầng thị giác: tên lớn, 1 dòng định vị ngắn, sau đó là grid block thay vì list kéo dài
- Chừa safe-area rõ ràng ở đáy để quote hoặc footer không va vào progress dots, slide counter, nav arrows
- Nếu cần giữ ảnh lớn, nên bổ sung các badge/icon nổi quanh ảnh để ảnh không đứng một mình như poster chân dung

**Icon / minh hoạ đề xuất**
- Dùng icon màu riêng cho từng cụm:
- `shield/briefcase` cho vai trò điều hành
- `layers/roadmap` cho product leadership
- `cpu/code` cho technology leadership
- `spark/workflow` cho AI process / transformation
- Có thể thêm 1 hàng badge nhỏ dạng `CIO`, `CPO`, `CTO`, `PM` với màu khác nhau để thay cho list chữ thuần
- Nếu tiếp tục dùng ảnh chân dung, nên xem ảnh là yếu tố phụ trợ; trọng tâm minh hoạ nên chuyển sang badge, icon cluster, và info cards

**Animation đề xuất**
- Ảnh chân dung fade-up nhẹ ở đầu slide
- Tên và định vị xuất hiện trước
- Các block kinh nghiệm animate theo stagger ngắn từ trái sang phải hoặc từ trên xuống dưới
- Badge/icon có thể có scale-in rất nhẹ để tăng cảm giác sinh động
- Không nên animate từng dòng list như hiện tại nếu vẫn còn nhiều text; chỉ animate theo cụm khối

**Checklist implement phase sau**
- Bỏ trùng lặp `CIO @ Vtech`
- Thiết kế lại nội dung thành các cụm năng lực thay vì CV list thuần
- Rút gọn hoặc viết lại các dòng vai trò quá dài
- Kiểm tra lại độ cân bằng giữa ảnh và phần copy
- Tăng mật độ icon màu sắc theo từng block
- Kiểm tra safe-area đáy slide với dots, counter, và nav arrow
- Rà lại responsive để title dài và block kinh nghiệm không vỡ layout

---

### Slide 03 — Cú Mở Đầu

**Tình trạng hiện tại**
- Slide hero 2 cột với headline lớn bên trái, summary ngắn và 3 proof chip ở đáy
- Ảnh lớn bên phải mang mood tối, cinematic, nhấn cảm giác hỗn loạn / mất kiểm soát

**Vấn đề phát hiện**
- Headline mạnh nhưng còn dài và chiếm rất nhiều dòng, khiến nửa trái nặng typography hơn là một cấu trúc slide có điểm nhấn phân tầng
- Tiêu đề đang bị dồn cục mạnh về bên trái, tạo các line break gắt và khối chữ nặng, đọc khó chịu
- Nội dung proof hiện chỉ có 3 chip ngắn, chưa đủ để chuyển luận điểm từ “mood” sang “engineering signal”
- Ảnh minh hoạ kiểu `hoodie hacker` khá cliché, dễ kéo người xem sang liên tưởng an ninh / hacker thay vì vấn đề chính là codebase thiếu cấu trúc
- Bố cục hiện tại phụ thuộc nhiều vào ảnh lớn; nếu ảnh yếu hoặc không đúng tinh thần, nửa phải sẽ trở thành khối trang trí hơn là phần hỗ trợ lập luận
- Slide counter và nav arrow đang nằm chồng trên vùng ảnh tối ở góc phải dưới; chưa gây mất nội dung nhưng là dấu hiệu cần quản lý safe-area rõ hơn
- Chưa có icon màu hoặc block phụ để giúp người xem quét ngay các triệu chứng chính; hiện vẫn nghiêng về `poster statement`

**Nguyên nhân giả định**
- Slide đang bám sát mô hình `hero statement + atmosphere image`, phù hợp để mở màn nhưng chưa tận dụng được hướng thiết kế block-based mà deck đang muốn chuyển sang
- Proof đang được nén quá mức thành chip, nên chưa tạo đủ cảm giác “có cấu trúc kỹ thuật”
- Asset hình được chọn theo cảm xúc hỗn loạn, nhưng metaphor hơi generic và có nguy cơ sai focus
- Chiều rộng cột text hoặc `max-width` của headline đang quá hẹp so với số từ và cỡ chữ, dẫn đến việc chữ bị bó thành một khối dọc lệch trái

**Hướng sửa nội dung**
- Rút headline thành phiên bản gọn hơn, giữ lực nhưng giảm số dòng để nhường chỗ cho cấu trúc phụ
- Giữ summary ngắn, nhưng chuyển từ câu mô tả chung sang câu chỉ rõ hậu quả kỹ thuật
- Nâng 3 proof chip thành 3 hoặc 4 block triệu chứng rõ nghĩa hơn, ví dụ:
- `Logic rối`
- `Patch chồng patch`
- `Khó review`
- `Khó bảo trì`
- Nếu cần, thêm 1 dòng micro-caption để chốt: vấn đề là thiếu phương pháp, không phải thiếu model mạnh hơn

**Hướng sửa layout / visual**
- Giữ tinh thần hero mở màn nhưng chuyển từ `poster` sang `structured hero`
- Chia nửa trái thành 3 tầng rõ hơn:
- kicker / section label
- headline ngắn hơn
- cụm symptom blocks có icon
- Mở lại bề ngang headline hoặc chỉnh line-length để khối chữ thoáng hơn, tránh cảm giác bị “nhồi cột”
- Rà soát rule typography này như một lỗi hệ thống cho các slide hero khác đang bị dồn chữ tương tự
- Cân nhắc thay proof chip dạng pill bằng card nhỏ hoặc indicator block để tăng trọng lượng thông tin
- Kiểm tra lại độ rộng ảnh bên phải; có thể giảm một chút để nhường không gian cho symptom blocks
- Nếu vẫn dùng ảnh full-height, cần định nghĩa safe-area để counter và nav không đè vào vùng chi tiết quan trọng của ảnh
- Có thể thêm 1 lớp overlay nhẹ hoặc framing element để ảnh hòa vào visual system chung của deck thay vì đứng riêng như một poster

**Icon / minh hoạ đề xuất**
- Dùng icon màu riêng cho từng symptom:
- `branch / merge-conflict` cho logic rối
- `copy / layers` cho hành vi trùng lặp
- `shield-alert / structure` cho thiếu cấu trúc đáng tin
- Nếu mở rộng thành 4 block, thêm `wrench / bug` cho khó bảo trì
- Nếu thay ảnh, nên ưu tiên minh hoạ codebase hỗn loạn, diff chồng chéo, hoặc workstation nhiều artifact mâu thuẫn; tránh stereotype hacker trùm mũ

**Animation đề xuất**
- Headline vào trước với fade-up ngắn
- Summary theo sau với delay nhẹ
- Các symptom block xuất hiện stagger rõ ràng theo nhịp kể chuyện
- Ảnh chỉ nên có zoom/fade rất nhẹ, không dùng motion mạnh vì đây là slide mở luận điểm
- Có thể thêm highlight pulse rất nhẹ cho từng symptom block khi speaker nhắc tới

**Checklist implement phase sau**
- Rút gọn headline để giảm số dòng
- Chỉnh lại chiều rộng / nhịp xuống dòng của headline để tránh dồn cục sang trái
- Thiết kế lại cụm proof thành các block có icon thay vì chỉ là pill chip
- Đánh giá lại asset hình hiện tại; ưu tiên hình đúng tinh thần `chaotic codebase`, tránh cliché hacker
- Kiểm tra safe-area ở góc phải dưới với counter và nav arrow
- Đồng bộ slide này với hướng block-based nhiều icon của các slide sau để mở deck nhất quán hơn

---

### Slide 04 — Vì Sao Nó Nhanh

**Tình trạng hiện tại**
- Slide editorial chỉ dùng cột nội dung bên trái với headline lớn, 1 đoạn summary, 3 bullet line, và 3 proof chip ở đáy
- Nửa phải của slide gần như bỏ trống hoàn toàn

**Vấn đề phát hiện**
- Tiêu đề tiếp tục bị dồn cục sang trái, xuống dòng gắt và tạo cảm giác nặng, khó đọc
- Phân bổ layout mất cân bằng: nửa trái chứa toàn bộ thông tin, nửa phải gần như không tham gia truyền tải nội dung
- Slide vẫn thiên về `text stack`: headline, paragraph, list, chip; chưa có chuyển đổi sang block visual giúp quét nhanh
- Bullet list đang đúng ý nhưng còn quá “document-like”, chưa mang cảm giác trình chiếu
- Proof chip ở cuối lặp lại ý với phần summary và bullets, nên tạo cảm giác phân mảnh hơn là bổ trợ
- Tổng thể nhìn hơi “rỗng nhưng vẫn nặng chữ”: mắt bị hút vào cột trái dày đặc trong khi phần còn lại không phục vụ thông điệp

**Nguyên nhân giả định**
- Slide được dựng theo mẫu editorial text-first, nhưng chưa có visual companion hoặc block phụ để cân layout
- Headline đang bị giới hạn chiều ngang tương tự slide 03, tạo lỗi hệ thống về nhịp xuống dòng
- Nội dung “vì sao vibe coding hấp dẫn” vốn rất hợp với layout card-based, nhưng hiện vẫn đang ở dạng outline văn bản

**Hướng sửa nội dung**
- Rút headline hoặc chỉnh cách viết để câu gọn và mở hơn về nhịp đọc
- Tách summary thành 1 câu định nghĩa ngắn và 1 cụm lợi ích trực quan hơn
- Chuyển 3 bullet hiện tại thành 3 lợi ích chính với wording song song, ngắn và sắc hơn
- Giảm lặp giữa summary, bullets, và proof chips; mỗi tầng nội dung phải có vai trò riêng
- Nếu giữ proof chips, đổi chúng thành nhãn kết luận cấp cao, còn phần block chính phải mang nội dung thực

**Hướng sửa layout / visual**
- Chuyển slide sang bố cục 2 vùng có chủ đích:
- bên trái: headline + câu dẫn ngắn
- bên phải hoặc phần dưới: 3 card lợi ích với icon màu
- Có thể dùng 3 khối lớn cho:
- `Bắt đầu nhanh`
- `Thử nghiệm nhanh`
- `Thoải mái khám phá`
- Tận dụng vùng trống bên phải để đặt grid cards, mini diagram, hoặc flow ngắn `ý tưởng -> prompt -> kết quả`
- Giảm cảm giác outline bằng cách bỏ line separators dài và chuyển sang container/card rõ ràng hơn
- Rà soát lại width của headline để tránh lặp lỗi dồn chữ như slide 03
- Đảm bảo phần đáy không bị proof chip chiếm chỗ nếu đã có các block chính tốt hơn

**Icon / minh hoạ đề xuất**
- `rocket` cho bắt đầu gần như ngay lập tức
- `shuffle / compass` cho thử nhiều hướng
- `lightbulb / spark` cho khám phá ý tưởng
- `timer / loop` cho vòng lặp ngắn
- Nếu muốn có visual trung tâm, dùng mini flow with icons thay vì ảnh lớn

**Animation đề xuất**
- Headline và summary xuất hiện trước
- 3 card lợi ích animate stagger theo nhịp trái sang phải hoặc trên xuống dưới
- Nếu có mini flow, cho từng node hiện tuần tự để nhấn “ý tưởng -> thử -> ra kết quả”
- Proof chip chỉ nên animate nhẹ hoặc bỏ animation nếu giữ vai trò phụ

**Checklist implement phase sau**
- Chỉnh lại nhịp xuống dòng của headline, tránh dồn cục sang trái
- Tái phân bổ không gian để nửa phải không còn trống vô nghĩa
- Chuyển bullet list thành 3 block/card có icon
- Giảm lặp ý giữa summary, bullets và proof chip
- Kiểm tra xem proof chip còn cần thiết hay nên thay bằng visual cue khác
- Đồng bộ với pattern hero/editorial mới để không lặp lỗi typography ở các slide cùng nhóm

---

### Slide 05 — Điểm Gãy

**Tình trạng hiện tại**
- Slide editorial text-first với headline lớn bên trái, summary dài, 3 bullet line, và 3 proof chip ở đáy
- Nửa phải tiếp tục gần như trống

**Vấn đề phát hiện**
- Tiêu đề lại bị dồn cục sang trái, tạo khối chữ nặng và nhịp đọc gắt
- Summary khá dài và dày ý, khiến slide phải gánh nhiều thông tin bằng paragraph thay vì cấu trúc trực quan
- Bullet list hiện mô tả đúng vấn đề nhưng vẫn ở dạng prose tách dòng, chưa giúp người xem thấy chuỗi nguyên nhân -> hệ quả
- Proof chip tiếp tục lặp lại ý từ headline, summary, và bullets
- Nửa phải bỏ trống làm slide mất cân bằng và làm lộ rõ việc toàn bộ thông điệp đang nằm trong một cột chữ
- Slide nói về `chat history không còn đủ`, `context drift`, `patch chồng patch`, nhưng không có sơ đồ hay khối minh hoạ cho quá trình trượt ngữ cảnh

**Nguyên nhân giả định**
- Slide vẫn đang dùng chung pattern editorial với slide 04, trong khi bản chất nội dung ở đây là một chuỗi failure progression nên cần visual logic rõ hơn
- Headline width tiếp tục bị bó hẹp, tạo ra lỗi typography lặp lại
- Nội dung đang cố nhồi cả nguyên nhân, triệu chứng, và hậu quả vào cùng một cột trái

**Hướng sửa nội dung**
- Rút headline hoặc chỉnh câu để bớt dồn hàng nhưng vẫn giữ tính cảnh báo
- Tách summary thành 2 lớp:
- 1 câu chốt vấn đề
- 1 câu giải thích hậu quả
- Biến 3 bullet thành 3 giai đoạn hoặc 3 trạng thái suy thoái rõ ràng hơn, ví dụ:
- `Mất ràng buộc`
- `Patch chồng patch`
- `Chi phí điều hướng tăng`
- Giảm lặp giữa proof chips và bullets; nếu dùng block chính đủ mạnh thì chip chỉ nên làm tag cấp cao hoặc có thể bỏ

**Hướng sửa layout / visual**
- Không nên để slide này chỉ là text stack; nên chuyển thành diagram slide hoặc block progression
- Dùng nửa phải cho một flow trực quan, ví dụ:
- `Yêu cầu tăng`
- `Chat dài ra`
- `Ngữ cảnh trôi`
- `Patch tích lũy`
- `Chi phí kiểm soát tăng`
- Một hướng khác là 3 card nguyên nhân-hệ quả đặt ngang hoặc chéo để người xem nhìn ra progression
- Giảm phụ thuộc vào line separators dạng document; thay bằng card hoặc step container
- Rà soát typography giống slide 03-04 để headline không còn bị ép vào cột hẹp
- Cân nhắc thêm một visual marker cho “memory decay” hoặc “signal loss” để khái niệm dễ nhớ hơn

**Icon / minh hoạ đề xuất**
- `message-square / history` cho chat history
- `fade / unlink / ghost` cho ràng buộc cũ bị mờ dần
- `layers / wrench` cho patch chồng patch
- `compass-off / warning` cho điều hướng AI ngày càng tốn công
- `file-x / archive` cho thiếu artifact bền vững
- Nếu dùng flow, mỗi node nên có icon màu riêng để giúp scan nhanh

**Animation đề xuất**
- Headline và câu chốt vào trước
- Diagram hoặc 3 block progression hiện lần lượt theo thứ tự suy thoái
- Có thể dùng animation “degrade” rất nhẹ: node sau vào thì node trước mờ bớt, để diễn tả loss of reliable context
- Tránh animate từng dòng bullet riêng lẻ nếu vẫn còn list thuần

**Checklist implement phase sau**
- Chỉnh lại line-length của headline để tránh dồn cục sang trái
- Chuyển phần nội dung chính từ list thuần sang flow hoặc block progression
- Dùng nửa phải cho visual logic thay vì để trống
- Giảm lặp giữa summary, bullets, và proof chips
- Bổ sung icon màu cho từng giai đoạn suy thoái
- Kiểm tra pattern typography/layout này cùng lúc với slide 03-04 vì đây là lỗi hệ thống

---

### Slide 06 — Vibe Coding

**Tình trạng hiện tại**
- Slide editorial text-first với headline lớn bên trái, summary giải thích khái niệm, 3 bullet line, và 3 proof chip ở đáy
- Nửa phải gần như bỏ trống hoàn toàn

**Vấn đề phát hiện**
- Headline tiếp tục bị dồn cục sang trái, tạo khối chữ cao và nặng, đọc mệt
- Slide đang dùng rất nhiều chữ để định nghĩa một khái niệm, nhưng lại không có sơ đồ hay block trực quan để giúp người xem hiểu ngay mô hình vận hành
- Nửa phải trống trong khi phần trái chứa toàn bộ định nghĩa, đặc trưng, và kết luận
- Bullet list và proof chip đang có độ giao thoa ý khá cao: đều đang nói về việc nhanh, ít chuẩn bị, phụ thuộc vào người điều khiển
- Cụm chip ở đáy quá gần vùng progress dots và nav arrow bên trái, tạo cảm giác chật và có rủi ro va chạm safe-area
- Tổng thể slide trông như một đoạn giải thích tài liệu hơn là một frame so sánh khái niệm trong presentation

**Nguyên nhân giả định**
- Slide đang reuse pattern editorial cũ, nhưng bản chất nội dung là một định nghĩa vận hành nên đáng ra nên được biểu diễn bằng mô hình hoặc schematic
- Chiều rộng headline vẫn bị khóa quá hẹp, tiếp tục gây lỗi typography hệ thống
- Vùng đáy chưa được quy hoạch tốt giữa `proof chips` và `deck navigation`

**Hướng sửa nội dung**
- Rút headline để giảm số dòng và giữ ý định nghĩa rõ hơn
- Viết lại summary theo kiểu định nghĩa ngắn, trực tiếp hơn: `Vibe coding = session chat là trung tâm ngữ cảnh`
- Tách 3 bullet hiện tại thành 3 đặc trưng cốt lõi với wording đồng đều hơn, ví dụ:
- `Chat là bộ nhớ chính`
- `Session rộng và linh hoạt`
- `Operator điều hướng liên tục`
- Giảm lặp giữa summary và proof chips; proof chip nếu còn giữ nên chuyển sang vai trò “ưu điểm vận hành” thay vì nhắc lại đặc trưng

**Hướng sửa layout / visual**
- Chuyển slide sang dạng `definition + model`
- Bên trái giữ headline và định nghĩa rất ngắn
- Bên phải dùng sơ đồ hoặc 3 block thể hiện cách vibe coding vận hành
- Một hướng phù hợp là sơ đồ:
- `Ý tưởng`
- `Chat session`
- `AI output`
- `Operator steering`
- Có thể dùng 3 card đặc trưng với icon lớn thay cho list line-by-line
- Dành khoảng trống bên phải cho visual logic, không để trắng hoàn toàn
- Dọn lại vùng đáy để proof chip không va vào cụm điều hướng; nếu cần thì bỏ chip hoặc chuyển chúng vào khối chính
- Rà soát headline width cùng nhóm slide 03-06 vì lỗi này đã lặp lại nhiều lần

**Icon / minh hoạ đề xuất**
- `message-square` cho chat history là nguồn ngữ cảnh chính
- `expand / frame` cho phạm vi session rộng và linh hoạt
- `joystick / compass` cho operator điều hướng liên tục
- `zap / rocket` cho khởi động nhanh
- `hand / user` cho sự phụ thuộc vào người điều khiển
- Nếu làm sơ đồ, nên dùng icon node lớn, nhiều màu, thay vì thêm ảnh minh hoạ

**Animation đề xuất**
- Headline và định nghĩa ngắn xuất hiện trước
- 3 block đặc trưng hoặc flow node hiện tuần tự theo logic vận hành
- Có thể animate đường nối `operator -> chat -> output` để nhấn tính liên tục của steering loop
- Hạn chế animate chip đáy nếu chúng vẫn còn gần navigation

**Checklist implement phase sau**
- Chỉnh lại width / line-break của headline
- Chuyển phần định nghĩa từ text stack sang sơ đồ hoặc card model
- Tận dụng nửa phải cho visual logic, không để trống
- Giảm lặp giữa summary, bullets, và proof chips
- Xử lý lại vùng đáy để proof chip không chèn vào safe-area của navigation và progress dots
- Gom lỗi slide này vào nhóm fix hệ thống cho các slide editorial text-first

---

### Slide 07 — Context Engineering

**Tình trạng hiện tại**
- Slide editorial text-first với headline lớn bên trái, 1 đoạn summary, 3 bullet line, và 3 proof chip ở đáy
- Nửa phải của slide gần như trống hoàn toàn

**Vấn đề phát hiện**
- Headline vẫn bị dồn cục sang trái; dù câu ngắn hơn các slide trước, khối chữ vẫn nặng và chưa thoáng
- Slide định nghĩa `context engineering` nhưng lại không có visual structure tương xứng; toàn bộ nội dung vẫn đang ở dạng diễn giải chữ
- Nửa phải để trống làm lộ rõ việc layout chưa tận dụng được không gian để trình bày mô hình `đúng ngữ cảnh / đúng bước / đúng phạm vi`
- Bullet list và proof chip có quan hệ rất gần nhau, dẫn đến cảm giác lặp ý thay vì bổ sung tầng thông tin mới
- Đây là slide giải thích khái niệm đối xứng với slide `Vibe Coding`, nhưng hiện chưa có cách trình bày giúp người xem thấy rõ contrast giữa hai mô hình
- Cụm chip ở đáy vẫn ăn vào vùng gần navigation, chưa sạch về safe-area

**Nguyên nhân giả định**
- Slide đang reuse cùng một pattern editorial cho toàn cụm slide khái niệm, thay vì xây một visual system riêng cho các slide định nghĩa/so sánh
- Headline width và vùng copy chưa được tối ưu theo độ dài câu, nên tiếp tục gây lỗi typography hệ thống
- Nội dung `context engineering` vốn là một khái niệm về tổ chức thông tin và scope control, nhưng chưa được chuyển thành sơ đồ hay block logic

**Hướng sửa nội dung**
- Giữ headline ngắn, nhưng cân nhắc chỉnh wording hoặc line-break để khối chữ đọc thoáng hơn
- Tách summary thành định nghĩa rất ngắn và một câu giải thích lợi ích kiểm soát
- Chuyển 3 bullet thành 3 nguyên tắc vận hành rõ ràng hơn:
- `Artifact giữ quyết định`
- `Mỗi bước nhận đúng phần ngữ cảnh`
- `Vai trò và checkpoint giữ trách nhiệm rõ ràng`
- Giảm lặp với proof chips; nếu vẫn giữ 3 proof chip `Đúng ngữ cảnh / Đúng thời điểm / Đúng phạm vi` thì để chúng làm khung điều hướng chính, còn phần block bên trong giải thích cụ thể

**Hướng sửa layout / visual**
- Đây là slide rất phù hợp để chuyển sang layout `3 pillar` hoặc `3 cards` vì chính headline và proof đã có cấu trúc bộ ba
- Có thể dùng bố cục:
- bên trái: headline + định nghĩa ngắn
- bên phải: 3 cột hoặc 3 card lớn cho `ngữ cảnh`, `bước`, `phạm vi`
- Một hướng khác là sơ đồ nạp ngữ cảnh: `artifact -> step -> reviewable output`
- Nên thiết kế slide này như “mô hình vận hành” để đối xứng trực tiếp với slide 06 về `Vibe Coding`
- Bỏ line separators dạng document và thay bằng block / card / flow rõ ràng
- Giảm áp lực phần đáy; nếu 3 card chính đã đủ mạnh thì có thể bỏ hẳn proof chip

**Icon / minh hoạ đề xuất**
- `database / file-stack` cho artifact giữ quyết định
- `filter / funnel` cho chỉ nạp đúng ngữ cảnh cần thiết
- `route / steps` cho đúng bước
- `frame / crop` cho đúng phạm vi
- `shield-check / review` cho đầu ra dễ rà soát
- Dùng màu khác nhau cho 3 trụ chính để người xem nhận bộ ba ngay lập tức

**Animation đề xuất**
- Headline và định nghĩa ngắn vào trước
- 3 card / 3 pillar xuất hiện theo thứ tự trái sang phải
- Nếu dùng flow `artifact -> step -> output`, animate theo đường đi để nhấn tư duy nạp ngữ cảnh có kiểm soát
- Giữ motion sạch và kỹ thuật; không nên dùng hiệu ứng cảm tính vì đây là slide định nghĩa

**Checklist implement phase sau**
- Chỉnh lại nhịp headline để không còn dồn cục sang trái
- Chuyển slide từ text stack sang `3 pillars` hoặc `model diagram`
- Tận dụng nửa phải cho visual logic, không để trống
- Giảm lặp giữa summary, bullets và proof chips
- Xử lý lại vùng đáy để tránh chip chạm vào navigation / progress
- Thiết kế slide này đối xứng với slide 06 để cặp `Vibe Coding` vs `Context Engineering` đọc liền mạch hơn

---

### Slide 08 — Khác Biệt Cốt Lõi

**Tình trạng hiện tại**
- Slide `contrast` nhưng hiện vẫn có cấu trúc gần như text-first: headline lớn bên trái, summary, 3 bullet line, và 3 proof chip ở đáy
- Nửa phải gần như trống hoàn toàn

**Vấn đề phát hiện**
- Headline tiếp tục bị dồn cục sang trái, tạo block chữ cao và nặng
- Đây là slide so sánh trực diện giữa hai mô hình, nhưng hiện chưa có bất kỳ trình bày đối chiếu trực quan nào
- Nửa phải trống là điểm yếu lớn vì slide loại `contrast` lẽ ra phải tận dụng để đặt bảng so sánh, đối xứng 2 cột, hoặc mapping pair
- Bullet list hiện chứa các cặp đối chiếu quan trọng, nhưng vẫn đang ở dạng câu dài nên khó scan nhanh
- Proof chip ở đáy tiếp tục lặp lại thông điệp tổng quát thay vì giúp người xem thấy khác biệt cụ thể
- Một số cụm như `chat history vs artifact/file đầu ra` và `conversation vs tài liệu đầu ra có thể rà soát` đang khá dài, dễ mỏi mắt khi đứng trong list thuần chữ

**Nguyên nhân giả định**
- Slide được gắn `kind: "contrast"` nhưng vẫn đang render theo pattern chung của các slide editorial, nên chưa tận dụng đúng semantic của slide
- Headline width vẫn bị bó hẹp tương tự nhiều slide trước
- Chưa chuyển “điểm khác biệt cốt lõi” thành visual comparison system

**Hướng sửa nội dung**
- Giữ headline nhưng cân nhắc rút hoặc chia line hợp lý hơn để giảm cảm giác nặng
- Tách summary thành 1 câu chốt rất ngắn: khác biệt nằm ở cách tổ chức ngữ cảnh, không phải model
- Chuyển 3 bullet hiện tại thành 3 hàng so sánh ngắn gọn, ví dụ:
- `Nguồn sự thật: Chat vs Artifact`
- `Giữ quyết định: Hội thoại vs Tài liệu`
- `Chia việc: Session rộng vs Bước hẹp`
- Giảm độ dài chữ trong từng cặp đối chiếu để slide mang tính bảng/ma trận hơn là đoạn văn
- Nếu giữ proof chips, nên đổi vai trò thành nhãn cho 3 tiêu chí so sánh chính hoặc gộp thẳng vào cấu trúc bảng

**Hướng sửa layout / visual**
- Chuyển slide này thành một comparison slide thực thụ
- Hướng ưu tiên:
- cột trái `Vibe Coding`
- cột phải `Context Engineering`
- mỗi hàng là một tiêu chí so sánh
- Có thể dùng 3 hoặc 4 hàng:
- `Source of truth`
- `Decision memory`
- `Task boundary`
- `Reviewability`
- Dùng màu và icon nhất quán cho hai cột để người xem nhận ngay hai mô hình đối lập
- Nếu không dùng bảng, có thể dùng 3 block đối chiếu dạng `before vs after`
- Không để nửa phải trống; phần này phải là trọng tâm của slide
- Giảm hoặc bỏ line separators và proof chips nếu đã có comparison grid tốt hơn

**Icon / minh hoạ đề xuất**
- `message-square` cho chat history
- `file-text / folder` cho artifact hoặc file đầu ra
- `brain / memory` cho decision memory
- `split / columns` cho task boundary
- `check-square / shield-check` cho reviewability
- Dùng 2 màu hệ thống khác nhau cho hai mô hình để tăng khả năng so sánh ngay tức thì

**Animation đề xuất**
- Headline vào trước
- Sau đó từng hàng so sánh hiện tuần tự từ trên xuống dưới
- Có thể animate theo cặp trái-phải để nhấn tương phản từng tiêu chí
- Tránh motion thừa ở proof chips nếu phần grid đã là trọng tâm

**Checklist implement phase sau**
- Chỉnh lại line-break của headline để tránh dồn cục sang trái
- Chuyển slide từ list thuần sang bảng so sánh hoặc comparison grid
- Rút ngắn wording của các cặp đối chiếu
- Tận dụng nửa phải cho nội dung contrast thật sự, không để trống
- Rà lại xem proof chips còn cần hay nên gộp vào comparison structure
- Đồng bộ slide này với cặp slide 06-07 để toàn Act 2 có nhịp kể chuyện nhất quán

---

### Slide 09 — Khi Nào Dùng Gì

**Tình trạng hiện tại**
- Slide đã có bố cục giàu cấu trúc hơn các slide trước: headline lớn bên trái, 2 card tóm tắt ở trên bên phải, ảnh đối chiếu ở phải dưới, bullet list bên trái, và 3 proof chip ở đáy
- Có thêm caption dưới ảnh với nhãn `Vai trò hình ảnh`

**Vấn đề phát hiện**
- Tiêu đề vẫn bị dồn cục mạnh sang trái, đặc biệt với câu dài tiếng Việt lẫn tiếng Anh, tạo block chữ rất nặng
- Slide đang hiển thị trực tiếp câu chữ mang tính ghi chú sản xuất: `Vai trò hình ảnh`, đây là nội dung nội bộ và không được xuất hiện trong bản trình chiếu
- Phần ảnh đối chiếu bên phải chưa đủ tốt: hình dây rối vs server rack tạo cảm giác hạ tầng / networking nhiều hơn là hai mô hình làm việc với AI
- Card `Làm theo cảm hứng` và `Điều phối có phương pháp` đúng hướng, nhưng vẫn là text block dài; chưa tận dụng icon màu để tăng tốc độ quét
- Bullet list bên trái vẫn lặp lại phần kết luận của hai card bên phải, nên tổng thể có hiện tượng lặp tầng nội dung
- Vùng đáy bên trái khá chật: proof chips và caption đang bị cụm slider/progress/navigation đè lên hoặc chen rất sát, làm nội dung đọc khó chịu
- Caption dưới ảnh chiếm thêm chiều cao nhưng lại không mang giá trị trình chiếu; nó làm slide giống bản dựng nội bộ hơn là bản hoàn thiện

**Nguyên nhân giả định**
- Slide đã tiến một bước sang layout đa khối, nhưng component scene đang render caption hình như một phần bắt buộc của visual system
- Headline vẫn dùng cùng rule typography quá hẹp của các slide trước
- Asset hình được chọn theo ý niệm “chaos vs order”, nhưng metaphor bị lệch sang server/cabling thay vì workflow/context organization
- Chưa phân tầng rõ nội dung giữa: kết luận cấp cao, tiêu chí chọn, và minh hoạ đối chiếu
- Deck chưa có quy tắc safe-area đủ chặt cho các phần tử đáy, nên controls của slider đang ăn vào vùng content

**Hướng sửa nội dung**
- Rút headline hoặc chia lại để giảm số dòng, giữ thông điệp: `Vibe coding để khám phá. Context engineering để làm việc ổn định.`
- Loại bỏ hoàn toàn text ghi chú sản xuất `Vai trò hình ảnh`
- Rút nội dung trong hai card bên phải thành câu ngắn, song song, quét được nhanh hơn
- Biến bullet list bên trái thành tiêu chí chọn rõ ràng hơn, ví dụ:
- `Prototype, spike, script ngắn -> vibe coding`
- `Feature nhiều bước, hệ thống dùng chung -> context engineering`
- `Cần review, traceability -> context engineering`
- Giảm lặp giữa bullet list và hai card bằng cách quy định vai trò:
- card = bản chất hai mô hình
- bullets = rule chọn cách dùng
- chips = nhãn kết luận cấp cao hoặc bỏ nếu thừa

**Hướng sửa layout / visual**
- Giữ hướng slide chia khối vì đây là tiến bộ so với các slide trước, nhưng cần làm sạch và rõ vai trò từng vùng
- Tối ưu cột trái để headline thoáng hơn, không còn khối chữ quá cao
- Card bên phải nên có icon màu lớn ở đầu để phân biệt `exploration` và `stability`
- Cân nhắc thay ảnh hiện tại bằng visual phù hợp hơn:
- `exploration / messy path / rapid branching`
- `structured workflow / artifacts / checkpoints`
- Nếu vẫn giữ ảnh, bỏ hoàn toàn caption nội bộ bên dưới và thay bằng visual tự đủ nghĩa
- Có thể đổi phần phải dưới từ ảnh đơn sang mini comparison graphic hoặc split illustration có nhãn native trong slide
- Dọn lại toàn bộ vùng đáy để proof chips, caption, hoặc bất kỳ nội dung phụ nào không bị slider/progress/nav đè lên
- Cần áp dụng safe-area cố định cho nhóm slide có controls nổi ở đáy vì đây là lỗi hệ thống, không chỉ riêng slide này

**Icon / minh hoạ đề xuất**
- `spark / compass` cho khám phá nhanh
- `workflow / layers / checklist` cho làm việc ổn định
- `branching / path` cho thử nhiều hướng
- `shield-check / file-stack` cho review và traceability
- Nếu dùng split visual, nên dùng icon + abstract workflow graphic thay cho ảnh server/cable mang nghĩa lệch

**Animation đề xuất**
- Headline vào trước
- Hai card bên phải xuất hiện theo cặp, có thể stagger nhẹ
- Bullet rules hiện lần lượt theo logic chọn
- Nếu thay ảnh bằng mini comparison graphic, animate hai nửa đối chiếu theo thứ tự trái-phải
- Không animate caption vì caption nội bộ nên bị loại bỏ

**Checklist implement phase sau**
- Loại bỏ hoàn toàn text `Vai trò hình ảnh` khỏi bản render
- Chỉnh lại line-break / width của headline để tránh dồn cục sang trái
- Rút gọn wording trong 2 card bên phải
- Đánh giá lại asset hình hiện tại; ưu tiên visual đúng nghĩa `use-case fit`, không lệch sang networking/server
- Giảm lặp giữa card, bullets, và proof chips
- Dọn safe-area ở đáy slide quanh progress dots, nav, và caption/footnote

---

### Slide 10 — BMAD Là Gì

**Tình trạng hiện tại**
- Slide editorial text-first với headline lớn, summary, 5 bullet line, và 3 proof chip ở đáy
- Có `visualLabel` trong data nhưng hiện phần visual bên phải gần như không xuất hiện, khiến nửa còn lại của slide rất trống

**Vấn đề phát hiện**
- Headline tiếp tục bị dồn cục mạnh, xuống nhiều dòng và tạo block chữ nặng
- Tổng thể khối nội dung đang bị dồn lệch về một phía, tạo cảm giác mất cân bằng thị giác; theo cảm nhận review hiện tại, slide cho cảm giác nội dung bị dồn cục sang một bên thay vì được phân bố đều
- Nửa còn lại của slide quá trống nên cảm giác “dồn cục” càng rõ hơn
- Summary dài và bullet list 5 dòng khiến slide giống outline tài liệu hơn là slide giới thiệu khái niệm trung tâm
- Đây là slide `BMAD là gì`, tức một slide khái quát quan trọng, nhưng lại chưa có sơ đồ tổng quan hay infographic để gom các ý lớn thành một mô hình dễ nhớ
- Proof chips ở đáy đang chen sát vùng navigation / progress, tiếp tục lặp lỗi safe-area của nhiều slide trước
- 5 bullet hiện tại đều là các pillar quan trọng, nhưng đang bị flatten thành list thuần nên mất hierarchy

**Nguyên nhân giả định**
- Slide đang reuse pattern editorial cũ cho một nội dung đáng ra phải là overview diagram
- Rule typography của headline vẫn quá hẹp so với độ dài câu
- Dữ liệu có định hướng visual (`Ưu tiên sơ đồ tổng quan tự vẽ hoặc infographic gốc`) nhưng render hiện tại chưa biến nó thành phần trung tâm của slide
- Chưa có chiến lược nhóm 5 pillar của BMAD thành các khối dễ quét

**Hướng sửa nội dung**
- Rút headline thành phiên bản ngắn hơn hoặc chia nhịp tốt hơn để giảm áp lực thị giác
- Rút summary thành định nghĩa một câu, tập trung vào bản chất BMAD như phương pháp làm việc có vai trò, artifact, checkpoint, review
- Nhóm 5 bullet hiện tại thành 4 đến 5 pillar rõ nghĩa, ví dụ:
- `Agent chuyên biệt`
- `Vòng đời / giai đoạn`
- `Artifact theo bước`
- `Context engineering`
- `Human review & control`
- Nếu cần giữ proof chips, dùng chúng như nhãn kết luận cấp cao chứ không để cạnh tranh với pillar blocks

**Hướng sửa layout / visual**
- Chuyển slide này thành `overview slide` thực thụ, không giữ kiểu text stack
- Ưu tiên một sơ đồ tổng quan hoặc infographic ở vùng còn lại của slide để gom các trụ cột BMAD
- Một hướng phù hợp:
- bên trái: headline gọn + định nghĩa ngắn
- bên phải: sơ đồ 5 trụ hoặc hub-and-spoke của BMAD
- Hoặc dùng 5 card/icon block phân bố thành grid thay vì list line-by-line
- Sửa lỗi khối nội dung bị dồn lệch bằng cách tái phân bổ trọng lượng thị giác giữa hai vùng slide
- Giảm bớt chiều cao phần chữ để đáy slide thoáng hơn và không va vào controls
- Nếu tiếp tục giữ list, phải chuyển nó thành cards có icon, không để dạng line separators như hiện tại

**Icon / minh hoạ đề xuất**
- `users / bot` cho agent chuyên biệt
- `route / cycle` cho vòng đời bốn giai đoạn
- `file-stack / folder-tree` cho artifact theo bước
- `filter / layers` cho kỹ thuật tổ chức ngữ cảnh
- `shield-check / human-hand` cho phản biện và kiểm soát của con người
- Dùng màu riêng cho từng pillar để slide overview có cảm giác “map” thay vì “list”

**Animation đề xuất**
- Headline và định nghĩa ngắn xuất hiện trước
- Các pillar hoặc node trong overview diagram hiện lần lượt theo cấu trúc hệ thống
- Nếu dùng hub-and-spoke, animate từ node trung tâm `BMAD` ra các trụ xung quanh
- Tránh animate từng dòng list nếu phase sau chưa đổi layout

**Checklist implement phase sau**
- Chỉnh lại width / line-break của headline
- Sửa cảm giác nội dung bị dồn cục lệch bên bằng cách tái phân bổ bố cục
- Chuyển slide sang overview diagram hoặc grid pillar cards
- Rút summary và giảm phụ thuộc vào bullet list thuần
- Bổ sung icon màu cho từng pillar BMAD
- Dọn safe-area đáy để proof chips không chèn vào navigation / progress

---

### Slide 11 — Đội Hình Và Chuyên Biệt Hóa

**Tình trạng hiện tại**
- Slide hero 2 cột: cột trái có headline, summary, danh sách vai trò-agent; cột phải là ảnh minh hoạ rất lớn
- Data slide đang định hướng rõ: `Ảnh nhóm với nhãn vai trò đặt chồng lên`

**Vấn đề phát hiện**
- Ảnh minh hoạ đang quá to, chiếm áp đảo vùng phải và làm trọng tâm thị giác lệch mạnh sang hình
- Nội dung ở đáy phải bị ảnh và controls chèn lên; slide counter / nav arrow đang nằm ngay trên vùng minh hoạ, tạo cảm giác nội dung bị che
- Ảnh hiện tại là kiểu pseudo-infographic với nhiều ô nhãn trống bên trong ảnh, làm slide trông như asset chưa hoàn thiện
- Đây là đúng loại hình mà `CONTENT_FRAMEWORK.md` đã cảnh báo nên tránh: fake infographic / embedded labels bên trong ảnh
- Headline bên trái vẫn nặng và dồn cục, nên khi đặt cạnh một ảnh quá lớn, phần chữ vừa nặng vừa yếu về hierarchy
- Danh sách vai trò `Mary -> Brief`, `John -> PRD`... đang là thông tin tốt nhưng trình bày quá thuần text; bị lép vế hoàn toàn trước ảnh
- Proof chips ở đáy tiếp tục gần navigation, làm vùng dưới của slide bị chật

**Nguyên nhân giả định**
- `imageSize: "xlarge"` đang đẩy asset visual lên quá mạnh cho loại slide này
- Asset `core-agent-team.png` được tạo như một minh hoạ có placeholder label bên trong, nhưng chưa được biến thành visual thực sự tích hợp với slide
- Slide đang cố kể cả “team specialization” lẫn “role mapping” nhưng lại giao quá nhiều trọng lượng cho ảnh thay vì cho sơ đồ hoặc block vai trò
- Safe-area giữa image container và controls đáy chưa được kiểm soát

**Hướng sửa nội dung**
- Giữ ý chính: BMAD chia vai để từng agent làm việc trong phạm vi hẹp
- Rút headline để giảm số dòng và làm rõ ý hơn
- Chuyển danh sách role-output thành nhóm card vai trò hoặc cluster thay vì list line-by-line
- Có thể gom lại theo 3 lớp:
- `Planning`: Mary, John
- `System design`: Winston, Sarah/PO
- `Delivery & QA`: Bob, Amelia, Quinn
- Giảm phụ thuộc vào ảnh để người xem vẫn hiểu rõ mapping vai trò ngay cả khi không nhìn visual

**Hướng sửa layout / visual**
- Giảm kích thước ảnh rõ rệt; không để ảnh full-height lấn mạnh như hiện tại
- Không dùng pseudo-infographic có ô label trống bên trong ảnh
- Hướng tốt hơn là thay ảnh bằng:
- sơ đồ đội hình tự dựng trong slide
- grid các agent cards có icon / màu / output tương ứng
- hoặc illustration nhẹ đi kèm overlay labels native của slide
- Nếu vẫn giữ ảnh, phải crop lại gọn hơn và nhường chỗ cho các label/blocks thật nằm ngoài ảnh
- Ưu tiên biến cột phải thành `role map` rõ ràng hơn là một tranh minh hoạ lớn
- Dọn safe-area góc phải dưới để slide counter và nav không nằm đè lên minh hoạ

**Icon / minh hoạ đề xuất**
- `briefcase / document` cho Mary -> Brief
- `file-text / prd` cho John -> PRD
- `blueprint / layers` cho Winston -> Kiến trúc
- `shuffle / users` cho Sarah/PO -> Đồng bộ
- `list-check / story` cho Bob -> Story
- `code / terminal` cho Amelia -> Mã nguồn
- `shield-check / bug` cho Quinn -> QA
- Mỗi vai trò nên có màu riêng hoặc ít nhất theo nhóm chức năng

**Animation đề xuất**
- Headline và summary vào trước
- Các nhóm vai trò hoặc role cards hiện stagger theo cụm
- Nếu có role map, animate theo luồng từ planning -> design -> delivery -> QA
- Hạn chế motion trên ảnh; ảnh chỉ nên là nền hỗ trợ hoặc bị loại bỏ hoàn toàn nếu thay bằng sơ đồ

**Checklist implement phase sau**
- Giảm mạnh kích thước hoặc thay hẳn asset minh hoạ hiện tại
- Loại bỏ cảm giác ảnh che nội dung và controls ở đáy phải
- Không dùng ảnh có placeholder label / fake infographic
- Chuyển list vai trò thành role cards hoặc sơ đồ đội hình
- Chỉnh lại headline để bớt dồn cục
- Dọn safe-area ở đáy slide quanh progress, counter, nav

---

### Slide 12 — Bàn Giao Qua Artifact

**Tình trạng hiện tại**
- Slide có cấu trúc tốt hơn nhiều slide trước: headline và summary bên trái, nhóm proof chip là tên artifact ở đáy trái, cột phải là một panel mô tả pipeline artifact
- Vẫn có caption dưới visual với nhãn `Vai trò hình ảnh`

**Vấn đề phát hiện**
- Slide đang hiển thị trực tiếp ghi chú sản xuất `Vai trò hình ảnh`, đây là nội dung nội bộ và không được xuất hiện trong bản trình chiếu
- Ý chính của slide là `ngữ cảnh được chuyển qua tài liệu`, nhưng phần visual bên phải vẫn phụ thuộc nhiều vào một asset minh hoạ thay vì một sơ đồ native dựng trong slide
- Hình pipeline hiện mang tính minh hoạ nhiều hơn là thông tin thật; người xem khó đọc ra rõ chuỗi handoff nếu chỉ nhìn visual
- Headline vẫn dồn cục và khá nặng, dù slide này đã có bố cục cân bằng hơn
- Summary còn dài; lại thêm chuỗi `Brief -> PRD -> Kiến trúc -> Story -> Mã nguồn -> Minh chứng QA` cũng dài, khiến phần trái vẫn nặng chữ
- Proof chips ở trái dưới là các tên file / artifact hữu ích, nhưng hiện chúng đứng tách rời khỏi sơ đồ bên phải nên chưa tạo thành một flow liền mạch
- Caption bên phải chiếm thêm chiều cao vô ích và góp phần làm đáy slide chật hơn gần khu vực controls

**Nguyên nhân giả định**
- `visualLabel` đang bị render công khai qua component scene thay vì chỉ dùng nội bộ
- Slide `systems` có ý định làm pipeline nhưng implementation hiện tại vẫn nghiêng về “image + caption” hơn là “diagram + labels”
- Chưa đồng bộ hoá artifact chips bên trái với node/flow bên phải
- Rule typography headline vẫn chưa được tối ưu

**Hướng sửa nội dung**
- Loại bỏ hoàn toàn text nội bộ `Vai trò hình ảnh`
- Rút headline để giảm số dòng nhưng giữ đúng ý: ngữ cảnh được chuyển qua artifact, không giữ trong chat
- Rút summary thành câu ngắn hơn, sau đó để chuỗi artifact xuất hiện như một flow trực tiếp thay vì nhồi hết trong paragraph
- Biến danh sách artifact thành các bước chính thức trong pipeline:
- `Brief`
- `PRD`
- `Kiến trúc`
- `Story`
- `Mã nguồn`
- `QA evidence`
- Đồng bộ wording giữa chips, node trong sơ đồ, và copy bên trái để tránh lặp hoặc lệch thuật ngữ

**Hướng sửa layout / visual**
- Giữ tinh thần slide này vì đã đi đúng hướng hơn các slide text-first, nhưng cần chuyển visual bên phải thành sơ đồ native rõ ràng hơn
- Thay vì dựa vào ảnh minh hoạ pipeline, dựng một flow diagram ngay trong slide với node/card và mũi tên thật
- Có thể dùng panel bên phải như một artifact board:
- cột trái panel: các bước artifact
- cột phải panel: mô tả ngắn output / người nhận
- Hoặc biến toàn bộ phần phải thành horizontal/vertical pipeline với icon file rõ ràng
- Bỏ caption nội bộ hoàn toàn
- Liên kết trực quan chips/labels bên trái với pipeline bên phải để người xem thấy handoff thật sự diễn ra qua tài liệu
- Kiểm tra safe-area đáy sau khi bỏ caption để controls không chen vào phần flow

**Icon / minh hoạ đề xuất**
- `file-text` cho Brief
- `clipboard-list` cho PRD
- `blueprint / layers` cho Kiến trúc
- `list-check` cho Story
- `code / terminal` cho Mã nguồn
- `shield-check / file-check` cho QA evidence
- Dùng mũi tên hoặc connector màu để nhấn luồng bàn giao qua artifact

**Animation đề xuất**
- Headline và câu chốt vào trước
- Các node artifact xuất hiện tuần tự theo chuỗi handoff
- Đường nối hoặc arrow animate theo thứ tự Brief -> QA để nhấn tính chuyển giao liên tục
- Chips phụ nếu còn giữ chỉ nên fade-in sau cùng như nhãn hỗ trợ

**Checklist implement phase sau**
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Rút gọn headline và summary
- Dựng pipeline artifact native trong slide, không phụ thuộc vào ảnh minh hoạ là chính
- Đồng bộ labels artifact giữa copy, chips, và sơ đồ
- Giảm cảm giác chữ dày ở nửa trái
- Dọn safe-area đáy sau khi bỏ caption để tránh đè controls

---

### Slide 13 — Vòng Đời 4 Giai Đoạn

**Tình trạng hiện tại**
- Slide có headline, summary, bullet list 4 mục ở trái, và một panel phải với 4 dòng đánh số `01-04`
- Có caption nội bộ `Vai trò hình ảnh` bên dưới panel phải

**Vấn đề phát hiện**
- Slide đang lặp nội dung hai lần: 4 giai đoạn vừa xuất hiện ở bullet list bên trái, vừa lặp lại trong panel bên phải
- Cách trình bày hiện tại vẫn khá “khung dây”: panel phải chỉ là 4 dòng đánh số, chưa đủ giá trị visual
- Đây là slide rất phù hợp để chuyển thành các khối lớn có icon, nhưng hiện tại vẫn đang ở giữa hai kiểu: text list và mock diagram
- Caption `Vai trò hình ảnh` tiếp tục là nội dung nội bộ bị lộ
- Headline vẫn bị bó cột và dồn cục sang trái, trong khi bên phải có nhiều không gian hơn để làm layout tốt hơn
- Cụm visual hiện tại chưa có nhịp kể chuyện; 4 giai đoạn chỉ xếp chồng lên nhau mà chưa tạo cảm giác flow hay lifecycle
- Tổng thể slide chưa tận dụng được animation dù nội dung rất hợp để hiện theo từng bước

**Nguyên nhân giả định**
- Component `systems-phases` hiện chỉ render một panel danh sách tối giản, chưa được thiết kế như một lifecycle visual thực thụ
- Nội dung 4 giai đoạn đang bị duplicate giữa cột trái và cột phải vì chưa có quyết định rõ phần nào là text, phần nào là visual
- `visualLabel` vẫn bị render công khai qua scene component
- Rule typography headline vẫn tiếp tục quá hẹp

**Hướng sửa nội dung**
- Giữ đúng 4 giai đoạn cốt lõi:
- `Phân tích`
- `Lập kế hoạch`
- `Thiết kế giải pháp`
- `Triển khai`
- Không lặp lại cùng một nội dung ở cả bullet list và panel; chọn một nơi là cấu trúc chính
- Rút summary thành 1 câu giải thích mục đích của việc chia 4 giai đoạn: tách quyết định sản phẩm, kỹ thuật, và thực thi
- Nếu cần nội dung phụ, thêm micro-copy ngắn dưới từng khối thay vì paragraph dài

**Hướng sửa layout / visual**
- Đồng ý với hướng chuyển hẳn slide này thành 4 khối với icon và animate
- Hướng tốt nhất:
- 4 cards hoặc 4 nodes lớn
- mỗi node có số thứ tự, icon, tên giai đoạn, và 1 mô tả rất ngắn
- Có thể trình bày theo 2 cách:
- timeline ngang / dọc có connector
- hoặc grid 2x2 nếu muốn tăng độ chắc và cân slide
- Bỏ bullet list thuần bên trái nếu 4 khối đã đủ thông tin
- Bỏ hoàn toàn caption nội bộ `Vai trò hình ảnh`
- Tối ưu lại headline để giảm số dòng và nhường vai trò chính cho 4 khối lifecycle
- Nếu dùng timeline, làm rõ chiều đi từ `Phân tích -> Triển khai`

**Icon / minh hoạ đề xuất**
- `search / inspect` cho Phân tích
- `map / clipboard-plan` cho Lập kế hoạch
- `layers / blueprint / wrench` cho Thiết kế giải pháp
- `rocket / code / play` cho Triển khai
- Dùng màu riêng cho từng giai đoạn hoặc gradient chuyển nhịp để tạo cảm giác vòng đời

**Animation đề xuất**
- Đây là slide nên có animation rõ ràng
- Headline và câu chốt xuất hiện trước
- 4 khối hiện lần lượt theo thứ tự lifecycle
- Connector/arrow animate nối các bước để nhấn progression
- Có thể thêm pulse nhẹ ở node hiện tại khi speaker đi qua từng giai đoạn

**Checklist implement phase sau**
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Bỏ cấu trúc lặp giữa bullet list trái và panel phải
- Chuyển slide thành 4 khối / nodes có icon
- Thêm animation theo thứ tự 4 giai đoạn
- Chỉnh lại headline để giảm dồn cục sang trái
- Đảm bảo layout mới cân bằng hơn, không còn cảm giác “text bên trái, khung lặp bên phải”

---

### Slide 14 — Kỹ Thuật Tổ Chức Ngữ Cảnh

**Tình trạng hiện tại**
- Slide `systems` với headline, summary, 3 bullet bên trái
- Bên phải là `context-board` gồm 1 khối mô tả `Ngữ cảnh đầu vào quá lớn`, một mũi tên, các shard label, và một ảnh minh hoạ đặt ngay trong cùng panel
- Vẫn có caption nội bộ `Vai trò hình ảnh` ở dưới

**Vấn đề phát hiện**
- Slide có nhiều lỗi chồng nhau trong cùng một frame
- Ảnh minh hoạ đang chèn trực tiếp lên panel phải và che một phần nội dung thật
- Các shard label ở đáy phải bị ảnh đè lên; một nhãn còn bị cắt cụt, chỉ còn thấy `Mảnh r...`
- Panel phải có một khoảng trắng / vùng mũi tên nhìn như phần tử dang dở, làm bố cục trông vỡ
- Caption `Vai trò hình ảnh` tiếp tục lộ ra như ghi chú sản xuất nội bộ
- Headline bên trái vẫn dồn cục sang trái, tạo khối chữ nặng trong khi bên phải lại render lỗi
- Bullet list bên trái và panel bên phải chưa liên kết chặt; phần trái nói nguyên tắc, phần phải đáng ra phải minh hoạ nguyên lý, nhưng hiện tại bị ảnh lấn nên không giải thích được gì
- Visual hiện vừa làm nhiễu vừa làm mất thông tin, nên đây không còn là “ảnh hỗ trợ” mà là phần tử gây hại cho nội dung

**Nguyên nhân giả định**
- Ở `visualVariant: systems-context`, ảnh đang được render bên trong cùng `systems-board` với `context-column`, `context-arrow`, và `context-shards`
- `systems-image systems-image-small image-size-large` đang chiếm chỗ trên panel thay vì nằm ngoài hoặc ở vai trò nền
- Không có rule bảo vệ chồng lấn giữa image container và shard chips
- `visualLabel` vẫn bị render công khai qua `VisualCaption`
- Headline tiếp tục dùng rule typography bó hẹp giống các slide khác

**Hướng sửa nội dung**
- Giữ thông điệp: BMAD quản lý ngữ cảnh có chủ đích bằng cách nạp đúng lúc, thu nhỏ context, và shard tài liệu khi cần
- Rút summary để phần giải thích chính nằm trong sơ đồ native ở bên phải
- Chuyển 3 bullet bên trái thành 3 nguyên tắc hoặc 3 block gọn hơn:
- `Nạp đúng lúc`
- `Ngữ cảnh nhỏ hơn`
- `Chia nhỏ khi cần`
- Đồng bộ wording giữa bullet bên trái và các node/shard bên phải để người xem thấy quan hệ trực tiếp
- Loại bỏ hoàn toàn mọi text nội bộ như `Vai trò hình ảnh`

**Hướng sửa layout / visual**
- Không để ảnh nằm trong cùng board với sơ đồ nữa; đây là nguyên nhân trực tiếp gây che nội dung
- Ưu tiên một sơ đồ native rõ ràng:
- khối 1: `Ngữ cảnh đầu vào quá lớn`
- mũi tên / quá trình xử lý
- khối 2: các shard `Tệp từng bước`, `Mảnh đầu việc`, `Mảnh ràng buộc`
- Nếu vẫn cần ảnh ẩn dụ, đặt nó ra ngoài board hoặc làm nền rất nhẹ, tuyệt đối không được che node
- Có thể bỏ hẳn ảnh và thay bằng icon + connectors, vì slide này thiên về giải thích cơ chế
- Tăng tính block-based: mỗi shard là một card nhỏ có icon và màu, không phải pill bị chen dưới ảnh
- Dọn lại toàn bộ panel phải để không còn cảm giác phần tử dang dở hoặc khoảng trống vô nghĩa
- Kiểm tra safe-area đáy sau khi bỏ caption để controls không chen vào panel

**Icon / minh hoạ đề xuất**
- `inbox / database` cho khối ngữ cảnh đầu vào lớn
- `filter / split / scissors` cho hành động chia nhỏ
- `file` cho tệp từng bước
- `list-tree / ticket` cho mảnh đầu việc
- `shield / lock / rule` cho mảnh ràng buộc
- Nếu cần visual phụ, dùng abstract data-flow icon thay vì ảnh lớn chèn trực tiếp lên board

**Animation đề xuất**
- Headline và câu chốt vào trước
- Khối `Ngữ cảnh đầu vào quá lớn` xuất hiện đầu tiên
- Mũi tên / transform animate tiếp theo
- Các shard cards hiện stagger từ trái sang phải
- Nếu có icon phụ, chỉ fade nhẹ sau cùng; không dùng ảnh động lớn trong board

**Checklist implement phase sau**
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Tách ảnh ra khỏi `systems-context board` hoặc bỏ hẳn ảnh
- Sửa lỗi ảnh đè lên shard labels và nội dung panel
- Khôi phục đầy đủ label bị cắt cụt `Mảnh ràng buộc`
- Chuyển shard labels thành các block/card rõ ràng có icon
- Chỉnh lại headline để giảm dồn cục sang trái
- Dọn lại safe-area đáy sau khi làm sạch panel phải

---

### Slide 15 — Vòng Lặp C.O.R.E.

**Tình trạng hiện tại**
- Slide `systems` với headline, summary và 3 proof chip bên trái
- Bên phải là một panel lớn gần như trống, có 3 label rời (`Đề xuất`, `C.O.R.E.`, `Tinh chỉnh`) và một ảnh tròn trừu tượng đặt lệch bên phải
- Vẫn có caption nội bộ `Vai trò hình ảnh` ở dưới

**Vấn đề phát hiện**
- Slide có rất nhiều lỗi trình bày nội dung dù bản chất thông điệp khá đơn giản
- Phần visual bên phải rất rỗng nhưng lại không giải thích được vòng lặp `đề xuất -> phản biện -> tinh chỉnh`
- Label `Đề xuất`, `C.O.R.E.`, `Tinh chỉnh` đang trôi rời rạc, không tạo thành sơ đồ loop có nghĩa
- Bước `Phản biện` gần như không hiện diện rõ trong phần visual, dù lại là thành phần cốt lõi của loop
- Ảnh xoáy tròn trừu tượng không mang thông tin cụ thể; nó tạo cảm giác “đẹp nhưng không giúp hiểu”
- Caption `Vai trò hình ảnh` tiếp tục lộ ra như note nội bộ
- Headline bên trái vẫn dồn cục sang trái và khá nặng
- Proof chips bên trái lặp lại đúng 3 nhãn của vòng lặp nhưng chưa liên kết với visual bên phải
- Tổng thể slide bị loãng: bên trái có ít nội dung, bên phải nhiều khoảng trắng, nhưng trọng tâm vẫn không rõ

**Nguyên nhân giả định**
- `visualVariant: systems-core` hiện đang cố kết hợp ảnh trừu tượng với một vài label nổi, nhưng chưa dựng thành loop diagram thực sự
- `visualLabel` vẫn bị render công khai qua `VisualCaption`
- Không có structure/connectors đủ rõ để thể hiện trình tự `đề xuất -> phản biện -> tinh chỉnh`
- Slide dùng ảnh như trung tâm thay vì lấy sơ đồ nhịp lặp làm trung tâm

**Hướng sửa nội dung**
- Giữ thông điệp cốt lõi: BMAD không đi thẳng, mà dùng vòng lặp để kiểm tra chéo trước khi đi tiếp
- Rút summary thành 1 câu ngắn, trực diện hơn
- Chuẩn hoá 3 bước thành cùng cấp độ:
- `Đề xuất`
- `Phản biện`
- `Tinh chỉnh`
- Có thể thêm 1 micro-copy ngắn dưới từng bước để giải thích vai trò:
- đề xuất phương án
- phản biện / kiểm tra chéo
- tinh chỉnh trước khi thực thi
- Loại bỏ mọi text nội bộ kiểu `Vai trò hình ảnh`

**Hướng sửa layout / visual**
- Không nên giữ canvas trống + ảnh trừu tượng như hiện tại
- Dựng hẳn một loop diagram native trong slide:
- 3 node thành tam giác hoặc vòng tròn
- arrows rõ ràng nối các bước
- `C.O.R.E.` có thể là nhãn trung tâm hoặc tiêu đề nhỏ của loop
- Có thể thay toàn bộ panel phải bằng 3 khối có icon và connector cong
- Nếu vẫn cần hình phụ, nó chỉ nên rất mờ ở nền, không được cạnh tranh với sơ đồ loop
- Đồng bộ proof chips bên trái với 3 node bên phải, hoặc bỏ chips nếu node đã đủ rõ
- Tái phân bổ không gian để panel phải không còn quá rỗng

**Icon / minh hoạ đề xuất**
- `lightbulb / spark` cho Đề xuất
- `shield-alert / scale / search` cho Phản biện
- `wrench / refresh / pen-tool` cho Tinh chỉnh
- `loop / orbit / rotate-cw` cho nhịp lặp C.O.R.E.
- Dùng màu riêng cho từng bước để vòng lặp nhìn rõ ngay cả khi không đọc chữ

**Animation đề xuất**
- Đây là slide rất nên có animation
- Cho 3 bước hiện tuần tự theo thứ tự loop
- Arrow/connector animate theo chiều quay để người xem cảm nhận được “vòng lặp”
- Có thể cho `C.O.R.E.` pulse nhẹ ở giữa sau khi 3 bước xuất hiện
- Tránh animate ảnh nền; nếu giữ ảnh thì chỉ fade rất nhẹ

**Checklist implement phase sau**
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Dựng loop diagram thật thay cho label trôi + ảnh trừu tượng
- Đảm bảo bước `Phản biện` hiện diện rõ ràng ngang hàng với 2 bước còn lại
- Giảm hoặc bỏ ảnh trừu tượng nếu không còn cần thiết
- Chỉnh lại headline để giảm dồn cục sang trái
- Đồng bộ proof chips với 3 bước hoặc loại bỏ chips nếu gây lặp
- Tái cân bằng panel phải để không còn cảm giác rỗng mà vô nghĩa

---

### Slide 16 — Chất Lượng: 4 Lớp Phòng Thủ

**Tình trạng hiện tại**
- Slide `systems` với headline, summary, 4 bullet bên trái
- Bên phải là `layers-board` gồm 4 dải nhãn và một ảnh lớn đặt chồng trong cùng panel
- Vẫn có caption nội bộ `Vai trò hình ảnh` ở dưới

**Vấn đề phát hiện**
- Slide có rất nhiều lỗi trình bày nội dung cùng lúc
- `Cổng sẵn sàng` là thuật ngữ khó hiểu và theo truy vấn NotebookLM không phải thuật ngữ gốc của BMAD
- Nội dung 4 lớp đang vừa xuất hiện ở bullet list bên trái, vừa lặp lại ở panel bên phải
- Ảnh lớn ở phải đang chèn lên các dải lớp phòng thủ, làm phần visual khó đọc và biến panel thành một layout chồng lấn
- Caption `Vai trò hình ảnh` tiếp tục lộ ra như note nội bộ
- Headline vẫn dồn cục sang trái
- Ảnh “lá chắn / software system” tạo mood chung nhưng không giải thích cụ thể 4 lớp là gì
- Các lớp hiện tại chưa cân về khái niệm: có mục là dịch diễn giải (`Cổng sẵn sàng`), có mục khá ổn (`Khả năng truy vết`), có mục lai (`TDD + kiểm chứng`)
- Slide đáng ra phải giúp người xem hiểu cơ chế quality gates xuyên suốt, nhưng hiện lại gây mơ hồ ngay ở tên lớp đầu tiên

**Nguyên nhân giả định**
- Ở `visualVariant: systems-layers`, ảnh đang được render bên trong cùng board với 4 layer bands, nên gây chồng lấn tương tự các slide systems khác
- `visualLabel` vẫn bị render công khai qua `VisualCaption`
- Thuật ngữ tiếng Việt trên slide chưa được kiểm tra lại với nguồn BMAD gốc
- Nội dung 4 lớp chưa được chuẩn hoá thành một taxonomy rõ ràng và nhất quán về thuật ngữ

**Làm rõ thuật ngữ từ NotebookLM**
- Theo NotebookLM notebook `BMAD Method`, `Cổng sẵn sàng` chỉ là cách dịch diễn giải, không phải thuật ngữ gốc
- Nếu nói về cơ chế tổng quát, nên dùng **Validation Gates** hoặc **Quality Gates**
- Nếu chỉ đích danh bước kiểm tra trước khi implementation, nên dùng **Implementation Readiness Check**
- NotebookLM cũng gợi ý các lớp chất lượng ngắn gọn và đúng BMAD hơn như:
- `Validation Gates`
- `Adversarial Review`
- `Test Architect & TDD`
- `Merge-Readiness Packs (MRP)`

**Hướng sửa nội dung**
- Thay `Cổng sẵn sàng` bằng thuật ngữ gốc rõ nghĩa hơn
- Tùy mức độ kỹ thuật muốn giữ trên slide, ưu tiên một trong hai hướng:
- giữ tiếng Anh hoàn toàn cho 4 lớp
- hoặc dùng tiêu đề tiếng Anh + phụ đề tiếng Việt rất ngắn
- Một cấu hình đề xuất tốt hơn cho slide:
- `Validation Gates`
- `Adversarial Review`
- `TDD + Verification`
- `Traceability` hoặc `Merge-Readiness Packs`
- Cần quyết định rõ lớp thứ 4 đang muốn nhấn `traceability` hay `MRP`, vì chúng không hoàn toàn là một khái niệm
- Rút summary để tránh nhồi quá nhiều thuật ngữ trong một câu
- Không lặp y nguyên 4 lớp ở cả bullet list và panel; chọn một nơi là cấu trúc chính

**Hướng sửa layout / visual**
- Không giữ kiểu 4 dải band + ảnh chồng lên như hiện tại
- Dựng một sơ đồ 4 lớp native trong slide, ví dụ:
- 4 lớp band rõ ràng xếp tầng từ ngoài vào trong
- hoặc 4 cards xếp chồng / concentric shield diagram
- Nếu muốn giữ hình “phòng thủ nhiều lớp”, để nó làm nền rất nhẹ hoặc bỏ hẳn, không được che text
- Tăng hierarchy cho từng lớp: tên lớp, icon, mô tả ngắn
- Bỏ hoàn toàn caption nội bộ `Vai trò hình ảnh`
- Kiểm tra lại tính dễ hiểu của từng lớp sau khi đổi thuật ngữ; đây là slide mà wording quan trọng ngang layout

**Icon / minh hoạ đề xuất**
- `gate / check-circle` cho Validation Gates
- `alert-octagon / search` cho Adversarial Review
- `test-tube / code / check-square` cho TDD + Verification
- `git-branch / file-check / trail` cho Traceability hoặc MRP
- Có thể dùng visual “layered shield” native bằng CSS/shape thay vì ảnh raster lớn

**Animation đề xuất**
- Headline và câu chốt vào trước
- 4 lớp xuất hiện lần lượt từ ngoài vào trong hoặc từ trên xuống dưới
- Nếu dùng shield/concentric layers, animate theo từng lớp phủ lên nhau để đúng nghĩa “layered defense”
- Chỉ dùng motion cho các lớp; tránh ảnh động lớn phía sau

**Checklist implement phase sau**
- Thay `Cổng sẵn sàng` bằng thuật ngữ BMAD gốc phù hợp, ưu tiên **Validation Gates** hoặc **Implementation Readiness Check** tùy ý định
- Rà lại toàn bộ 4 lớp để thống nhất ngôn ngữ và cấp độ khái niệm
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Tách hoặc bỏ ảnh nền đang chèn lên layer bands
- Không lặp 4 lớp ở cả list trái và panel phải
- Chuyển slide sang layered diagram hoặc 4 blocks có icon rõ ràng
- Chỉnh lại headline để giảm dồn cục sang trái

---

### Slide 17 — Nhịp Làm Việc Hằng Ngày

**Tình trạng hiện tại**
- Slide editorial text-first với headline, summary, và 4 bullet line ở bên trái
- Nửa phải gần như trống hoàn toàn

**Vấn đề phát hiện**
- Đây là một ví dụ rất rõ của lỗi hệ thống: nội dung bị dồn cục sang bên trái trong khi phần còn lại của slide gần như bỏ trống
- Headline tiếp tục bị bó cột và tạo khối chữ nặng
- Summary đã mô tả một flow vận hành rất rõ (`Story -> ngữ cảnh -> triển khai -> kiểm thử -> QA -> commit`) nhưng slide lại không visual hóa flow này
- 4 bullet hiện tại là các bước trong nhịp làm việc hằng ngày, rất phù hợp để chuyển thành các khối có icon, nhưng đang bị flatten thành list thuần
- Slide trông giống outline tài liệu hơn là nhịp vận hành hằng ngày
- Không có hierarchy rõ giữa “luồng công việc” và “các điểm kiểm tra trong luồng”
- Nửa phải quá trống khiến lỗi dồn cục bên trái càng khó chịu hơn

**Nguyên nhân giả định**
- Slide đang reuse pattern editorial cũ dù nội dung bản chất là một workflow slide
- Headline width vẫn tiếp tục quá hẹp
- Chưa có quyết định trình bày `daily workflow` dưới dạng flow/timeline/cards

**Hướng sửa nội dung**
- Giữ thông điệp chính: BMAD đi được vào nhịp làm việc hằng ngày, không phải một quy trình xa rời thực tế dev
- Rút summary thành câu ngắn hơn, tập trung vào ý: kiểm tra được đặt ngay trong luồng làm việc thường ngày
- Chuẩn hoá 4 bước thành các khối rõ hơn:
- `Chọn story`
- `Nạp đúng ngữ cảnh`
- `Triển khai với rào chắn`
- `Kiểm chứng rồi commit`
- Có thể thêm micro-copy rất ngắn dưới từng khối để giải thích một hành động cụ thể

**Hướng sửa layout / visual**
- Đồng ý với hướng chuyển slide này thành các khối với icon và animate
- Hướng tốt nhất:
- 4 blocks workflow nằm ngang hoặc theo lưới 2x2
- có connector / arrow để thể hiện nhịp đi
- nếu muốn nhấn mạnh QA nằm trong flow, có thể chèn checkpoint giữa block 3 và 4
- Không nên giữ nửa phải trống
- Có thể dùng toàn bộ chiều ngang cho một flow board thay vì dồn mọi thứ vào cột trái
- Headline nên rút gọn và nhường trọng tâm cho sơ đồ workflow
- Slide này rất phù hợp với motion tuần tự để người xem cảm được nhịp công việc

**Icon / minh hoạ đề xuất**
- `bookmark / ticket` cho Chọn story
- `inbox / layers` cho Nạp đúng ngữ cảnh
- `code / shield` cho Triển khai với rào chắn
- `check-circle / git-commit` cho Kiểm chứng rồi commit
- Nếu muốn hiển thị QA rõ hơn, thêm `bug / shield-check` như checkpoint phụ trong flow

**Animation đề xuất**
- Headline và câu chốt vào trước
- 4 blocks xuất hiện tuần tự theo thứ tự workflow
- Connector/arrow animate theo chiều đi của nhịp làm việc
- Có thể thêm hiệu ứng checkpoint nhỏ ở bước kiểm chứng/QA để nhấn quality is in the flow

**Checklist implement phase sau**
- Chuyển slide từ text stack sang workflow blocks có icon
- Tận dụng nửa phải, không để trống
- Chỉnh lại headline để giảm dồn cục sang trái
- Rút summary để không cạnh tranh với sơ đồ chính
- Thêm animation tuần tự cho 4 bước
- Gắn slide này vào nhóm fix hệ thống cho các slide dồn nội dung sang trái dù có đủ không gian

---

### Slide 21 — Mẫu Số Chung

**Tình trạng hiện tại**
- Slide `case` với headline, summary, và 4 proof chips bên trái
- Bên phải là ảnh doanh nghiệp / họp phòng kính, kèm caption nội bộ `Vai trò hình ảnh`

**Vấn đề phát hiện**
- Đây là một slide tổng hợp pattern/KPI nhưng đang trình bày như một slogan + ảnh minh hoạ doanh nghiệp generic
- Headline tiếp tục bị dồn cục sang trái
- Summary khá chung, chưa biến được “mẫu số chung” thành insight có cấu trúc
- 4 proof chips (`Thông lượng cao hơn`, `Làm lại ít hơn`, `Vào việc dễ hơn`, `Niềm tin tốt hơn`) là các điểm rất tốt, nhưng hiện chỉ đang nằm như tags chứ chưa trở thành các khối insight có trọng lượng
- Ảnh bên phải không tăng giá trị nội dung; nó chỉ thêm “sắc thái business” nhưng không giúp người xem hiểu pattern giữa 3 case
- Caption `Vai trò hình ảnh` tiếp tục lộ ra như note nội bộ
- Slide lẽ ra phải là phần kết tinh bằng chứng từ các case study, nhưng hiện lại hơi chung chung và thiếu cảm giác “synthesis”

**Nguyên nhân giả định**
- Slide `case` đang thiên về ảnh minh hoạ hơn là tổng hợp insight thực
- Chưa có thiết kế riêng cho slide synthesis / KPI summary
- 4 proof chips chưa được nâng cấp thành metric/benefit blocks
- `visualLabel` vẫn bị render công khai qua `VisualCaption`

**Hướng sửa nội dung**
- Giữ thông điệp: ba ca thực tế khác nhau nhưng lặp lại cùng một pattern vận hành
- Rút summary thành câu chốt mạnh hơn, thiên về synthesis
- Nâng 4 proof chips thành 4 insight blocks hoặc KPI blocks:
- `Thông lượng cao hơn`
- `Làm lại ít hơn`
- `Onboarding / vào việc dễ hơn`
- `Niềm tin vào đầu ra cao hơn`
- Nếu có thể, cân nhắc dùng wording nhất quán hơn về ngôn ngữ:
- `Vào việc dễ hơn` có thể đổi thành `Onboarding nhanh hơn` hoặc `Ramp-up nhanh hơn` nếu muốn rõ hơn
- Loại bỏ các câu mô tả quá chung chung nếu không thêm giá trị

**Hướng sửa layout / visual**
- Không nên để slide này dựa vào một ảnh doanh nghiệp generic
- Hướng tốt hơn:
- 4 khối insight lớn có icon màu
- hoặc 2x2 KPI board
- hoặc 1 synthesis board với 3 case đổ về 4 pattern chung
- Có thể dùng layout:
- trên cùng: 3 case inputs nhỏ
- dưới: 4 outcome blocks
- Nếu không cần truy vết từng case trên slide này, chỉ cần 4 outcome blocks là đủ
- Bỏ hoàn toàn caption nội bộ `Vai trò hình ảnh`
- Có thể loại ảnh hẳn nếu 4 blocks đã đủ mạnh
- Nếu vẫn giữ visual phụ, chỉ dùng như background nhẹ hoặc mini accent, không làm trọng tâm

**Icon / minh hoạ đề xuất**
- `gauge / trending-up` cho Thông lượng cao hơn
- `refresh-ccw / hammer-off` cho Làm lại ít hơn
- `rocket / user-plus` cho Onboarding hoặc vào việc dễ hơn
- `shield-check / badge-check` cho Niềm tin vào đầu ra cao hơn
- Nếu làm synthesis board, thêm `merge / layers` để thể hiện “3 case -> 1 pattern”

**Animation đề xuất**
- Headline và câu synthesis vào trước
- 4 insight blocks xuất hiện theo thứ tự hoặc theo lưới 2x2
- Có thể cho 3 case nguồn fade-in nhẹ trước khi merge vào 4 outcome blocks nếu dùng layout synthesis
- Hạn chế hoàn toàn vai trò của ảnh generic trong animation

**Checklist implement phase sau**
- Chuyển 4 proof chips thành insight blocks / KPI blocks thật sự
- Bỏ hoặc giảm mạnh vai trò ảnh doanh nghiệp generic
- Loại bỏ hoàn toàn text `Vai trò hình ảnh`
- Chỉnh lại headline để giảm dồn cục sang trái
- Cân nhắc đổi `Vào việc dễ hơn` sang wording rõ hơn như `Onboarding nhanh hơn` nếu phù hợp tone deck
- Thiết kế slide theo đúng vai trò `synthesis of cases`, không chỉ là một frame có ảnh minh hoạ

---

### Slide 22 — Party Mode

**Tình trạng hiện tại**
- Slide editorial text-first với headline, summary, 3 bullet line, và 3 proof chip bên trái
- Nửa phải gần như trống hoàn toàn

**Vấn đề phát hiện**
- Slide tiếp tục mắc lỗi hệ thống: toàn bộ nội dung bị dồn sang trái trong khi phần lớn không gian slide bỏ trống
- Headline dài, nhiều dòng và nặng khối
- Summary giải thích khái niệm Party Mode khá dài, nhưng lại không có mô hình trực quan cho `BMad Master + nhiều agent chuyên vai`
- Bullet 1 và 2 chứa nhiều ý trong một dòng, nên khá nặng chữ
- Bullet 2 đặc biệt dài, liệt kê nhiều vai trò trong cùng một câu, rất khó scan nhanh trên slide
- Đây là nội dung rất phù hợp để trình bày thành các khối vai trò hoặc sơ đồ điều phối, nhưng hiện lại bị flatten thành list
- Proof chips ở đáy hữu ích nhưng đang bị dùng như nhãn phụ trong khi nội dung chính chưa được block hóa

**Nguyên nhân giả định**
- Slide đang reuse pattern editorial cũ thay vì được thiết kế như một orchestration / multi-agent diagram
- Headline width tiếp tục quá hẹp
- Chưa có cấu trúc visual để thể hiện:
- ai điều phối
- các agent nào tham gia
- nên dùng khi nào / không nên dùng khi nào

**Hướng sửa nội dung**
- Giữ thông điệp chính: nhiều agent có thể cùng thảo luận dưới một điều phối chung để xử lý trade-off
- Rút summary để tách khái niệm và lợi ích:
- 1 câu cho `BMad Master orchestrates`
- 1 câu cho `agents debate from their roles`
- Chuyển 3 bullet thành 3 khối rõ hơn:
- `Khi nào nên dùng`
- `Ai nhìn vấn đề từ đâu`
- `Khi nào không nên dùng`
- Tách danh sách vai trò trong bullet 2 thành các badge/mini cards riêng: `PM`, `Architect`, `Dev`, `QA`
- Giữ proof chips nếu cần, nhưng nên để chúng làm nhãn tổng kết chứ không thay phần giải thích chính

**Hướng sửa layout / visual**
- Chuyển slide sang bố cục block-based rõ ràng hơn
- Một hướng phù hợp:
- trung tâm hoặc phía trên: node `BMad Master`
- xung quanh: 4 agent cards `PM / Architect / Dev / QA`
- cột phụ hoặc hàng dưới: `nên dùng khi...` và `không nên dùng khi...`
- Có thể dùng sơ đồ hình sao hoặc hub-and-spoke để thể hiện orchestration
- Nếu muốn tối giản hơn, dùng 3 khối lớn:
- `Use cases`
- `Role perspectives`
- `Limits`
- Không nên để nửa phải trống; đây là slide cực hợp để dùng layout network/card
- Chỉnh headline ngắn hơn và nhường vai trò chính cho sơ đồ điều phối

**Icon / minh hoạ đề xuất**
- `crown / conductor / hub` cho BMad Master
- `briefcase / target` cho PM
- `layers / blueprint` cho Architect
- `code / wrench` cho Dev
- `shield-alert / bug` cho QA
- `shuffle / users` cho multi-agent collaboration
- `x-circle / workflow` cho phần “không nên dùng”

**Animation đề xuất**
- Headline và câu định nghĩa ngắn vào trước
- Node `BMad Master` xuất hiện trước, sau đó các agent cards hiện tỏa ra xung quanh
- Các khối `nên dùng` / `không nên dùng` hiện sau cùng
- Có thể animate connector lines từ Master tới từng agent để nhấn vai trò điều phối

**Checklist implement phase sau**
- Chuyển slide từ text stack sang orchestration diagram hoặc group cards
- Tách bullet 2 dài thành các mini role blocks có icon
- Chỉnh lại headline để giảm dồn cục sang trái
- Tận dụng nửa phải cho sơ đồ điều phối, không để trống
- Giảm độ dài wording của summary và bullets
- Dùng proof chips như nhãn phụ hoặc bỏ nếu layout mới đã đủ rõ

---

### Slide 23 — Ưu Điểm Và Giới Hạn

**Tình trạng hiện tại**
- Slide `contrast` nhưng toàn bộ nội dung vẫn nằm ở một cột trái: headline, summary, 4 bullet line, và 3 proof chip ở đáy
- Nửa phải gần như trống hoàn toàn

**Vấn đề phát hiện**
- Slide nói về trade-off giữa ưu điểm và giới hạn, nhưng trình bày hiện tại không hề tạo cảm giác so sánh hay cân hai mặt
- Headline tiếp tục bị dồn cục sang trái
- Bullet list đang trộn `Ưu điểm` và `Giới hạn` trong cùng một cột, nên khó scan và khó đối chiếu
- Hai bullet đầu là ưu điểm, hai bullet sau là giới hạn, nhưng hierarchy thị giác không thể hiện điều đó đủ rõ
- Một số bullet khá dài và chứa nhiều ý trong một dòng
- Nửa phải trống hoàn toàn làm lộ rõ việc slide `contrast` chưa tận dụng đúng loại layout của nó
- Proof chips ở đáy có ích nhưng chưa đủ thay thế cho một cấu trúc pros/cons rõ ràng

**Nguyên nhân giả định**
- Slide được gắn `kind: "contrast"` nhưng vẫn render theo pattern text-first cũ
- Chưa chuyển nội dung trade-off thành 2 nhóm đối xứng
- Headline width vẫn quá hẹp

**Hướng sửa nội dung**
- Giữ thông điệp chính: BMAD mạnh khi cần cấu trúc, nhưng có overhead và đòi hỏi kỷ luật
- Rút summary thành câu cân bằng hai vế rõ hơn
- Tách hoàn toàn nội dung thành 2 nhóm:
- `Ưu điểm`
- `Giới hạn`
- Rút các bullet dài thành các điểm ngắn hơn, ví dụ:
- ưu điểm: `Vai trò rõ`, `Artifact rõ`, `Review dễ`, `Truy vết tốt`
- giới hạn: `Học ban đầu`, `Cần điều phối tốt`, `Overhead với bài toán nhỏ`, `Vẫn có thể bão hòa nếu vận hành kém`
- Giữ proof chips như các kết luận cao tầng nếu còn cần, nhưng không để chúng cạnh tranh với 2 nhóm chính

**Hướng sửa layout / visual**
- Chuyển slide thành một contrast slide thực thụ
- Hướng tốt nhất:
- cột trái `Ưu điểm`
- cột phải `Giới hạn`
- mỗi cột gồm 3-4 cards nhỏ có icon
- Có thể dùng màu khác nhau cho hai phía: một phía tích cực, một phía trung tính/cảnh báo
- Nếu không dùng 2 cột, có thể dùng 2 hàng lớn stacked:
- `Where BMAD shines`
- `Where BMAD costs more`
- Không nên để nửa phải trống
- Headline nên gọn lại và nhường vai trò chính cho cấu trúc `pros vs cons`

**Icon / minh hoạ đề xuất**
- `layers / structure` cho cấu trúc rõ
- `file-check / folder` cho artifact rõ
- `search-check / shield-check` cho review/truy vết
- `clock / learning` cho learning curve
- `users / conductor` cho cần điều phối tốt
- `weight / warning` cho overhead
- `alert-triangle / saturation` cho nguy cơ bão hòa khi vận hành kém

**Animation đề xuất**
- Headline và câu chốt vào trước
- Cột `Ưu điểm` hiện trước hoặc cùng lúc theo chiều trên xuống
- Cột `Giới hạn` hiện sau với nhịp tương tự
- Có thể animate theo từng cặp để nhấn “đổi lại / trade-off”

**Checklist implement phase sau**
- Chuyển slide từ list thuần sang 2 cột `Ưu điểm` vs `Giới hạn`
- Tách rõ 2 nhóm nội dung, không trộn trong cùng một list
- Chỉnh lại headline để giảm dồn cục sang trái
- Tận dụng nửa phải cho vế `Giới hạn`
- Rút ngắn các bullet dài thành cards ngắn có icon
- Dùng proof chips như nhãn phụ hoặc bỏ nếu gây thừa

---

### Slide 24 — Quy Mô Và Mở Rộng

**Tình trạng hiện tại**
- Slide editorial text-first với headline, summary, 5 bullet line, và 3 proof chip ở đáy bên trái
- Nửa phải gần như trống hoàn toàn

**Vấn đề phát hiện**
- Tiếp tục lặp lỗi hệ thống: toàn bộ nội dung bị dồn cục sang trái trong khi còn rất nhiều không gian trống
- Headline nặng và nhiều dòng
- Nội dung của slide thực ra có cấu trúc cấp độ/maturity rất rõ, nhưng đang bị trình bày thành list thuần
- 5 bullet hiện tại thuộc ít nhất 3 nhóm khác nhau:
- mức áp dụng theo quy mô
- lớp mở rộng theo nhu cầu
- công cụ/domain extension
- Vì không có hierarchy trực quan, người xem khó thấy mối quan hệ giữa `Quick Flow`, `BMAD chuẩn`, `Enterprise`, `Advanced Elicitation`, `Expansion Packs`
- Slide đáng ra nên giúp người xem chọn “mức áp dụng nào” và “mở rộng ra sao”, nhưng hiện vẫn chỉ là liệt kê
- Proof chips ở đáy (`Chọn theo quy mô`, `Chọn theo rủi ro`, `Mở rộng theo nhu cầu`) đúng hướng, nhưng chưa được biến thành cấu trúc chính của slide

**Nguyên nhân giả định**
- Slide đang reuse pattern editorial cũ thay vì được thiết kế như một scale/maturity/expansion map
- Headline width tiếp tục quá hẹp
- Chưa tách rõ hai lớp thông tin:
- base levels
- optional extensions

**Hướng sửa nội dung**
- Giữ thông điệp chính: BMAD không phải một gói duy nhất; có thể áp dụng theo mức độ và mở rộng dần
- Rút summary thành câu ngắn hơn, trực diện hơn
- Tách nội dung thành 2 phần rõ ràng:
- `Mức áp dụng`
- `Lớp mở rộng`
- Nhóm lại như sau:
- `Quick Flow`
- `BMAD chuẩn`
- `Enterprise`
- `Advanced Elicitation`
- `Expansion Packs / Builder`
- Cần làm rõ cái nào là level, cái nào là extension để tránh người xem hiểu nhầm chúng cùng cấp

**Hướng sửa layout / visual**
- Không nên giữ slide này ở dạng list thuần
- Hướng tốt nhất:
- một ladder / tiered map cho 3 mức áp dụng chính:
- `Quick Flow`
- `BMAD chuẩn`
- `Enterprise`
- và một dải phụ hoặc nhóm card riêng cho các extension:
- `Advanced Elicitation`
- `Expansion Packs / Builder`
- Có thể dùng bố cục:
- bên trái: headline + câu định hướng ngắn
- bên phải: scale ladder hoặc maturity map
- Hoặc dùng 5 cards nhưng phải chia rõ “core levels” và “extensions”
- Nửa phải phải trở thành nơi mang cấu trúc phân tầng, không để trống
- Proof chips có thể được gộp thành nhãn section hoặc bỏ nếu ladder/map đã truyền tải đủ

**Icon / minh hoạ đề xuất**
- `zap / sprint` cho Quick Flow
- `layers / workflow` cho BMAD chuẩn
- `building / shield` cho Enterprise
- `brain / search` cho Advanced Elicitation
- `puzzle / toolbox / package` cho Expansion Packs và Builder
- Có thể dùng icon `arrow-up / stairs` để gợi cảm giác scale-up theo mức đầu tư

**Animation đề xuất**
- Headline và câu định hướng vào trước
- 3 mức áp dụng chính hiện tuần tự từ thấp đến cao
- Các extension xuất hiện sau cùng như lớp mở rộng phụ trợ
- Nếu dùng ladder, animate theo chiều đi lên để nhấn “mở rộng khi cần”

**Checklist implement phase sau**
- Chuyển slide từ list thuần sang scale ladder / maturity map / grouped cards
- Tách rõ `mức áp dụng` và `lớp mở rộng`
- Tận dụng nửa phải cho cấu trúc phân tầng, không để trống
- Chỉnh lại headline để giảm dồn cục sang trái
- Rút summary để không lặp với cấu trúc chính
- Dùng proof chips như nhãn phụ hoặc loại bỏ nếu layout mới đã đủ rõ

---
