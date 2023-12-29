import React, { useEffect, useState } from "react";
import axios from "axios";
const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/toppings")
      .then((res) => setToppingData(res.data));
  }, []);
  console.log(setToppingData);
  const handleChange = (e, item) => {
    e.target.checked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  console.log(basket);
  return (
    <div>
      <h1>Sos Cesitleri</h1>
      <p>
        Tanesi <span>3 tl</span>
      </p>
      <h3>
        Soslar Ucreti:{" "}
        <span className="text-success">{basket.length * 3} tl</span>
      </h3>
      <div className="row gap-3 mt-4">
        {toppingData.map((data) => (
          <div
            key={data.name}
            className="d-flex flex-column align-items-center py-3 rounded-5 top-card"
            style={{ width: "150px" }}
          >
            <label
              className="d-flex flex-column align-items-center gap-3"
              htmlFor={data.name}
            >
              <img height={100} src={data.imagePath} alt="topping-img" />
              <p className="text-center text-nowrap">{data.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e, data)}
              id={data.name}
              className="form-check-input"
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
