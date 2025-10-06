"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var mediaAritmetica = function mediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var m1 = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return m1 / numbers.length;
};
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var sumPeso = numbers.reduce(function (accum, num) {
    var _num$p;
    return accum + ((_num$p = num.p) !== null && _num$p !== void 0 ? _num$p : 1);
  }, 0); // ?? 1 é para ver se nao tem peso usa 1
  var sumNxP = numbers.reduce(function (accum, num) {
    var _num$p2;
    return accum + ((_num$p2 = num.p) !== null && _num$p2 !== void 0 ? _num$p2 : 1) * num.n;
  }, 0);
  return sumNxP / sumPeso;
};
var mediana = function mediana() {
  tam = arguments.length;
  qcient = Math.floor(tam / 2);
  var orderedNumbers = _toConsumableArray(number).sort(function (a, b) {
    return a - b;
  });
  if (tam % 2 !== 0) {
    return orderedNumbers[qcient];
  }
  return (orderedNumbers[qcient] + orderedNumbers[qcient - 1]) / 2;
};
var moda = function moda() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num == n;
    }).length];
  }); //mapeia o vetor numbers pegando cada num e filtrando no proprio vetor onde n = num. O retorno é um vetor
  // com todas as vezes que apareceu o num por isso usa-se .lenght pra retornar só o tamnho dele. o Map retorna
  //[num, qtd], e a var quantities armazena [[n,q], [n,q]...]
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); // aqui tu passa os parametros a e b só que o a é um array [n,q]
  //por tanto para ordenar pela q tem que passar [1]
  return quantities[0][0];
};
arr2 = [{
  'n': 1,
  'p': 1
}, {
  'n': 2,
  'p': 2
}, {
  'n': 3,
  'p': 3
}, {
  'n': 4,
  'p': 4
}];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mediaAritmetica.apply(void 0, _toConsumableArray(arr)));
console.log(mediaPonderada.apply(void 0, _toConsumableArray(arr2)));
console.log(mediana.apply(void 0, _toConsumableArray(arr3)));
