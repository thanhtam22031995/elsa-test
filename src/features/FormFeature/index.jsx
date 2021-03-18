import RegisterForm from "components/registerForm";
import React, { useState } from "react";
import "./index.css";

FormFeature.propTypes = {};

function FormFeature(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleFormSubmit = (value) => {
    console.log(value);
    setData(value);
    setOpen(true);
  };
  const handleOnClose = () => {
    setOpen(false);
  };
  return (
    <div className="formSection">
      <div className="container">
        <div className="row">
          <RegisterForm className="form" onSubmit={handleFormSubmit} />
          <img className="main-image" src="/images/Phone2.png" alt="" />
        </div>
        <img className="sub-image" src="/images/backGroundLogo.svg" alt="" />
        <div className="smallCircle"></div>
        <div className="bigCircle"></div>
      </div>
      {!!open && (
        <div className="modal" onClick={handleOnClose}>
          <div class="modal-content">
            <div className="modal__title">
              <p>ELSA Speak</p>
              <span onClick={handleOnClose} className="close">
                &times;
              </span>
            </div>

            <p className="desc">
              {!!data.radio
                ? `Bạn đã đăng ký thành công ${data.radio}`
                : "Vui lòng chọn Khóa Học!"}
            </p>

            <button onClick={handleOnClose} className="modal__btn">
              Xác Nhận
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormFeature;
