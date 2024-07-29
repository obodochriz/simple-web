let h1 = document.getElementById('h1tag');
let bt = document.getElementById('buttontag');
bt.addEventListener('click', function () {
    h1.innerHTML = 'WelCome to the course';
    h1.innerText = 'Extra Char';
});