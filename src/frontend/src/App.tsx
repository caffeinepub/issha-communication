import { Button } from "@/components/ui/button";
import {
  Battery,
  BatteryCharging,
  Cable,
  Camera,
  CheckCircle2,
  Clock,
  Code2,
  Droplets,
  Headphones,
  MapPin,
  Menu,
  Navigation,
  Package,
  Phone,
  Shield,
  Smartphone,
  SmartphoneCharging,
  Star,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const services = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    desc: "Cracked or shattered display? We replace screens with OEM-grade parts for crystal-clear results.",
    color: "blue",
    bg: "bg-c-blue",
    badge: "Most Popular",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    desc: "Restore your phone's stamina with genuine battery replacements and fast same-day turnaround.",
    color: "purple",
    bg: "bg-c-purple",
    badge: "",
  },
  {
    icon: Droplets,
    title: "Water Damage Repair",
    desc: "Dropped in water? Our ultrasonic cleaning and component-level repair can save your device.",
    color: "teal",
    bg: "bg-c-teal",
    badge: "",
  },
  {
    icon: Code2,
    title: "Software & Virus Fix",
    desc: "Slow phone, app crashes, or malware? We diagnose and fix software issues quickly.",
    color: "pink",
    bg: "bg-c-pink",
    badge: "",
  },
  {
    icon: Zap,
    title: "Charging Port Repair",
    desc: "Phone won't charge? We repair or replace faulty charging ports on all major brands.",
    color: "orange",
    bg: "bg-c-orange",
    badge: "",
  },
  {
    icon: Camera,
    title: "Camera Repair",
    desc: "Blurry photos or camera not opening? We restore your lens and camera module to full function.",
    color: "blue",
    bg: "bg-c-blue",
    badge: "",
  },
];

const accessories = [
  {
    title: "Phone Cases & Covers",
    desc: "Premium drop-protection cases in hundreds of styles for every phone model.",
    img: "/assets/generated/product-phone-cases.dim_600x500.jpg",
    badge: "Trending",
    badgeColor: "bg-c-pink",
  },
  {
    title: "Chargers & Adapters",
    desc: "Fast-charging adapters, wireless chargers, and travel plugs for every device.",
    img: "/assets/generated/product-chargers.dim_600x500.jpg",
    badge: "Fast Charge",
    badgeColor: "bg-c-orange",
  },
  {
    title: "Earphones & Headsets",
    desc: "Wired and wireless earphones with crystal-clear audio for calls, music, and more.",
    img: "/assets/generated/product-earphones.dim_600x500.jpg",
    badge: "New Arrivals",
    badgeColor: "bg-c-purple",
  },
  {
    title: "Screen Protectors",
    desc: "Tempered glass and film protectors with bubble-free installation included.",
    img: "/assets/generated/product-screen-protector.dim_600x500.jpg",
    badge: "Best Value",
    badgeColor: "bg-c-teal",
  },
  {
    title: "Power Banks",
    desc: "Portable power banks from 10,000–30,000 mAh to keep you powered on the go.",
    img: "/assets/generated/product-powerbank.dim_600x500.jpg",
    badge: "High Capacity",
    badgeColor: "bg-c-blue",
  },
  {
    title: "USB Cables",
    desc: "Braided USB-C, Lightning, and Micro-USB cables built for durability and speed.",
    img: "/assets/generated/product-cables.dim_600x500.jpg",
    badge: "Durable",
    badgeColor: "bg-c-orange",
  },
];

