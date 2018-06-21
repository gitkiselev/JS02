function modal(){
	let more = document.querySelector(".more");
  let info = document.querySelector(".info");
  let desc = document.querySelectorAll(".description-btn");
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".popup-close");
  more.addEventListener("click", () => {
    more.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  info.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("description-btn")) {
      //this.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    close.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

}
module.exports = modal;