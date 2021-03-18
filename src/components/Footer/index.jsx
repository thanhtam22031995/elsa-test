import React from "react";
import "./index.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="title">
          <h2>CÁ NHÂN HOÁ LỘ TRÌNH HỌC</h2>
          <p>Làm bài kiểm tra đầu vào với ELSA trong 5 phút và bạn sẽ có:</p>
        </div>
        <div className="item-list">
          <div className="item">
            <img src="images/section1.png" alt="" />
            <p>
              Trí tuệ nhân tạo trả về bạn số điểm
              <span>“CHUẨN BẢN XỨ"</span>
            </p>
          </div>
          <div className="item">
            <img src="images/section2.png" alt="" />
            <p>
              <span>NGAY LẬP TỨC</span>, bạn biết mình phát âm sai ở đâu qua
              những gam màu trực quan sinh động.
            </p>
          </div>
          <div className="item">
            <img src="images/section3.png" alt="" />
            <p>
              <span>CÔNG NGHỆ NHẬN DIỆN</span> giọng nói chuẩn đến từng âm tiết.
            </p>
          </div>
          <div className="item">
            <img src="images/section4.png" alt="" />
            <p>
              ELSA sẽ&nbsp;
              <span>LẬP LỘ TRÌNH HỌC CÁ NHÂN HOÁ</span>&nbsp;dựa trên các chỉ số
              bài kiểm tra đầu vào của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
