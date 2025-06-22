const images = document.querySelectorAll('.img,');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
    });
});

//Show selected image in lightbox
function showImage(){
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex'; // or 'block'
}
//close the lightbox
function closeLightbox(){
    lightbox.style.display = 'none';
}
//Go to previous image
function previmg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}
//Go to the Next image
function nextimg() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}
//Close if clicked outside image
lightbox.addEventListener('click',(e) => {
    if(e.target === lightbox) closeLightbox();
});