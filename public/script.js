const btn = document.querySelector('button')
const main = document.querySelector('main')
const btn_hamburguer = document.querySelector('.hamburguer')
const header_dropDownMenu = document.querySelector('.header_dropDownMenu')
const btn_start = document.querySelector('#start')
const screen_warning = document.querySelector('.warning')

async function spreadData() {
    const response = await fetch('/getData')
    const data = await response.json()

    for (let i of data) {
        const row = document.createElement('div')
        row.textContent = i
        row.classList.add('row')
        main.appendChild(row)

    }
    const rows = document.querySelectorAll('.row')
    var array = []

    for (let i = 0; i < rows.length; i++) {
        array.push(rows[i].textContent)
        rows[i].addEventListener('click', () => {

            let index = array.findIndex(x => {
                return x === rows[i].textContent
            })

            let audio_name = array[index]

            let beat = new Audio(`./audios/${audio_name}`);
            beat.play();
        })

    }
}
spreadData()

btn_hamburguer.addEventListener('click', ()=>{
    header_dropDownMenu.classList.toggle('js_header_dropDownMenu')
})

btn_start.addEventListener('click', ()=>{
    screen_warning.style.display='none'
})