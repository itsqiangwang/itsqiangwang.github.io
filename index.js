let detailsTotal;
//total number of 'details' tags minus 1; excludes bio
detailsTotal = document.getElementsByTagName('details').length - 1; 

let detailsChosenNumber;
//randomly choose a number from [min + 1, max + 1] (i.e. [1,2] instead of [0,1]. exclude bio, which is 0)
detailsChosenNumber = Math.floor(Math.random() * detailsTotal) + 1;

let detailsSelected;
//open a selected 'details' tag
detailsSelected = document.getElementsByTagName('details')[detailsChosenNumber];
detailsSelected.setAttribute('open','true');
// detailsSelected.scrollIntoView({
//     block: 'start',
//     inline: 'start',
//     behavior: 'smooth'
// });

let indexView = document.getElementById('index-view');
let index = document.getElementById('index');
let galleryView = document.getElementById('gallery-view');
let gallery = document.getElementById('gallery');

indexView.style.color = 'rgba(06,30,98,1)';
indexView.style.textDecoration = 'underline';

indexView.onclick = function (){
    gallery.style.display = 'none';
    index.style.display = 'block';
    indexView.style.color = 'rgba(06,30,98,1)';
    indexView.style.textDecoration = 'underline';
    galleryView.style.color = 'rgba(0,0,0,1)';
    galleryView.style.textDecoration = 'none';
}

galleryView.onclick = function (){
    index.style.display = 'none';
    gallery.style.display = 'flex';
    galleryView.style.color = 'rgba(06,30,98,1)';
    galleryView.style.textDecoration = 'underline';
    indexView.style.color = 'rgba(0,0,0,1)';
    indexView.style.textDecoration = 'none';
}

console.log('detailsTotal: ' + detailsTotal);
console.log('detailsChosenNumber: ' + detailsChosenNumber);
