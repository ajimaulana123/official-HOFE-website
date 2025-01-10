const navBarLinks = [
  { name: "Beranda", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Kontak", url: "/kontak" },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Dokumentasi", url: "/dokumentasi" },
      { name: "Alat dan Peralatan", url: "/produk" },
      { name: "Layanan Konstruksi", url: "/layanan" },
    ],
  },
  {
    section: "Perusahaan",
    links: [
      { name: "Tentang Kami", url: "/tentang-kami" },
      { name: "Blog", url: "/blog" },
      { name: "Karir", url: "/karir" },
      { name: "Klien", url: "/klien" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/hofe/hoax-detection-app",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
