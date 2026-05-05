// TODO(owner): real menu, prices, items. Demo placeholders below.
export type MenuItem = {
  name: string;
  desc?: string;
  price: number; // IDR
  category: 'kukus' | 'goreng' | 'mie' | 'minuman' | 'paket';
  emoji?: string;
  badge?: string;
  hero?: boolean;
};

export const menu: MenuItem[] = [
  { name: 'Siomay Ayam Udang', desc: 'Klasik, juicy, isi penuh. Favorit semua umur.', price: 18000, category: 'kukus', emoji: '🥟', badge: 'Best seller', hero: true },
  { name: 'Hakau Udang', desc: 'Kulit tipis bening, udang segar setiap pagi.', price: 22000, category: 'kukus', emoji: '🦐', hero: true },
  { name: 'Lumpia Udang Renyah', desc: 'Digoreng saat dipesan, ekstra kriuk.', price: 20000, category: 'goreng', emoji: '🌯', hero: true },
  { name: 'Pangsit Goreng Ayam', desc: 'Tipis, gurih, cocok sama saus rumahan.', price: 17000, category: 'goreng', emoji: '🥠' },
  { name: 'Bakpao Ayam Jamur', desc: 'Empuk, tidak terlalu manis.', price: 14000, category: 'kukus', emoji: '🥯', hero: true },
  { name: 'Bakpao Cokelat Lumer', desc: 'Buat yang manis-manis sebelum pulang.', price: 14000, category: 'kukus', emoji: '🍫' },
  { name: 'Ceker Saus Tausi', desc: 'Empuk lepas tulang, bumbu meresap.', price: 25000, category: 'kukus', emoji: '🍗', badge: 'Pedas' },
  { name: 'Mie Ayam Pangsit', desc: 'Mie kenyal, kuah hangat, full topping.', price: 22000, category: 'mie', emoji: '🍜' },
  { name: 'Kwetiau Goreng Ayam', desc: 'Wangi wajan, manis-gurih seimbang.', price: 24000, category: 'mie', emoji: '🍝' },
  { name: 'Es Teh Manis', desc: 'Segar, dingin, harga warung.', price: 5000, category: 'minuman', emoji: '🧊' },
  { name: 'Es Lemon Tea', desc: 'Asam-manis, bikin nagih.', price: 8000, category: 'minuman', emoji: '🍋' },
  { name: 'Teh Tarik Hangat', desc: 'Khas, creamy, pas buat sore.', price: 10000, category: 'minuman', emoji: '☕' },
  { name: 'Paket Hemat Berdua', desc: '2 siomay + 2 hakau + 2 es teh manis.', price: 65000, category: 'paket', emoji: '🍱', badge: 'Hemat', hero: true },
  { name: 'Paket Keluarga', desc: '4 siomay + 2 hakau + 2 lumpia + 1 bakpao + 4 minum.', price: 138000, category: 'paket', emoji: '👨‍👩‍👧', badge: 'Buat seisi rumah', hero: true },
];

export const categoryLabel: Record<MenuItem['category'], string> = {
  kukus: 'Kukus',
  goreng: 'Goreng',
  mie: 'Mie & Nasi',
  minuman: 'Minuman',
  paket: 'Paket Hemat',
};
