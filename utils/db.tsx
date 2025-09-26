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
    id: 491,
    disabled: true,
    title: "Introduction to WebGL",
    category: "coding",
    caption: "I am the caption",
    date: "2024-10-17",
    content: {
      Country: "Markdown Content to Go here",
      Description: "WebGL is Fun",
    },
  },
  {
    id: 1,
    title: "Barranca",
    category: "travel",
    caption: "I am the caption",
    location: "Barranca",
    date: "2024-10-17",
    content: {
      Country: "Peru",
      City: "Lima",
      Rating: <StarRating stars={3} />,
      ArrivalDate: "2024-10-17", // YYYY-MM-DD, Dates are in ISO format
      DepartureDate: "2024-10-19",
      Duration: "3 Days",
      Description:
        "At the airport, without data I was hustled in a black Taxi and we agreed on the price of 60, the same as shown on Uber. After a friendly chat we arrived at my hostel in Miraflores where he told me the price was 60 USD and that PEN stood for Pesos International not Soles. Surprisingly Pesos International isn’t a thing ( not sure how a currency could be international ), but in my sleep deprived state I caved under the pressure and paid it. Not my finest hour. Personally I didn’t enjoy Lima, the former most likely tainting my initial impression, but there also isn’t a while bunch to do, you can surf here but the beach isn’t great and it’s kind of cold. I didn’t go out partying here, which being the party place in Peru could have changed my perspective. I did however reconnect with Mike here and we went to see some of the archaeological site scattered throughout the city, with it supposedly being built on top of an ancient civilisation. I also enjoyed adjoining neighbourhood Barranco, very colourful with graffiti on most of the buildings and cool hipster bars. If I stayed in Lima again, I’d give Miraflores a miss and stay in Barraco instead.",
    },
  },
  {
    id: 10,
    title: "Lima",
    location: "Lima",
    category: "travel",
    caption: "I am a caption",
    content: {
      Country: "Peru",
      City: "Lima",
      Rating: <StarRating stars={2} />,
      ArrivalDate: "2024-10-15",
      DepartureDate: "2024-10-17",
      Duration: "3 Days",
      Description:
        "At the airport, without data I was hustled in a black Taxi and we agreed on the price of 60, the same as shown on Uber. After a friendly chat we arrived at my hostel in Miraflores where he told me the price was 60 USD and that PEN stood for Pesos International not Soles. Surprisingly Pesos International isn’t a thing ( not sure how a currency could be international ), but in my sleep deprived state I caved under the pressure and paid it. Not my finest hour. Personally I didn’t enjoy Lima, the former most likely tainting my initial impression, but there also isn’t a while bunch to do, you can surf here but the beach isn’t great and it’s kind of cold. I didn’t go out partying here, which being the party place in Peru could have changed my perspective. I did however reconnect with Mike here and we went to see some of the archaeological site scattered throughout the city, with it supposedly being built on top of an ancient civilisation. I also enjoyed adjoining neighbourhood Barranco, very colourful with graffiti on most of the buildings and cool hipster bars. If I stayed in Lima again, I’d give Miraflores a miss and stay in Barraco instead.",
    },
  },
  {
    id: 14,
    title: "Salento",
    location: "Salento",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Salento",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-10-02",
      DepartureDate: "2024-10-05",
      Duration: "3 Days",
      Description:
        "Taking a bus from Pereira Hannah and I arrived to the heart of the coffee region. It was raining when we arrived, but it soon cleared to reveal a cute town with shops selling typical tourist items like jewelry, bags but there was also a shop selling embroidered denim. The flared jeans I bought here soon became a staple of my travel attire. The main attraction in Salento Cocora Valley with rolling hills and intimidatingly tall palm trees, a landscape that wouldn’t be out of place in a Jurassic Park movie. In the mornings we had the typical arepa, cheese, eggs and coffee, followed by riding in the back of the jeep to the valley and menu del día to recover from the days walk. We went twice in total, the first time taking a gamble because we didn’t want to pay entry to the valley getting lost and the second conceding and paying the entry. We only stayed here for 3 days, but it’s a lovely place to hike, be in nature and relax. ",
    },
  },
  {
    id: 7,
    title: "Cultivare",
    location: "Anapoima",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Anapoima",
      Rating: <StarRating stars={5} />,
      ArrivalDate: "2024-09-16",
      DepartureDate: "2024-09-28",
      Duration: "13 Days",
      Description:
        "My third work away in a rural town called Anapoima about 3 hours bus from Bogota working at a sustainable retreat. After my two weeks in Bogota I was excited to escape the hustle, noise and pollution of the city and return to the small town life I’d become accustomed to in travel like San Carlos and San Rafael, where the locals look at you with a sense of curiosity and bemusement about you’re presence so far from the Gringo Trail. Although a lot of the locals carry a machete strapped to their waist the small towns are some of the safest travel in Colombia, are the initial confusion the locals are lovely and they don’t try and rip you off because you’re a gringo like in the cities. The owners of the retreat, Natalia and Eyal ( who was away while I was there) built all the majestic but delicate looking structures from scratch out of Guadua ( the larger brother of Bamboo). The work was largely cultivating and maintaining the land like raking leaves, picking and juicing Mandarins and landscaping to make space for new structures. I enjoyed the structure provided here, waking up with the sun, lunch and siesta at 12 and finishing off work with a beer at the tienda with Papa. During my stay in Anapoima it hadn’t rained for a few months and so the rivers were dry and there was a water shortage. The Bogota river being way too polluted to even consider drinking from and the water companies that normally pump water up to the more rural regions not doing much to help. It highlighted to me how reliant these towns are on the natural weather systems to sustain their livelihood and how vulnerable they are against changing climates. ",
    },
  },
  {
    id: 2,
    title: "Bogota",
    location: "Bogota",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Bogota",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-09-03",
      DepartureDate: "2024-09-16",
      Duration: "14 Days",
      Description:
        "The reason for my premature arrival being to see a doctor I was feeling a little sorry for myself. Having heard a lot about it from my friend Dani that grew up here and Ale who I met a Journey Hostel I had a feeling I’d like the city. Initially I stayed in La Candeleria, more touristy with nice cafes, clothes shops and the Botero and gold museum but after a few days moved to my more preferred Chapinero. The area is more locals and also has a large gay population, Chapigay. Explains why the people here have a better fashion sense. It’s also the home of the majority of the better clubs in Bogota as well  Theatron, the largest gay club in south America. Here I felt like a local going about my every day business and is somewhere I feel I could potentially live for a bit. I reconnected with Ale from the Journey Hostel and he introduced me to one of his friends Dani. We went to Mad Radio, techno club on Wednesday and then Video Club, techno and reggaeton on Friday. Later on I went to Theatron with Hannah, which was definitely my favourite. It has something like 20 different rooms, ranging from big EDM theatre shaped rooms to cozy rooms playing Latin music, so it was easy to find your vibe. My favourite being the cozy ones playing Latin music. To recover from the club I went with Ale, Dani and their friends to a waterfall a couple hours outside Bogota. If the traffic in Bogota weren’t so bad theres so beautiful nature close to the city to escape the pollution and noise. In summary like most the cities there’s not a whole bunch to do tourist wise, but the vibe and atmosphere in Bogota was preferable to Medellin. ",
    },
  },
  {
    id: 13,
    title: "Palomino",
    location: "Palomino",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Palomino",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-08-30",
      DepartureDate: "2024-09-02",
      Duration: "3 Days",
      Description:
        "On my two days off from the Journey hostel I took a trip to Palomino to see Sophie, but also it’s a bit of a hipster town with a beach. Walking down the main road towards the beach you see small shops selling necklaces with spiritual stones, crochet garments and handmade jewelry. Living my best hipster life I bought a blue quartz stone to protect me from negative energies and supposedly helps with communication. Hablo mucho español. At one point a saw a lizard run across the dirt road and thought all that was needed was a bush weed to be in an American movie about the Wild West. Palomino had a laid back vibe, nice coffee shops and cocktails and is also a bit of a holiday destination for Colombians. This was unfortunately the last time I saw Sophie but I wish her the best and hope to see her soon in Rome.",
    },
  },
  {
    id: 4,
    title: "Cali",
    location: "Cali",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Cali",
      Rating: <StarRating stars={5} />,
      ArrivalDate: "2024-10-05", // YYYY-MM-DD
      DepartureDate: "2024-10-13", // YYYY-MM-DD
      Duration: "9 Days",
      Description:
        "The only expectations I had of Cali were salsa dancing, and to be honest I prefer not knowing much about a place before arriving, it means I just accept it for what it is and not comparing it to the idea of it in my head. We arrived on Friday and after a few cocktails headed out to salsa street. It was wonderfully chaotic with bars pumping out salsa music and waves of people dancing in the street drinking aguardiente. With little to no salsa ability we were initially unsure, but were soon approached by strangers more than willing to teach the gringos some of the basics. This was one of the things I loved about Cali, the culture to dance purely for the enjoyment, friends, strangers, lovers, it’s not important. Hannah and I spent the week at Viajero hostel doing private sala clases and then heading off to the local Salsa bar, La Topa, to show off our new moves. The hostel had a laid back, comfortable atmosphere and was super social. We met some lovely people here and would recommend to anyone staying in Cali.",
    },
  },
  {
    id: 9,
    title: "Journey Hostel",
    location: "Tatrona National Park",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Tayrona National Park",
      Rating: <StarRating stars={3} />,
      ArrivalDate: "2024-08-27",
      DepartureDate: "2024-09-03",
      Duration: "8 Days",
      Description:
        "My second work away experience volunteering behind the bar at a hostel in the outskirts of Tayrona national park. Unfortunately after the first day I got food poisoning and was up all night and then had issues with my throat so had to return to Bogota for treatment after only 6 days there. Having said that the view from the hostel was beautiful, I enjoyed making cocktails behind the bar and I met some lovely people including Alejandro and Lola, who made me a lovely mushroom earring. The north coast but especially here around tayrona is beautiful and has a great spiritual energy. I hope to return soon. ",
    },
  },
  {
    id: 3,
    title: "Rio Hostal",
    location: "Buritaca",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "buritaca",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-08-23",
      DepartureDate: "2024-08-25",
      Duration: "3 Days",
      Description:
        "Being immersed in the Colombian Culture for the last month or so, learning the language, working in a farm and missing the festival season in the Uk I was excited to descend into the chaos and excitement of the Bonanza festival at Rio hostel in Buritaca, a hostel owned by two British guys. Burtiaca is in a similar landscape to Minca, but more banana plantations and I disobeyed the rain is torrential, so much so the falling trees often cut out the electricity. After reuniting with Sophie and putting on our festival gear it was time to party. We arrived on the back of motos and after giving my sunglasses to the driver to protect his eyes from the rain forgot to ask for them back. Damp and minus my sunnies I was still excited. The hostel was decorated with a psychedelic theme and the sound system was also great, including some vinyl DJs. The highlight being the sunrise set on the final night it was nice to hear some peeper techno again. ",
    },
  },
  {
    id: 6,
    title: "Cerro Kennedy",
    location: "Minca",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Minca",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-08-17",
      DepartureDate: "2024-08-18",
      Duration: "2 Days",
      Description:
        "An early start waking up at 7am, breakfast at the local Panadería, chocolate bread and a coffee. The ideal healthy breakfast before a hike. It only took about 2 hours up to Hostel Ramo, my bed for the night, and after a cheeky episode of Narcos I continued my hike to the peak at 2800m. The very peak is occupied my a military base so a panoramic view isn’t possible. After a quick chat to the soldiers guarding a gate and being asked for a cigarette I returned to the hostel. After dinner with the 2 Frenchmen and 3 Colombians from Barranquilla also staying in the hostel, the typical Colombian soup followed rice, beans and chicken, it was time for an early night in preparation for the main event, the sunrise over the Sierra Nevada de Santa Marta mountain range, home to the highest mountain in Colombia, Cristobal Colon. I enjoyed the sense of adventure waking up early with a stillness in the air and the crisp morning air. Watching the sunset from the top of the mountain there an eerie stillness as though the world forgot to press play before the sun rises, the birds start to chirp and flow of life continues its course. When hiking a mountain I get the similar feeling of insignificance as when I look at the stars, but from that a sense of peace that my life and therefore problems are too insignificant and to simply live the life that world plays out for me. ",
    },
  },
  {
    id: 12,
    title: "Minca",
    location: "Minca",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Minca",
      Rating: <StarRating stars={5} />,
      ArrivalDate: "2024-08-14",
      DepartureDate: "2024-08-19",
      Duration: "6 Days",
      Description:
        "I’d heard of Minca before from friends and other travellers as a place of tranquility and fair to say it didn’t disappoint. Situated in the jungle along the north coast it was an enjoyable return of the landscapes I’d become accustomed to in San Carlos and San Rafael. It’s a surprisingly small village for how many tourists go there with the shops that do exist sell mushrooms, weed brownies, stick and poke tattoos and tarot readings, needless to say they’re appealing to a certain type. Along the same lines you can also do yoga every morning, Cacao ceremonies as well as bird watching but I spent my time hiking to waterfalls, swimming in the river and swinging in the hammock. I stayed at a hostel called Casa Loma which had a beautiful view over Santa Marta ( it’s much prettier from a distance ) and for sunset, they also had music and dance classes on different nights giving it a social vibe. I really enjoyed my time here and is a great place just to exist. ",
    },
  },
  {
    id: 8,
    title: "Isla Grande",
    location: "Cartagena",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Cartagena",
      Rating: <StarRating stars={3} />,
      ArrivalDate: "2024-08-08",
      DepartureDate: "2024-08-11",
      Duration: "4 Days",
      Description:
        "An island located off the coast of Cartagena, and contrary to what the name might suggest, the island is small. About 30mins to walk from one side to the other. As you walk round the island, small crabs scuttle back into their burrows in the sand and lizards rustle in the undergrowth. Walking around the local town, the locals sit outside sipping beer from plastic clubs and playing music on unnecessarily oversized sound systems, giving you a nod as you pass. The sea is really warm, probably hotter than some of the baths I’ve had, and the sea is a clear blue. It is undoubtably a beautiful island, but there are only 2 public beaches left, if you can call them beaches. More like slithers of sand where you just have enough room to lay down your towel at high tide. All the other beaches are privately owned by fancy hotels, hosting exclusive parties with private yachts. For somewhere with that is in a national park and you have to pay an entrance fee there’s a lot of boat activity and you can’t really swim properly in the because of this. Although this is a beautiful area the juxtaposition between the luxury lifestyle of the tourists in comparison to that of the locals was something that confused me and the fact the locals can’t properly access the beach of their own island is something I thought was a shame, so a bit of a mixed emotions about my experience here.",
    },
  },
  {
    id: 5,
    title: "Cartagena",
    location: "Cartagena",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "Cartagena",
      Rating: <StarRating stars={2} />,
      ArrivalDate: "2024-08-04",
      DepartureDate: "2024-08-08",
      Duration: "5 Days",
      Description:
        "The old town in Cartagena is pretty and quaint with cobblestone streets, designer shops, jewellery shops and houses with fancy door knocker painted brightly and decorated with ivy climbing up the front. It reminded me of walking around the fancy areas of some European cities like Barcelona or Rome. Cartagena has a history derived from Colonisation, being one of the only ports allowed to take slave shipments and therefore has a large afro influence. Although coming from Medellin, by no means cold, the humidity in Cartagena was a shock to system where you walk for 20 minutes and your top is drenched. I was also embraced with a tropical storm on my arrival where the channels that use to be roads turn into rivers. I got chatting to an Australian gay, of all travel on Grindr and ended up going out to a Karaoke bar with him and his two friends, also Australian, singing Shakira and then dancing at a rooftop bar. I didn’t really like Cartagena, it’s cute for a day but otherwise full of American tourists and expensive and the sea isn’t very accessible to escape the heat from the old town. My favourite parts were sitting in cute a library learning Spanish, sipping Limonada de Coco and going out partying. I think that says enough. ",
    },
  },
  {
    id: 15,
    title: "Ritmo Del Rio",
    location: "San Rafael",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "San Rafael",
      Rating: <StarRating stars={5} />,
      ArrivalDate: "2024-07-21",
      DepartureDate: "2024-08-04",
      Duration: "14 Days",
      Description:
        "A hidden paradise in the hills of San Rafael, completely immersed in Colombian jungle. An area with over 50 species of snakes, 15 of which are venomous and 5 that are deadly to humans. Luckily I didn’t get bitten and lived to tell the tail. San Rafael is also home to Leo the permaculture farmer who manages the farm in Ritmo Del Rio. For 3 hours a day 5 days a week I planted Lettuce and Plantin, collected grass for mulch and made Bocachi. Permaculture they say is a way of life not just an approach to land management. We made Bocachi by mixing microorganisms, chicken poo, sugar cane and leaving it to ferment for a few weeks. It can then be used as a natural fertiliser for the plants. Being a lifestyle Leo also drinks the micro-organisms as a type of Kombucha. Work was always followed by a swim in the river using Caco as a natural exfoliant and lazing in the hammocks. In the evenings we sat around the campfire, eating homemade banana cake with Macadamia ice cream. ",
    },
  },
  {
    id: 16,
    title: "Spanish Adventure",
    location: "San Carlos",
    category: "travel",
    caption: "I am the caption",
    content: {
      Country: "Colombia",
      City: "San Carlos",
      Rating: <StarRating stars={4} />,
      ArrivalDate: "2024-07-14",
      DepartureDate: "2024-07-21",
      Duration: "7 Days",
      Description:
        "San Carlos is a beautiful town in the middle of the Colombian country side. A small square in the center and bordered by mountains on all sides. I spent about 4 hours a day doing Spanish classes and then either exploring the town or immersing myself in nature at river or hiking in the jungle. I met a lovely group of people, mostly English but also from the states and Ireland as well. Camilla was my class teacher and made us the traditional Chocolate y Queso (not my favourite). My one on one teacher was called Leon (Camilla Boyfriend). We talked about a range of topics from fashion to religion, and in our final class he took me on the back of his bike showing me the local graffiti of San Carlos. San Carlos, like several Colombian towns, has a chequered past. Nicknamed the town of water use to be responsible for about 20 / 30% of the energy for Colombia in the form of a hydroelectric dam therefore targeted cartel and paramilitary groups looking for control. San Carlos is now a very friendly town and off the tourist trail. All the teachers in Spanish Adventure grew up or lived in San Carlos as so all the locals would greet us with a smile and help us when we buttered their language. Chispas the pet pig Shadow the dog that always followed us home from town were also staples of the Spanish Adventure experience.",
    },
  },
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
