export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface TourCategory {
  id: string;
  title: string;
  thumbnail: string;
  amenities: string[];
  photos: PhotoItem[];
}

export interface ReviewItem {
  id: string;
  name: string;
  avatarImage?: string;
  avatarColor?: string;
  duration: string;
  date: string;
  rating: number;
  comment: string;
}

export interface NearbyStay {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: number;
}

export const LISTING_DATA = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  specs: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  isGuestFavorite: true,
  pricePerNight: 5699,
  totalStayPrice: 28499,
  defaultNights: 5,
  defaultCheckIn: "2026-10-18",
  defaultCheckOut: "2026-10-23",
  cancellationDate: "17 October",
  
  host: {
    name: "Mirashya Homes",
    avatar: "/images/host.jpeg",
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bornIn: "80s",
    school: "NICMAR GOA",
    responseRate: "100%",
    responseTime: "within an hour",
    coHosts: [
      { name: "Sharath" },
      { name: "Simran" },
      { name: "Shruti" },
      { name: "Aman Dev Pahwa" },
      { name: "Pallavi" },
      { name: "Amisha" },
      { name: "Maria Karen Priyanka" },
      { name: "Sanyukta" }
    ]
  },

  heroPhotos: [
    {
      id: "hero-1",
      url: "/images/hero_1.jpg",
      caption: "Spacious living area with contemporary stone wall & designer lighting"
    },
    {
      id: "hero-2",
      url: "/images/hero_2.jpg",
      caption: "Living room lounge with coffee table and ambient lighting"
    },
    {
      id: "hero-3",
      url: "/images/hero_3.jpg",
      caption: "Private heated outdoor jacuzzi and wooden sun deck"
    },
    {
      id: "hero-4",
      url: "/images/hero_4.jpg",
      caption: "Master bedroom suite with plush double bed and warm natural light"
    },
    {
      id: "hero-5",
      url: "/images/hero_5.jpg",
      caption: "Exterior view of the luxury gated apartment complex in Candolim"
    }
  ],

  highlights: [
    {
      icon: "sun",
      title: "Outdoor entertainment",
      desc: "The pool and alfresco dining are great for summer trips."
    },
    {
      icon: "snowflake",
      title: "Designed for staying cool",
      desc: "Beat the heat with the A/C and ceiling fan."
    },
    {
      icon: "key",
      title: "Self check-in",
      desc: "You can check in with the building staff."
    }
  ],

  description: `📍 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafes, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 🌹🍸`,

  sleepingArrangements: [
    {
      title: "Bedroom",
      subtitle: "1 double bed",
      image: "/images/sleep_bedroom.jpg"
    },
    {
      title: "Living room",
      subtitle: "1 sofa",
      image: "/images/sleep_living.jpg"
    }
  ],

  featuredAmenities: [
    { name: "Kitchen", icon: "utensils" },
    { name: "Wifi", icon: "wifi" },
    { name: "Dedicated workspace", icon: "laptop" },
    { name: "Free parking on premises", icon: "car" },
    { name: "Pool", icon: "waves" },
    { name: "Hot tub", icon: "bath" },
    { name: "Pets allowed", icon: "paw" },
    { name: "Exterior security cameras on property", icon: "cctv" },
    { name: "Carbon monoxide alarm", icon: "shield-alert" },
    { name: "Smoke alarm", icon: "bell-ring" }
  ],

  allAmenitiesCategories: [
    {
      category: "Bathroom",
      items: ["Hairdryer", "Cleaning products", "Shampoo", "Hot water", "Shower gel"]
    },
    {
      category: "Bedroom and laundry",
      items: ["Washing machine", "Hangers", "Bed linen", "Room-darkening blinds", "Iron", "Clothes storage", "Cot"]
    },
    {
      category: "Entertainment",
      items: ["TV"]
    },
    {
      category: "Heating and cooling",
      items: ["Air conditioning", "Ceiling fan"]
    },
    {
      category: "Home safety",
      items: ["Exterior security cameras on property", "Carbon monoxide alarm", "Smoke alarm"]
    },
    {
      category: "Internet and office",
      items: ["Wifi", "Dedicated workspace"]
    },
    {
      category: "Kitchen and dining",
      items: ["Kitchen", "Fridge", "Freezer", "Microwave", "Cooking basics", "Crockery and cutlery", "Kettle"]
    },
    {
      category: "Parking and facilities",
      items: ["Free parking on premises", "Pool", "Hot tub", "Gym"]
    },
    {
      category: "Services",
      items: ["Pets allowed", "Cleaning available during stay", "Long-term stays allowed", "Self check-in"]
    }
  ],

  photoTour: [
    {
      id: "living-1",
      title: "Living room 1",
      thumbnail: "/images/hero_2.jpg",
      amenities: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
      photos: [
        { id: "l1-1", url: "/images/hero_1.jpg", caption: "Spacious seating lounge", category: "Living room 1" },
        { id: "l1-2", url: "/images/hero_2.jpg", caption: "Coffee table and contemporary decor", category: "Living room 1" }
      ]
    },
    {
      id: "living-2",
      title: "Living room 2",
      thumbnail: "/images/hero_1.jpg",
      amenities: ["Ceiling fan", "Hot tub"],
      photos: [
        { id: "l2-1", url: "/images/hero_3.jpg", caption: "Indoor-outdoor hot tub lounge", category: "Living room 2" },
        { id: "l2-2", url: "/images/sleep_living.jpg", caption: "Comfortable convertible sofa area", category: "Living room 2" }
      ]
    },
    {
      id: "kitchen",
      title: "Full kitchen",
      thumbnail: "/images/tour_kitchen_1.jpg",
      amenities: ["Kitchen", "Fridge", "Microwave", "Cooking basics"],
      photos: [
        { id: "k-1", url: "/images/tour_kitchen_1.jpg", caption: "Modern open kitchen with wooden cabinetry", category: "Full kitchen" },
        { id: "k-2", url: "/images/tour_kitchen_2.jpg", caption: "Kitchen island and appliances", category: "Full kitchen" },
        { id: "k-3", url: "/images/tour_kitchen_3.jpg", caption: "Dining setup and breakfast nook", category: "Full kitchen" }
      ]
    },
    {
      id: "bedroom",
      title: "Bedroom",
      thumbnail: "/images/hero_4.jpg",
      amenities: ["Double bed", "Air conditioning", "Bed linen", "Ceiling fan", "Clothes storage", "Cot", "Hangers", "Iron", "Room-darkening blinds", "Cleaning available during stay", "Cleaning products", "Long-term stays allowed", "Private entrance", "Wifi"],
      photos: [
        { id: "b-1", url: "/images/hero_4.jpg", caption: "Master double bed with nightstand and ambient lighting", category: "Bedroom" },
        { id: "b-2", url: "/images/sleep_bedroom.jpg", caption: "Full view of bedroom with wardrobe and balcony entrance", category: "Bedroom" }
      ]
    },
    {
      id: "bathroom",
      title: "Full bathroom",
      thumbnail: "/images/hero_1.jpg",
      amenities: ["Hairdryer", "Hot water", "Shampoo", "Shower gel"],
      photos: [
        { id: "ba-1", url: "/images/hero_1.jpg", caption: "Modern bathroom suite with rainfall shower", category: "Full bathroom" }
      ]
    },
    {
      id: "gym",
      title: "Gym",
      thumbnail: "/images/tour_gym_1.jpg",
      amenities: ["Air conditioning", "Gym", "Exercise equipment", "Ceiling fan"],
      photos: [
        { id: "g-1", url: "/images/tour_gym_1.jpg", caption: "Multi-gym strength trainer and yoga equipment", category: "Gym" },
        { id: "g-2", url: "/images/tour_gym_2.jpg", caption: "Treadmill and cardio zone with garden view", category: "Gym" },
        { id: "g-3", url: "/images/tour_gym_3.jpg", caption: "Elliptical machine and free weights", category: "Gym" },
        { id: "g-4", url: "/images/tour_gym_4.jpg", caption: "Spacious air-conditioned fitness studio", category: "Gym" }
      ]
    },
    {
      id: "exterior",
      title: "Exterior",
      thumbnail: "/images/tour_ext_1.jpg",
      amenities: ["Free parking on premises", "Garden", "Patio"],
      photos: [
        { id: "e-1", url: "/images/tour_ext_1.jpg", caption: "Aerial view of Amor De Goa complex surrounded by lush palm trees", category: "Exterior" },
        { id: "e-2", url: "/images/hero_5.jpg", caption: "Building entrance and parking area", category: "Exterior" }
      ]
    },
    {
      id: "pool",
      title: "Pool",
      thumbnail: "/images/hero_3.jpg",
      amenities: ["Pool", "Sun loungers", "Outdoor shower"],
      photos: [
        { id: "p-1", url: "/images/hero_3.jpg", caption: "Private jacuzzi deck", category: "Pool" }
      ]
    },
    {
      id: "additional",
      title: "Additional photos",
      thumbnail: "/images/hero_1.jpg",
      amenities: ["Interior details", "Architecture"],
      photos: [
        { id: "a-1", url: "/images/hero_1.jpg", caption: "Living room feature wall", category: "Additional photos" },
        { id: "a-2", url: "/images/hero_2.jpg", caption: "Living lounge angle", category: "Additional photos" },
        { id: "a-3", url: "/images/tour_kitchen_1.jpg", caption: "Kitchen bar area", category: "Additional photos" }
      ]
    }
  ],

  ratingBreakdown: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8,
    distribution: [
      { stars: 5, pct: 95 },
      { stars: 4, pct: 5 },
      { stars: 3, pct: 0 },
      { stars: 2, pct: 0 },
      { stars: 1, pct: 0 }
    ]
  },

  reviewTags: [
    { label: "Comfort", count: 6 },
    { label: "Accuracy", count: 5 },
    { label: "Hot tub", count: 5 },
    { label: "Condition", count: 4 },
    { label: "Hospitality", count: 8 },
    { label: "Cleanliness", count: 4 },
    { label: "Amenities", count: 2 },
    { label: "Decor", count: 2 },
    { label: "Indoor spaces", count: 2 },
    { label: "Location", count: 2 }
  ],

  reviews: [
    {
      id: "r1",
      name: "Amit",
      avatarImage: "/images/rev1.jpeg",
      avatarColor: "#E056FD",
      duration: "3 months on Airbnb",
      date: "1 week ago",
      rating: 5,
      comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
    },
    {
      id: "r2",
      name: "Aheesh",
      avatarImage: "/images/rev2.jpeg",
      avatarColor: "#686DE0",
      duration: "3 years on Airbnb",
      date: "2 weeks ago",
      rating: 5,
      comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
    },
    {
      id: "r3",
      name: "Samiksha",
      avatarImage: "/images/rev3.jpeg",
      avatarColor: "#FF7979",
      duration: "8 months on Airbnb",
      date: "May 2026",
      rating: 5,
      comment: "the host nitish was really great help"
    },
    {
      id: "r4",
      name: "Vedant",
      avatarImage: "/images/rev4.jpeg",
      avatarColor: "#706FD3",
      duration: "4 years on Airbnb",
      date: "May 2026",
      rating: 5,
      comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine..."
    },
    {
      id: "r5",
      name: "Vaibhav S",
      avatarImage: "/images/rev5.jpeg",
      avatarColor: "#22A6B3",
      duration: "3 years on Airbnb",
      date: "May 2026",
      rating: 5,
      comment: "Great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too."
    },
    {
      id: "r6",
      name: "Mohd",
      avatarImage: "/images/rev5.jpeg",
      avatarColor: "#30336B",
      duration: "5 years on Airbnb",
      date: "May 2026",
      rating: 5,
      comment: "Great place. Exactly as described in the listing."
    }
  ],

  nearbyStays: [
    {
      id: "ns-1",
      title: "Beautiful Studio with a view to die for",
      image: "/images/nearby_1.jpg",
      price: "₹28,600",
      rating: 4.91
    },
    {
      id: "ns-2",
      title: "NAQAB - 1BHK with private pool",
      image: "/images/nearby_2.jpg",
      price: "₹42,218",
      rating: 4.95
    },
    {
      id: "ns-3",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      image: "/images/nearby_3.jpg",
      price: "₹44,505",
      rating: 4.94
    },
    {
      id: "ns-4",
      title: "The Tropical Studio | 5 mins to Beach",
      image: "/images/nearby_4.jpg",
      price: "₹22,824",
      rating: 4.96
    },
    {
      id: "ns-5",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      image: "/images/nearby_5.jpg",
      price: "₹45,648",
      rating: 5.0
    },
    {
      id: "ns-6",
      title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
      image: "/images/nearby_6.jpg",
      price: "₹45,648",
      rating: 5.0
    },
    {
      id: "ns-7",
      title: "Luxury Apt | Private Pool | 6 Mins from Beach",
      image: "/images/nearby_7.jpg",
      price: "₹48,786",
      rating: 4.93
    },
    {
      id: "ns-8",
      title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
      image: "/images/nearby_8.jpg",
      price: "₹22,824",
      rating: 4.92
    }
  ]
};
