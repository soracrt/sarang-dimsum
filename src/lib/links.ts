// Centralized links + WhatsApp prefilled messages.
// TODO(owner): confirm aggregator URLs, WA number, IG handle, Maps URL.

export const WA_NUMBER = '6281234567890'; // TODO(owner): real WA number

export const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const links = {
  ig: 'https://instagram.com/dimsum_sarang',
  maps: 'https://maps.google.com/?q=Sarang+Dimsum+Tiban+Batam',
  gofood: 'https://gofood.co.id/batam/restaurant/sarang-dimsum',
  grabfood: 'https://food.grab.com/id/id/restaurant/sarang-dimsum',
  shopeefood: 'https://shopee.co.id/sarangdimsum',
  waOrder: wa('Halo Sarang, mau pesan dimsum buat hari ini.'),
  waReseller: wa('Halo Sarang, saya tertarik soal Sewa Steling. Boleh info lebih lanjut?'),
  waGeneral: wa('Halo Sarang, mau tanya-tanya dulu, boleh ya?'),
};
