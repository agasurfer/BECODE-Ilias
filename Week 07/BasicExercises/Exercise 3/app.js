const listLi = document.querySelectorAll("li");

listLi.forEach((item, index) => {
    if (index % 2 !== 0) {
        item.classList.add("highlight")
    } else  {
        item.classList.remove("highlight")
    }
});