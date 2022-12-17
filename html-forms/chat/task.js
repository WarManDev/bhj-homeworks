const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const chatWidget = document.querySelector('.chat-widget__messages')
let time = settingTheTime();

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
    
});

// input.addEventListener('focus', () => {
//     console.log(input.focus);
// });

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let messageClient = input.value;
        chatWidget.innerHTML += sendMessages(messageClient.trim(), 'message_client');
        chatWidget.innerHTML += sendMessages(messageBotFunc());
        input.value = '';
        chatWidget.scrollIntoView(false);
    }
    
});

function messageBotFunc() {
    const messageArray = [
        'Как дела?',
        'Я  вас не слышу!',
        'Вы очень тихо говорите))',
        'Мы постораемся помочь',
        'Вы говорите по-русски?',
        'Перезвоните позже',
        'Если честно, устал от вас',
        'Меня зовут Петя',
        'Сколько вам лет?',
        'УРААА!!!',
        'хм...',
        'Удачи!',
    ];
    index = Math.floor(Math.random() * messageArray.length);
    return messageArray[index];

}

function settingTheTime() {
    let currentDate = new Date();
    hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : `${currentDate.getHours()}`;
    minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
  
    return `${hours}:${minutes}`;
  }

function sendMessages(textMessage, userMessage = null) {
    let messageBlock = `<div class="message ${userMessage}">
        <div class="message__time">${time}</div>
        <div class="message__text">${textMessage}</div>
        </div>`;
    return messageBlock;
}

function intervalFunc() {
    let elemInterval = setInterval(() => {
        sendMessages('Ау, вы еще здесь?');
        chatWidget.scrollIntoView(false);
    }, 3000);
    return elemInterval;
}
