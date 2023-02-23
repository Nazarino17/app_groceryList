const input = document.querySelector('#input');
const noteList = document.querySelector('.note__list');
const btnDelete = document.querySelector('.note__delete');
const fontС = document.querySelector('.fontС');



input.addEventListener('keyup', (e) => {
    if (e.code == 'Enter') {
        if (input.value == null || input.value == '') {
            return false;
        } else {
            document.querySelector('.note__list').innerHTML += `
            <li class="note__list-item" ><span class="str" style="color:${getColor(fontС)}">${input.value}</span></li>
             `;
            input.value = null;
        }
    }
});

noteList.addEventListener('click', (e) => {
    const str = e.target.closest('.str');
    if (str) { 
        str.classList.toggle('line');
    }
});

btnDelete.addEventListener('click', () => noteList.innerHTML = '');

function getColor(fontС) {
    let colors = fontС.value;
    return colors;
}