import "dotenv/config.js";
import "../../config/dataBase.js";
import Itinerary from "../Itinerary.js";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

const itineraries = [
  {
    author: {
      name: "Juan Pérez",
      photo: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b3"),
    price: 100,
    duration: 3,
    likes: 0,
    hashtags: ["#Paris", "#EiffelTower"],
    comments: [],
    activities: [
      {
        name: "Visit the Eiffel Tower",
        description: "Enjoy panoramic views from the top of the Eiffel Tower.",
        photo:
          "https://images.pexels.com/photos/2467552/pexels-photo-2467552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Maria Gómez",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6c1"),
    price: 120,
    duration: 2,
    likes: 5,
    hashtags: ["#Rome", "#Colosseum"],
    comments: [],
    activities: [
      {
        name: "Tour the Colosseum",
        description: "Explore the ancient Roman amphitheater.",
        photo:
          "https://images.pexels.com/photos/208739/pexels-photo-208739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b4"),
    price: 150,
    duration: 4,
    likes: 10,
    hashtags: ["#NewYork", "#StatueOfLiberty"],
    comments: [],
    activities: [
      {
        name: "Visit the Statue of Liberty",
        description: "Take a ferry ride and explore the iconic monument.",
        photo:
          "https://images.pexels.com/photos/374726/pexels-photo-374726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Sophie Laurent",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b5"),
    price: 90,
    duration: 1,
    likes: 2,
    hashtags: ["#Tokyo", "#Shibuya"],
    comments: [],
    activities: [
      {
        name: "Explore Shibuya Crossing",
        description: "Experience the world's busiest pedestrian crossing.",
        photo:
          "https://images.pexels.com/photos/2667762/pexels-photo-2667762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Carlos Rivera",
      photo: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bf"),
    price: 110,
    duration: 2,
    likes: 7,
    hashtags: ["#Dubai", "#BurjKhalifa"],
    comments: [],
    activities: [
      {
        name: "Visit Burj Khalifa",
        description: "Take in the view from the world's tallest building.",
        photo:
          "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Emily Chen",
      photo: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6c0"),
    price: 95,
    duration: 1,
    likes: 3,
    hashtags: ["#Bangkok", "#Temples"],
    comments: [],
    activities: [
      {
        name: "Visit Wat Arun",
        description: "Explore the Temple of Dawn along the river.",
        photo:
          "https://images.pexels.com/photos/2087463/pexels-photo-2087463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Liam O'Connor",
      photo: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bd"),
    price: 140,
    duration: 3,
    likes: 6,
    hashtags: ["#Berlin", "#History"],
    comments: [],
    activities: [
      {
        name: "Tour the Berlin Wall",
        description: "Learn about history at the Berlin Wall Memorial.",
        photo:
          "https://images.pexels.com/photos/164712/pexels-photo-164712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Laura Smith",
      photo: "https://randomuser.me/api/portraits/women/58.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b9"),
    price: 105,
    duration: 2,
    likes: 8,
    hashtags: ["#London", "#BigBen"],
    comments: [],
    activities: [
      {
        name: "Visit Big Ben",
        description: "Take a tour of London's iconic clock tower.",
        photo:
          "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Oliver Brown",
      photo: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6be"),
    price: 125,
    duration: 4,
    likes: 10,
    hashtags: ["#CapeTown", "#TableMountain"],
    comments: [],
    activities: [
      {
        name: "Hike Table Mountain",
        description: "Enjoy breathtaking views of Cape Town from Table Mountain.",
        photo:
          "https://www.discoverafrica.com/wp-content/uploads/2022/07/iStock-1371129172-1024x683.jpg",
      },
    ],
  },
  {
    author: {
      name: "Isabella Ruiz",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b7"),
    price: 95,
    duration: 2,
    likes: 4,
    hashtags: ["#Cairo", "#Pyramids"],
    comments: [],
    activities: [
      {
        name: "Explore the Pyramids of Giza",
        description: "Marvel at the ancient pyramids and the Great Sphinx.",
        photo:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=1100&h=1100&s=1",
      },
    ],
  },
  {
    author: {
      name: "Luca Bianchi",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6c1"),
    price: 130,
    duration: 3,
    likes: 6,
    hashtags: ["#Rome", "#VaticanCity"],
    comments: [],
    activities: [
      {
        name: "Visit Vatican City",
        description: "Explore St. Peter's Basilica and the Sistine Chapel.",
        photo:
          "https://cdn-imgix.headout.com/microbrands-content-image/image/70c7e9051c3411a0653fa26b23c7bd6c-history%20of%20Vatican%20City.jpeg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces",
      },
    ],
  },
  {
    author: {
      name: "Elena Ortiz",
      photo: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b8"),
    price: 110,
    duration: 2,
    likes: 8,
    hashtags: ["#BuenosAires", "#Tango"],
    comments: [],
    activities: [
      {
        name: "Experience Tango in Buenos Aires",
        description: "Enjoy a traditional tango show and dinner.",
        photo:
          "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/10/16837113541343.jpg",
      },
    ],
  },
  {
    author: {
      name: "James Miller",
      photo: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bb"),
    price: 140,
    duration: 4,
    likes: 11,
    hashtags: ["#RioDeJaneiro", "#ChristTheRedeemer"],
    comments: [],
    activities: [
      {
        name: "Visit Christ the Redeemer",
        description: "Take in breathtaking views of Rio from Corcovado Mountain.",
        photo:
          "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_45448c583eabca7ad6be347939c641312d4ce7570209ad29d3345175aea14fec.jpg",
      },
    ],
  },
  {
    author: {
      name: "Ana Silva",
      photo: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6be"),
    price: 125,
    duration: 3,
    likes: 7,
    hashtags: ["#CapeTown", "#Winelands"],
    comments: [],
    activities: [
      {
        name: "Tour the Cape Winelands",
        description: "Enjoy wine tasting and stunning scenery.",
        photo:
          "https://images.pexels.com/photos/434647/pexels-photo-434647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Oliver Hansen",
      photo: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bd"),
    price: 100,
    duration: 2,
    likes: 5,
    hashtags: ["#Berlin", "#MuseumIsland"],
    comments: [],
    activities: [
      {
        name: "Visit Museum Island",
        description: "Discover the art and history of Berlin.",
        photo:
          "https://images.pexels.com/photos/255945/pexels-photo-255945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Sophia Chang",
      photo: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6c0"),
    price: 115,
    duration: 3,
    likes: 9,
    hashtags: ["#Bangkok", "#FloatingMarkets"],
    comments: [],
    activities: [
      {
        name: "Visit Floating Markets",
        description: "Experience the vibrant culture of Bangkok's floating markets.",
        photo:
          "https://thailandstartshere.com/wp-content/uploads/2024/03/Amphawa-11.jpg",
      },
    ],
  },
  {
    author: {
      name: "Daniel Grayson",
      photo: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b5"),
    price: 135,
    duration: 4,
    likes: 12,
    hashtags: ["#Tokyo", "#MountFuji"],
    comments: [],
    activities: [
      {
        name: "Day Trip to Mount Fuji",
        description: "Admire Japan's most iconic peak and its surrounding areas.",
        photo:
          "https://images.pexels.com/photos/4215802/pexels-photo-4215802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Liam Thompson",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b9"),
    price: 90,
    duration: 2,
    likes: 4,
    hashtags: ["#London", "#TowerOfLondon"],
    comments: [],
    activities: [
      {
        name: "Tour the Tower of London",
        description: "Explore the historic castle and learn about its rich history.",
        photo:
          "https://images.squarespace-cdn.com/content/v1/6397e1ebbb148c2e8ac0b037/28bd2e1a-71d4-4dbf-b8a9-b34bdee409a8/London_1_2019-4508.jpg",
      },
    ],
  },
  {
    author: {
      name: "Emily Brown",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b4"),
    price: 110,
    duration: 3,
    likes: 6,
    hashtags: ["#NewYork", "#CentralPark"],
    comments: [],
    activities: [
      {
        name: "Bike Ride in Central Park",
        description: "Enjoy a scenic bike ride through New York's iconic park.",
        photo:
          "https://static.anuevayork.com/wp-content/uploads/2020/06/13180423/Que-ver-en-Central-Park-Rutas-a-pie-y-en-bicicleta.jpg",
      },
    ],
  },
  {
    author: {
      name: "Charlotte Evans",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b3"),
    price: 120,
    duration: 3,
    likes: 7,
    hashtags: ["#Paris", "#Louvre"],
    comments: [],
    activities: [
      {
        name: "Visit the Louvre Museum",
        description: "Explore the world's largest art museum and its iconic artworks.",
        photo:
          "https://images.pexels.com/photos/457821/pexels-photo-457821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Mason Hill",
      photo: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bf"),
    price: 140,
    duration: 4,
    likes: 10,
    hashtags: ["#Dubai", "#DesertSafari"],
    comments: [],
    activities: [
      {
        name: "Desert Safari Adventure",
        description: "Experience a thrilling desert safari and traditional Bedouin culture.",
        photo:
          "https://images.pexels.com/photos/2356055/pexels-photo-2356055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Amelia Martinez",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b6"),
    price: 95,
    duration: 2,
    likes: 3,
    hashtags: ["#Sydney", "#BondiBeach"],
    comments: [],
    activities: [
      {
        name: "Visit Bondi Beach",
        description: "Relax on the golden sands of Sydney's iconic beach.",
        photo:
          "https://www.bondipavilion.com.au/__data/assets/image/0019/204922/Visit-Bondi-Beach-Pavilion-venue-ocean-front-views-tile.jpg",
      },
    ],
  },
  {
    author: {
      name: "Lucas Wright",
      photo: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b5"),
    price: 100,
    duration: 3,
    likes: 5,
    hashtags: ["#Tokyo", "#Asakusa"],
    comments: [],
    activities: [
      {
        name: "Visit Asakusa",
        description: "Explore the historic district and the famous Senso-ji Temple.",
        photo:
          "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/images/area022_1001_34.jpg",
      },
    ],
  },
  {
    author: {
      name: "Victoria Lee",
      photo: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b9"),
    price: 130,
    duration: 3,
    likes: 6,
    hashtags: ["#London", "#ThamesCruise"],
    comments: [],
    activities: [
      {
        name: "Thames River Cruise",
        description: "Enjoy a scenic cruise along the River Thames.",
        photo:
          "https://images.pexels.com/photos/2220720/pexels-photo-2220720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Benjamin Carter",
      photo: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b4"),
    price: 110,
    duration: 2,
    likes: 8,
    hashtags: ["#NewYork", "#Broadway"],
    comments: [],
    activities: [
      {
        name: "Broadway Show Experience",
        description: "Watch a world-class performance on Broadway.",
        photo:
          "https://images.pexels.com/photos/1056250/pexels-photo-1056250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Emily Wilson",
      photo: "https://randomuser.me/api/portraits/women/83.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6c1"),
    price: 120,
    duration: 3,
    likes: 7,
    hashtags: ["#Rome", "#TreviFountain"],
    comments: [],
    activities: [
      {
        name: "Visit the Trevi Fountain",
        description: "Toss a coin into the famous fountain and make a wish.",
        photo:
          "https://images.pexels.com/photos/33109/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Henry Davis",
      photo: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b7"),
    price: 150,
    duration: 4,
    likes: 11,
    hashtags: ["#Cairo", "#NileCruise"],
    comments: [],
    activities: [
      {
        name: "Nile River Cruise",
        description: "Experience a luxurious cruise along the historic Nile River.",
        photo:
          "https://images.pexels.com/photos/2252273/pexels-photo-2252273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Sophia Garcia",
      photo: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6bd"),
    price: 105,
    duration: 2,
    likes: 4,
    hashtags: ["#Berlin", "#BrandenburgGate"],
    comments: [],
    activities: [
      {
        name: "Visit Brandenburg Gate",
        description: "Discover the iconic symbol of Berlin.",
        photo:
          "https://images.pexels.com/photos/219326/pexels-photo-219326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Ella Martinez",
      photo: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    city: new mongoose.Types.ObjectId("6744682d28b2dbe83bbda6b8"),
    price: 115,
    duration: 3,
    likes: 5,
    hashtags: ["#BuenosAires", "#LaBoca"],
    comments: [],
    activities: [
      {
        name: "Explore La Boca",
        description: "Stroll through Buenos Aires' colorful neighborhood.",
        photo:
          "https://images.pexels.com/photos/210559/pexels-photo-210559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],

  },

];

Itinerary.insertMany(itineraries)
  .then(() => {
    console.log("dateses inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
