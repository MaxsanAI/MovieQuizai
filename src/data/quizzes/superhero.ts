import type { Quiz } from '../../types';

export const superheroQuiz: Quiz = {
  id: 'superhero',
  slug: 'which-superhero-are-you',
  title: 'Which Superhero Are You?',
  subtitle: 'Discover your inner hero and the power you never knew you had',
  description:
    'Are you the selfless savior, the brooding vigilante, or the genius inventor? Answer 10 questions to find your superhero match.',
  category: 'Superhero',
  emoji: '🦸',
  accentColor: '#1a73e8',
  gradient: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
  questions: [
    {
      id: 'q1',
      text: 'What drives you to help others?',
      answers: [
        { id: 'a1', text: 'A sense of responsibility I cannot ignore.' },
        { id: 'a2', text: 'A personal tragedy I will not let happen again.' },
        { id: 'a3', text: 'I have the power, so why would I not use it?' },
        { id: 'a4', text: 'I want to prove I am more than what people see.' },
      ],
      weights: {
        a1: { 'spider-man': 3, superman: 2 },
        a2: { batman: 3, 'black-panther': 2 },
        a3: { superman: 3, 'wonder-woman': 2 },
        a4: { 'iron-man': 3, 'spider-man': 2 },
      },
    },
    {
      id: 'q2',
      text: 'How do you feel about rules and authority?',
      answers: [
        { id: 'a1', text: 'I follow my own moral code above any law.' },
        { id: 'a2', text: 'I work within the system to change it.' },
        { id: 'a3', text: 'Rules are for people without my intellect.' },
        { id: 'a4', text: 'I respect authority but will break rules for the right reason.' },
      ],
      weights: {
        a1: { batman: 3, 'wonder-woman': 2 },
        a2: { 'black-panther': 3, superman: 2 },
        a3: { 'iron-man': 3, batman: 1 },
        a4: { 'spider-man': 3, superman: 2, 'black-panther': 1 },
      },
    },
    {
      id: 'q3',
      text: 'What is your greatest asset in a fight?',
      answers: [
        { id: 'a1', text: 'My mind — I outthink everyone.' },
        { id: 'a2', text: 'My physical training and discipline.' },
        { id: 'a3', text: 'My raw power and abilities.' },
        { id: 'a4', text: 'My heart — I never give up.' },
      ],
      weights: {
        a1: { 'iron-man': 3, batman: 2 },
        a2: { batman: 3, 'black-panther': 2, 'wonder-woman': 2 },
        a3: { superman: 3, 'wonder-woman': 2 },
        a4: { 'spider-man': 3, superman: 2 },
      },
    },
    {
      id: 'q4',
      text: 'How do you handle the pressure of being a hero?',
      answers: [
        { id: 'a1', text: 'I crack jokes to cope with the stress.' },
        { id: 'a2', text: 'I internalize everything and brood.' },
        { id: 'a3', text: 'I embrace it — this is who I am.' },
        { id: 'a4', text: 'I build something bigger than myself.' },
      ],
      weights: {
        a1: { 'spider-man': 3, 'iron-man': 2 },
        a2: { batman: 3, 'spider-man': 1 },
        a3: { superman: 3, 'wonder-woman': 2, 'black-panther': 1 },
        a4: { 'iron-man': 3, 'black-panther': 2 },
      },
    },
    {
      id: 'q5',
      text: 'What is your weakness?',
      answers: [
        { id: 'a1', text: 'I care too much about everyone.' },
        { id: 'a2', text: 'I cannot let go of the past.' },
        { id: 'a3', text: 'My ego gets in the way.' },
        { id: 'a4', text: 'I carry the weight of my entire people.' },
      ],
      weights: {
        a1: { 'spider-man': 3, superman: 2 },
        a2: { batman: 3, 'wonder-woman': 1 },
        a3: { 'iron-man': 3, 'spider-man': 1 },
        a4: { 'black-panther': 3, 'wonder-woman': 2 },
      },
    },
    {
      id: 'q6',
      text: 'Pick your ideal mode of transport:',
      answers: [
        { id: 'a1', text: 'Swinging through the city on webs.' },
        { id: 'a2', text: 'A powerful, heavily modified vehicle.' },
        { id: 'a3', text: 'Flying under my own power.' },
        { id: 'a4', text: 'A high-tech suit with built-in flight.' },
      ],
      weights: {
        a1: { 'spider-man': 3 },
        a2: { batman: 3, 'black-panther': 1 },
        a3: { superman: 3, 'wonder-woman': 2 },
        a4: { 'iron-man': 3, 'black-panther': 1 },
      },
    },
    {
      id: 'q7',
      text: 'How do you feel about secret identities?',
      answers: [
        { id: 'a1', text: 'Essential — the people I love would be targets.' },
        { id: 'a2', text: 'I am the same person in and out of the mask.' },
        { id: 'a3', text: 'My identity is a public statement of power.' },
        { id: 'a4', text: 'I am known but I keep my personal life private.' },
      ],
      weights: {
        a1: { 'spider-man': 3, batman: 2, superman: 2 },
        a2: { 'wonder-woman': 3, 'iron-man': 2 },
        a3: { 'iron-man': 3, 'black-panther': 2 },
        a4: { 'black-panther': 3, superman: 2 },
      },
    },
    {
      id: 'q8',
      text: 'What would you sacrifice for the greater good?',
      answers: [
        { id: 'a1', text: 'My personal happiness.' },
        { id: 'a2', text: 'My life, if it came to that.' },
        { id: 'a3', text: 'Everything — I have done it before.' },
        { id: 'a4', text: 'My reputation and what people think of me.' },
      ],
      weights: {
        a1: { batman: 3, 'spider-man': 2 },
        a2: { superman: 3, 'spider-man': 2, 'wonder-woman': 2 },
        a3: { 'wonder-woman': 3, 'black-panther': 2 },
        a4: { 'iron-man': 3, 'black-panther': 2 },
      },
    },
    {
      id: 'q9',
      text: 'How do you relate to ordinary people?',
      answers: [
        { id: 'a1', text: 'I am one of them, just with extra responsibility.' },
        { id: 'a2', text: 'I protect them from the shadows.' },
        { id: 'a3', text: 'I inspire them to be their best.' },
        { id: 'a4', text: 'I lead them by example.' },
      ],
      weights: {
        a1: { 'spider-man': 3, superman: 2 },
        a2: { batman: 3, 'spider-man': 1 },
        a3: { superman: 3, 'wonder-woman': 2 },
        a4: { 'black-panther': 3, 'wonder-woman': 1, 'iron-man': 1 },
      },
    },
    {
      id: 'q10',
      text: 'What kind of hero are you?',
      answers: [
        { id: 'a1', text: 'The friendly neighborhood type.' },
        { id: 'a2', text: 'The dark, brooding vigilante.' },
        { id: 'a3', text: 'The symbol of hope.' },
        { id: 'a4', text: 'The visionary who builds the future.' },
      ],
      weights: {
        a1: { 'spider-man': 3 },
        a2: { batman: 3 },
        a3: { superman: 3, 'wonder-woman': 2 },
        a4: { 'iron-man': 3, 'black-panther': 2 },
      },
    },
  ],
  results: [
    {
      key: 'spider-man',
      name: 'Spider-Man',
      archetype: 'The Friendly Neighborhood Hero',
      description:
        'You balance power with humility and always crack a joke under pressure. You believe great power demands great responsibility.',
      traits: ['Witty', 'Compassionate', 'Agile', 'Relatable'],
      strength: 'You stay grounded no matter how powerful you become',
      weakness: 'You carry too much responsibility on your own shoulders',
      movieEnergy: 'Web-slinging heart with a quippy defense mechanism',
      humorousObservation:
        'You have apologized to a villain mid-fight and meant it.',
      imagePromptBase:
        'A figure in a red and blue suit perched on a rooftop overlooking a city, sunset, dynamic pose, superhero aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'batman',
      name: 'Batman',
      archetype: 'The Dark Knight',
      description:
        'You channel pain into purpose. You do not have powers, but your discipline and intellect make you more dangerous than any superhuman.',
      traits: ['Disciplined', 'Brilliant', 'Brooding', 'Determined'],
      strength: 'You can outplan anyone, superpowered or not',
      weakness: 'You push people away to protect them',
      movieEnergy: 'Gothic vigilante justice with a gravelly whisper',
      humorousObservation:
        'You have a contingency plan for your contingency plans. And a backup butler.',
      imagePromptBase:
        'A dark armored figure on a gothic rooftop, rain, lightning, cape spread, dark superhero aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'superman',
      name: 'Superman',
      archetype: 'The Man of Steel',
      description:
        'You are the symbol everyone looks up to. You carry godlike power with human kindness, choosing mercy over dominance every time.',
      traits: ['Noble', 'Powerful', 'Compassionate', 'Inspiring'],
      strength: 'You inspire hope in everyone around you',
      weakness: 'You hold yourself to an impossible standard',
      movieEnergy: 'Sunlit heroism with a saving-the-day smile',
      humorousObservation:
        'You have held back during every fight and nobody realized how hard that actually is.',
      imagePromptBase:
        'A figure in a blue and red suit floating above clouds, golden sunlight, cape billowing, iconic superhero aesthetic, cinematic heroic portrait',
    },
    {
      key: 'wonder-woman',
      name: 'Wonder Woman',
      archetype: 'The Amazonian Warrior',
      description:
        'You are warrior, diplomat, and hero all at once. You believe in love as much as battle and fight because you believe the world is worth saving.',
      traits: ['Warrior', 'Compassionate', 'Bold', 'Noble'],
      strength: 'You combine unmatched combat skill with deep empathy',
      weakness: 'You can be naive about human complexity',
      movieEnergy: 'Mythic warrior grace with a golden lasso',
      humorousObservation:
        'You have walked into a room and somehow both started and ended the fight.',
      imagePromptBase:
        'A warrior woman in golden armor with a lasso, battlefield, dramatic sky, heroic stance, superhero aesthetic, cinematic epic portrait',
    },
    {
      key: 'iron-man',
      name: 'Iron Man',
      archetype: 'The Futurist',
      description:
        'You are a genius who builds your own power. Your ego is matched only by your heart, and you sacrifice yourself for the future you believe in.',
      traits: ['Brilliant', 'Bold', 'Egotistical', 'Selfless'],
      strength: 'You can build your way out of any problem',
      weakness: 'Your ego creates as many enemies as your heroics defeat',
      movieEnergy: 'High-tech arrogance with a heroics chaser',
      humorousObservation:
        'You have solved world peace and still argued about who pays for shawarma.',
      imagePromptBase:
        'A figure in a glowing high-tech suit, holographic displays, futuristic lab, blue and gold light, superhero aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'black-panther',
      name: 'Black Panther',
      archetype: 'The Warrior King',
      description:
        'You carry the weight of a nation on your shoulders. You balance tradition with progress, power with wisdom, and duty with compassion.',
      traits: ['Noble', 'Strategic', 'Disciplined', 'Wise'],
      strength: 'You lead with both strength and wisdom',
      weakness: 'You bear the burden of an entire people alone',
      movieEnergy: 'Royal Wakandan power with vibranium precision',
      humorousObservation:
        'You have run a country, fought a war, and still made it to dinner on time.',
      imagePromptBase:
        'A figure in a sleek black vibranium suit, African futuristic city, purple energy glow, superhero aesthetic, cinematic dramatic portrait',
    },
  ],
};
