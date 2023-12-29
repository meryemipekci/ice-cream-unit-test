import React from "react";
import { useState } from "react";

const Form = () => {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  console.log(isHover);
  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChangeCapture={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        id="terms"
        type="checkbox"
      />
      <div className="terms-box">
        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          Size gercekten bir sey teslim etmeyecegiz
        </p>
        <label htmlFor="terms">Kosullari okudum ve kabul ediyorum</label>
      </div>
      <button
        disabled={!isChecked}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="btn btn-primary"
      >
        Siparisi Onayla
      </button>
    </div>
  );
};

export default Form;
