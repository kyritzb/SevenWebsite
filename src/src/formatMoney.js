var formatterWhole = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

var formatterDecimal = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatMoneyWhole(money) {
  if (typeof money === "string") {
    money = parseInt(money);
  }
  return formatterWhole.format(money);
}

export function formatMoneyDecimal(money) {
  if (typeof money === "string") {
    money = parseInt(money);
  }
  return formatterDecimal.format(money);
}
