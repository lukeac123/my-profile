import { StarRating } from "../components/StarRating";
import { IconMail, IconBrandGithub } from "@tabler/icons-react";

export type HeroImage = { caption: String; imgSrc: string };

export const homePageData = {
  "Developer. Engineer. Traveller": {
    caption:
      "I’m a self-taught software engineer specialising in UI for web apps, previously studying as a Mechanical Engineer. Having recently returned from a Career break travelling South America, I’m looking for a new challenge, to not only apply my existing skill set but learn new technologies and drive meaningful change.",
    cards: [
      {
        title: "CV",
        description: "Check out my previous experience here!",
        link: "/cv",
      },
    ],
  },
  Coding: {
    caption: "Here at the projects I've been working on",
    media: "",
    cards: [
      {
        title: "This Website",
        description:
          "Originally built as a travel blog for my time in South America, but has transitioned into a general portfolio page. Using Next.js App router and Mantine as the component library. Coming Soon.... Markdown to JSX for blog posts and implementation of Strapi as a headless CMS (Jamstack architecture).",
        link: "https://github.com/lukeac123/my-profile",
      },
      {
        title: "Eccomerce Site",
        description:
          "Eccomerce Shopping Cart Pattern, complete with shopping basket and pagination. Built with Next.js App router, jest for unit testing and Playwright for intergration testing. ",
        link: "https://github.com/lukeac123/eccomerce-site",
      },
      {
        title: "Audio Player",
        description:
          "React Audio Player, utilsing the Audio Context API and providing an Audio Reactive visualisation using p5.js",
        link: "https://github.com/lukeac123/audioPlayer",
        disabled: true,
      },
    ],
  },
  Travel: {
    caption:
      "Finishing University in the pandemic and being in full time education or work since the ripe old age of 5, my first day of primary school, I decided it was time to broaden my horizons and set sail for South America. This is a documentation of some of my thoughts, feelings and experiences along the way.",
    cards: [
      {
        title: "Travel Blog",
        description: "",
        link: "/blog",
      },
      {
        title: "Audio",
        description:
          "Audio clips on my travels to provide an added sensory element to the traditional blog and create a more immersive experience. The hope was also that in the future these could also be used in Audio projects",
        link: "./audio",
      },
      {
        title: "Gallery",
        description:
          "A collection of moments from my travels — landscapes, streets, and cultures captured while on my travels.",
        link: "./photography",
      },
    ],
  },
};

export const audioClips = [
  {
    title: "Cocora Valley River",
    location: "Cocora Valley - Salenta",
    link: "/audio",
    audioSrc: "audio/cocora_valley_river.m4a",
    indexImgSrc: "audio/cocora_valley_river.jpeg",
    description:
      "After taking the wrong way because we didn’t want to pay the entrance fee for the Cocoa Valley, Hannah and I took a detour and hiked up a mountain for a few hours. On our way back we stopped at this river to cool down and have an Oreo snack break.",
  },
  {
    title: "Cultivare Rain",
    location: "Anapoima (3 Hours from Bogota)",
    link: "/audio",
    audioSrc: "audio/cultivare_rain.m4a",
    indexImgSrc: "audio/cultivare_rain.jpeg",
    description:
      "…. another recording of rain, you can see a pattern here. This was by no means as intense as the other two, but at the time I was there, there was a water shortage due to lack of rain and river contamination. This was the first real down pour in over 3 months. I also like the sound of the rain bouncing off the bamboo structure.",
  },
  {
    title: "Isla Grande Rain",
    location: "Rosario Islands Isla Grande",
    link: "/audio",
    audioSrc: "audio/isla_grande_rain.m4a",
    indexImgSrc: "audio/isla_grande_rain.jpeg",
    description:
      "This is some of the most intense thunder and lighting I witnessed so far on my trip, the audio from my iPhone doesn’t do it justice. But on a small island in the middle of the Caribbean Sea something that initially shocked me awake brought relief from the heat and helped me sleep.",
  },
  {
    title: "Ritmo Del Rio River",
    location: "San Rafael",
    link: "/audio",
    audioSrc: "audio/ritmo_del_rio_river.m4a",
    indexImgSrc: "audio/ritmo_del_rio_river.jpeg",
    description:
      "The river played a major part in my experience at the farm. First thing after working in the morning, straight to the river to clean off the dirt and freshen up before lunch, looking forward to the fresh juice served with Lunch. “The morning sun energises you and the river heals you”.",
  },
  {
    title: "Ritmo Del Rio",
    location: "San Rafael",
    link: "/audio",
    audioSrc: "audio/ritmo_del_rio.m4a",
    indexImgSrc: "audio/ritmo_del_rio.jpeg",
    description:
      "When the sun goes down at the farm in San Rafael, you have the songs of the crickets and the birds to serenade you to sleep.",
  },
  {
    title: "Spanish Adventure Garden",
    location: "San Carlos",
    link: "/audio",
    audioSrc: "audio/spanish_adventure_garden.m4a",
    indexImgSrc: "audio/spanish_adventure_garden.jpeg",
    description:
      "In a small pueblo called San Carlos you’re never alone for the constant murmur of the Cicadas. I was shock when one of these first flew into the house, looking like a black golden snitch.",
  },
  {
    title: "Mamasita Restaurant",
    location: "Guatape",
    link: "/audio",
    audioSrc: "audio/mamasita.m4a",
    indexImgSrc: "audio/mamasita.jpeg",
    description:
      "My first time eating out solo in a restaurant, in my travels but potentially in my life as well. I had Chicharon, ( crispy pork belly) typical to the Paisa region. The pork was a bit too crispy for me but I enjoyed listening to the live band.",
  },
  {
    title: "Guatape Biblical Rain",
    location: "Guatape",
    link: "/audio",
    audioSrc: "audio/guatape_lake_rain.m4a",
    indexImgSrc: "audio/guatape_lake_rain.jpeg",
    description:
      "While on a boat trip around Guatape Lake ( a man made reservoir), we got caught in torrential rain, my first experience of the torrential rain in Colombia. Needless to say I got completely drenched. Got a nice audio clip out of it so silver linings.",
  },
];

