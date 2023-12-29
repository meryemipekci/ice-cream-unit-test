import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("kosullari onaylanmasına gore buton aktifligi", async () => {
  //test bilesenini ekrana basma (sanal)
  render(<Form />);
  //userin kurulumunu yap
  const user = userEvent.setup();

  // gerekli elemnlari alma
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  // buton baslangıcta inaktiftir
  expect(orderBtn).toBeDisabled();
  //checkbox tikla
  await user.click(checkBox);

  //buton aktifmı kontrol et
  expect(orderBtn).toBeEnabled();

  //checkbox tiki kaldir
  await user.click(checkBox);

  //buton baslangicta inaktiftir
  expect(orderBtn).toBeDisabled();
});

test("onayla butonu hover olunca ortaya cıkar", async () => {
  render(<Form />);

  const user = userEvent.setup();

  // gerekli elemnlari alma
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  //butonu aktif yap
  await user.click(checkbox);

  //mouse u butonun uzerine getir
  fireEvent.mouseEnter(button);

  //popup i cagirma
  const popup = screen.getByText("Size gercekten", { exact: false });

  //bildirim gozukuyor mu
  expect(popup).toBeVisible();

  //mouse u butondan cek
  fireEvent.mouseLeave(button);

  //popup gorunur degildir
  expect(popup).not.toBeVisible();
});
