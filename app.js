
let taskList = document.querySelector('ul');
let task = document.querySelector('li');
let input = document.querySelector('input');

function addTask() {
    if(input.value === '') {
        alert('You must write something!!')
    }
    
    else {
        let li = document.createElement('li')
        li.innerHTML = input.value;
        taskList.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    input.value = '';
}

taskList.addEventListener('click', (e)=> {
    if(e.target. nodeName== 'LI') {
        e.target.classList.toggle('checked')
    }
    else if(e.target.nodeName === 'SPAN') {
        e.target.parentElement.remove();
    }
})