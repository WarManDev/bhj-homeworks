document.getElementById('cookie').addEventListener('click', () => {
    let clickCounter = Number(document.getElementById('clicker__counter').innerHTML);
    clickCounter++;
    document.getElementById('clicker__counter').innerHTML = clickCounter;
    let cookie = document.getElementById('cookie');
    if (clickCounter % 2) {
        cookie.width = 240;
    } else {
        cookie.width = 200;
    }
});
