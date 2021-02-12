const outsideText = document.querySelectorAll('.outside-text')

//arrows.forEach(arrow => arrow.addEventListener('click', expand))
outsideText.forEach(text => text.addEventListener('click', expand))

function reset() {
         outsideText.forEach(text => {
         text.querySelector('.arrow').classList.remove('expanded');
         text.querySelector('.inside-text').style.display = "none";
         text.style.fontWeight = "normal";
     });
}

function expand(e) {
    const arrow =  this.querySelector('.arrow');
    if (arrow.classList[1] !== "expanded") {
        reset()
        arrow.classList.add("expanded")
        arrow.parentNode.querySelector('.inside-text').style.display = "block";
        arrow.parentNode.style.fontWeight = "bold";
    }
    else if (arrow.classList[1] === "expanded")  {
         arrow.classList.remove("expanded")
         arrow.parentNode.querySelector('.inside-text').style.display = "none";
         arrow.parentNode.style.fontWeight = "normal";
      }
}


// function expand(e) {
//     if (this.classList[1] !== "expanded") {
//         this.classList.add("expanded")
//         this.parentNode.querySelector('.inside-text').style.display = "block";
//         this.parentNode.style.fontWeight = "bold";
//         //insideText.style.display = "block";
//     } else if (this.classList[1] == "expanded") {
//         this.classList.remove("expanded")
//         this.parentNode.querySelector('.inside-text').style.display = "none";
//         this.parentNode.style.fontWeight = "normal";
//     }
// }
