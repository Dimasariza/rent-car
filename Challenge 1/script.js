var testiCards = document.getElementById("testi-cards");
var testiCard = testiCards.getElementsByClassName("testi-card");
var back = document.getElementById("back-button");
var next = document.getElementById("next-button");
let maxScroll = testiCards.scrollWidth - testiCards.clientWidth;

console.log(testiCards.scrollWidth);
console.log(testiCards.clientWidth);
console.log(maxScroll + "ini adalah maxscroll");

back.addEventListener("click", () => {
    if (testiCards.scrollLeft == 0) {
        testiCards.prepend(testiCard[testiCard.length - 1]);
        testiCards.scrollLeft += 120;
        console.log(testiCards.scrollLeft);
    } else {
        testiCards.scrollLeft -= 120;
    }
});

next.addEventListener("click", () => {
    if (testiCards.scrollLeft < maxScroll) {
        testiCards.append(testiCard[0]);
        testiCards.scrollLeft += 120;
        console.log(testiCards);
    } else {
        testiCards.scrollLeft -= 120;
    }
});

// function next() {
//     testiCards.append(testiCard[0]);
// }

// function prev() {
//     testiCards.prepend(testiCard[testiCard.length - 1]);
// }
