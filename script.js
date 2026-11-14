const daftarKategori = ["ALL", "WEB", "MOBILE", "AI"];
const profilDeveloper = { nama: "Daffa Rahmandani", kampus: "UNTAG Surabaya", tahun: 2026 };

function filterProyek(kategori, tombolAktif) {
  if (tombolAktif) {
    const semuaTombol = document.querySelectorAll(".filter-btn");
    semuaTombol.forEach((btn) => btn.classList.remove("active"));
    tombolAktif.classList.add("active");
  }

  // 2. Saring kartu proyek sesuai kategori
  const semuaProyek = document.querySelectorAll(".project-card");
  semuaProyek.forEach((kartu) => {
    const kategoriKartu = kartu.getAttribute("data-kategori");

    if (kategori === "ALL" || kategoriKartu === kategori) {
      kartu.style.display = "block";
    } else {
      kartu.style.display = "none";
    }
  });

  console.log("[DEBUG] Filter aktif:", kategori);
}

function simpanLogKunjungan() {
  try {
    let kunjungan = Number(localStorage.getItem("total_akses")) || 0;
    kunjungan++;
    localStorage.setItem("total_akses", kunjungan);
    console.log("[DEBUG] Total akses halaman:", kunjungan, "| Profil:", profilDeveloper.nama);
  } catch (err) {
    console.error("[ERROR] Gagal menyimpan data:", err);
  }
}

simpanLogKunjungan();