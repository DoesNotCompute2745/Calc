function calculer() {
  const a = document.getElementById('output').value;
  const b = eval(a);
  document.getElementById('output').value = b;
}

function afficher(val) {
  document.getElementById('output').value += val;
}

function effacer() {
  document.getElementById('output').value = '';
};
