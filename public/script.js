const loader = document.querySelector(".loading");
setTimeout(() => {
  loader.style.opacity = "0";

  setTimeout(() => {
    let app = document.querySelector("#app");
    app.style.display = "block";
    loader.style.display = "none";
  }, 500);
}, 2500);

const scrollbtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", () => {
  scrollbtn.classList.toggle("active", window.scrollY > 250);
});
scrollbtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
