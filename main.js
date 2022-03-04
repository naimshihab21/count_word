const label_letter = document.querySelector('.label_letter')
const textarea = document.querySelector('#textarea')
const btn = document.querySelector('.btn')

let count = 0

btn.addEventListener('click', function () {
  if (textarea.value) {
    textarea.value = ''
    label_letter.textContent = `Letter : ${count = 0}`
  }
})

textarea.addEventListener('keyup', function (e) {
  if (e.code != 'Space' && e.code != 'Backspace') {
    count++
    label_letter.textContent = `Letter : ${count}`
  } else if (e.key === 'Backspace') {
    count--
    if (count < 0) count = 0
    label_letter.textContent = `Letter : ${count}`
  }
})