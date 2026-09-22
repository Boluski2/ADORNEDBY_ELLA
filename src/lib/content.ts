import bridal from "@/assets/bridal.jpg";
import softglam from "@/assets/softglam.jpg";
import boldglam from "@/assets/boldglam.jpg";
import editorial from "@/assets/editorial.jpg";
import birthday from "@/assets/birthday.jpg";
import traditional from "@/assets/traditional.jpg";
import artist from "@/assets/artist.jpg";
import brushes from "@/assets/brushes.jpg";

export const looks = [
  { src: bridal, title: "Ethereal Bridal", category: "Bridal" },
  { src: softglam, title: "Golden Hour Soft Glam", category: "Soft Glam" },
  { src: boldglam, title: "Midnight Bold Glam", category: "Bold Glam" },
  { src: editorial, title: "Gilded Editorial", category: "Editorial" },
  { src: birthday, title: "Celebration Sparkle", category: "Birthday Looks" },
  { src: traditional, title: "Gele Royalty", category: "Traditional Wedding" },
  { src: softglam, title: "Nude Radiance", category: "Soft Glam" },
  { src: bridal, title: "Veiled Elegance", category: "Bridal" },
  { src: boldglam, title: "Gold Foil Drama", category: "Bold Glam" },
  { src: traditional, title: "Coral & Gold", category: "Traditional Wedding" },
  { src: birthday, title: "Champagne Nights", category: "Birthday Looks" },
  { src: editorial, title: "Sculpted Lines", category: "Editorial" },
];

export const categories = [
  "All",
  "Bridal",
  "Soft Glam",
  "Bold Glam",
  "Editorial",
  "Birthday Looks",
  "Traditional Wedding",
];

export const services = [
  {
    name: "Bridal Glam",
    price: "₦80,000",
    duration: "2 hrs 30 mins",
    products: "Charlotte Tilbury, Fenty Beauty, Pat McGrath",
    includes: ["Trial consultation", "Full face bridal glam", "Lashes & gele styling", "Touch-up kit"],
    image: bridal,
  },
  {
    name: "Traditional Wedding",
    price: "₦70,000",
    duration: "2 hrs",
    products: "Huda Beauty, Dior Backstage, Zaron",
    includes: ["Rich pigment artistry", "Gele tying", "Lashes included", "On-location option"],
    image: traditional,
  },
  {
    name: "Birthday Glam",
    price: "₦35,000",
    duration: "1 hr 30 mins",
    products: "Fenty Beauty, NARS, Juvia's Place",
    includes: ["Full face glam", "Premium lashes", "Setting & finishing spray"],
    image: birthday,
  },
  {
    name: "Photoshoot Makeup",
    price: "₦40,000",
    duration: "1 hr 45 mins",
    products: "Pat McGrath, MAC Pro, Dior",
    includes: ["Camera-ready base", "Studio-tested finish", "One look change"],
    image: editorial,
  },
  {
    name: "Engagement Makeup",
    price: "₦45,000",
    duration: "1 hr 45 mins",
    products: "Charlotte Tilbury, Anastasia Beverly Hills",
    includes: ["Soft romantic glam", "Lashes", "Long-wear setting"],
    image: softglam,
  },
  {
    name: "Editorial Makeup",
    price: "₦60,000",
    duration: "2 hrs",
    products: "Pat McGrath Labs, MAC Pro",
    includes: ["Creative concept design", "Editorial artistry", "On-set touch-ups"],
    image: boldglam,
  },
  {
    name: "Home Service",
    price: "₦50,000",
    duration: "Flexible",
    products: "Full luxury pro kit",
    includes: ["Artist comes to you", "Full glam", "Lashes", "Within Lagos"],
    image: artist,
  },
  {
    name: "Group Makeup",
    price: "From ₦30,000 / face",
    duration: "By arrangement",
    products: "Full luxury pro kit",
    includes: ["Bridal train & friends", "Assistant artists", "Coordinated looks"],
    image: brushes,
  },
];

export const testimonials = [
  {
    name: "Adaeze O.",
    role: "Bride, Lekki",
    rating: 5,
    quote:
      "Ella made me feel like the most beautiful woman in the room. My makeup lasted from morning vows to the last dance.",
  },
  {
    name: "Simi A.",
    role: "Birthday Client",
    rating: 5,
    quote:
      "Flawless. Hygienic tools, premium products and the softest hands. I have never received so many compliments.",
  },
  {
    name: "Blessing E.",
    role: "Photoshoot, Ikeja",
    rating: 5,
    quote:
      "The camera loved every angle. Ella understood my skin tone perfectly and the base was buttery smooth.",
  },
  {
    name: "Chioma N.",
    role: "Traditional Wedding",
    rating: 5,
    quote:
      "The gele and glam were pure royalty. Punctual, professional and calming on a very busy morning.",
  },
  {
    name: "Tolu B.",
    role: "Engagement",
    rating: 5,
    quote: "Luxury from consultation to the final touch-up. Worth every naira and more.",
  },
  {
    name: "Ifeoma K.",
    role: "Academy Intern",
    rating: 5,
    quote:
      "I joined with zero experience. Six months later I am booking my own clients. The training is world class.",
  },
];
