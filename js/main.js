const form = document.querySelector(".weight-form");
const amount = document.querySelector("#amount");
const unit1 = document.querySelector("#unit1");
const unit2 = document.querySelector("#unit2");
const result = document.querySelector("#result");
form.addEventListener("submit", (e) => convertWeight(e));
function convertWeight(e) {
  e.preventDefault();
  switch (unit1.value) {
    case "g":
      return printResult(gramsTo(amount.value));
    case "kg":
      return printResult(kiloTo(amount.value));
    case "t":
      return printResult(tonTo(amount.value));
    case "oz":
      return printResult(ounceTo(amount.value));
    case "lb":
      return printResult(poundTo(amount.value));
    default:
      alert("Please select a unit");
  }
}
function gramsTo(amount) {
  switch (unit2.value) {
    case "g":
      return alert("Select a different unit.");
    case "kg":
      return roundToTwoDecimalPlaces(amount / 1000) + " Kilogram(s)";
    case "t":
      return roundToTwoDecimalPlaces(amount / 1000000) + " Metric Ton(s)";
    case "oz":
      return roundToTwoDecimalPlaces(amount / 28.34952) + " Ounce(s)";
    case "lb":
      return roundToTwoDecimalPlaces(amount * 0.0022) + " Pound(s)";
    default:
      alert("Please select a unit");
  }
}
function kiloTo(amount) {
  switch (unit2.value) {
    case "g":
      return roundToTwoDecimalPlaces(amount * 1000) + " Gram(s)";
    case "kg":
      return alert("Select a different unit.");
    case "t":
      return roundToTwoDecimalPlaces(amount / 1000) + " Ton(s)";
    case "oz":
      return roundToTwoDecimalPlaces(amount * 35.274) + " Ounce(s)";
    case "lb":
      return roundToTwoDecimalPlaces(amount * 2.205) + " Pound(s)";
    default:
      alert("Please select a unit");
  }
}
function tonTo(amount) {
  switch (unit2.value) {
    case "g":
      return roundToTwoDecimalPlaces(amount * "1e+6") + " Gram(s)";
    case "kg":
      return roundToTwoDecimalPlaces(amount * 1000) + " Kilogram(s)";
    case "t":
      return alert("Select a different unit.");
    case "oz":
      return roundToTwoDecimalPlaces(amount * 35274) + " Ounce(s)";
    case "lb":
      return roundToTwoDecimalPlaces(amount * 2205) + " Pounds";
    default:
      alert("Please select a unit");
  }
}
function ounceTo(amount) {
  switch (unit2.value) {
    case "g":
      return roundToTwoDecimalPlaces(amount * 28.35) + " Gram(s)";
    case "kg":
      return roundToTwoDecimalPlaces(amount / 35.274) + " Kilogram(s)";
    case "t":
      return roundToTwoDecimalPlaces(amount / 35274) + " Ton(s)";
    case "oz":
      return alert("Select a different unit.");
    case "lb":
      return roundToTwoDecimalPlaces(amount / 16) + " Pound(s)";
    default:
      alert("Please select a unit");
  }
}
function poundTo(amount) {
  switch (unit2.value) {
    case "g":
      return roundToTwoDecimalPlaces(amount * 454) + " Gram(s)";
    case "kg":
      return roundToTwoDecimalPlaces(amount / 2.205) + " Kilogram(s)";
    case "t":
      return roundToTwoDecimalPlaces(amount / 2205) + " Ton(s)";
    case "oz":
      return roundToTwoDecimalPlaces(amount * 16) + " Ounce(s)";
    case "lb":
      return alert("Select a different unit.");
    default:
      alert("Please select a unit");
  }
}
function printResult(convertion) {
  if (convertion) {
    result.innerHTML = convertion;
  }
}
function roundToTwoDecimalPlaces(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
