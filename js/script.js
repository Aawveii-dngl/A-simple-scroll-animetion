window.addEventListener("scroll", () => {
  let content1 = document.querySelector(".row1");
  let currentPosition1 = content1.getBoundingClientRect().top;
  let screenPosition1 = window.innerHeight / 1.5;
  if (currentPosition1 < screenPosition1) {
    content1.classList.add("active1");
  } else {
    content1.classList.remove("active1");
  }
  let content2 = document.querySelector(".row2");
  let currentPosition2 = content2.getBoundingClientRect().top;
  let screenPosition2 = window.innerHeight / 1.4;
  console.log(screenPosition2);
  if (currentPosition2 < screenPosition2) {
    content2.classList.add("active2");
  } else {
    content2.classList.remove("active2");
  }
});
