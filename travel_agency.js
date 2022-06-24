var i = 0;
var images = [];
var slideTime = 3000;

images[1] = 'https://wallpaperaccess.com/full/1318313.jpg';
images[2] = 'https://wallpaperaccess.com/full/1318238.jpg';
images[3] = 'https://wallpaperaccess.com/full/706923.jpg';
images[0] = 'https://media.cntraveler.com/photos/581250f2997d59497dccf8bc/16:9/w_2560%2Cc_limit/GettyImages-185298837.jpg';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i<images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