export interface Place {
  title: string;
  location: string;
  link: string;
  imgDir: string;
  indexImageSrc?: string;
  content: {
    Country: string;
    City: string;
    Rating: JSX.Element;
    ArrivalDate: string;
    DepartureDate: string;
    Duration: string;
    Description: string;
  };
}

export const blogs = [
  {
    id: 11,
    title: "Los Patios Hostel",
    location: "Medellin",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Medellin",
      Rating: <StarRating stars={3} />,
      ArrivalDate: "2024-07-09",
      DepartureDate: "2024-07-14",
      Duration: "5 Days",
      Description:
        "The first step on my voyage to freedom from the monotony of a corporate 9 to 5. I sept my time in Medellin exploring the city center on a walking tour, learning about the rejuvenation of areas like Communa 13 away from its violent past dominated by drug cartels to a more sustainable one based on tourism and textiles; largely due to the implementation of cable cars facilitating easier transportation from the suburbs. I was also there during the time semi-finals of the Copa America where Colombia beat Uruguay. On the day of the match  the city was littered in yellow shirts and watching the match in the streets of El Poblado there was chaos when the final whistle below. A street parade of drums seemed to materialise from thin air and the waiters from the bars poured Aquadiente into the open mouths of locals and tourists. On one of the nights I popped into one of the gay bars, Chiquitas ( little ones ). Unfortunately it was karaoke night and latin love love songs weren’t my vibe. Having said that I found Medellin to be a vibrant colourful city that was surprising queer friendly. The Area the hostel was located in, El Poblado, is super touristy and although there are lots of nice bars and cafes I would recommend Laureles for a more authentic experience. Lastly I also went out, evading the Bad Bunny and Karol G to listen to explore the Techno scene, firstly to a rooftop bar called CincuentaCincuenta and then on to a club called Sonorama. I’d recommend both.",
    },
  },
];

export const links = [
  {
    icon: <IconMail />,
    label: "luke.atkinson-coyle@outlook.com",
    link: "",
  },
  {
    icon: <IconBrandGithub />,
    label: "https://github.com/lukeac123",
    link: "https://github.com/lukeac123",
  },
];

export const lineChartData = [
  {
    id: "frontEndDeveloper",
    label: "Front End Developer",
    color: "#ffa8a8",
    values: [
      { x: 2021, y: 0 },
      { x: 2022, y: 25 },
      { x: 2023, y: 80 },
      { x: 2024, y: 100 },
      { x: 2025, y: 100 },
    ],
  },
  {
    id: "awsCloudDeveloper",
    label: "AWS Cloud Developer",
    color: "#8ce99a",
    values: [
      { x: 2021, y: 0 },
      { x: 2022, y: 50 },
      { x: 2023, y: 60 },
      { x: 2024, y: 60 },
      { x: 2025, y: 60 },
    ],
  },
  {
    id: "productManager",
    label: "Product Manager",
    color: "#ffe066",
    values: [
      { x: 2019, y: 0 },
      { x: 2020, y: 30 },
      { x: 2021, y: 50 },
      { x: 2022, y: 50 },
      { x: 2023, y: 50 },
      { x: 2024, y: 50 },
      { x: 2025, y: 50 },
    ],
  },
  {
    id: "worldTraveller",
    label: "World Traveller",
    color: "#ffc078",
    values: [
      { x: 2017, y: 20 },
      { x: 2018, y: 30 },
      { x: 2019, y: 40 },
      { x: 2020, y: 40 },
      { x: 2021, y: 40 },
      { x: 2022, y: 60 },
      { x: 2023, y: 70 },
      { x: 2024, y: 100 },
      { x: 2025, y: 100 },
    ],
  },
  {
    id: "mechanicalEngineer",
    label: "Mechanical Engineer",
    color: "#ffc078",
    values: [
      { x: 2017, y: 100 },
      { x: 2018, y: 100 },
      { x: 2019, y: 100 },
      { x: 2020, y: 100 },
      { x: 2021, y: 0 },
    ],
  },
];
