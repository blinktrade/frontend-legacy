---
layout:     post
title:      "Gửi Bitcoin tới sàn giao dịch này có an toàn không?"
date:       2014-11-07 00:12:00
categories: vi faq
---

Chúng tôi muốn tạo ra một môi trường giao dịch an toàn nhất cho người dùng. Bitcoin được lưu trữ trong một chiếc Ví lạnh multi-signature. Vì vậy, kể cả trong trường hợp xấu nhất khi máy chủ bị tấn công, số Bitcoin này vẫn không bị rơi vào tay kẻ xấu.

Các Ví multi-signature đòi hỏi 2 trong 3 khoá để có thể di chuyển các Bitcoin. Nhà điều hành sàn giao dịch lưu giữ một trong 3 khoá. Hai khoá khác được lưu giữ bởi BlinkTrade và một bên trung gian hòa giải mà sẽ tác động vào trong trường hợp có tranh chấp giữa nhà điều hành sàn giao dịch và BlinkTrade.

Điều này có nghĩa rằng ngay cả khi một hacker lấy được quyền truy cập vào máy chủ của sàn, họ cũng sẽ phải tấn công được các máy chủ của BlinkTrade để có thể lấy Bitcoin. Khả năng này xảy ra cực kỳ thấp vì mỗi bên đều áp dụng rất nhiều cách để chống tấn công cho riêng mình, bao gồm cả việc xác thực 2 lớp.

Mỗi lần Bitcoin phải di chuyển từ Ví lạnh qua Ví nóng (được kết nối với Internet để cho phép rút tiền nhanh), BlinkTrade trước đó sẽ xác minh hệ thống và thực hiện kiểm tra khả năng tính thanh khoản của sàn giao dịch. Nói cách khác, mỗi lần Bitcoin được chuyển từ lưu trữ lạnh multi-signature qua Ví nóng, chúng tôi thực hiện một lượt kiểm tra hệ thống hoàn chỉnh.

Các Ví nóng được giữ trong các máy chủ của blockchain.info và chúng tôi chỉ giữ lại một số lượng nhỏ Bitcoin trong Ví này để có thể trang trải các hoạt động trong ngày. Ngoài ra, tất cả các biện pháp an ninh của chiếc Ví nóng được điều hành bởi blockchain.info.

Không có hệ thống nào trên thế giới là 100% an toàn. Vì vậy, mặc dù chúng tôi thực hiện tất cả các biện pháp an ninh có thể, chúng tôi không muốn tạo ra một mỏ vàng Bitcoin để thách thức các hacker tấn công.

Chúng tôi khuyến khích người sử dụng chỉ gửi Bitcoin của họ khi họ đang sắp bán, và không sử dụng sàn VBTC như một ngân hàng Bitcoin của họ. Cách an toàn nhất để giữ Bitcoin là giữ trong Ví riêng của bạn cho đến khi bạn muốn sử dụng chúng. Nếu bạn đang có rất nhiều Bitcoin, bạn nên thiết lập một ví multi-signature cho riêng mình hoặc dùng những thiết bị như Bitcoin Trezor hoặc Ledger Wallet (giống như két sắt của riêng bạn vậy) để lưu trữ Bitcoin.