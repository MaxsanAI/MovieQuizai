import type { Quiz } from '../../types';

export const movieCharacterQuiz: Quiz = {
  id: 'movie-character',
  slug: 'which-movie-character-are-you',
  title: 'Which Movie Character Are You?',
  subtitle: 'Answer a few questions. Meet your cinematic alter ego.',
  description:
    'Are you the relentless avenger, the adventurous scholar, or the underestimated genius? Take this quiz to discover which iconic movie character matches your personality.',
  category: 'Movie Character',
  emoji: '🎬',
  accentColor: '#e50914',
  gradient: 'linear-gradient(135deg, #e50914 0%, #b8060f 100%)',
  questions: [
    {
      id: 'q1',
      text: 'Your friend calls at 2 AM. What do you do?',
      answers: [
        { id: 'a1', text: 'I answer. Something feels wrong.' },
        { id: 'a2', text: 'I ignore it and call back tomorrow.' },
        { id: 'a3', text: 'I grab my jacket and go to them.' },
        { id: 'a4', text: 'I pick up and crack a joke to lighten the mood.' },
      ],
      weights: {
        a1: { 'john-wick': 2, 'katniss-everdeen': 3 },
        a2: { 'sherlock-holmes': 3, neo: 2 },
        a3: { 'john-wick': 3, 'indiana-jones': 2, thelma: 2 },
        a4: { 'ferris-bueller': 3, 'elle-woods': 2 },
      },
    },
    {
      id: 'q2',
      text: 'How do you approach a difficult problem?',
      answers: [
        { id: 'a1', text: 'I analyze every detail until the answer reveals itself.' },
        { id: 'a2', text: 'I trust my instincts and act fast.' },
        { id: 'a3', text: 'I charm my way through it.' },
        { id: 'a4', text: 'I question whether the problem is even real.' },
      ],
      weights: {
        a1: { 'sherlock-holmes': 3, 'elle-woods': 2 },
        a2: { 'john-wick': 3, 'katniss-everdeen': 2, 'indiana-jones': 2 },
        a3: { 'ferris-bueller': 3, 'elle-woods': 2 },
        a4: { neo: 3, 'sherlock-holmes': 2 },
      },
    },
    {
      id: 'q3',
      text: 'What matters most to you?',
      answers: [
        { id: 'a1', text: 'Loyalty to the people I love.' },
        { id: 'a2', text: 'Discovering the truth.' },
        { id: 'a3', text: 'Living life to the fullest.' },
        { id: 'a4', text: 'Being underestimated and proving everyone wrong.' },
      ],
      weights: {
        a1: { 'john-wick': 3, 'katniss-everdeen': 2 },
        a2: { 'sherlock-holmes': 3, 'indiana-jones': 2, neo: 2 },
        a3: { 'ferris-bueller': 3, thelma: 2 },
        a4: { 'elle-woods': 3, neo: 2 },
      },
    },
    {
      id: 'q4',
      text: 'Someone insults you in front of others. How do you react?',
      answers: [
        { id: 'a1', text: 'I stay calm and respond with devastating precision.' },
        { id: 'a2', text: 'I let it slide — they are not worth my time.' },
        { id: 'a3', text: 'I fire back with charm and a smile.' },
        { id: 'a4', text: 'I handle it later, quietly and permanently.' },
      ],
      weights: {
        a1: { 'sherlock-holmes': 3, 'elle-woods': 2 },
        a2: { 'katniss-everdeen': 2, neo: 3 },
        a3: { 'ferris-bueller': 3, 'elle-woods': 3, thelma: 2 },
        a4: { 'john-wick': 3, thelma: 2 },
      },
    },
    {
      id: 'q5',
      text: 'What is your idea of a perfect day?',
      answers: [
        { id: 'a1', text: 'Exploring somewhere I have never been.' },
        { id: 'a2', text: 'A quiet day with the people I care about.' },
        { id: 'a3', text: 'Doing something nobody expected me to do.' },
        { id: 'a4', text: 'Solving a puzzle nobody else could crack.' },
      ],
      weights: {
        a1: { 'indiana-jones': 3, thelma: 2 },
        a2: { 'john-wick': 2, 'katniss-everdeen': 3 },
        a3: { 'ferris-bueller': 3, 'elle-woods': 2 },
        a4: { 'sherlock-holmes': 3, neo: 2 },
      },
    },
    {
      id: 'q6',
      text: 'How do you handle failure?',
      answers: [
        { id: 'a1', text: 'I turn it into fuel and come back stronger.' },
        { id: 'a2', text: 'I pretend it did not happen and keep moving.' },
        { id: 'a3', text: 'I analyze what went wrong obsessively.' },
        { id: 'a4', text: 'I see it as part of a bigger picture I do not yet understand.' },
      ],
      weights: {
        a1: { 'elle-woods': 3, 'katniss-everdeen': 2, 'john-wick': 2 },
        a2: { 'ferris-bueller': 3, thelma: 2 },
        a3: { 'sherlock-holmes': 3, 'indiana-jones': 2 },
        a4: { neo: 3, 'katniss-everdeen': 2 },
      },
    },
    {
      id: 'q7',
      text: 'Pick a setting that feels like home:',
      answers: [
        { id: 'a1', text: 'A rainy city at night.' },
        { id: 'a2', text: 'An ancient ruin in the desert.' },
        { id: 'a3', text: 'A sunny campus full of possibility.' },
        { id: 'a4', text: 'The open road with no destination.' },
      ],
      weights: {
        a1: { 'john-wick': 3, 'sherlock-holmes': 2, neo: 2 },
        a2: { 'indiana-jones': 3, 'sherlock-holmes': 1 },
        a3: { 'elle-woods': 3, 'ferris-bueller': 2 },
        a4: { thelma: 3, 'ferris-bueller': 2, 'indiana-jones': 1 },
      },
    },
    {
      id: 'q8',
      text: 'What is your biggest weakness?',
      answers: [
        { id: 'a1', text: 'I cannot let go of the past.' },
        { id: 'a2', text: 'I avoid confronting my feelings.' },
        { id: 'a3', text: 'I care too much about what people think.' },
        { id: 'a4', text: 'I doubt myself until the moment of action.' },
      ],
      weights: {
        a1: { 'john-wick': 3, thelma: 2 },
        a2: { 'ferris-bueller': 3, 'sherlock-holmes': 2 },
        a3: { 'elle-woods': 3, 'ferris-bueller': 1 },
        a4: { neo: 3, 'katniss-everdeen': 2 },
      },
    },
    {
      id: 'q9',
      text: 'When the stakes are highest, you...',
      answers: [
        { id: 'a1', text: 'Become eerily calm and focused.' },
        { id: 'a2', text: 'Rely on years of preparation.' },
        { id: 'a3', text: 'Improvise and somehow make it work.' },
        { id: 'a4', text: 'Rise up for the people counting on me.' },
      ],
      weights: {
        a1: { 'john-wick': 3, 'sherlock-holmes': 2 },
        a2: { 'katniss-everdeen': 3, 'indiana-jones': 2 },
        a3: { 'ferris-bueller': 3, 'elle-woods': 2, thelma: 2 },
        a4: { 'katniss-everdeen': 3, 'john-wick': 2, neo: 2 },
      },
    },
    {
      id: 'q10',
      text: 'What kind of movie would your life be?',
      answers: [
        { id: 'a1', text: 'A stylish action thriller.' },
        { id: 'a2', text: 'A globe-trotting adventure.' },
        { id: 'a3', text: 'A feel-good comedy with heart.' },
        { id: 'a4', text: 'A mind-bending sci-fi journey.' },
      ],
      weights: {
        a1: { 'john-wick': 3, thelma: 2 },
        a2: { 'indiana-jones': 3, 'katniss-everdeen': 2 },
        a3: { 'ferris-bueller': 3, 'elle-woods': 3 },
        a4: { neo: 3, 'sherlock-holmes': 2 },
      },
    },
  ],
  results: [
    {
      key: 'john-wick',
      name: 'John Wick',
      archetype: 'The Relentless Avenger',
      description:
        "You don't seek trouble, but when it finds you, it meets its match. You operate with precision, loyalty, and an unwavering sense of purpose.",
      traits: ['Loyal', 'Determined', 'Precise', 'Reserved'],
      strength: 'Unbreakable focus and loyalty to those you care about',
      weakness: 'You struggle to let go of the past',
      movieEnergy: 'Controlled intensity with explosive consequences',
      humorousObservation:
        'You probably have a specific set of skills, and yes, people keep finding out about them.',
      imagePromptBase:
        'A lone figure in a dark tailored suit standing in rain, neon city reflections, cinematic dramatic lighting, moody atmosphere, sharp contrast, film still aesthetic',
    },
    {
      key: 'indiana-jones',
      name: 'Indiana Jones',
      archetype: 'The Adventurous Scholar',
      description:
        'You balance intellect with action, always seeking truth while living for adventure. Knowledge is your weapon, adventure is your calling.',
      traits: ['Adventurous', 'Clever', 'Resourceful', 'Brave'],
      strength: 'You think your way out of impossible situations',
      weakness: "You can't resist a mystery, even a dangerous one",
      movieEnergy: 'Globetrotting excitement with a side of history',
      humorousObservation:
        "You've probably complained about snakes on a plane, a bus, and definitely in a pit.",
      imagePromptBase:
        'An adventurer in a fedora and leather jacket, dusty desert canyon, golden hour light, ancient ruins, cinematic adventure aesthetic',
    },
    {
      key: 'elle-woods',
      name: 'Elle Woods',
      archetype: 'The Underestimated Genius',
      description:
        'People judge you by your appearance, but you consistently prove them wrong. You combine charm with sharp intellect and unwavering self-confidence.',
      traits: ['Confident', 'Clever', 'Authentic', 'Determined'],
      strength: 'You turn every doubt into motivation',
      weakness: 'You care a little too much about what people think',
      movieEnergy: 'Pink power with a Harvard-degree punch',
      humorousObservation: 'You could win any argument while doing bend and snap.',
      imagePromptBase:
        'A confident young woman in pink surrounded by books and legal documents, bright campus setting, empowering cinematic portrait, warm lighting',
    },
    {
      key: 'ferris-bueller',
      name: 'Ferris Bueller',
      archetype: 'The Charismatic Free Spirit',
      description:
        'Life moves pretty fast, and you refuse to miss it. You charm everyone around you while bending rules with style and a smile.',
      traits: ['Charismatic', 'Spontaneous', 'Optimistic', 'Clever'],
      strength: 'You make everyone feel alive and included',
      weakness: 'You avoid confronting difficult emotions',
      movieEnergy: 'Joyful rebellion with a killer soundtrack',
      humorousObservation: "You've never missed a parade you couldn't crash.",
      imagePromptBase:
        'A young man on a float in a city parade, sunny day, joyful expression, vibrant colors, cinematic comedy aesthetic, golden hour',
    },
    {
      key: 'katniss-everdeen',
      name: 'Katniss Everdeen',
      archetype: 'The Reluctant Hero',
      description:
        'You never asked to be a symbol, but when the moment came, you stood up. You protect the people you love with fierce determination.',
      traits: ['Protective', 'Brave', 'Independent', 'Loyal'],
      strength: "You become the shield for those who can't protect themselves",
      weakness: 'You carry the weight of the world alone',
      movieEnergy: 'Quiet strength igniting into revolution',
      humorousObservation:
        "You volunteer for things you absolutely did not want to do, and somehow that's your whole personality now.",
      imagePromptBase:
        'A young woman with a bow in a forest, dystopian arena, dramatic sky, fiery cinematic lighting, heroic portrait',
    },
    {
      key: 'sherlock-holmes',
      name: 'Sherlock Holmes',
      archetype: 'The Brilliant Detective',
      description:
        'You see what others miss. Your mind is a palace of details, and you process the world through patterns most people never notice.',
      traits: ['Observant', 'Analytical', 'Brilliant', 'Intense'],
      strength: "You solve problems others can't even see",
      weakness: 'You struggle with emotional connection',
      movieEnergy: 'Victorian brilliance with modern edge',
      humorousObservation:
        "You've deduced someone's entire life story from their shoelaces. Twice. Today.",
      imagePromptBase:
        'A detective in a dark coat examining evidence, foggy Victorian London street, gaslight glow, moody cinematic atmosphere, sharp focus',
    },
    {
      key: 'thelma',
      name: 'Thelma',
      archetype: 'The Liberated Spirit',
      description:
        'You found freedom on the open road. You have learned that sometimes you have to lose everything to find yourself.',
      traits: ['Free-spirited', 'Loyal', 'Adventurous', 'Bold'],
      strength: 'You find courage when everything falls apart',
      weakness: 'You act before thinking when emotions run high',
      movieEnergy: 'Open-road rebellion with lifelong friendship',
      humorousObservation:
        "Your best ideas happen when you're supposed to be somewhere else entirely.",
      imagePromptBase:
        'Thelma, a single woman in a vintage convertible driving alone through an open desert landscape, wind in her hair, golden sunset, expressive determined face, freedom and adventure, cinematic road movie aesthetic, one character only',
    },
    {
      key: 'neo',
      name: 'Neo',
      archetype: 'The Chosen One',
      description:
        "You sense there's more to reality than what everyone accepts. When the truth arrives, you're ready to see how deep the rabbit hole goes.",
      traits: ['Curious', 'Awakened', 'Determined', 'Philosophical'],
      strength: 'You question everything and accept hard truths',
      weakness: 'You doubt yourself until the moment of action',
      movieEnergy: 'Digital rebellion with bullet-time precision',
      humorousObservation:
        "You've taken both pills simultaneously because commitment is hard.",
      imagePromptBase:
        'A figure in a long black coat in a rain-soaked city, green digital code reflections, cinematic sci-fi atmosphere, dramatic lighting',
    },
  ],
};


