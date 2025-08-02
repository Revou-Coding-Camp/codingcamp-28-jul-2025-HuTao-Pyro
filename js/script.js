document.addEventListener('DOMContentLoaded', function() {
    // Deklarasikan variabel 'timerId' di luar fungsi agar bisa diakses secara global
    // oleh fungsi lain, seperti saat form disubmit.
    let timerId;
    welcomeMessage();
    // Fungsi untuk menampilkan waktu saat ini
    function displayCurrentTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = now.toLocaleString('id-ID', options);
        }
    }

    // Panggil fungsi displayCurrentTime saat halaman dimuat
    displayCurrentTime();

    // Simpan ID dari setInterval ke dalam variabel timerId
    timerId = setInterval(displayCurrentTime, 1000);

    // Tangani pengiriman formulir
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form melakukan refresh halaman

            // Ambil nilai dari input form
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
            const pesanan = document.getElementById('pesanan').value;
            const alamat = document.getElementById('alamat').value;

            // Tampilkan detail yang disubmit di sisi kanan
            document.getElementById('displayNama').textContent = nama;
            document.getElementById('displayTanggalLahir').textContent = tanggalLahir;
            document.getElementById('displayJenisKelamin').textContent = jenisKelamin;
            document.getElementById('displayLayanan').textContent = pesanan;
            document.getElementById('displayAlamat').textContent = alamat;

            // HENTIKAN PEMBARUAN WAKTU DI SINI
            clearInterval(timerId);
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
});

function welcomeMessage() {
    const popup = prompt("Paimon: siapa namamu pengembara?");
    if (popup) {
        const welcomeElement = document.getElementById("welcome-speech");
        // Cek apakah elemen ditemukan
        if (welcomeElement) {
            welcomeElement.textContent = `Hey ${popup}, Welcome to Wangsheng Funeral Parlor`;
        }
    }
}

// Tambahkan event listener ke tombol
const button = document.getElementById('changeNameButton');
if (button) {
    button.addEventListener('click', welcomeMessage);
}