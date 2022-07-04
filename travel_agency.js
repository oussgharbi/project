var i = 0;
var images = [];
var slideTime = 3000;

images[0] = 'background0.jpg';
images[1] = 'background1.jpg';
images[2] = 'background2.jpg';
images[3] = 'background3.jpg';
images[4] = 'background4.jpg';

function changePicture() {
document.body.style.backgroundImage = "url(resources/" + images[i] + ")";

if (i<images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
