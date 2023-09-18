const sections = document.querySelectorAll("section");
const questionContainer = document.querySelector(".question-container");

const arrowDownIcon = '<i class="fa-sharp fa-solid fa-chevron-down"></i>';
const arrowUpIcon = '<i class="fa-sharp fa-solid fa-chevron-up"></i>';

sections.forEach((item) => {
  item.children[0].addEventListener("click", function () {
    if (item.children[1].classList.contains("active")) {
      item.children[1].classList.remove("active");
      item.style.border = "none";
      item.childNodes[1].lastChild.previousSibling.innerHTML = arrowDownIcon;
    } else {
      item.style.border = "2px solid #eee";
      item.children[1].classList.add("active");
      item.childNodes[1].lastChild.previousSibling.innerHTML = arrowUpIcon;
    }
  });
});
