const menuBtn = document.getElementById("menubtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("mobile-open");
    } else {
        sidebar.classList.toggle("collapsed");
        document.body.classList.toggle("sidebar-collapsed");
    }

});