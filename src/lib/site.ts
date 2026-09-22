export const site = {
  name: "AdornedBy_Ella",
  tagline: "Luxury Makeup Artistry & Beauty Academy",
  phone: "07088256928",
  whatsapp: "2347088256928",
  email: "adornedbyella@gmail.com",
  instagram: "https://instagram.com/adornedby_ella",
  tiktok: "https://tiktok.com/@adornedby_ella",
  facebook: "https://facebook.com/adornedbyella",
  location: "Ogba, Ikeja — Lagos, Nigeria",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatEntries(entries: [string, string][]) {
  return entries
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}
