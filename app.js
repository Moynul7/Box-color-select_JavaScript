const colors = ['red', 'green', 'blue', 'yellow', 'violet', 'orange', 'indigo'];
const con = document.querySelector('#container');

const text = document.querySelector('#text');

const scolor = document.querySelector('#scolor');

for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    con.appendChild(box);
    box.style.backgroundColor = color;

    box.addEventListener('click', function(){
        text.innerText = 'You have Selected color: ';
        scolor.style.backgroundColor = color;

        scolor.innerText = color;
    });
}