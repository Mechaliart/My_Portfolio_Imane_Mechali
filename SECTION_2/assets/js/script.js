
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const imgEls = document.querySelectorAll(".image-container img");
const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

prevEl.addEventListener("click", () => {
    currentImg--;
    updateImg();
});

nextEl.addEventListener("click", () => {
    currentImg++;
    updateImg();
});

function updateImg() {
    const imageWidth = document.querySelector(".slider-container").clientWidth;

    if (currentImg > imgEls.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgEls.length;
    }

    imageContainerEl.style.transform =
        `translateX(-${(currentImg - 1) * imageWidth}px)`;
}

updateImg();
