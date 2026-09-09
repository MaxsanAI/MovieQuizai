import type { Quiz } from '../../types';

export const fantasyCharacterQuiz: Quiz = {
  id: 'fantasy-character',
  slug: 'which-fantasy-character-are-you',
  title: 'Which Fantasy Character Are You?',
  subtitle: 'Discover your place in the realm of magic and legend',
  description:
    'Are you the chosen hero, the wise mentor, or the cunning rogue? Answer 10 questions to find your fantasy archetype.',
  category: 'Fantasy Character',
  emoji: '🐉',
  accentColor: '#7c4dff',
  gradient: 'linear-gradient(135deg, #7c4dff 0%, #311b92 100%)',
  questions: [
    {
      id: 'q1',
      text: 'A magical artifact appears before you. What do you do?',
      answers: [
        { id: 'a1', text: 'I pick it up — destiny is calling.' },
        { id: 'a2', text: 'I study it carefully before touching anything.' },
        { id: 'a3', text: 'I check if it is valuable enough to sell.' },
        { id: 'a4', text: 'I sense it is dangerous and leave it alone.' },
      ],
      weights: {
        a1: { 'frodo-baggins': 3, 'aragorn': 2 },
        a2: { 'gandalf': 3, 'hermione-granger': 2 },
        a3: { 'bilbo-baggins': 3 },
        a4: { 'galadriel': 3, 'hermione-granger': 2 },
      },
    },
    {
      id: 'q2',
      text: 'You are faced with a dragon. How do you respond?',
      answers: [
        { id: 'a1', text: 'I stand my ground and fight.' },
        { id: 'a2', text: 'I try to outsmart it.' },
        { id: 'a3', text: 'I sneak past it — no need for a fight.' },
        { id: 'a4', text: 'I try to communicate with it.' },
      ],
      weights: {
        a1: { 'aragorn': 3, 'frodo-baggins': 1 },
        a2: { 'gandalf': 3, 'hermione-granger': 2 },
        a3: { 'bilbo-baggins': 3, 'frodo-baggins': 2 },
        a4: { 'galadriel': 3, 'gandalf': 2 },
      },
    },
    {
      id: 'q3',
      text: 'What is your role in a fellowship?',
      answers: [
        { id: 'a1', text: 'The leader who carries the burden.' },
        { id: 'a2', text: 'The wise guide who knows the way.' },
        { id: 'a3', text: 'The reluctant hero who steps up anyway.' },
        { id: 'a4', text: 'The clever one who finds unconventional solutions.' },
      ],
      weights: {
        a1: { 'aragorn': 3, 'galadriel': 2 },
        a2: { 'gandalf': 3, 'galadriel': 2 },
        a3: { 'frodo-baggins': 3, 'bilbo-baggins': 2 },
        a4: { 'hermione-granger': 3, 'bilbo-baggins': 2 },
      },
    },
    {
      id: 'q4',
      text: 'How do you feel about destiny and prophecies?',
      answers: [
        { id: 'a1', text: 'I accept my destiny and fulfill it.' },
        { id: 'a2', text: 'I am skeptical but prepare for all outcomes.' },
        { id: 'a3', text: 'I run from it as long as I can.' },
        { id: 'a4', text: 'I see beyond destiny to the deeper patterns.' },
      ],
      weights: {
        a1: { 'frodo-baggins': 3, 'aragorn': 3 },
        a2: { 'hermione-granger': 3, 'gandalf': 2 },
        a3: { 'bilbo-baggins': 3, 'frodo-baggins': 2 },
        a4: { 'galadriel': 3, 'gandalf': 2 },
      },
    },
    {
      id: 'q5',
      text: 'What is your greatest strength?',
      answers: [
        { id: 'a1', text: 'My courage and willingness to sacrifice.' },
        { id: 'a2', text: 'My wisdom and knowledge of the ancient world.' },
        { id: 'a3', text: 'My cleverness and quick thinking.' },
        { id: 'a4', text: 'My compassion and ability to see all sides.' },
      ],
      weights: {
        a1: { 'frodo-baggins': 3, 'aragorn': 2 },
        a2: { 'gandalf': 3, 'hermione-granger': 2 },
        a3: { 'bilbo-baggins': 3, 'hermione-granger': 2 },
        a4: { 'galadriel': 3, 'frodo-baggins': 1 },
      },
    },
    {
      id: 'q6',
      text: 'How do you handle temptation and corruption?',
      answers: [
        { id: 'a1', text: 'I resist through sheer willpower.' },
        { id: 'a2', text: 'I understand it deeply and so avoid it.' },
        { id: 'a3', text: 'I struggle with it more than I admit.' },
        { id: 'a4', text: 'I see it for what it is and am not interested.' },
      ],
      weights: {
        a1: { 'aragorn': 3, 'frodo-baggins': 2 },
        a2: { 'gandalf': 3, 'hermione-granger': 2 },
        a3: { 'frodo-baggins': 3, 'bilbo-baggins': 3 },
        a4: { 'galadriel': 3, 'gandalf': 1 },
      },
    },
    {
      id: 'q7',
      text: 'What kind of place feels like home?',
      answers: [
        { id: 'a1', text: 'A cozy hole in the ground with plenty of food.' },
        { id: 'a2', text: 'The wild, untamed lands of the world.' },
        { id: 'a3', text: 'A great library or hall of knowledge.' },
        { id: 'a4', text: 'A timeless, ethereal realm of beauty.' },
      ],
      weights: {
        a1: { 'frodo-baggins': 3, 'bilbo-baggins': 3 },
        a2: { 'aragorn': 3, 'bilbo-baggins': 1 },
        a3: { 'hermione-granger': 3, 'gandalf': 2 },
        a4: { 'galadriel': 3, 'gandalf': 1 },
      },
    },
    {
      id: 'q8',
      text: 'How do you relate to power?',
      answers: [
        { id: 'a1', text: 'I use it only to protect others.' },
        { id: 'a2', text: 'I wield it wisely and with restraint.' },
        { id: 'a3', text: 'I prefer not to have it — it corrupts.' },
        { id: 'a4', text: 'I have it but choose not to use it.' },
      ],
      weights: {
        a1: { 'aragorn': 3, 'frodo-baggins': 2 },
        a2: { 'gandalf': 3, 'hermione-granger': 2 },
        a3: { 'frodo-baggins': 3, 'bilbo-baggins': 2 },
        a4: { 'galadriel': 3, 'gandalf': 2 },
      },
    },
    {
      id: 'q9',
      text: 'What scares you the most?',
      answers: [
        { id: 'a1', text: 'Failing the people who depend on me.' },
        { id: 'a2', text: 'Losing myself to darkness.' },
        { id: 'a3', text: 'A life without adventure.' },
        { id: 'a4', text: 'The end of all beautiful things.' },
      ],
      weights: {
        a1: { 'aragorn': 3, 'gandalf': 2, 'hermione-granger': 2 },
        a2: { 'frodo-baggins': 3, 'gandalf': 2 },
        a3: { 'bilbo-baggins': 3, 'aragorn': 1 },
        a4: { 'galadriel': 3, 'frodo-baggins': 1 },
      },
    },
    {
      id: 'q10',
      text: 'When your quest is finally over, what do you do?',
      answers: [
        { id: 'a1', text: 'Return home and live quietly.' },
        { id: 'a2', text: 'Pass on my knowledge to the next generation.' },
        { id: 'a3', text: 'Write about it — the story must be told.' },
        { id: 'a4', text: 'Depart for a place beyond the sea.' },
      ],
      weights: {
        a1: { 'frodo-baggins': 2, 'bilbo-baggins': 3 },
        a2: { 'gandalf': 3, 'hermione-granger': 3, 'aragorn': 2 },
        a3: { 'bilbo-baggins': 3, 'hermione-granger': 2 },
        a4: { 'galadriel': 3, 'frodo-baggins': 2, 'gandalf': 1 },
      },
    },
  ],
  results: [
    {
      key: 'frodo-baggins',
      name: 'Frodo Baggins',
      archetype: 'The Reluctant Ringbearer',
      description:
        'You carry burdens no one should have to carry, and you do it because no one else can. Your strength is not in power but in endurance.',
      traits: ['Resilient', 'Compassionate', 'Brave', 'Selfless'],
      strength: 'You endure what would break anyone else',
      weakness: 'You carry too much and refuse to share the weight',
      movieEnergy: 'Quiet hobbit courage with an impossible quest',
      humorousObservation:
        'You volunteered for the worst job in history and still got criticized for needing help.',
      imagePromptBase:
        'A small figure with a glowing ring, vast mountain landscape, dark clouds, dramatic cinematic lighting, fantasy epic aesthetic',
    },
    {
      key: 'gandalf',
      name: 'Gandalf',
      archetype: 'The Wise Guide',
      description:
        'You are the mentor others turn to when the path is dark. You possess ancient knowledge and wield it with humor, wisdom, and a stubborn refusal to give up.',
      traits: ['Wise', 'Powerful', 'Witty', 'Determined'],
      strength: 'You see the big picture when others are lost in details',
      weakness: 'You carry knowledge of dangers others cannot comprehend',
      movieEnergy: 'Wizardly wisdom with a fireworks display',
      humorousObservation:
        'You have died and come back with better robes. Icon behavior.',
      imagePromptBase:
        'A wizened figure with a staff and hat on a mountain peak, dramatic storm clouds, magical light, fantasy epic aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'aragorn',
      name: 'Aragorn',
      archetype: 'The Hidden King',
      description:
        'You are born to lead but choose to serve. You carry your lineage quietly and step into your destiny only when the world needs you.',
      traits: ['Noble', 'Brave', 'Humble', 'Loyal'],
      strength: 'You lead through service and earn loyalty naturally',
      weakness: 'You doubt your right to the crown you were born for',
      movieEnergy: 'Ranger-to-king arc with a reforged sword',
      humorousObservation:
        'You avoided the throne for decades and it still found you. Awkward.',
      imagePromptBase:
        'A rugged ranger in worn armor, ancient forest, dramatic light through trees, fantasy epic aesthetic, cinematic heroic portrait',
    },
    {
      key: 'galadriel',
      name: 'Galadriel',
      archetype: 'The Elven Queen',
      description:
        'You are ancient, powerful, and wise beyond mortal understanding. You see all and reveal little, and your power is matched only by your restraint.',
      traits: ['Wise', 'Powerful', 'Mystical', 'Composed'],
      strength: 'You see the truth of all things',
      weakness: 'You carry the weight of ages alone',
      movieEnergy: 'Ethereal elven grace with a ring of power',
      humorousObservation:
        'You have been offered ultimate power and said "no thanks." Do you know how rare that is?',
      imagePromptBase:
        'An ethereal elven queen in a golden forest, magical light, flowing white gown, fantasy aesthetic, cinematic otherworldly portrait',
    },
    {
      key: 'bilbo-baggins',
      name: 'Bilbo Baggins',
      archetype: 'The Reluctant Adventurer',
      description:
        'You want nothing more than a quiet life, but adventure keeps finding you. You discover courage you never knew you had and stories worth telling.',
      traits: ['Clever', 'Curious', 'Reluctant', 'Brave'],
      strength: 'You find creative solutions in tight spots',
      weakness: 'You struggle with letting go of things you find',
      movieEnergy: 'Hobbit-hole comfort with a riddle-solving detour',
      humorousObservation:
        'You went on one adventure and came home with a magic ring and a book deal.',
      imagePromptBase:
        'A small figure in a cozy hobbit hole, round door, warm firelight, maps and books, fantasy aesthetic, cinematic warm portrait',
    },
    {
      key: 'hermione-granger',
      name: 'Hermione Granger',
      archetype: 'The Brilliant Witch',
      description:
        'You are the smartest person in every room and you know it. You save your friends with knowledge, quick thinking, and an unbreakable moral compass.',
      traits: ['Brilliant', 'Loyal', 'Determined', 'Brave'],
      strength: 'You turn knowledge into the ultimate weapon',
      weakness: 'You can be impatient with those who learn slower',
      movieEnergy: 'Library-based heroics with a time-turner',
      humorousObservation:
        'You have saved everyone with a library card and still got called a know-it-all. Their loss.',
      imagePromptBase:
        'A young witch surrounded by floating books, magical library, warm candlelight, fantasy aesthetic, cinematic dramatic portrait',
    },
  ],
};
