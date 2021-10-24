let credit_card = document.getElementById("card_number");

function input_mask(val) {
  let card_num = [];
  for (var i = 0; i < val.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      card_num.push(" ");
    } else {
      card_num.push(val[i]);
    }
    return card_num.join;
  }
}
