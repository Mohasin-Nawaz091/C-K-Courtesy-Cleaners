export const business = {
  name: "C&K Courtesy Cleaners",
  phoneDisplay: "604-538-8231",
  phoneLink: "+16045388231",
  email: "clean@ckcourtesycleaners.ca",
  address: "Unit 139, 1959 152 Street, Surrey, BC V4A 9E3, Canada",
  streetAddress: "Unit 139, 1959 152 Street",
  addressLocality: "Surrey",
  addressRegion: "BC",
  postalCode: "V4A 9E3",
  country: "CA",
  website: "https://ckcourtesycleaners.ca",
  googleMaps: "https://www.google.com/maps/search/?api=1&query=Unit%20139%2C%201959%20152%20Street%2C%20Surrey%2C%20BC%20V4A%209E3",
  // Replace with the verified Google Business Profile review URL before launch.
  reviewsUrl: "",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Wet cleaning", href: "/wet-cleaning" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "shirt-cleaning",
    title: "Shirt care",
    eyebrow: "Everyday essentials",
    description: "Thoughtful care for shirts, blouses and the pieces you reach for most.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1100&q=85",
    details: "From workwear to everyday favourites, garment care starts with understanding the fabric, construction and care label. Contact the team to confirm which items can be accommodated.",
    items: ["Dress shirts", "Blouses", "Everyday shirts"],
  },
  {
    slug: "bridal-formal-wear",
    title: "Bridal & formal wear",
    eyebrow: "Special occasions",
    description: "Careful assessment for the garments attached to life's important moments.",
    image: "https://images.unsplash.com/photo-1667580385419-fd00f32b3265?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D".replace("159455대", "1594552072238-b8a33785b9cd"),
    details: "Formal and special-occasion garments can feature delicate fabrics, trims and construction. Speak with the team about your garment before bringing it in.",
    items: ["Formal garments", "Special-occasion clothing", "Wedding attire — confirm availability"],
  },
  {
    slug: "coats-jackets",
    title: "Coats & jackets",
    eyebrow: "Outerwear",
    description: "Seasonal outerwear deserves a considered approach to cleaning and care.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1100&q=85",
    details: "Coats and jackets vary widely in fabric, lining, trim and construction. Each item should be assessed against its care instructions.",
    items: ["Coats", "Jackets", "Seasonal outerwear"],
  },
  {
    slug: "household-textiles",
    title: "Household textiles",
    eyebrow: "Home comforts",
    description: "Ask about care for larger household pieces and bedding.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1100&q=85",
    details: "Household textiles can differ in size, filling and fabric composition. Contact C&K to confirm which pieces are currently accepted.",
    items: ["Comforters", "Quilts", "Selected household textiles"],
  },
  {
    slug: "stain-treatment",
    title: "Stain treatment",
    eyebrow: "A closer look",
    description: "A careful assessment is the first step when a garment needs extra attention.",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1100&q=85",
    details: "Stain outcomes depend on the stain, fabric, age and any previous treatment. No result can be guaranteed; ask the team to assess your item.",
    items: ["Stain assessment", "Fabric-specific care", "Advice before treatment"],
  },
];

export const photoPlaceholders = [
  { label: "Garment care", category: "Garment care", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85" },
  { label: "Freshly finished clothing", category: "Garment care", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85" },
  { label: "Careful fabric handling", category: "Process", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=85" },
  { label: "Home textiles", category: "Household", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85" },
  { label: "Wardrobe essentials", category: "Garment care", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=85" },
  { label: "A considered clean", category: "Process", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85" },
];
