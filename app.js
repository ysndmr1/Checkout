// const select = document.querySelector(".product__list");

// select.addEventListener("click", (e) => {
//   if (e.target.closest(".incr")) {
//     e.target.previousElementSibling.innerText++;
//     const x = e.target.previousElementSibling.innerText;
//     const y =
//       e.target.parentElement.parentElement.querySelector(".plus").innerText;
//     let z =
//       e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
//         (".productTotalNum".innerText = x * y)
//       );
//   } else if (e.target.closest(".decr")) {
//     if (e.target.nextElementSibling.innerText > 0) {
//       e.target.nextElementSibling.innerText--;
//     }
//   } else if (e.target.closest(".remove")) {
//     e.target.closest(".product").remove();
//   }
// });
const select = document.querySelector(".product__list");

console.log(select);
window.addEventListener("load", () => {
  cal();
});

select.addEventListener("click", (e) => {
  if (e.target.closest(".incr")) {
    e.target.previousElementSibling.innerText++;

    const x = e.target.previousElementSibling.innerText;
    const y =
      e.target.parentElement.parentElement.querySelector(".plus").innerText;
    let z =
      (e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
        ".productTotalNum"
      ).innerText = x * y);
    cal();
  } else if (e.target.closest(".decr")) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      const x = e.target.nextElementSibling.innerText;
      console.log(x);

      const y =
        e.target.parentElement.parentElement.querySelector(".plus").innerText;
      console.log(y);
      let z =
        (e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".productTotalNum"
        ).innerText = x * y);
      cal();
    }
  } else if (e.target.closest(".remove")) {
    e.target.closest(".product").remove();
  }
});
function cal() {
  const productTotals = document.querySelectorAll(".productTotalNum");
  const mainSub = document.querySelector(".subtotal");
  const tax = document.querySelector(".tax");
  const total = document.querySelector(".total");

  let subTotal = 0;

  productTotals.forEach((x) => {
    subTotal += +x.innerText;
  });
  console.log(subTotal);

  mainSub.innerText = subTotal;
  let tax1 = (tax.innerText = +(subTotal * 0.18).toFixed(2));
  total.innerText = (subTotal + tax1 + 15).toFixed(2);
  //   let vergi=tax.innerText=0.18*subTotal
}
