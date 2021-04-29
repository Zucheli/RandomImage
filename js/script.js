const ImageNormal = document.getElementById("image-normal");
const ImageBlur = document.getElementById("image-blur");
const ImageGray = document.getElementById("image-gray");

getImageNormal(); 
getImageBlur(); 
getImageGray(); 

function getImageNormal() {
    ImageNormal.src = "https://picsum.photos/900/600"
}

function getImageBlur() {
    ImageBlur.src = "https://picsum.photos/900/600?blur=1"
}

function getImageGray() {
    ImageGray.src = "https://picsum.photos/900/600?grayscale"
}