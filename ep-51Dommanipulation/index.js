let mydiv = document.querySelector('.mydiv');

let newelement = document.createElement('span');
newelement.textContent = 'love uttam';

mydiv?.insertAdjacentElement('beforebegin',newelement);

let prent = document.querySelector('.mydiv');
let child = document.querySelector('#para');
prent?.removeChild(child);
