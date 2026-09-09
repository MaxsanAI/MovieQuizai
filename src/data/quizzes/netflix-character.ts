import type { Quiz } from '../../types';

export const netflixCharacterQuiz: Quiz = {
  id: 'netflix-character',
  slug: 'which-netflix-character-are-you',
  title: 'Which Netflix Character Are You?',
  subtitle: 'From binge-worthy dramas to supernatural thrillers',
  description:
    'Are you the strategic mastermind, the small-town hero, or the complicated antihero? Answer 10 questions to find your streaming-era alter ego.',
  category: 'Netflix Character',
  emoji: '📺',
  accentColor: '#e50914',
  gradient: 'linear-gradient(135deg, #e50914 0%, #831010 100%)',
  questions: [
    {
      id: 'q1',
      text: 'You discover a dangerous secret about your town. What do you do?',
      answers: [
        { id: 'a1', text: 'I gather my friends and investigate together.' },
        { id: 'a2', text: 'I keep it quiet and handle it myself.' },
        { id: 'a3', text: 'I use it to my advantage.' },
        { id: 'a4', text: 'I go to the authorities, no matter the risk.' },
      ],
      weights: {
        a1: { 'joyce-byers': 3, 'eleven': 2 },
        a2: { 'ozark-wendy': 3, 'bojack-horseman': 1 },
        a3: { 'frank-underwood': 3, 'ozark-wendy': 2 },
        a4: { 'narcos-pena': 3, 'eleven': 2 },
      },
    },
    {
      id: 'q2',
      text: 'How do you handle power and ambition?',
      answers: [
        { id: 'a1', text: 'I pursue it strategically and without mercy.' },
        { id: 'a2', text: 'I use it to protect the people I love.' },
        { id: 'a3', text: 'I do not want power — I just want peace.' },
        { id: 'a4', text: 'I want it but I am afraid of who I become.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 3 },
        a2: { 'eleven': 3, 'joyce-byers': 2 },
        a3: { 'bojack-horseman': 2, 'narcos-pena': 1 },
        a4: { 'bojack-horseman': 3, 'joyce-byers': 2 },
      },
    },
    {
      id: 'q3',
      text: 'What is your biggest flaw?',
      answers: [
        { id: 'a1', text: 'I manipulate people to get what I want.' },
        { id: 'a2', text: 'I am too intense and scare people off.' },
        { id: 'a3', text: 'I self-sabotage everything good in my life.' },
        { id: 'a4', text: 'I put myself in danger for the truth.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 2 },
        a2: { 'eleven': 3, 'joyce-byers': 2 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'joyce-byers': 2 },
      },
    },
    {
      id: 'q4',
      text: 'How do you deal with difficult emotions?',
      answers: [
        { id: 'a1', text: 'I bury them and focus on the mission.' },
        { id: 'a2', text: 'I channel them into action.' },
        { id: 'a3', text: 'I make questionable decisions.' },
        { id: 'a4', text: 'I confront them head-on, even when it hurts.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 2, 'eleven': 1 },
        a2: { 'eleven': 3, 'narcos-pena': 2 },
        a3: { 'bojack-horseman': 3, 'ozark-wendy': 1 },
        a4: { 'joyce-byers': 3, 'narcos-pena': 2 },
      },
    },
    {
      id: 'q5',
      text: 'What would you do for family?',
      answers: [
        { id: 'a1', text: 'Anything — including things I am not proud of.' },
        { id: 'a2', text: 'I would face any danger to protect them.' },
        { id: 'a3', text: 'I would sacrifice my own happiness.' },
        { id: 'a4', text: 'I would cross every line, legal and moral.' },
      ],
      weights: {
        a1: { 'ozark-wendy': 3, 'frank-underwood': 1 },
        a2: { 'joyce-byers': 3, 'eleven': 2 },
        a3: { 'bojack-horseman': 2, 'eleven': 2 },
        a4: { 'ozark-wendy': 3, 'frank-underwood': 2, 'joyce-byers': 1 },
      },
    },
    {
      id: 'q6',
      text: 'How do you view the world?',
      answers: [
        { id: 'a1', text: 'As a game board — and I intend to win.' },
        { id: 'a2', text: 'As a dangerous place that needs protecting.' },
        { id: 'a3', text: 'As a mess I am barely navigating.' },
        { id: 'a4', text: 'As a system that needs to be exposed.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 2 },
        a2: { 'eleven': 3, 'joyce-byers': 2 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'frank-underwood': 1 },
      },
    },
    {
      id: 'q7',
      text: 'What is your ideal setting?',
      answers: [
        { id: 'a1', text: 'The corridors of power.' },
        { id: 'a2', text: 'A small town with big secrets.' },
        { id: 'a3', text: 'A chaotic city full of broken dreams.' },
        { id: 'a4', text: 'A dangerous frontier where rules bend.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 2 },
        a2: { 'joyce-byers': 3, 'eleven': 3 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'ozark-wendy': 1 },
      },
    },
    {
      id: 'q8',
      text: 'How do you treat your enemies?',
      answers: [
        { id: 'a1', text: 'I destroy them completely and strategically.' },
        { id: 'a2', text: 'I confront them with force if needed.' },
        { id: 'a3', text: 'I avoid them and hope they go away.' },
        { id: 'a4', text: 'I expose them and let the truth do the work.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 3 },
        a2: { 'eleven': 3, 'joyce-byers': 1 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'frank-underwood': 1 },
      },
    },
    {
      id: 'q9',
      text: 'What drives you deep down?',
      answers: [
        { id: 'a1', text: 'Control and legacy.' },
        { id: 'a2', text: 'Love and protection.' },
        { id: 'a3', text: 'A desperate need to be loved.' },
        { id: 'a4', text: 'Justice and the truth.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 3 },
        a2: { 'joyce-byers': 3, 'eleven': 3 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'eleven': 1 },
      },
    },
    {
      id: 'q10',
      text: 'What kind of show would your life be?',
      answers: [
        { id: 'a1', text: 'A political thriller.' },
        { id: 'a2', text: 'A supernatural mystery.' },
        { id: 'a3', text: 'A dark comedy.' },
        { id: 'a4', text: 'A crime drama.' },
      ],
      weights: {
        a1: { 'frank-underwood': 3, 'ozark-wendy': 2 },
        a2: { 'joyce-byers': 3, 'eleven': 3 },
        a3: { 'bojack-horseman': 3 },
        a4: { 'narcos-pena': 3, 'ozark-wendy': 2 },
      },
    },
  ],
  results: [
    {
      key: 'joyce-byers',
      name: 'Joyce Byers',
      archetype: 'The Fierce Protector',
      description:
        'You will tear the world apart to find the people you love. Others call you crazy, but you know the truth, and you never stop fighting.',
      traits: ['Determined', 'Loving', 'Fearless', 'Relentless'],
      strength: 'You believe in what you see when no one else will',
      weakness: 'Your intensity can overwhelm the people around you',
      movieEnergy: 'Christmas lights and interdimensional determination',
      humorousObservation:
        'You have torn up your entire house looking for answers and somehow been right every time.',
      imagePromptBase:
        'A distressed woman in a dimly lit living room covered in alphabet letters and Christmas lights, dramatic shadows, supernatural thriller aesthetic, cinematic portrait',
    },
    {
      key: 'eleven',
      name: 'Eleven',
      archetype: 'The Powerful Outcast',
      description:
        'You possess extraordinary abilities and a heart that is learning to feel. You are learning who you are while the world tries to use you.',
      traits: ['Powerful', 'Loyal', 'Vulnerable', 'Brave'],
      strength: 'You combine immense power with deep empathy',
      weakness: 'You struggle to understand your own emotions',
      movieEnergy: 'Telekinetic power with an eggos-and-friends refuge',
      humorousObservation:
        'You have flipped a van with your mind and still get nervous talking to new people.',
      imagePromptBase:
        'A young woman with a shaved head and nosebleed, supernatural energy, dark laboratory, dramatic lighting, sci-fi thriller aesthetic, cinematic portrait',
    },
    {
      key: 'frank-underwood',
      name: 'Frank Underwood',
      archetype: 'The Political Predator',
      description:
        'You view the world as a chessboard and you are always three moves ahead. Power is not a goal — it is the only thing that makes sense.',
      traits: ['Strategic', 'Ruthless', 'Charismatic', 'Calculating'],
      strength: 'You outmaneuver everyone through patience and strategy',
      weakness: 'You sacrifice every relationship for power',
      movieEnergy: 'Breaking the fourth wall with a Southern drawl',
      humorousObservation:
        'You have turned to the camera mid-conversation and told the audience your real plan. Bold.',
      imagePromptBase:
        'A well-dressed politician in a dark office, Washington monument visible, cold blue lighting, political thriller aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'ozark-wendy',
      name: 'Wendy Byrde',
      archetype: 'The Pragmatic Survivor',
      description:
        'You did not choose this life, but you are terrifyingly good at it. You justify everything in the name of family and build an empire from chaos.',
      traits: ['Strategic', 'Protective', 'Ruthless', 'Adaptable'],
      strength: 'You adapt to any situation and come out on top',
      weakness: 'You lose yourself a little more with each compromise',
      movieEnergy: 'Lake-house laundering with a moral freefall',
      humorousObservation:
        'You started as a normal person and ended up running a criminal enterprise. Quite the career pivot.',
      imagePromptBase:
        'A composed woman in professional attire on a lake house deck, sunset over water, tension in her expression, crime drama aesthetic, cinematic portrait',
    },
    {
      key: 'bojack-horseman',
      name: 'BoJack Horseman',
      archetype: 'The Self-Sabotaging Star',
      description:
        'You are deeply flawed and you know it. You chase happiness in all the wrong places, but you are also capable of growth, even if it takes a while.',
      traits: ['Self-aware', 'Self-destructive', 'Witty', 'Vulnerable'],
      strength: 'You are honest about your flaws (eventually)',
      weakness: 'You destroy good things before they can be taken away',
      movieEnergy: 'Hollywoo existentialism with a bottle of whiskey',
      humorousObservation:
        'You have been on a comeback for twenty years and it is always almost happening.',
      imagePromptBase:
        'A melancholic figure on a couch in a lavish but decaying living room, sunset through tall windows, dark comedy aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'narcos-pena',
      name: 'Javier Peña',
      archetype: 'The Relentless Agent',
      description:
        'You chase the truth across borders and into danger. You believe in justice even when the system does not, and you bend rules to do what is right.',
      traits: ['Determined', 'Brave', 'Rebellious', 'Principled'],
      strength: 'You never stop pursuing justice, no matter the cost',
      weakness: 'You blur the line between justice and obsession',
      movieEnergy: 'DEA cowboy with a Colombian manhunt',
      humorousObservation:
        'You have broken every rule in the handbook and still consider yourself the good guy. Debatable.',
      imagePromptBase:
        'A determined agent in casual clothes, Colombian street at dusk, dramatic shadows, crime drama aesthetic, cinematic gritty portrait',
    },
  ],
};
