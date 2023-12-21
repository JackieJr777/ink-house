/* ====================Меню-бургер========================= */

const burgerBtn = document.querySelector(".menu-header__btn");
const burgerContainer = burgerBtn.parentElement;



if(burgerContainer) {
  burgerContainer.addEventListener('click', function(e) {
    const targertElement = e.target;
    // console.log(targertElement);
    if(targertElement.closest(".menu-header__btn")) {
      burgerContainer.classList.toggle("_menu-active");
      document.body.parentElement.classList.toggle("_lock");
    }
  })
}
/* window.addEventListener('resize', function(e) {
  if(window.innerWidth >= 480) {
    if(burgerContainer.classList.contains("_menu-active") && document.body.parentElement.classList.toggle("_lock")) {
      burgerContainer.classList.remove("_menu-active");
      document.body.parentElement.classList.remove("_lock");
    }
  }
}) */
/* ====================/Меню-бургер======================== */








/* =========================Табы=========================== */

// Получаем объекты
// Кнопки
const tabBtns = document.querySelectorAll(".catalog__btn");

// Родитель кнопок
const btnsContainer = document.querySelector(".catalog__btns");

// Вкладки с контентом
const contentBlocks = document.querySelectorAll(".content-catalog");




// Прослушка на родителя кнопок
if(btnsContainer) {
  btnsContainer.addEventListener('click', function(e) {
    //Кнопки
    // Получаем именно кликнутую кнопку
    const clickedBtn = e.target.closest(".catalog__btn");

    // Если кликнули не по кнопке, выходим из функции
    if(!clickedBtn) return;

    // console.log(document.querySelector(`.content-catalog_${clickedBtn.dataset.tab}`));

    // Удаляем класс catalog__btn_active у всех кнопок
    tabBtns.forEach(function(tabBtn) {
      if(tabBtn.classList.contains("catalog__btn_active")) {
        tabBtn.classList.remove("catalog__btn_active");
      }
    })

    // Добавляем класс catalog__btn_active только кликнутой кнопке
    clickedBtn.classList.add("catalog__btn_active");


    //Вкладки
    // Удаляем класс content-catalog_active у всех вкладок
    contentBlocks.forEach(function(contentBlock) {
      if(contentBlock.classList.contains("content-catalog_active")) {
        contentBlock.classList.remove("content-catalog_active");
      }
    })

    // Добавляем класс content-catalog_active только нужной вкладке
    document.querySelector(`.content-catalog_${clickedBtn.dataset.tab}`).classList.add("content-catalog_active");

  })
}



/* =========================/Табы========================== */




/* const goToSlide = function (slide) {
  slides.forEach((s, i) => 
    (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}; */



/* ==========Шапка уезжает при достижении блока============ */

const catalogContainer = document.querySelector(".catalog__container");

const header = document.querySelector(".header");

// let headerHeight = header.offsetHeight; // чтобы правильно считалась высота шапки при сужении окна не будем её получать отдельно в переменную, а будем использовать дальше в коде каждый раз просто header.offsetHeight






window.addEventListener('scroll', function() {

  console.log(catalogContainer.getBoundingClientRect().top);
  console.log(header.offsetHeight);

  if(catalogContainer.getBoundingClientRect().top <= header.offsetHeight) {
    header.style.position = 'absolute';
    header.style.top = `${catalogContainer.offsetTop - header.offsetHeight}px`;
    // document.body.style.position = 'relative';
    console.log("Момент");
    // header.style.top = 'absolute';
  } else {
    header.style.position = 'fixed';
    header.style.top = '0px';
    // document.body.style.position = 'static';
  }
}) 

/* ==========/Шапка уезжает при достижении блока=========== */







/* ===================Прокрутка к блоку==================== */
// Совместил некоторые действия из урока Йонаса по созданию табов и из ролика фрилансера по созданию бургер-меню  на чистом Джаваскрипт


if(header) {
  header.addEventListener('click', function(e) {
    clickedBtn = e.target.closest(".menu-header__link[data-btn]")

   
    if(!clickedBtn) return;

    e.preventDefault();

    //  console.log(clickedBtn);

    // Проверяем, существует ли тот объект, на который ссылается дата-атрибут кликнутой ссылки (чтобы избежать ошибки с null, если этот объект удалён и т. д.)
    if(document.querySelector(`.${clickedBtn.dataset.btn}`)) {
      // получаем этот объект, на который ссылается дата-атрибут КЛИКНУТОЙ ссылки
      const goToBlock = document.querySelector(`.${clickedBtn.dataset.btn}`);
      // console.log(goToBlock);
      // console.log(header.offsetHeight);





      




      // Получаем положение этого объекта: 
      if(goToBlock.classList.contains("catalog")) {
        // 1) с учётом проскролленой области и за минусом высоты шапки (при прокрутке к блоку .catalog, пока шапка ещё position fixed)
        const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;

        // Функция прокрутки
        window.scrollTo ({
          top: goToBlockValue,
          behavior: "smooth"
        })
      }else {
        // 2) с учётом проскролленой области без учёта высоты шапки (при прокрутке к остальным блокам, когда шапка уже position absolute)
        const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY;

        // Функция прокрутки
        window.scrollTo ({
          top: goToBlockValue,
          behavior: "smooth"
        })
      }



      // Закрываем бургер-меню, если оно октрыто
      if(burgerContainer.classList.contains("_menu-active")) {
        burgerContainer.classList.remove("_menu-active");
        document.body.parentElement.classList.remove("_lock");
      }
      
      
    }

  })
}


/* ===================/Прокрутка к блоку=================== */







