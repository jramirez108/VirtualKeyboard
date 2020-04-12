var keys = document.querySelectorAll('#key');
var textBox = document.querySelector('#textbox')
var backSpace = document.querySelector('#backspace');

keys.forEach((key)=> {
    key.addEventListener('click', () => {
        textBox.innerHTML += key.innerHTML.toLowerCase();
    })
    
})
console.log(typeof textBox.innerText)

backSpace.addEventListener('click', () => {
    textBox.innerHTML = textBox.innerText.slice(0, -1);
})

