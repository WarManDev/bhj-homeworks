const fontSizeLink = Array.from(document.querySelectorAll('.font-size'));
const colorText = Array.from(document.querySelectorAll('.book__control_color > .color'));
const bgColor = Array.from( document.querySelectorAll('.book__control_background > .color'));
const bookСontent = document.querySelector('.book__content');

fontSizeLink.forEach(item => {
    item.addEventListener('click', (el) => {
        el.preventDefault();
        fontSizeLink.forEach(i => {i.classList.remove('font-size_active')});
        if (el.target.dataset.size === 'small') {
            el.target.classList.add('font-size_active');
            bookСontent.classList.remove('book_fs-big');
            bookСontent.classList.add('book_fs-small');
          } else if (el.target.dataset.size === 'big') {
            el.target.classList.add('font-size_active');
            bookСontent.classList.remove('book_fs-small');
            bookСontent.classList.add('book_fs-big');
          } else {
            el.target.classList.add('font-size_active');
            bookСontent.classList.remove('book_fs-small');
            bookСontent.classList.remove('book_fs-big');
          }
    });
});

colorText.forEach(item => {
    item.addEventListener('click', (el) => {
      el.preventDefault();
      colorText.forEach((cT) => cT.classList.remove('color_active'));
      if (el.target.dataset.textColor === 'black') {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_color-gray');
        bookСontent.classList.remove('book_color-whitesmoke');
        bookСontent.classList.add('book_color-black');
      } else if (el.target.dataset.textColor === 'gray') {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_color-black');
        bookСontent.classList.remove('book_color-whitesmoke');
        bookСontent.classList.add('book_color-gray');
      } else {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_color-black');
        bookСontent.classList.remove('book_color-gray');
        bookСontent.classList.add('book_color-whitesmoke');
      }
    });
  });
  
  bgColor.forEach(item => {
    item.addEventListener('click', (el) => {
      el.preventDefault();
      bgColor.forEach((bgC) => bgC.classList.remove('color_active'));
      if (el.target.dataset.bgColor === 'black') {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_bg-gray');
        bookСontent.classList.remove('book_bg-white');
        bookСontent.classList.add('book_bg-black');
      } else if (el.target.dataset.bgColor === 'gray') {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_bg-black');
        bookСontent.classList.remove('book_bg-white');
        bookСontent.classList.add('book_bg-gray');
      } else {
        el.target.classList.add('color_active');
        bookСontent.classList.remove('book_bg-black');
        bookСontent.classList.remove('book_bg-gray');
        bookСontent.classList.add('book_bg-white');
      }
    });
  });
