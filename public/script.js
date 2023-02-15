const btn = document.querySelector('button')
const main = document.querySelector('main')



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