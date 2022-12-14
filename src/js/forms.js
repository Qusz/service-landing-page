class Form {
  constructor() {
    this.formUI = {
      body: document.querySelector('.order'),
      start: document.querySelector('.order__form-wrapper--start'),
      finish: document.querySelector('.order__form-wrapper--finish'),
      next: document.querySelector('.order-next'),
      back: document.querySelector('.order-back')
    }

    this.formInput = {
      name: document.querySelector('.order-name-input'),
      company: document.querySelector('.order-company-input'),
      email: document.querySelector('.order-email-input'),
      phone: document.querySelector('.order-phone-input'),
      promo: document.querySelector('.order-promo-input')
    }
  }

  formAninamtion() {
    this.formUI.body.classList.remove('form-animation');
    void this.formUI.body.offsetWidth;
    this.formUI.body.classList.add('form-animation');
  }

  toFormFinish() {
    this.formAninamtion();
    this.formUI.start.style.display = 'none';
    this.formUI.finish.style.display = 'grid';
  }

  toFormStart() {
    this.formAninamtion();
    this.formUI.start.style.display = 'grid';
    this.formUI.finish.style.display = 'none';
  }
}

export function setUpFormEvents() {
  const form = new Form();

  form.formUI.body.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  for (const input in form.formInput) {
    form.formInput[input].addEventListener('invalid', () => {
      form.toFormStart();
    });
  }

  form.formUI.next.addEventListener('click', (e) => {
    form.toFormFinish();
    e.preventDefault();
  });

  form.formUI.back.addEventListener('click', (e) => {
    form.toFormStart();
    e.preventDefault();
  });
}