import { useEffect } from "react";
import { useScrollStore } from "@/store/useScrollStore";

// Custom hook untuk memantau section yang sedang aktif berdasarkan scroll posisi
export const useActiveSection = (sectionIds: string[]) => {
  // Ambil fungsi untuk update activeSection di Zustand store
  const setActiveSection = useScrollStore((state) => state.setActiveSection);

  useEffect(() => {
    // Fungsi untuk menangani event scroll dan menentukan section aktif
    const handleScroll = () => {
      // Posisi vertikal scroll saat ini (dari atas halaman)
      const scrollPosition = window.scrollY;
      // Margin offset supaya section dianggap aktif sedikit sebelum mencapai top section
      const offsetMargin = 100;

      // Variabel untuk menyimpan id section yang sedang aktif
      let currentSectionId = "";

      // Loop melalui semua section yang dipantau
      for (let i = 0; i < sectionIds.length; i++) {
        // Ambil elemen section berdasarkan id
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue; // Jika section tidak ditemukan, lanjut ke berikutnya

        // Hitung posisi top section dikurangi margin offset
        const sectionTop = section.offsetTop - offsetMargin;
        // Ambil tinggi section untuk mengetahui batas bawahnya
        const sectionHeight = section.offsetHeight;

        // Cek apakah posisi scroll saat ini ada di dalam area section tersebut
        if (
          scrollPosition >= sectionTop && // scroll sudah melewati top section (dengan margin)
          scrollPosition < sectionTop + sectionHeight // scroll belum melewati bawah section
        ) {
          currentSectionId = sectionIds[i]; // tandai section ini sebagai aktif
          break; // hentikan loop karena sudah ketemu section aktif
        }
      }

      // Jika ada section aktif yang terdeteksi, update store
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    // Pasang event listener scroll ke window
    window.addEventListener("scroll", handleScroll);
    // Panggil langsung sekali untuk inisialisasi activeSection saat komponen mount
    handleScroll();

    // Cleanup: hapus event listener saat komponen unmount atau sectionIds berubah
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, setActiveSection]); // jalankan ulang effect jika sectionIds atau setActiveSection berubah
};
