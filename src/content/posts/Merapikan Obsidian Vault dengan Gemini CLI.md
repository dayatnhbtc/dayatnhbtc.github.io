---
title: Merapikan Obsidian Vault dengan Gemini CLI
description: "Bagaimana saya merapikan Obsidian Vault dari nol dengan bantuan Gemini CLI: pembersihan, pengkategorian, linking, MOC, dan refactoring folder proyek."
tags:
  - blog
  - obsidian
  - gemini
  - pkm
date: 2025-08-16
---

# Studi Kasus: Merapikan Obsidian Vault dari Awal dengan Gemini CLI

Obsidian vault saya tadinya seperti sebuah gudang digital—penuh dengan ide, catatan, dan proyek, tetapi berantakan dan sulit dinavigasi. Banyak catatan tidak terhubung, folder tidak konsisten, dan proyek-proyek aktif tercampur dengan referensi dan arsip. Saya memutuskan untuk melakukan perombakan total menggunakan Gemini CLI, sebuah asisten AI berbasis teks, untuk melihat sejauh mana automasi bisa membantu saya membangun *second brain* yang lebih terstruktur.

Berikut adalah langkah-langkah yang kami lakukan:

---

### Langkah 1: Pembersihan Awal & Kategorisasi

Langkah pertama adalah memindahkan semua catatan dari lokasi yang tidak semestinya ke dalam folder yang lebih logis. Kami memulai dengan:

1.  **Mengosongkan `0-Inbox`**: Semua catatan di dalam inbox dianalisis dan dipindahkan ke folder yang sesuai, seperti `1-Projects`, `2-Areas`, atau `3-Resources`.
2.  **Merapikan `2-Areas` dan `3-Resources`**: Kami meninjau semua berkas di dalam folder-folder ini, membuat beberapa kategori baru (seperti `Health` dan `Spiritual`), dan memindahkan setiap catatan ke "rumahnya" yang paling tepat.

Proses ini sebagian besar menggunakan perintah `mv` (pindah) yang dieksekusi oleh Gemini, membersihkan fondasi vault saya.

---

### Langkah 2: Menghubungkan Catatan yang Terkait

Sebuah *second brain* yang baik bukan hanya tentang folder yang rapi, tetapi juga tentang koneksi antar ide. Vault saya memiliki banyak catatan yang saling berkaitan tetapi belum terhubung.

Gemini membantu saya dengan:
- Menganalisis isi beberapa catatan sekaligus.
- Mengidentifikasi konsep atau kata kunci yang sama.
- Menambahkan tautan `[[wikilink]]` secara otomatis untuk menghubungkan catatan-catatan tersebut.

Contohnya, catatan tentang `Profil Personaliti Hidayat` sekarang terhubung dengan `Catatan psikolog dayat` dan `Suitable Work and Hobby for me`, menciptakan jaringan pemahaman yang lebih dalam tentang diri saya.

---

### Langkah 3: Membangun Dasbor dengan "Maps of Content" (MOC)

Untuk mendapatkan gambaran tingkat tinggi dari setiap area penting, kami membuat serangkaian "Hub Notes" atau **Maps of Content (MOC)**. MOC ini pada dasarnya adalah dasbor untuk setiap topik.

Kami membuat beberapa MOC utama, di antaranya:
- `00 Personal Development MOC`
- `00 Pekerjaan dan Karir MOC`
- `00 Toko Online MOC`
- `00 Teknologi MOC`

Setiap MOC berisi daftar tautan yang terorganisir ke semua catatan penting dalam kategori tersebut, menjadikannya titik awal yang sempurna untuk navigasi.

---

### Langkah 4: Refactoring Folder Proyek secara Drastis

Ini adalah langkah yang paling transformatif. Folder `1-Projects` saya tadinya penuh dengan campuran antara rencana aktif, riset, dan materi referensi. Kami merombaknya dengan filosofi yang ketat:

1.  **Hanya Proyek Aktif**: Folder `1-Projects` sekarang hanya berisi satu MOC untuk setiap proyek yang sedang berjalan (misalnya: `Berskala MOC.md`).
2.  **Arsipkan Semuanya**: Semua catatan detail, dokumen pendukung, dan tugas-tugas dari setiap proyek dipindahkan ke `4-Archives`. Materi referensi yang tidak lekang oleh waktu dipindahkan ke `3-Resources`.
3.  **Dasbor Utama**: `Dashboard.md` utama saya diperbarui untuk menautkan langsung ke MOC-MOC proyek ini, memberikan pandangan "Mission Control" untuk semua yang sedang saya kerjakan.

---

### Hasil Akhir

Hasilnya adalah sebuah vault Obsidian yang terasa seperti markas yang terorganisir, bukan lagi gudang yang berantakan. Menemukan informasi menjadi lebih cepat, hubungan antar ide menjadi lebih jelas, dan fokus pada proyek aktif menjadi lebih mudah.

Menggunakan Gemini CLI untuk proses ini membuktikan bahwa AI bisa menjadi partner yang sangat kuat dalam mengelola pengetahuan pribadi, mengubah tugas-tugas yang membosankan dan memakan waktu menjadi serangkaian perintah yang efisien.
