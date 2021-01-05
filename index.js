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
detailsSelected.scrollIntoView(true);

console.log('detailsTotal: ' + detailsTotal);
console.log('detailsChosenNumber: ' + detailsChosenNumber);