'use strict';


class Navbar {
  constructor() {
    this.staticMenu = {
      mobileToggle: document.querySelector('.navbar__mobile-toggle'),
      hamburger: document.querySelector('.navbar__hamburger'),
      mobileMenu: document.querySelector('.navbar__mobile-menu'),
      mobileMenuWrapper: document.querySelector('.navbar__mobile-menu-wrapper'),
      about: document.querySelector('.navbar__about'),
      menuItems: document.querySelector('.navbar__menu-items')
    }

    this.floatingMenu = {
      about: document.querySelector('.navbar__about-items'),
      createAccount: document.querySelector('.navbar__menu-create-account'),
      loginButton: document.querySelector('.navbar__menu-login')
    }
  }



  setupMobileMenu() {
    try {
      switch(true) {
        case window.innerWidth < 768:
          this.staticMenu.mobileMenuWrapper.append(
            this.floatingMenu.about, 
            this.floatingMenu.loginButton, 
            this.floatingMenu.createAccount
          );
          break;
        case window.innerWidth >= 768 && window.innerWidth <= 1366:
          this.staticMenu.mobileMenuWrapper.append(
            this.floatingMenu.about, 
            this.floatingMenu.createAccount
          );
          this.staticMenu.menuItems.appendChild(this.floatingMenu.loginButton);
          break;
        default:
          this.staticMenu.about.appendChild(this.floatingMenu.about);
          this.staticMenu.menuItems.append(
            this.floatingMenu.createAccount, 
            this.floatingMenu.loginButton
          );
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  toggleMobileMenu() {
    this.staticMenu.hamburger.classList.toggle('is-active');
    this.staticMenu.mobileMenu.classList.toggle('is-active');

    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = '';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
}

export function setUpNavbarEvents() {
  const navbar = new Navbar();

  window.addEventListener('DOMContentLoaded', () => {
    navbar.setupMobileMenu();
  });

  navbar.staticMenu.mobileToggle.addEventListener('click', () => {
    navbar.toggleMobileMenu();
  });

  window.addEventListener('resize', () => {
    navbar.setupMobileMenu();

    if (window.innerWidth >= 1366 && navbar.staticMenu.mobileMenu.classList.contains('is-active')) {
      navbar.toggleMobileMenu();
    }
  });
}