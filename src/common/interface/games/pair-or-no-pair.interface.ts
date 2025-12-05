// File: src/common/interface/games/pair-or-no-pair.interface.ts

// Interface untuk Item Game (Pasangan yang Benar) yang disimpan di Database
export interface IPairOrNoPairItem {
  id: string; // ID unik tiap pasangan (dari Prisma: @default(cuid()))
  game_template_id: string; // Foreign Key ke Game Template ID
  creator_id: string; // Foreign Key ke User ID pembuat soal
  left_content: string; // Konten Kiri (Misal: Teks "corn")
  right_content: string; // Konten Kanan (Misal: URL Gambar jagung)
}

// Interface untuk Response API /start
export interface IPairOrNoPairGameData {
  items: IPairOrNoPairItem[]; // Semua item dari database
}

// Interface untuk Stack Card (digunakan di Frontend)
export interface IStackCard {
  id: string; // ID dari item
  content: string; // Content yang ditampilkan (text atau image URL)
}
