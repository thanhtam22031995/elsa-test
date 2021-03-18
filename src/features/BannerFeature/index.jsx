import React from "react";
import { useHistory } from "react-router";
import "./banner.css";

function BannerFeature(props) {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/form");
  };
  return (
    <div>
      <div className="banner">
        <div className="banner__info">
          <h2 className="banner__title">
            APP LUYỆN NÓI <br></br> &amp; GIAO TIẾP TIẾNG ANH THỜI 4.0
          </h2>
          <p className="banner__desc">
            Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay
          </p>
          <button onClick={handleOnClick} className="banner__btn">
            Đăng Ký Ngay
          </button>
        </div>
        <div className="banner__image">
          <img className="banner__image-1" src="./images/Phone.png" alt="" />
          <img className="banner__image-2" src="./images/Frame.png" alt="" />
        </div>
        <img className="smallPoint" src="./images/smallPoint.svg" alt="" />
        <img className="bigPoint" src="./images/bigPoint.svg" alt="" />
      </div>
    </div>
  );
}

export default BannerFeature;
