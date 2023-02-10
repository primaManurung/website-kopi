// toggle class active //
const navigasi = document.querySelector
('.navigasi');

// ketika hamburger di klik //
document.querySelector('#hamburger').
onclick = () => {
    navigasi.classList.toggle('active');
};

// hilangkan sidebar dengan klik di luar //
const hamburger = document.querySelector
('#hamburger');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove('active')
    }
})