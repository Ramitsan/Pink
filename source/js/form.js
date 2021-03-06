//валидация введенных данных и отправка формы
var inputSurnameElement = document.querySelector('.form-name__input--surname');
var inputNameElement = document.querySelector('.form-name__input--name');
var inputEmailElement = document.querySelector('.form-contacts__input--email');
var modalOverlay = document.querySelector('.modal-overlay');
var formContest = document.querySelector('.contest__form');
var modalError = document.querySelector('.modal-bad');
var modalErrorButton = document.querySelector('.modal-bad__btn');
var modalRequest = document.querySelector('.modal-request');
var modalRequestButton = document.querySelector('.modal-request__btn');
var ESC_KEYCODE = 27;


var modalRequestShow = function() {
  modalRequest.classList.add('modal--show');
}

var modalRequestClose = function() {
  modalRequest.classList.remove('modal--show');
}

var modalErrorShow = function() {
  modalError.classList.add('modal--show');
}

var modalErrorClose = function() {
  modalError.classList.remove('modal--show');
}

var overlayShow = function() {
  modalOverlay.classList.add('modal--show');
}

var overlayRemove = function() {
  modalOverlay.classList.remove('modal--show');
}

var disableScroll = function() {
  document.body.classList.add('body-scroll');
}

var activateScroll = function() {
  document.body.classList.remove('body-scroll');
}

var validateForm = function(elem1, elem2, elem3) {
  if (elem1.value === '') {
    elem1.style.borderColor = '#ff0000';
    modalErrorShow();
    disableScroll();
  } else {
    elem1.style.borderColor = '#e5e5e5';
  }

  if (elem2.value === '') {
    elem2.style.borderColor = '#ff0000';
    modalErrorShow();
    disableScroll();
  } else {
    elem2.style.borderColor = '#e5e5e5';
  }

  if (elem3.value === '') {
    elem3.style.borderColor = '#ff0000';
    modalErrorShow();
    disableScroll();
  } else {
    elem3.style.borderColor = '#e5e5e5';
  }

  if (elem1.value !== '' && elem2.value !== '' && elem3.value !== '') {
    modalRequestShow();
    disableScroll();
  }
};

// при заполнении обязательных полей убирается красная рамка
var inputChangeHandler = function(elem) {
  elem.addEventListener('input', function() {
    elem.style.borderColor = '#e5e5e5';
  })
}

inputChangeHandler(inputSurnameElement);
inputChangeHandler(inputNameElement);
inputChangeHandler(inputEmailElement);

// отправка формы
formContest.addEventListener('submit', function(evt) {
  evt.preventDefault();
  overlayShow();
  validateForm(inputSurnameElement, inputNameElement, inputEmailElement);
});

jQuery(function($) {
  $("#phone").mask("+7 (999) 99 99 99");
});

modalErrorButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalErrorClose();
  overlayRemove();
  activateScroll();
});

modalRequestButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalRequestClose();
  overlayRemove();
  activateScroll();
  formContest.reset();
})

// закрытие по клику на оверлей
var overlayClickHandler = function(popup) {
  modalOverlay.addEventListener('click', function() {
    if (popup === modalRequest) {
      popup.classList.remove('modal--show');
      overlayRemove();
      activateScroll();
      formContest.reset();
    } else {
      popup.classList.remove('modal--show');
      overlayRemove();
      activateScroll();
    }
  });
};

overlayClickHandler(modalError);
overlayClickHandler(modalRequest);

// закрытие по ESC
window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (modalError.classList.contains('modal--show')) {
      evt.preventDefault();
      modalErrorClose();
      overlayRemove();
      activateScroll();
    }
    if (modalRequest.classList.contains('modal--show')) {
      evt.preventDefault();
      modalRequestClose();
      overlayRemove();
      activateScroll();
      formContest.reset();
    }
  }
});
