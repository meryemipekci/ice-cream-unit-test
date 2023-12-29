import {
  findAllByRole,
  screen,
  render,
  getByRole,
} from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/*
!seciciler
?  Querry[All] BySelector(BySeici)
*Query > get| find | query
*get => elemtler baslangicta DomDa var ise kullanılır
*find => elementin ne zman ekrana basilacagi belli degil ise (async)
*query => get ile benzer calisir eleman bulamazsa null dondurur
* note: find methodu promise dondurur
*bu yuzden async await vb ele alınmasi gerekir
*all kulllandıgımız zaman elemanlar geriye hep dizi seklinde doner

 */

test("Veri Apiden geldikten sonra ekrana kartlar basilir", async () => {
  render(<Scoops />);

  // ekrana basılan butun kartlari cagirma(resimleri)
  const images = await screen.findAllByRole("img", { name: "cesit-resimleri" });

  //gelen resimlerin sayısı 2 den uyuk mu
  expect(images.length).toBeGreaterThanOrEqual(2);
});

//test Driven Develpment (red to green)
test("Cesit ekleme ve sifirlamanin toplam fiyata etkisi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  //toplam fiyata erisme
  const total = screen.getByRole("heading", {
    name: /Cesitler Ucreti/i, //insensetive > harf duyarliligi ortadan kalkar
  });
  //toplam fiyat sifirdan baslar
  expect(total).toHaveTextContent("0");
  //butun ekle butonlarını cagirma
  const addButtons = await screen.findAllByRole("button", { name: /ekle/i });
  const delButtons = await screen.findAllByRole("button", { name: /sifirla/i });

  // bir tane cesit ekle ve fiyati kontrol et
  await user.click(addButtons[0]);
  expect(total).toHaveTextContent("20");

  //İKİ tane daha ekle ve fiyati kontrol et

  await user.dblClick(addButtons[2]);
  expect(total).toHaveTextContent("60");

  // 1 tane eklenen elemani sifirla
  await user.click(delButtons[0]);
  expect(total).toHaveTextContent("40");

  // 2 tane eklenen elemani cıkarma
  await user.click(delButtons[2]);
  expect(total).toHaveTextContent("0");
});
