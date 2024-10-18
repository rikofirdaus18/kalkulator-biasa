let calcDisplay = ""; // Menyimpan nilai atau ekspresi matematika yang dimasukkan oleh pengguna
let lastOperation = ""; // Menyimpan operasi terakhir (meskipun tidak digunakan di kode ini)

// Fungsi yang dipanggil setiap kali pengguna menekan tombol pada kalkulator
function btnClick(value) {
  const display = document.getElementById("display"); // Mengambil elemen display dari HTML untuk menampilkan hasil

  // Jika tombol "AC" ditekan, reset semua data dan bersihkan layar
  if (value === "AC") {
    calcDisplay = ""; // Menghapus semua data yang ada di display (set menjadi string kosong)

    // Jika tombol "C" ditekan, hapus karakter terakhir dari input
  } else if (value === "C") {
    calcDisplay = calcDisplay.slice(0, -1); // Menghapus satu karakter terakhir dari string calcDisplay

    // Jika tombol "=" ditekan, lakukan evaluasi atau perhitungan
  } else if (value === "=") {
    try {
      // Menggunakan eval() untuk mengevaluasi ekspresi matematika di dalam string
      calcDisplay = eval(calcDisplay).toString(); // Hasil dikonversi ke string untuk ditampilkan
    } catch (e) {
      // Jika terjadi kesalahan (misalnya ekspresi tidak valid), tampilkan pesan "Error"
      calcDisplay = "Error";
    }

    // Jika tombol "+-" ditekan, ubah tanda positif/negatif dari angka yang sedang ditampilkan
  } else if (value === "+-") {
    if (calcDisplay) {
      // Mengubah nilai yang ditampilkan menjadi negatif atau positif
      calcDisplay = (parseFloat(calcDisplay) * -1).toString(); // Ubah menjadi negatif/positif dan konversi kembali ke string
    }

    // Jika tombol lainnya ditekan (angka atau operator), tambahkan nilai ke ekspresi
  } else {
    calcDisplay += value; // Tambahkan karakter (angka/operator) ke string calcDisplay
  }

  // Perbarui tampilan layar kalkulator dengan nilai dari calcDisplay
  display.value = calcDisplay;
}
