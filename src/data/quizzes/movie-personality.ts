import type { Quiz } from '../../types';

export const moviePersonalityQuiz: Quiz = {
  id: 'movie-personality',
  slug: 'what-is-your-movie-personality',
  title: 'What Is Your Movie Personality?',
  subtitle: 'Beyond the character — what kind of movie person are you?',
  description:
    'Are you the dreamer, the realist, the adrenaline junkie, or the deep thinker? Answer 10 questions to discover your core movie personality type.',
  category: 'Movie Personality',
  emoji: '🎭',
  accentColor: '#ff9800',
  gradient: 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
  questions: [
    {
      id: 'q1',
      text: 'What kind of movie do you watch when you need comfort?',
      answers: [
        { id: 'a1', text: 'A sweeping romantic drama.' },
        { id: 'a2', text: 'A fast-paced action thriller.' },
        { id: 'a3', text: 'A thought-provoking sci-fi or drama.' },
        { id: 'a4', text: 'A laugh-out-loud comedy.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 2 },
        a3: { 'the-thinker': 3, 'the-dreamer': 2 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
    {
      id: 'q2',
      text: 'What draws you to a movie?',
      answers: [
        { id: 'a1', text: 'The emotional journey of the characters.' },
        { id: 'a2', text: 'The spectacle and adrenaline.' },
        { id: 'a3', text: 'The ideas and themes it explores.' },
        { id: 'a4', text: 'The entertainment value and escapism.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3 },
        a3: { 'the-thinker': 3, 'the-dreamer': 1 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
    {
      id: 'q3',
      text: 'How do you feel about happy endings?',
      answers: [
        { id: 'a1', text: 'I need them — life is hard enough.' },
        { id: 'a2', text: 'I prefer realistic endings, even if they are sad.' },
        { id: 'a3', text: 'I like endings that make me think.' },
        { id: 'a4', text: 'I like endings that surprise me.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-comedian': 2 },
        a2: { 'the-realist': 3, 'the-thinker': 2 },
        a3: { 'the-thinker': 3, 'the-dreamer': 2 },
        a4: { 'the-thrill-seeker': 3, 'the-comedian': 2 },
      },
    },
    {
      id: 'q4',
      text: 'What is your approach to life?',
      answers: [
        { id: 'a1', text: 'I follow my heart wherever it leads.' },
        { id: 'a2', text: 'I take calculated risks and seek excitement.' },
        { id: 'a3', text: 'I think deeply before acting.' },
        { id: 'a4', text: 'I take things as they come and keep laughing.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 1 },
        a3: { 'the-thinker': 3, 'the-realist': 2 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
    {
      id: 'q5',
      text: 'What is your biggest fear?',
      answers: [
        { id: 'a1', text: 'Never finding true connection.' },
        { id: 'a2', text: 'Living a boring, ordinary life.' },
        { id: 'a3', text: 'Never understanding the meaning of it all.' },
        { id: 'a4', text: 'Taking life too seriously and missing the joy.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3 },
        a3: { 'the-thinker': 3, 'the-dreamer': 2 },
        a4: { 'the-comedian': 3, 'the-realist': 1 },
      },
    },
    {
      id: 'q6',
      text: 'How do you handle conflict?',
      answers: [
        { id: 'a1', text: 'I try to find emotional resolution.' },
        { id: 'a2', text: 'I confront it head-on.' },
        { id: 'a3', text: 'I analyze it and find the logical solution.' },
        { id: 'a4', text: 'I deflect with humor.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 1 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 2 },
        a3: { 'the-thinker': 3, 'the-realist': 2 },
        a4: { 'the-comedian': 3, 'the-dreamer': 1 },
      },
    },
    {
      id: 'q7',
      text: 'What do you value most in others?',
      answers: [
        { id: 'a1', text: 'Emotional depth and authenticity.' },
        { id: 'a2', text: 'Courage and a sense of adventure.' },
        { id: 'a3', text: 'Intelligence and curiosity.' },
        { id: 'a4', text: 'Humor and a good perspective.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 1 },
        a3: { 'the-thinker': 3, 'the-dreamer': 1 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
    {
      id: 'q8',
      text: 'What kind of protagonist do you relate to?',
      answers: [
        { id: 'a1', text: 'The one who follows their heart.' },
        { id: 'a2', text: 'The one who takes action and never quits.' },
        { id: 'a3', text: 'The one who questions everything.' },
        { id: 'a4', text: 'The one who finds humor in the darkest moments.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 2 },
        a3: { 'the-thinker': 3, 'the-dreamer': 2 },
        a4: { 'the-comedian': 3, 'the-realist': 1 },
      },
    },
    {
      id: 'q9',
      text: 'How do you feel about reality?',
      answers: [
        { id: 'a1', text: 'I prefer to dream of what could be.' },
        { id: 'a2', text: 'I like to push its limits.' },
        { id: 'a3', text: 'I want to understand it completely.' },
        { id: 'a4', text: 'I accept it and find the fun in it.' },
      ],
      weights: {
        a1: { 'the-dreamer': 3, 'the-romantic': 2 },
        a2: { 'the-thrill-seeker': 3, 'the-realist': 1 },
        a3: { 'the-thinker': 3, 'the-realist': 2 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
    {
      id: 'q10',
      text: 'What is your movie personality at its core?',
      answers: [
        { id: 'a1', text: 'I am the heart of the story.' },
        { id: 'a2', text: 'I am the action and energy.' },
        { id: 'a3', text: 'I am the mind and meaning.' },
        { id: 'a4', text: 'I am the humor and humanity.' },
      ],
      weights: {
        a1: { 'the-romantic': 3, 'the-dreamer': 2 },
        a2: { 'the-thrill-seeker': 3 },
        a3: { 'the-thinker': 3, 'the-dreamer': 1 },
        a4: { 'the-comedian': 3, 'the-realist': 2 },
      },
    },
  ],
  results: [
    {
      key: 'the-romantic',
      name: 'The Romantic',
      archetype: 'The Heart-Driven Dreamer',
      description:
        'You experience life through emotion and connection. Every moment is a scene with meaning, and you believe in the power of love and vulnerability.',
      traits: ['Passionate', 'Empathetic', 'Idealistic', 'Emotional'],
      strength: 'You feel deeply and connect authentically with others',
      weakness: 'You can be blinded by your own emotions',
      movieEnergy: ' sweeping orchestral score with a rain-soaked confession',
      humorousObservation:
        'You have imagined a movie kiss in the rain at least once this week.',
      imagePromptBase:
        'A silhouetted couple on a rooftop at sunset, warm golden light, cinematic romantic drama aesthetic, dramatic sky, emotional atmosphere',
    },
    {
      key: 'the-thrill-seeker',
      name: 'The Thrill Seeker',
      archetype: 'The Adrenaline Protagonist',
      description:
        'You live for the rush. Boredom is your enemy and action is your language. You would rather have a short, exciting life than a long, dull one.',
      traits: ['Bold', 'Energetic', 'Fearless', 'Impulsive'],
      strength: 'You squeeze every drop of excitement out of life',
      weakness: 'You can chase thrills at the expense of stability',
      movieEnergy: 'Explosions, motorcycle chases, and a rocking soundtrack',
      humorousObservation:
        'You have said "how hard could it be?" before doing something definitely hard.',
      imagePromptBase:
        'A figure skydiving or riding a motorcycle at high speed, dramatic motion blur, vibrant sunset, action movie aesthetic, cinematic dynamic portrait',
    },
    {
      key: 'the-thinker',
      name: 'The Thinker',
      archetype: 'The Philosophical Mind',
      description:
        'You experience movies and life through ideas. You want to understand why things happen and what it all means. You are drawn to complexity.',
      traits: ['Analytical', 'Curious', 'Deep', 'Introspective'],
      strength: 'You see patterns and meaning others miss',
      weakness: 'You can overthink instead of act',
      movieEnergy: 'A quiet conversation that changes everything',
      humorousObservation:
        'You have paused a movie to explain the philosophical implications to someone who just wanted to watch it.',
      imagePromptBase:
        'A contemplative figure in a library or study, surrounded by books, dramatic single-source lighting, intellectual drama aesthetic, cinematic portrait',
    },
    {
      key: 'the-comedian',
      name: 'The Comedian',
      archetype: 'The Light in the Dark',
      description:
        'You find humor in everything, even the hard stuff. You believe laughter is how we survive, and you bring joy to every scene you are in.',
      traits: ['Witty', 'Resilient', 'Observant', 'Warm'],
      strength: 'You find light in the darkest moments',
      weakness: 'You use humor to deflect from real pain',
      movieEnergy: 'Perfect comedic timing in the middle of chaos',
      humorousObservation:
        'You have cracked a joke at the worst possible moment and somehow it was exactly right.',
      imagePromptBase:
        'A charismatic figure mid-laugh in a vibrant city setting, warm light, joyful energy, comedy drama aesthetic, cinematic candid portrait',
    },
    {
      key: 'the-dreamer',
      name: 'The Dreamer',
      archetype: 'The Visionary Escapist',
      description:
        'You see the world not as it is but as it could be. You are drawn to the fantastic, the magical, and the hopeful. You believe in possibilities.',
      traits: ['Imaginative', 'Hopeful', 'Creative', 'Idealistic'],
      strength: 'You envision futures no one else can see',
      weakness: 'You can lose yourself in dreams and avoid reality',
      movieEnergy: 'A sweeping fantasy landscape with an orchestral swell',
      humorousObservation:
        'You have spent more time planning your fantasy life than your actual week.',
      imagePromptBase:
        'A figure looking up at a vast starry sky, silhouette against aurora and mountains, wonder and possibility, cinematic fantasy aesthetic, dramatic portrait',
    },
    {
      key: 'the-realist',
      name: 'The Realist',
      archetype: 'The Grounded Survivor',
      description:
        'You see things as they are and deal with it. You do not need fantasy when reality is complex enough. You are reliable, practical, and tough.',
      traits: ['Practical', 'Reliable', 'Grounded', 'Tough'],
      strength: 'You handle reality without flinching',
      weakness: 'You can be cynical about dreams and idealism',
      movieEnergy: 'A gritty drama with no soundtrack and all truth',
      humorousObservation:
        'You have said "that would never happen" during every movie ever. Yes, everyone knows.',
      imagePromptBase:
        'A grounded figure in a realistic urban setting, overcast light, no glamour, raw and honest, drama aesthetic, cinematic naturalistic portrait',
    },
  ],
};
