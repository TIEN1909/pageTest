
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu')
    const open = document.querySelector('.menu__bars')
    const close = document.querySelector('.menu__xmark')

    if (!open || !close || !menu) return;
    open.addEventListener("click", function () {
      menu.classList.add("is-active");
    });
    close.addEventListener("click", function () {
      menu.classList.remove("is-active");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !e.target.matches(".menu__bars")) {
        menu.classList.remove("is-active");
      }
    });
  });

//   document.addEventListener("DOMContentLoaded", function () {
//     const menuOpen = document.querySelector(".menu-toggle");
//     const menuClose = document.querySelector(".menu-close");
//     const menu = document.querySelector(".menu");
//     if (!menuOpen || !menuClose || !menu) return;
//     menuOpen.addEventListener("click", function () {
//       menu.classList.add("is-active");
//     });
//     menuClose.addEventListener("click", function () {
//       menu.classList.remove("is-active");
//     });
//     document.addEventListener("click", function (e) {
//       if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//         menu.classList.remove("is-active");
//       }
//     });
//   });