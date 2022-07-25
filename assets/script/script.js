// Navbar DropDown
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('navMenu');
});

// Galerry

// 1. Menargetkan pembungkus Galerry (cardBesar)
const cardBesar = document.querySelector('.cardBesar');
// 2. Menargetkan gambar besar (gambarBesar)
const gambarBesar = document.querySelector('.gambarBesar');
// 3. Menargetkan semua gambar kecil (gambar)
const gambarKecil = document.querySelectorAll('.gambar');

// 4. Jalankan event ke cardBesar
cardBesar.addEventListener('click', function (e) {
  // Cek apa benar gambar sudah diklik
  if (e.target.className == 'gambar') {
    // Jika benar gambar akan berganti
    gambarBesar.src = e.target.src;
    // Kemudian tambahkan class fade ke gambar pas diganti
    gambarBesar.classList.add('fade');
    // Atur waktu animasi fade kemudian hapus
    setTimeout(function () {
      gambarBesar.classList.remove('fade');
    }, 300);

    gambarKecil.forEach(function (gambar) {
      gambar.className = 'gambar';
    });
    e.target.classList.add('active');
  }
});
