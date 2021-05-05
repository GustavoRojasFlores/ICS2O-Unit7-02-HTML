document.getElementById('btn').addEventListener('click', check)
const text = document.getElementById('txt')
const input = document.getElementById('inp')

function check () {
  const num = parseInt(input.value)
  if (num * 0 === 0) {
    if (num / Math.abs(num) === 1) {
      text.innerHTML = 'The number ' + num + ' is a positive value.'
      input.value = null
    }
    if (num / Math.abs(num) === -1) {
      text.innerHTML = 'The number ' + num + ' is a negative value.'
      input.value = null
    }
    if (num === 0) {
      text.innerHTML = 'The number 0 is neither a positive nor a negative value.'
      input.value = null
    }
  } else {
    text.innerHTML = 'Please enter a numerical value.'
    input.value = null
  }
}
