const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#MessageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click', sendMsg)


function sendMsg (){
    let content = messageIn.value;
    if(content === ''){
        alert('Please enter a valid message. The current message is invalid.')
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}