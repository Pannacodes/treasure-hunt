export const gameData = {
  title: "A treasure hunt for Dani",
  subtitle: "If you get stuck, ask Anna.",
  physical: {
    heading: "The date that started it all",
    prompt: "What number brought you to this game?",
    hint: "It is a date you know very well.",
    day: 21,
    month: 8,
    year: 1985,
  },
  coordinates: {
    prompt: "Turn the date into latitude and longitude.",
    hint: "Day.month is one number. Your birth year split in half, is the other.",
    latitude: 21.08,
    longitude: 19.85,
    tolerance: 0.3,
    revealedWord: "CHAD",
    countPrompt: "How many letters are in that word?",
  },
  chad: {
    prompt:
      "Open Google Maps and input '21.08, 19.85' to look closely at the place where your pin landed. Enter its name, one letter at a time.",
    word: "CHAD",
  },
  transition: {
    prompt: "Do not forget this word. You will need it very soon.",
  },
  cities: [
    {
      id: "zendaya",
      city: "ZENDAYA",
      prompt:
        "I wear what I have worked on. I just got married. Spiderman loves me. Who am I?",
      hint: "Odyssey... Dune...",
      accepted: ["zendaya"],
      offsets: [-3, 1, -1],
    },
    {
      id: "carilleras",
      city: "CARILLERAS",
      prompt:
        "What is the dish you know how to cook well and have had many requests for? Friends and family!",
      hint: "Anna tried this meal early on in your relationship.",
      accepted: ["carilleras", "carrilleras"],
      offsets: [-2, -1, 3],
    },
    {
      id: "montpellier",
      city: "MONTPELLIER",
      prompt:
        "Anna and Dani drove nearby this city but never visited, although he has heard lots about it.",
      hint: "Go check the things on Anna's fridge.",
      accepted: ["montpellier"],
      offsets: [3, -2, 0],
    },
  ],
  destination: "LANZAROTE",
  quiz: {
    questions: [
      {
        prompt:
          "Lanzarote has flats where seawater evaporates in the sun, leaving white crystal fields behind. What are they made of?",
        accepted: ["salt"],
        word: "SALT",
        french: "sel",
      },
      {
        prompt:
          "Surfers flock here for one weather feature that never seems to stop blowing across the island. What is it?",
        accepted: ["wind"],
        word: "WIND",
        french: "vent",
      },
      {
        prompt:
          "The Atlantic never sits still around Lanzarote's black rock coast. What keeps crashing against it?",
        accepted: ["waves"],
        word: "WAVES",
        french: "vagues",
      },
    ],
  },
  finalRiddle: {
    durationPrompt: "What number have you used throughout this quiz?",
    finalPrompt:
      "Four hours. We leave with the morning. We move quietly. We listen more than we speak. No map can show exactly where we will find it. And what we hope to find isn't something you can simply see from land.",
    acceptedActivity: [
      "whale",
      "whales",
      "whale watching",
      "whale-watching",
      "dolphin",
      "dolphins",
      "ballena",
      "ballenas",
      "delfin",
      "delfines",
      "avistamiento de ballenas",
      "observar ballenas",
    ],

    acceptedDuration: 4,
    hints: [
      "Hint 1: You already found the place. -> Lanzarote.",
      "Hint 2: You already found three things that describe your surroundings. -> salt / waves / wind.",
      "Hint 3: You won't be listening to music.",
      "Hint 4: The final answer is an activity, not an object.",
    ],
  },
  reveal: {
    heading: "Treasure unlocked",
    body: "A whale-watching tour off the Lanzarote coast!",
    details: [
      "Electric catamaran: quiet and low-impact",
      "4-hour morning tour",
      "Onboard hydrophones, so we can actually hear the whales and dolphins",
      "Run by a marine research organisation (recommended by Mark and Laetitia!)",
    ],
    website: "https://wewhale.co",
  },
};
