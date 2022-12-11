const ads = document.querySelectorAll('.reveal');

Array.from(ads).forEach((item) => {
    window.addEventListener('scroll', () => {
        const {top, bottom} = item.getBoundingClientRect();
        if(bottom > 0 && top < window.innerHeight) {
            item.classList.add('reveal_active');
        } 
    })
});
