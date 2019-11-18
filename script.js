//Exercice 1
let footer = document.getElementsByTagName("footer");
let n = 0;
let onFooterclick = function(){
    console.log('clic numéro ' + n++);
};
footer[0].addEventListener("click", onFooterclick);

//Exercice 2
let menuHamb = document.querySelector('button');
let navbarHeader = document.getElementById('navbarHeader');
function toggleHambMenu() {
    navbarHeader.classList.toggle("collapse");
};
menuHamb.addEventListener("click", toggleHambMenu);

//Exercice 3
let edit1 = document.querySelector(".btn-outline-secondary");
function toggleRedEdit() {
    edit1.style.color = "red";
}
edit1.addEventListener("click", toggleRedEdit);

//Exercice 4
let edit2 = document.querySelectorAll(".btn-outline-secondary")[1];
function toggleGreenEdit() {
    if (edit2.style.color === 'green'){
        edit2.style.color = '' ;
        }else{
        edit2.style.color = 'green'
    }
}
edit2.addEventListener("click", toggleGreenEdit);

//Exercice 5
let navBar = document.querySelector(".navbar");
function nukeButton(){
    document.styleSheets[0].disabled = true;
}
navBar.addEventListener("dblclick", nukeButton);

//Exercice 6
let allCards = document.querySelector(".album").querySelectorAll(".card");
let cards = document.querySelectorAll(".card");
let cardText = document.querySelectorAll(".card-text");
let cardImg = cards[n].querySelector("img");


function minimizeCards(){
    cardText[n].classList.toggle("collapse");
    cardImg.classList.toggle(cards[n].querySelector("img").style.width = "20%");
}
function maximixeCards(){
    cardText[n].classList.toggle("uncollapse");
    cardImg.classList.toggle(cards[n].querySelector("img").style.width = "100%");
}
for (i=0; i< allCards.length; i++) {
cards[n].addEventListener("mouseenter", minimizeCards);
cards[n].addEventListener("mouseout", maximixeCards);
}

//Exercice 7
