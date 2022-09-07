(() => {
    const refs = {
    rotateCardIceCream: document.querySelector("[data-rotate-card-ice-cream]"),
    cardIceCream: document.querySelector("[data-card-ice-cream]"),
    textIceCream: document.querySelector("[data-text-ice-cream]"),
    visibleIceCream: document.querySelector("[data-visible-ice-cream]"),
    invisibleIceCream: document.querySelector("[data-invisible-ice-cream]"),

    rotateCardIceCoffee: document.querySelector("[data-rotate-card-ice-coffee]"),
    cardIceCoffee: document.querySelector("[data-card-ice-coffee]"),
    textIceCoffee: document.querySelector("[data-text-ice-coffee]"),
    visibleIceCoffee: document.querySelector("[data-visible-ice-coffee]"),
    invisibleIceCoffee: document.querySelector("[data-invisible-ice-coffee]"),

    rotateCardMilkshake: document.querySelector("[data-rotate-card-milkshake]"),
    cardMilkshake: document.querySelector("[data-card-milkshake]"),
    textMilkshake: document.querySelector("[data-text-milkshake]"),
    visibleMilkshake: document.querySelector("[data-visible-milkshake]"),
    invisibleMilkshake: document.querySelector("[data-invisible-milkshake]"),
    };

    refs.rotateCardIceCream.addEventListener("click", toggleCardIceCream);
    refs.rotateCardIceCream.addEventListener("click", toggleTextIceCream);
    refs.rotateCardIceCream.addEventListener("click", toggleVisibleIceCream);
    refs.rotateCardIceCream.addEventListener("click", toggleInvisibleIceCream);

    refs.rotateCardIceCoffee.addEventListener("click", toggleCardIceCoffee);
    refs.rotateCardIceCoffee.addEventListener("click", toggleTextIceCoffee);
    refs.rotateCardIceCoffee.addEventListener("click", toggleVisibleIceCoffee);
    refs.rotateCardIceCoffee.addEventListener("click", toggleInvisibleIceCoffee);

    refs.rotateCardMilkshake.addEventListener("click", toggleCardMilkshake);
    refs.rotateCardMilkshake.addEventListener("click", toggleTextMilkshake);
    refs.rotateCardMilkshake.addEventListener("click", toggleVisibleMilkshake);
    refs.rotateCardMilkshake.addEventListener("click", toggleInvisibleMilkshake);


    function toggleCardIceCream() {
        refs.cardIceCream.classList.toggle("rotate-card");
    }

    function toggleTextIceCream() {
        refs.textIceCream.classList.toggle("rotate-text");
    }

    function toggleVisibleIceCream() {
        refs.visibleIceCream.classList.toggle("visible");
    }

    function toggleInvisibleIceCream() {
        refs.invisibleIceCream.classList.toggle("invisible");
    }




    function toggleCardIceCoffee() {
        refs.cardIceCoffee.classList.toggle("rotate-card");
    }

    function toggleTextIceCoffee() {
        refs.textIceCoffee.classList.toggle("rotate-text");
    }

    function toggleVisibleIceCoffee() {
        refs.visibleIceCoffee.classList.toggle("visible");
    }

    function toggleInvisibleIceCoffee() {
        refs.invisibleIceCoffee.classList.toggle("invisible");
    }


    function toggleCardMilkshake() {
        refs.cardMilkshake.classList.toggle("rotate-card");
    }

    function toggleTextMilkshake() {
        refs.textMilkshake.classList.toggle("rotate-text");
    }

    function toggleVisibleMilkshake() {
        refs.visibleMilkshake.classList.toggle("visible");
    }

    function toggleInvisibleMilkshake() {
        refs.invisibleMilkshake.classList.toggle("invisible");
    }

})();
    
    // const openMenuBtn = document.querySelector('.js-open-menu');
    // const closeMenuBtn = document.querySelector('.js-close-menu');
  
    // const toggleMenu = () => {
    //   const isMenuOpen =
    //     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    //   openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    //   mobileMenu.classList.toggle('is-open');
  
    //   const scrollLockMethod = !isMenuOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   bodyScrollLock[scrollLockMethod](document.body);
    // };
  
    // openMenuBtn.addEventListener('click', toggleMenu);
    // closeMenuBtn.addEventListener('click', toggleMenu);
  
    // // Close the mobile menu on wider screens if the device orientation changes
    // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    //   if (!e.matches) return;
    //   mobileMenu.classList.remove('is-open');
    //   openMenuBtn.setAttribute('aria-expanded', false);
    //   bodyScrollLock.enableBodyScroll(document.body);
    // });