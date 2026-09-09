import type { Quiz } from '../../types';

export const movieUniverseQuiz: Quiz = {
  id: 'movie-universe',
  slug: 'which-movie-universe-belongs-to-you',
  title: 'Which Movie Universe Belongs to You?',
  subtitle: 'Where in the cinematic multiverse do you truly belong?',
  description:
    'Are you meant for a galaxy far, far away, a magical wizarding world, or a post-apocalyptic wasteland? Answer 10 questions to find your universe.',
  category: 'Movie Universe',
  emoji: '🌌',
  accentColor: '#6a1b9a',
  gradient: 'linear-gradient(135deg, #6a1b9a 0%, #320b46 100%)',
  questions: [
    {
      id: 'q1',
      text: 'What kind of world would you want to live in?',
      answers: [
        { id: 'a1', text: 'A galaxy full of alien civilizations and starships.' },
        { id: 'a2', text: 'A hidden world of magic and ancient creatures.' },
        { id: 'a3', text: 'A gritty city where anyone can be a hero.' },
        { id: 'a4', text: 'A vast wilderness where humanity starts over.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3, 'blade-runner': 2 },
        a4: { 'mad-max': 3, 'avatar': 2 },
      },
    },
    {
      id: 'q2',
      text: 'What kind of power or ability appeals to you most?',
      answers: [
        { id: 'a1', text: 'The Force — a connection to all living things.' },
        { id: 'a2', text: 'Magic — spells, potions, and ancient knowledge.' },
        { id: 'a3', text: 'Superhuman abilities — strength, speed, flight.' },
        { id: 'a4', text: 'Survival skills — I make my own power.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 1 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3 },
        a4: { 'mad-max': 3, 'avatar': 2, 'blade-runner': 1 },
      },
    },
    {
      id: 'q3',
      text: 'What role would you play in your universe?',
      answers: [
        { id: 'a1', text: 'The explorer charting new worlds.' },
        { id: 'a2', text: 'The chosen one with a destiny.' },
        { id: 'a3', text: 'The hero who rises from nothing.' },
        { id: 'a4', text: 'The survivor who rebuilds from the ashes.' },
      ],
      weights: {
        a1: { 'star-trek': 3, 'avatar': 2 },
        a2: { 'star-wars': 3, 'harry-potter': 3 },
        a3: { 'marvel-mcu': 3, 'harry-potter': 1 },
        a4: { 'mad-max': 3, 'blade-runner': 2 },
      },
    },
    {
      id: 'q4',
      text: 'What is the biggest threat in your ideal universe?',
      answers: [
        { id: 'a1', text: 'An empire seeking to control everything.' },
        { id: 'a2', text: 'A dark lord who will not stay dead.' },
        { id: 'a3', text: 'Powerful villains with world-ending plans.' },
        { id: 'a4', text: 'The collapse of civilization itself.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 3 },
        a3: { 'marvel-mcu': 3 },
        a4: { 'mad-max': 3, 'blade-runner': 2 },
      },
    },
    {
      id: 'q5',
      text: 'What kind of companions would you want?',
      answers: [
        { id: 'a1', text: 'A diverse crew of aliens and explorers.' },
        { id: 'a2', text: 'Loyal friends and magical creatures.' },
        { id: 'a3', text: 'A team of extraordinary heroes.' },
        { id: 'a4', text: 'A few tough survivors I trust with my life.' },
      ],
      weights: {
        a1: { 'star-trek': 3, 'star-wars': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3 },
        a4: { 'mad-max': 3, 'blade-runner': 2, 'avatar': 1 },
      },
    },
    {
      id: 'q6',
      text: 'What does your ideal universe look like?',
      answers: [
        { id: 'a1', text: 'Sleek starships and glowing alien cities.' },
        { id: 'a2', text: 'Ancient castles, enchanted forests, and hidden worlds.' },
        { id: 'a3', text: 'Modern cities with secret hero headquarters.' },
        { id: 'a4', text: 'Untamed nature and raw, unfiltered beauty.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 3 },
        a2: { 'harry-potter': 3, 'middle-earth': 3 },
        a3: { 'marvel-mcu': 3, 'blade-runner': 2 },
        a4: { 'avatar': 3, 'mad-max': 2 },
      },
    },
    {
      id: 'q7',
      text: 'How do you travel in your universe?',
      answers: [
        { id: 'a1', text: 'Faster-than-light starships.' },
        { id: 'a2', text: 'Magical transport — brooms, portkeys, portals.' },
        { id: 'a3', text: 'High-tech vehicles and suits.' },
        { id: 'a4', text: 'Whatever I can build, fix, or ride.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 3 },
        a2: { 'harry-potter': 3, 'middle-earth': 1 },
        a3: { 'marvel-mcu': 3, 'blade-runner': 2 },
        a4: { 'mad-max': 3, 'avatar': 2 },
      },
    },
    {
      id: 'q8',
      text: 'What is the underlying philosophy of your universe?',
      answers: [
        { id: 'a1', text: 'Hope and rebellion can defeat any empire.' },
        { id: 'a2', text: 'Love and friendship are the strongest magic.' },
        { id: 'a3', text: 'With great power comes great responsibility.' },
        { id: 'a4', text: 'We must protect what we have or lose everything.' },
      ],
      weights: {
        a1: { 'star-wars': 3, 'star-trek': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3 },
        a4: { 'avatar': 3, 'mad-max': 3, 'blade-runner': 2 },
      },
    },
    {
      id: 'q9',
      text: 'What scares you about your universe?',
      answers: [
        { id: 'a1', text: 'The vast, uncaring emptiness of space.' },
        { id: 'a2', text: 'Dark magic that can corrupt anyone.' },
        { id: 'a3', text: 'Powerful beings who could end worlds.' },
        { id: 'a4', text: 'Losing what is left of humanity.' },
      ],
      weights: {
        a1: { 'star-trek': 3, 'star-wars': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3, 'blade-runner': 1 },
        a4: { 'mad-max': 3, 'blade-runner': 3, 'avatar': 1 },
      },
    },
    {
      id: 'q10',
      text: 'Why would you want to live in this universe?',
      answers: [
        { id: 'a1', text: 'To explore the unknown and meet new civilizations.' },
        { id: 'a2', text: 'To discover magic and wonder in the everyday.' },
        { id: 'a3', text: 'To be part of something epic and heroic.' },
        { id: 'a4', text: 'To build a new world from the ground up.' },
      ],
      weights: {
        a1: { 'star-trek': 3, 'star-wars': 2 },
        a2: { 'harry-potter': 3, 'middle-earth': 2 },
        a3: { 'marvel-mcu': 3, 'star-wars': 1 },
        a4: { 'mad-max': 3, 'avatar': 3, 'blade-runner': 1 },
      },
    },
  ],
  results: [
    {
      key: 'star-wars',
      name: 'The Star Wars Galaxy',
      archetype: 'The Galactic Rebel',
      description:
        'You belong in a galaxy at war, where the Force flows through everything and a farm kid can take down an empire. Your universe is about hope.',
      traits: ['Hopeful', 'Adventurous', 'Rebellious', 'Spiritual'],
      strength: 'You believe in the impossible and make it happen',
      weakness: 'You can be naive about the dark side of power',
      movieEnergy: 'Lightsabers, starships, and the Force',
      humorousObservation:
        'You have made a lightsaber sound with your mouth and meant it. Every time.',
      imagePromptBase:
        'A lone figure with a lightsaber on a desert planet, twin suns setting, dramatic sci-fi landscape, cinematic epic portrait, warm golden light',
    },
    {
      key: 'harry-potter',
      name: 'The Wizarding World',
      archetype: 'The Magical Chosen One',
      description:
        'You belong in a hidden world of magic where ancient castles hold secrets and friendship is the most powerful spell of all.',
      traits: ['Magical', 'Loyal', 'Brave', 'Curious'],
      strength: 'You find wonder and magic in everyday life',
      weakness: 'You can be reckless in pursuit of adventure',
      movieEnergy: 'Wands, potions, and a school of magic',
      humorousObservation:
        'You have waited for a Hogwarts letter well into adulthood. It is fine. It is coming.',
      imagePromptBase:
        'A magical castle glowing in the night, mist on a great lake, warm windows, fantasy aesthetic, cinematic dramatic landscape, deep blue tones',
    },
    {
      key: 'marvel-mcu',
      name: 'The Marvel Cinematic Universe',
      archetype: 'The Earthbound Hero',
      description:
        'You belong in a world where heroes walk among us, where anyone can be extraordinary, and where the fate of the universe comes down to one team.',
      traits: ['Heroic', 'Brave', 'Witty', 'Determined'],
      strength: 'You rise to any challenge, no matter how cosmic',
      weakness: 'You can carry the weight of the world alone',
      movieEnergy: 'Superhero spectacle with a post-credits scene',
      humorousObservation:
        'You have waited through every credits scene and would do it again.',
      imagePromptBase:
        'A team of heroes silhouetted against a dramatic sky, epic battle aftermath, cinematic superhero aesthetic, golden hour, heroic portrait',
    },
    {
      key: 'mad-max',
      name: 'The Wasteland',
      archetype: 'The Post-Apocalyptic Survivor',
      description:
        'You belong in a world where civilization has fallen and only the tough survive. It is brutal, raw, and strangely beautiful in its chaos.',
      traits: ['Survivor', 'Tough', 'Self-reliant', 'Resilient'],
      strength: 'You can survive and rebuild from nothing',
      weakness: 'You trust no one and carry everything alone',
      movieEnergy: 'Diesel, dust, and do-or-die desert chases',
      humorousObservation:
        'You have looked at a desert and thought "I could make this work." Bold.',
      imagePromptBase:
        'A lone figure in a desert wasteland with modified vehicles, dust storm, fire and rust, post-apocalyptic aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'avatar',
      name: 'The World of Pandora',
      archetype: 'The Nature-Bound Explorer',
      description:
        'You belong in a world of breathtaking natural beauty where everything is connected. You would fight to protect the wild places that remain.',
      traits: ['Connected', 'Brave', 'Spiritual', 'Protective'],
      strength: 'You understand the deep connection between all living things',
      weakness: 'You can be consumed by your bond with nature',
      movieEnergy: 'Bioluminescent forests and banshee flights',
      humorousObservation:
        'You have looked at a forest and genuinely considered living there forever.',
      imagePromptBase:
        'A figure in a bioluminescent alien jungle, glowing plants, floating mountains, vibrant colors, sci-fi fantasy aesthetic, cinematic epic portrait',
    },
    {
      key: 'blade-runner',
      name: 'The Cyberpunk Future',
      archetype: 'The Neon Detective',
      description:
        'You belong in a rain-soaked future where technology has outpaced humanity and the line between real and artificial has blurred beyond recognition.',
      traits: ['Observant', 'Philosophical', 'Cool', 'Independent'],
      strength: 'You see through illusions and question reality',
      weakness: 'You can be isolated in your search for truth',
      movieEnergy: 'Neon rain, synth music, and existential questions',
      humorousObservation:
        'You have questioned whether you are real at least once and honestly, the jury is still out.',
      imagePromptBase:
        'A figure in a trench coat in a neon-lit rainy city, holographic advertisements, reflections on wet streets, cyberpunk aesthetic, cinematic noir portrait',
    },
    {
      key: 'star-trek',
      name: 'The United Federation',
      archetype: 'The Starfleet Explorer',
      description:
        'You belong in a future of exploration and discovery, where humanity has moved beyond war and poverty to seek out new worlds and new civilizations.',
      traits: ['Curious', 'Diplomatic', 'Idealistic', 'Brave'],
      strength: 'You believe in the best version of the future',
      weakness: 'You can be too idealistic about complex situations',
      movieEnergy: 'Warp drive, diplomacy, and scientific discovery',
      humorousObservation:
        'You have said "make it so" or "engage" when starting your car. No judgment.',
      imagePromptBase:
        'A sleek starship orbiting a colorful nebula, stars and galaxies visible, futuristic bridge, sci-fi aesthetic, cinematic epic space portrait',
    },
    {
      key: 'middle-earth',
      name: 'Middle-earth',
      archetype: 'The Epic Quest-Bearer',
      description:
        'You belong in a world of ancient legends, where small people can change the fate of the world and the battle between good and evil is eternal.',
      traits: ['Brave', 'Loyal', 'Humble', 'Determined'],
      strength: 'You carry impossible burdens with quiet courage',
      weakness: 'You can be overwhelmed by the weight of your quest',
      movieEnergy: ' sweeping landscapes, ancient kingdoms, and a ring',
      humorousObservation:
        'You have gone on a long walk and called it an adventure. Second breakfast included.',
      imagePromptBase:
        'A vast fantasy landscape with mountains, rivers, and ancient ruins, dramatic clouds, golden light, epic fantasy aesthetic, cinematic wide shot',
    },
  ],
};
