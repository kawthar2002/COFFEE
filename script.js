const popup = document.querySelector('.popup');
const button = document.querySelector('.menu-btn');
const close = document.querySelector('.popup-body__close');
const menuItems = document.querySelectorAll('.popup-body__item');
// COUNTER
window.addEventListener('click', function (event) {
  let counter;
  if (
    event.target.dataset.action === 'plus' ||
    event.target.dataset.action === 'minus'
  ) {
    const counterWrapper = event.target.closest('.offer-cards__btn');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  if (event.target.dataset.action === 'plus') {
    amount = counter.innerText = ++counter.innerText;
  }
  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) >= 1) {
      amount = counter.innerText = --counter.innerText;
    }
  }
  const totalSum = () => {
    let total = 0;
    [...this.document.querySelectorAll('.offer-cards__item')].forEach(
      (cardItem) => {
        total += parseInt(
          cardItem.querySelector('.offer-cards__sum').innerText
        );
      }
    );
    this.document.querySelector('.cart-text').innerText = total;
  };
  totalSum();
});

// POPUP
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    if (popup) {
      popup.classList.remove('displayed');
    }
  });
}

button.addEventListener('click', () => {
  if (popup) {
    popup.classList.add('displayed');
  }
});

close.addEventListener('click', () => {
  if (popup) {
    popup.classList.remove('displayed');
  }
});

// SLIDER
let position = 0;
let slidesToShow = window.document.body.clientWidth <= 767 ? 1 : 3;
const slidesToScroll = 1;
const container = document.querySelector('.offer-cards__container');
const track = document.querySelector('.offer-cards__inner');
const slides = document.querySelectorAll('.offer-cards__item');
const slidesCount = slides.length;
const slidesWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * slidesWidth;
const btnRight = document.querySelector('.offer-slide__btn-right');
const btnLeft = document.querySelector('.offer-slide__btn-left');

slides.forEach((slide) => {
  slide.style.minWidth = `${slidesWidth}px`;
});

btnRight.addEventListener('click', () => {
  const slidesLeft =
    slidesCount -
    (Math.abs(position) + slidesToShow * slidesWidth) / slidesWidth;
  position -=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;

  setPosition();
  checkBtns();
});
btnLeft.addEventListener('click', () => {
  const slidesLeft = Math.abs(position) / slidesWidth;
  position +=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;
  setPosition();
  checkBtns();
});
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
  btnLeft.disabled = position === 0;
  btnRight.disabled = position <= -(slidesCount - slidesToShow) * slidesWidth;
};
checkBtns();

window.addEventListener('resize', () => {
  let position = 0;
  let slidesToShow = window.document.body.clientWidth <= 767 ? 1 : 3;
  const slidesToScroll = 1;
  const container = document.querySelector('.offer-cards__container');
  const track = document.querySelector('.offer-cards__inner');
  const slides = document.querySelectorAll('.offer-cards__item');
  const slidesCount = slides.length;
  const slidesWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * slidesWidth;
  const btnRight = document.querySelector('.offer-slide__btn-right');
  const btnLeft = document.querySelector('.offer-slide__btn-left');

  slides.forEach((slide) => {
    slide.style.minWidth = `${slidesWidth}px`;
  });

  btnRight.addEventListener('click', () => {
    const slidesLeft =
      slidesCount -
      (Math.abs(position) + slidesToShow * slidesWidth) / slidesWidth;
    position -=
      slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;

    setPosition();
    checkBtns();
  });
  btnLeft.addEventListener('click', () => {
    const slidesLeft = Math.abs(position) / slidesWidth;
    position +=
      slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slidesWidth;
    setPosition();
    checkBtns();
  });
  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };
  const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnRight.disabled = position <= -(slidesCount - slidesToShow) * slidesWidth;
  };
  checkBtns();
});