const stats = [
  {
    icon: Wrench,
    value: "8+",
    label: "Years of Experience",
    color: "text-c-blue",
  },
  {
    icon: Smartphone,
    value: "15,000+",
    label: "Devices Repaired",
    color: "text-c-pink",
  },
  {
    icon: Users,
    value: "12,000+",
    label: "Happy Customers",
    color: "text-c-teal",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    color: "text-c-orange",
  },
];

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["9830193239"],
    note: "Available during business hours",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Find Us",
    lines: [
      "98 Monshatala, Makhla, Uttarpara",
      "Post Raghunathpur",
      "District Hooghly",
    ],
    note: "Walk-ins welcome",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 11:00 AM – 5:00 PM"],
    note: "Holiday hours may vary",
    gradient: "from-teal-500 to-blue-500",
  },
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=98+Monshatala+Makhla+Uttarpara+Raghunathpur+Hooghly+West+Bengal";

const WHATSAPP_URL = "https://wa.me/919830193239";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", ocid: "nav.home.link" },
    { label: "Services", href: "#services", ocid: "nav.services.link" },
    {
      label: "Accessories",
      href: "#accessories",
      ocid: "nav.accessories.link",
    },
    { label: "About", href: "#about", ocid: "nav.about.link" },
    { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-c-darker/95 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="Issha Communication"
                className="h-10 w-10 object-contain rounded-xl"
              />
              <span className="font-display font-black text-lg text-white">
                Issha <span className="gradient-hero">Communication</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={link.ocid}
                    className="px-4 py-2 text-sm font-semibold text-white/75 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="ml-3">
                <a href="#contact">
                  <Button
                    size="sm"
                    className="font-bold px-5 rounded-xl text-white glow-blue"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--c-blue)), oklch(var(--c-purple)))",
                    }}
                  >
                    Get a Quote
                  </Button>
                </a>
              </li>
            </ul>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden bg-c-darker/98 border-t border-white/10 pb-4"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid={link.ocid}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image + overlays */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-repair.dim_1200x700.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.1 0.04 270 / 0.92) 0%, oklch(0.14 0.08 296 / 0.85) 50%, oklch(0.1 0.06 330 / 0.88) 100%)",
            }}
          />
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div
          className="absolute top-1/4 -left-24 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "oklch(var(--c-blue) / 0.25)" }}
        />
        <div
          className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "oklch(var(--c-pink) / 0.2)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "oklch(var(--c-purple) / 0.12)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border"
                style={{
                  background: "oklch(var(--c-blue) / 0.15)",
                  borderColor: "oklch(var(--c-blue) / 0.4)",
                  color: "oklch(var(--c-blue))",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "oklch(var(--c-teal))" }}
                />
                Trusted Mobile Repair Experts Since 2016
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.0] mb-4"
            >
              Issha
            </motion.h1>
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.0] mb-8 gradient-hero"
            >
              Communication
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-xl sm:text-2xl text-white/80 font-light mb-3 max-w-2xl mx-auto"
            >
              Your One-Stop Mobile Repair & Accessories Shop
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={4}
              className="text-white/50 mb-12 max-w-xl mx-auto text-base"
            >
              Same-day repairs · Genuine parts · Expert technicians · All brands
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#services">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="font-bold px-10 py-7 text-base rounded-2xl text-white glow-blue"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--c-blue)), oklch(var(--c-purple)))",
                  }}
                >
                  🔧 Get Your Phone Fixed
                </Button>
              </a>
              <a href="#accessories">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 text-white bg-white/10 hover:bg-white/20 px-10 py-7 text-base rounded-2xl font-bold"
                  style={{ borderColor: "oklch(var(--c-pink) / 0.6)" }}
                >
                  🛍️ Shop Accessories
                </Button>
              </a>
            </motion.div>

            {/* Hero trust badges */}
            <motion.div
              variants={fadeUp}
              custom={6}
              className="flex flex-wrap justify-center gap-6 mt-14"
            >
              {[
                { emoji: "⚡", text: "Same Day Service" },
                { emoji: "🛡️", text: "90-Day Warranty" },
                { emoji: "💎", text: "Genuine Parts" },
                { emoji: "⭐", text: "4.9★ Rated" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-white/70 text-sm font-medium"
                >
                  <span className="text-base">{badge.emoji}</span>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        data-ocid="services.section"
        className="py-28 section-services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--c-blue) / 0.12), oklch(var(--c-purple) / 0.12))",
                  color: "oklch(var(--c-purple))",
                  border: "1px solid oklch(var(--c-purple) / 0.25)",
                }}
              >
                🔧 What We Fix
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-4xl lg:text-6xl text-c-dark mb-5"
            >
              Expert <span className="gradient-hero">Repair Services</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From cracked screens to water damage — our certified technicians
              handle it all with precision and care.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white rounded-3xl p-8 shadow-card border border-border/50 overflow-hidden"
              >
                {/* Colored accent corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-10 ${svc.bg}`}
                />
                {svc.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--c-blue)), oklch(var(--c-purple)))",
                    }}
                  >
                    {svc.badge}
                  </span>
                )}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${svc.bg}`}
                  style={{ opacity: 0.9 }}
                >
                  <svc.icon size={26} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-c-dark mb-3">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {svc.desc}
                </p>
                <div
                  className="mt-5 text-xs font-bold tracking-wide"
                  style={{ color: "oklch(var(--c-blue))" }}
                >
                  Learn more →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ACCESSORIES ── */}
      <section
        id="accessories"
        data-ocid="accessories.section"
        className="py-28 section-accessories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--c-pink) / 0.2), oklch(var(--c-orange) / 0.2))",
                  color: "oklch(var(--c-pink))",
                  border: "1px solid oklch(var(--c-pink) / 0.3)",
                }}
              >
                🛍️ Our Products
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-4xl lg:text-6xl text-white mb-5"
            >
              Premium <span className="gradient-warm">Accessories</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              Everything your device needs — premium accessories at competitive
              prices, all in one place.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {accessories.map((acc, i) => (
              <motion.div
                key={acc.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  background: "oklch(0.16 0.05 270)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                {/* Image — 60% of card height */}
                <div className="relative h-64 img-zoom">
                  <img
                    src={acc.img}
                    alt={acc.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay on image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.16 0.05 270) 0%, transparent 55%)",
                    }}
                  />
                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white ${acc.badgeColor}`}
                  >
                    {acc.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {acc.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {acc.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm font-bold text-white px-5 py-2 rounded-xl transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(var(--c-pink)), oklch(var(--c-orange)))",
                      }}
                    >
                      Shop Now
                    </button>
                    <span className="text-white/30 text-xs">In Stock ✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        data-ocid="about.section"
        className="py-28 section-about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/hero-repair.dim_1200x700.jpg"
                  alt="Issha Communication repair workshop"
                  className="w-full h-[480px] object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--c-purple) / 0.3) 0%, transparent 60%)",
                  }}
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl"
              >
                <div className="font-display font-black text-3xl gradient-hero">
                  15,000+
                </div>
                <div className="text-c-dark font-semibold text-sm mt-1">
                  Devices Repaired
                </div>
              </motion.div>
              {/* Year badge */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-white text-center text-sm shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--c-blue)), oklch(var(--c-purple)))",
                }}
              >
                <div>
                  <div className="text-xl font-black">8+</div>
                  <div className="text-xs opacity-80">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--c-teal) / 0.12), oklch(var(--c-blue) / 0.12))",
                    color: "oklch(var(--c-teal))",
                    border: "1px solid oklch(var(--c-teal) / 0.25)",
                  }}
                >
                  🏪 Our Story
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-display font-black text-4xl lg:text-5xl text-c-dark mb-6 leading-tight"
              >
                About <span className="gradient-hero">Issha Communication</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-lg leading-relaxed mb-5"
              >
                Founded over 8 years ago, Issha Communication started with a
                simple mission: provide honest, high-quality mobile phone
                repairs at fair prices. Today, we're one of the most trusted
                repair shops in the area.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                We work on all major brands — Apple, Samsung, Google, OnePlus,
                and more. Every repair is carried out by certified technicians
                using genuine or OEM-quality parts, backed by a warranty.
              </motion.p>

              <motion.div variants={stagger} className="space-y-3 mb-10">
                {[
                  {
                    text: "Genuine & OEM-quality replacement parts only",
                    color: "text-c-blue",
                  },
                  {
                    text: "Same-day service on most common repairs",
                    color: "text-c-purple",
                  },
                  {
                    text: "90-day warranty on all repair work",
                    color: "text-c-teal",
                  },
                  {
                    text: "Free diagnostics & transparent pricing",
                    color: "text-c-pink",
                  },
                ].map((val) => (
                  <motion.div
                    key={val.text}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className={`${val.color} flex-shrink-0`}
                    />
                    <span className="text-foreground text-sm font-medium">
                      {val.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    custom={i}
                    className="bg-white rounded-2xl p-4 shadow-card text-center border border-border/50"
                  >
                    <stat.icon
                      size={20}
                      className={`${stat.color} mx-auto mb-2`}
                    />
                    <div
                      className={`font-display font-black text-2xl ${stat.color}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-28 section-contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-black tracking-widest uppercase mb-5">
                📍 Get In Touch
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-4xl lg:text-6xl text-white mb-5"
            >
              Visit Us Today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/65 text-lg max-w-xl mx-auto"
            >
              Come visit us in store or give us a call — we're here to help
              every day of the week.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br ${card.gradient}`}
                >
                  <card.icon size={28} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  {card.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {card.lines.map((line) => (
                    <p key={line} className="text-white/80 font-medium text-sm">
                      {line}
                    </p>
                  ))}
                </div>
                <p className="text-white/45 text-xs">{card.note}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            data-ocid="contact.map_marker"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-white/15"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=98+Monshatala+Makhla+Uttarpara+Hooghly+West+Bengal&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Issha Communication Location"
            />
          </motion.div>

          {/* Get Directions button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center mt-6"
          >
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
            >
              <Button
                size="lg"
                className="font-bold px-10 py-6 text-base rounded-2xl text-white glow-blue flex items-center gap-3 shadow-xl hover:scale-105 transition-transform duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--c-blue)), oklch(var(--c-purple)))",
                }}
              >
                <Navigation size={20} className="flex-shrink-0" />
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-c-darker border-t border-white/8 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/logo-transparent.dim_200x200.png"
                  alt="Issha Communication"
                  className="h-10 w-10 object-contain rounded-xl"
                />
                <div className="font-display font-black text-white">
                  Issha <span className="gradient-hero">Communication</span>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                Your trusted mobile repair experts since 2016. Serving the
                community with quality repairs and premium accessories.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-display font-bold text-white mb-4">
                Quick Links
              </div>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-white/45 hover:text-white text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <div className="font-display font-bold text-white mb-4">
                Our Services
              </div>
              <div className="space-y-2">
                {[
                  "Screen Replacement",
                  "Battery Replacement",
                  "Water Damage Repair",
                  "Software Fix",
                  "Charging Port Repair",
                  "Camera Repair",
                ].map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="block text-white/45 hover:text-white text-sm transition-colors font-medium"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/35 text-xs">
              © {year} Issha Communication. All rights reserved.
            </div>
            <div className="text-white/35 text-xs text-center">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              className="bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap pointer-events-none"
            >
              Chat on WhatsApp
              <div className="absolute right-3 -bottom-1.5 w-3 h-3 bg-gray-900 rotate-45 rounded-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="whatsapp.primary_button"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
          style={{ backgroundColor: "#25D366" }}
        >
          {/* Pulse rings */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: "#25D366" }}
          />
          <span
            className="absolute inset-[-4px] rounded-full animate-ping opacity-15 animation-delay-300"
            style={{ backgroundColor: "#25D366" }}
          />
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
            className="w-7 h-7 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
