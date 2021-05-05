document.getElementById('btn').addEventListener('click', check)
const text = document.getElementById('txt')

function check () {
  const num = parseInt(document.getElementById('inp').value)
  if (num * 0 === 0) {
    if (num / Math.abs(num) === 1) {
      text.innerHTML = 'The number ' + num + ' is a positive value.'
    }
    if (num / Math.abs(num) === -1) {
      text.innerHTML = 'The number ' + num + ' is a negative value.'
    }
    if (num === 0) {
      text.innerHTML = 'The number 0 is neither a positive nor a negative value.'
    }
  }
}