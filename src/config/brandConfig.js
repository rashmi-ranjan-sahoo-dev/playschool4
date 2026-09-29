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
      title: "Playgroup (Nanhe Kadam)",
      age: "1.5 to 2.5 Years",
      timing: "9:00 AM - 11:30 AM",
      badgeColor: "bg-[#FC800A]",
      textColor: "text-[#FC800A]",
      description: "Sensory stimulation, gross motor play, musical rhymes, and gentle separation from parents through joy.",
      highlights: ["Tactile & sensory discovery", "Social sharing & circle time", "Potty training assistance", "Gross & fine motor skills"],
      fees: "₹4,500 / month",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nursery",
      title: "Nursery (Umang)",
      age: "2.5 to 3.5 Years",
      timing: "9:00 AM - 12:30 PM",
      badgeColor: "bg-[#5AAD65]",
      textColor: "text-[#5AAD65]",
      description: "Laying strong foundations with Jolly Phonics, pre-math, Hindi rhymes, nature walks, and creative drama.",
      highlights: ["Phonics letter sounds", "Number recognition 1-20", "Panchatantra moral stories", "Montessori practical life"],
      fees: "₹5,200 / month",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "junior-kg",
      title: "Junior KG / LKG (Tarang)",
      age: "3.5 to 4.5 Years",
      timing: "8:45 AM - 1:00 PM",
      badgeColor: "bg-[#FAB823]",
      textColor: "text-[#FAB823]",
      description: "Fostering sentence formation, early arithmetic, environmental science, curiosity, and team sports.",
      highlights: ["Reading sight words", "Basic additions & shapes", "Environmental awareness", "Yoga & mindful breathing"],
      fees: "₹5,800 / month",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "senior-kg",
      title: "Senior KG / UKG (Udaan)",
      age: "4.5 to 5.5 Years",
      timing: "8:45 AM - 1:30 PM",
      badgeColor: "bg-[#F96EA0]",
      textColor: "text-[#F96EA0]",
      description: "Primary school readiness: English fluency, cursive writing, Hindi Swar-Vyanjan, STEM projects, and public speaking.",
      highlights: ["Primary school transition", "Logical reasoning & STEM", "Hindi varnamala & speaking", "Stage confidence & debates"],
      fees: "₹6,400 / month",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "daycare",
      title: "Daycare & Infant Care (Suraksha)",
      age: "6 Months to 10 Years",
      timing: "8:00 AM - 7:00 PM",
      badgeColor: "bg-[#171E45]",
      textColor: "text-[#171E45]",
      description: "A home away from home with CCTV access, hot sattvic nutritious meals, homework support, and cozy nap rooms.",
      highlights: ["Fresh home-style meals", "Loving Aaya Didi care", "Homework assistance", "Live parent streaming"],
      fees: "₹7,500 / month",
      image: "https://images.unsplash.com/photo-1567057420215-1d94f2b96053?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "activity-club",
      title: "After-School Enrichment Club",
      age: "3 to 12 Years",
      timing: "3:30 PM - 6:00 PM",
      badgeColor: "bg-[#4EC5F1]",
      textColor: "text-[#4EC5F1]",
      description: "Vedic Math, Abacus, Classical Dance, Karate, Robotics for kids, and Shloka chanting.",
      highlights: ["Abacus & mental math", "Kathak & Bollywood beats", "Junior robotics tinkering", "Speech & drama guild"],
      fees: "₹3,200 / month",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
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

  // Indian Parent Testimonials
  testimonials: [
    {
      id: 1,
      quote: "Sending our 2-year old Vihaan to Aarambh was the best decision! The live CCTV on the mobile app gives us total peace of mind while working. He now recites Gayatri Mantra and English phonics with equal ease!",
      parentName: "Dr. Ananya & Rohit Deshmukh",
      childDetail: "Parents of Vihaan (Playgroup - Noida Campus)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "What impressed us most is the clean sattvic meal plan and the motherly care of the teachers. The van service with Didi is punctual and completely secure. Aarambh feels like our extended family.",
      parentName: "Sneha & Arvind Kulkarni",
      childDetail: "Parents of Ananya (Nursery - Bengaluru Campus)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "The NEP 2020 hands-on methodology here is phenomenal. My daughter Aadhya used to be shy, but within 6 months she was anchoring the Annual Day celebration. Truly grateful to the mentors!",
      parentName: "Meenakshi & Vikramaditya Sharma",
      childDetail: "Parents of Aadhya (Senior KG - Delhi NCR)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      quote: "Daycare facility is spotless. The homework support and evening snacks are so wholesome. I never have to worry about my twins during my long hospital shifts. 10/10 recommended for working parents.",
      parentName: "Pooja & Harish Nair",
      childDetail: "Parents of Kabir & Reyansh (Daycare - Pune)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // Gallery Categories & Images
  gallery: [
    { title: "Montessori Activity Lab", category: "Classrooms", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80" },
    { title: "Sensory Splash Pool & Sand Pit", category: "Outdoors", image: "https://images.unsplash.com/photo-1567057420215-1d94f2b96053?auto=format&fit=crop&w=700&q=80" },
    { title: "Bal-Gopal Festive Celebration", category: "Events", image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=700&q=80" },
    { title: "Morning Yoga & Meditation Circle", category: "Wellness", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80" },
    { title: "Creative Pottery & Folk Art", category: "Art & Craft", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80" },
    { title: "Story Corner & Phonics Library", category: "Library", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80" }
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
