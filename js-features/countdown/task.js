// Задача 1

// let timerCount = document.getElementById('timer').innerHTML;
// let timer = setInterval(() => {
//     if (--timerCount === 0) {
//         alert('Вы победили в конкурсе!');
//         clearInterval(timer);
//     }
//     document.getElementById('timer').innerHTML = timerCount;
// }, 1000);

// Задача 2

let hours;
let minutes;
let seconds;

let timer = setInterval(() => {
    // debugger;
    hours = Number(document.getElementById('timerHours').innerHTML);
    minutes = Number(document.getElementById('timerMinutes').innerHTML);
    seconds = Number(document.getElementById('timerSeconds').innerHTML);

    if (hours === 0 && minutes === 0 && seconds === 1) {
        // alert('Вы победили в конкурсе!');
        location = 'https://mega.nz/file/XsRjVa6S#yvkH_OwcSFHFYTxH6ZfxNV-DJ-_goejnmvitKRKJisA';
        clearInterval(timer);
    }
    if (--seconds < 0) {
        seconds = 59;
        --minutes
    }
    if (minutes < 0) {
        minutes = 59;
        --hours;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }

    document.getElementById('timerSeconds').innerHTML = seconds;
    document.getElementById('timerMinutes').innerHTML = minutes;
    document.getElementById('timerHours').innerHTML = hours;

}, 1000);
