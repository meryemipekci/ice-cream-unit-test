import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("soslari ekleme cıkarma toplam fiyati etkiler", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  //    toplam basligi cıkarma
  const total = screen.getByRole("heading", { name: /Soslar Ucreti/i });

  //bir sosu cagirma
  const mochiCheck = await screen.findByRole("checkbox", {
    name: /mochi/i,
  });
  //sosu sepete ekleme
  await user.click(mochiCheck);

  //toplamı kontrol etme
  expect(total).toHaveTextContent("3");

  //bir sosu cagirma
  const cherryCheck = await screen.findByRole("checkbox", {
    name: /Cherries/i,
  });
  //sosu sepete ekleme
  await user.click(cherryCheck);

  //toplamı kontrol etme
  expect(total).toHaveTextContent("6");

  //soslari kaldirm

  await user.click(mochiCheck);
  expect(total).toHaveTextContent("3");

  await user.click(cherryCheck);
  expect(total).toHaveTextContent("0");
});
