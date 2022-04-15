const btn = document.getElementById('btn')
const block = document.querySelector('.block')

const scrollHeight = block.scrollHeight
const scrollWidth = block.scrollWidth



btn.addEventListener('click', () => {
    const elemRect = block.getBoundingClientRect()

    console.log(elemRect.top);
    console.log(elemRect.Left);
  
})