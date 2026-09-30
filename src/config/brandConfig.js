/**
 * Centralized Brand Configuration
 * Any changes here automatically reflect across the entire website.
 * Makes it effortless to adapt for any Indian playschool demo or franchisee.
 */
export const brandConfig = {
  // Brand Identity
  brandName: "Aarambh Kidz",
  brandSubtitle: "Preschool & Daycare",
  tagline: "Where Curious Minds Take Their First Happy Steps",
  hindiTagline: "संस्कार, शिक्षा और स्नेह का अनूठा संगम",
  establishedYear: "2014",
  affiliation: "NEP 2020 Aligned & ECA (Early Childhood Association) Certified",
  
  // Header Notice / Ribbon
  topNotification: {
    badge: "Admissions 2025-26 Open",
    message: "Avail Early Bird 15% Waiver on Annual Kit & 1-Day Free Trial Class!",
    ctaText: "Book Free Trial",
  },

  // Contact Information
  contact: {
    primaryPhone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    tollFree: "1800-200-KIDZ",
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "admissions@aarambhkidz.in",
    supportEmail: "care@aarambhkidz.in",
    mainCampusAddress: "Plot 42, Anand Niketan, Near Central Park, Sector 62, Noida, UP - 201309",
    campuses: [
      { name: "Noida Sector 62 (Flagship)", city: "Noida / Delhi-NCR", phone: "+91 98765 43210" },
      { name: "Indiranagar 100ft Rd", city: "Bengaluru", phone: "+91 98765 43212" },
      { name: "Koregaon Park", city: "Pune", phone: "+91 98765 43213" },
      { name: "Gachibowli", city: "Hyderabad", phone: "+91 98765 43214" }
    ],
    schoolHours: "Mon - Sat: 8:30 AM - 6:30 PM (Sunday Closed)",
    officeHours: "8:00 AM - 7:00 PM",
  },

  // Key Statistics
  stats: [
    { value: "5,800+", label: "Happy Little Graduates", icon: "GraduationCap" },
    { value: "1 : 10", label: "Mentor-Child Ratio", icon: "Users" },
    { value: "100%", label: "CCTV & GPS Coverage", icon: "ShieldCheck" },
    { value: "4.9 / 5", label: "Parent Trust Score (Google)", icon: "Star" },
  ],

  // Core Pillars (Matching template's 4 rotating blob cards)
  pillars: [
    {
      id: 1,
      title: "Reading & Cognitive Brilliance",
      description: "Phonics, bilingual vocabulary (Hindi & English), early numbers, and puzzle-based logic development.",
      bgColor: "#F26522",
      borderColor: "#000000",
      accent: "#FAB823",
      icon: "BookOpen",
    },
    {
      id: 2,
      title: "Highest Safety & Hygiene Standards",
      description: "Live CCTV feed for parents, biometric check-in, female transport attendants, and sanitized child-safe zones.",
      bgColor: "#F8AD12",
      borderColor: "#000000",
      accent: "#F26522",
      icon: "ShieldAlert",
    },
    {
      id: 3,
      title: "Real-Time Parent Partnership",
      description: "Instant daily diary updates, meal logs, milestone tracking, and open weekly mentor interactions.",
      bgColor: "#88B520",
      borderColor: "#000000",
      accent: "#5AAD65",
      icon: "HeartHandshake",
    },
    {
      id: 4,
      title: "Imagination, Sanskar & Arts",
      description: "Panchatantra storytelling, festive folk art, clay modelling, music, yoga, and sensory messy play.",
      bgColor: "#F96EA0",
      borderColor: "#000000",
      accent: "#4EC5F1",
      icon: "Palette",
    },
  ],

  // Tailored Programs
  programs: [
    {
      id: "playgroup",
      title: "Playgroup",
      hindiName: "नन्हे कदम",
      age: "1.5 – 2.5 Yrs",
      timing: "9:00 – 11:30 AM",
      badgeColor: "bg-[#FC800A]",
      textColor: "text-[#FC800A]",
      borderColor: "border-[#FC800A]",
      lightBg: "bg-orange-50/70",
      description: "Joyful sensory play, motor development, musical rhymes & gentle first social steps.",
      tags: ["Sensory Play", "Rhymes & Joy"],
      fees: "₹4,500/mo",
      image: "/images/programs/playgroup.jpg"
    },
    {
      id: "nursery",
      title: "Nursery",
      hindiName: "उमंग",
      age: "2.5 – 3.5 Yrs",
      timing: "9:00 AM – 12:30 PM",
      badgeColor: "bg-[#5AAD65]",
      textColor: "text-[#5AAD65]",
      borderColor: "border-[#5AAD65]",
      lightBg: "bg-emerald-50/70",
      description: "Jolly phonics, pre-math concepts, Hindi kavita, finger painting & nature curiosity.",
      tags: ["Jolly Phonics", "Art & Stories"],
      fees: "₹5,200/mo",
      image: "/images/programs/nursery.jpg"
    },
    {
      id: "junior-kg",
      title: "Junior KG / LKG",
      hindiName: "तरंग",
      age: "3.5 – 4.5 Yrs",
      timing: "8:45 AM – 1:00 PM",
      badgeColor: "bg-[#FAB823]",
      textColor: "text-[#D99000]",
      borderColor: "border-[#FAB823]",
      lightBg: "bg-amber-50/70",
      description: "Word building, early mathematics, STEM puzzles, Indian moral tales & mindful yoga.",
      tags: ["Early Math", "Panchatantra"],
      fees: "₹5,800/mo",
      image: "/images/programs/juniorkg.jpg"
    },
    {
      id: "senior-kg",
      title: "Senior KG / UKG",
      hindiName: "उड़ान",
      age: "4.5 – 5.5 Yrs",
      timing: "8:45 AM – 1:30 PM",
      badgeColor: "bg-[#F96EA0]",
      textColor: "text-[#E11D48]",
      borderColor: "border-[#F96EA0]",
      lightBg: "bg-pink-50/70",
      description: "Primary school readiness, Hindi Swar-Vyanjan, reading fluency & stage confidence.",
      tags: ["School Ready", "Confidence"],
      fees: "₹6,400/mo",
      image: "/images/programs/seniorkg.jpg"
    },
    {
      id: "daycare",
      title: "Daycare & Creche",
      hindiName: "सुरक्षा",
      age: "6 Mo – 10 Yrs",
      timing: "8:00 AM – 7:00 PM",
      badgeColor: "bg-[#171E45]",
      textColor: "text-[#171E45]",
      borderColor: "border-[#171E45]",
      lightBg: "bg-slate-50/70",
      description: "Warm motherly care, live CCTV, hot sattvic nutritious meals, quiet nap zones & homework help.",
      tags: ["Live CCTV", "Hot Meals"],
      fees: "₹7,500/mo",
      image: "/images/programs/daycare.jpg"
    }
  ],

  // Admission Process Steps
  admissionSteps: [
    {
      step: "01",
      title: "Schedule Campus Visit",
      desc: "Book a personalized tour online or walk in to witness our vibrant classrooms and safety setups.",
      icon: "CalendarCheck"
    },
    {
      step: "02",
      title: "Interact with Educators",
      desc: "Discuss your child's personality, routines, and developmental stage with our Principal.",
      icon: "UsersRound"
    },
    {
      step: "03",
      title: "Free 1-Day Trial Class",
      desc: "Let your little one experience the magic of fun learning and play with peers for a day.",
      icon: "Sparkles"
    },
    {
      step: "04",
      title: "Welcome to Aarambh!",
      desc: "Receive the welcome kit, uniform, books, RFID bag-tag, and parent mobile app credentials.",
      icon: "Gift"
    }
  ],

  // Upcoming School Events (Indian Context)
  events: [
    {
      id: 1,
      date: "15 Aug",
      time: "9:00 AM - 12:30 PM",
      title: "Desh Ke Nanhe Sipahi - Independence Day & Flag Hoisting",
      category: "Patriotic Celebration",
      location: "Central Campus Lawn",
      desc: "Tricolor fancy dress, national anthem chanting, patriotic songs, and sweet distribution with grandparents.",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      date: "28 Aug",
      time: "10:00 AM - 1:00 PM",
      title: "Janmashtami Bal-Gopal Mahotsav & Dahi Handi Fun",
      category: "Cultural Fiesta",
      location: "Activity Hall & Courtyard",
      desc: "Costume parade (Kanhaiya & Radha), flower rangoli, miniature butter pot churn, and folk flute music.",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      date: "14 Nov",
      time: "9:30 AM - 2:00 PM",
      title: "Children's Day Grand Carnival & Little Scientists Expo",
      category: "STEM & Carnival",
      location: "Whole Campus",
      desc: "Water play, puppet theatre, bouncy castles, kid-friendly volcano experiments, and magic shows.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      date: "20 Dec",
      time: "10:00 AM - 1:30 PM",
      title: "Dada-Dadi & Nana-Nani Divas (Grandparents Day)",
      category: "Family Special",
      location: "Auditorium",
      desc: "Honoring our elderly roots with heart-touching performances, nostalgic games, tea party, and family portraits.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Authentic Indian Parent Testimonials
  testimonials: [
    {
      id: 1,
      quote: "Sending Vihaan here was our best decision! Live CCTV on the app gives us total peace of mind while working. He chants shlokas and rhymes with pure joy!",
      parentName: "Dr. Priya Deshmukh",
      childDetail: "Mother of Vihaan (Playgroup • Noida)",
      rating: 5,
      avatar: "/images/testimonials/parent_1.jpg",
      tag: "CCTV & Security"
    },
    {
      id: 2,
      quote: "What won us over is the wholesome sattvic food and caring Didis. Kabir's speech and confidence blossomed within just 3 months. Truly our extended family!",
      parentName: "Arvind Kulkarni",
      childDetail: "Father of Kabir (Nursery • Bengaluru)",
      rating: 5,
      avatar: "/images/testimonials/parent_dad_1.jpg",
      tag: "Nutrition & Care"
    },
    {
      id: 3,
      quote: "From a hesitant toddler to hosting the Annual Stage Day! The NEP 2020 hands-on play approach and patient educators have worked wonders for Aadhya.",
      parentName: "Meenakshi Sharma",
      childDetail: "Mother of Aadhya (Senior KG • Delhi NCR)",
      rating: 5,
      avatar: "/images/testimonials/parent_4.jpg",
      tag: "Holistic Growth"
    },
    {
      id: 4,
      quote: "Zero screen time, vibrant cultural festivals, and warm teachers. Ishani runs to her school van every morning with a cheerful smile!",
      parentName: "Sneha Iyer",
      childDetail: "Mother of Ishani (Junior KG • Pune)",
      rating: 5,
      avatar: "/images/testimonials/parent_3.jpg",
      tag: "Joyful Learning"
    },
    {
      id: 5,
      quote: "The daycare is spotless with timely homework guidance. As working parents, daily live updates and loving care are an absolute blessing for us.",
      parentName: "Dr. Rohit Nair",
      childDetail: "Father of Reyansh (Daycare • Gurugram)",
      rating: 5,
      avatar: "/images/testimonials/parent_dad_2.jpg",
      tag: "Daycare Support"
    },
    {
      id: 6,
      quote: "The motherly warmth of every educator here is remarkable. Diya learned sharing, phonics, and clay art without any pressure. Aarambh is simply the best!",
      parentName: "Pooja Verma",
      childDetail: "Mother of Diya (Toddler Club • Mumbai)",
      rating: 5,
      avatar: "/images/testimonials/parent_6.jpg",
      tag: "Motherly Care"
    }
  ],

  // Gallery Images (Authentic Indian Playschool)
  gallery: [
    { id: 1, image: "/images/gallery/gallery_1.jpg", alt: "Creative pottery & clay art in Indian preschool" },
    { id: 2, image: "/images/gallery/gallery_2.jpg", alt: "Morning yoga & prayer circle in Indian playschool" },
    { id: 3, image: "/images/gallery/gallery_3.jpg", alt: "Outdoor playground slide & lush lawn fun" },
    { id: 4, image: "/images/gallery/gallery_4.jpg", alt: "Festive celebration with flower rangoli" },
    { id: 5, image: "/images/gallery/gallery_5.jpg", alt: "Story reading corner with caring teacher" },
    { id: 6, image: "/images/gallery/gallery_6.jpg", alt: "Montessori building blocks & sensory lab" }
  ],

  // Daily Nutritious Sattvic Snack Menu (Parents love seeing this!)
  weeklyMenu: [
    { day: "Monday", breakfast: "Warm Vegetable Poha & Roasted Almonds", lunch: "Moong Dal Khichdi with Desi Ghee & Curd", snack: "Seasonal Fresh Fruit Bowl" },
    { day: "Tuesday", breakfast: "Steamed Rava Idli with Mild Coconut Chutney", lunch: "Soft Phulkas, Paneer Bhurji & Cucumber Sticks", snack: "Jaggery Makhana & Milk" },
    { day: "Wednesday", breakfast: "Oats & Dry Fruit Kheer (Low Sweetness)", lunch: "Rajma Rice with Tomato Salad", snack: "Boiled Sweet Corn Chaat" },
    { day: "Thursday", breakfast: "Vegetable Vermicelli Upma", lunch: "Yellow Dal, Jeera Rice & Steamed Carrots", snack: "Fresh Papaya & Banana slices" },
    { day: "Friday", breakfast: "Mini Methi Thepla with Homemade Curd", lunch: "Dal Palak, Rice & Beetroot Raita", snack: "Whole Wheat Biscuit & Milk" },
    { day: "Saturday", breakfast: "Fruit Pancake with Pure Honey drizzle", lunch: "Pulao with Mix Sprouts & Buttermilk", snack: "Roasted Chana & Coconut water" }
  ],

  // Social Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919876543210"
  }
};
