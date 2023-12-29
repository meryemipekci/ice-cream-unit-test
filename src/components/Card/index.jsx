import React from "react";

const Card = ({ data, basket, setBasket }) => {
  //urunden sepette kac tane var bulma
  const found = basket.filter((i) => i.name === data.name);
  const amount = found.length;

  // sepetteki belirli turdeki urunleri silme

  const handleReset = () => {
    setBasket(basket.filter((i) => i.name !== data.name));
  };
  return (
    <div
      className="d-flex flex-column p-3 align-items-center gap border rounded"
      style={{ width: "190px" }}
    >
      <img height={100} src={data.imagePath} alt="cesit-resimleri" />
      <span className="fs-5">{data.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
          Sifirla
        </button>
        <span className="fs-2">{amount}</span>
        <button
          onClick={() => setBasket([...basket, data])}
          className="btn btn-sm btn-outline-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
