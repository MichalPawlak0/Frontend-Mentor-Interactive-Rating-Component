let ratingSpan = document.getElementById("rating");
let ratingContainer = document.querySelector(".rate-us");
let thankyouContainer = document.querySelector(".rated");

document.getElementById("submit").addEventListener('click',()=>{
  ratingContainer.classList.toggle("hide");
  thankyouContainer.classList.toggle("hide");
})

document.querySelectorAll(".digit").forEach(function(el){
  el.addEventListener("click", function(){
    let otherEls = document.querySelectorAll(".selected");
    otherEls.forEach(dig=>{
      dig.classList.remove("selected");
    });
    this.classList.toggle("selected");
    ratingSpan.textContent = this.textContent;
  })
})