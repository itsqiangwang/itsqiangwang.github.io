let indexView = document.getElementById('index-view');
let index = document.getElementById('index');
let galleryView = document.getElementById('gallery-view');
let gallery = document.getElementById('gallery');
let navigation = document.getElementById('navigation');

galleryView.style.color = 'rgba(06,30,98,1)';
galleryView.style.textDecoration = 'underline';

indexView.onclick = function (){
    gallery.style.display = 'none';
    index.style.display = 'block';
    indexView.style.color = 'rgba(06,30,98,1)';
    indexView.style.textDecoration = 'underline';
    galleryView.style.color = 'rgba(0,0,0,1)';
    galleryView.style.textDecoration = 'none';
    navigation.style.position='relative';
}

galleryView.onclick = function (){
    index.style.display = 'none';
    gallery.style.display = 'flex';
    galleryView.style.color = 'rgba(06,30,98,1)';
    galleryView.style.textDecoration = 'underline';
    indexView.style.color = 'rgba(0,0,0,1)';
    indexView.style.textDecoration = 'none';
    navigation.style.position='sticky';
}

console.log('detailsTotal: ' + detailsTotal);
console.log('detailsChosenNumber: ' + detailsChosenNumber);
