function formatToCurrency(amount) {
  // return amount.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatToCurrency;
