import type { Quiz } from '../../types';

export const sciFiCharacterQuiz: Quiz = {
  id: 'sci-fi-character',
  slug: 'which-sci-fi-character-are-you',
  title: 'Which Sci-Fi Character Are You?',
  subtitle: 'From space opera to cyberpunk, find your future self',
  description:
    'Are you the reluctant rebel, the brilliant scientist, or the cosmic explorer? Answer 10 questions to discover your sci-fi identity.',
  category: 'Sci-Fi Character',
  emoji: '🚀',
  accentColor: '#00bcd4',
  gradient: 'linear-gradient(135deg, #00bcd4 0%, #006064 100%)',
  questions: [
    {
      id: 'q1',
      text: 'Humanity is about to colonize a new planet. What role do you take?',
      answers: [
        { id: 'a1', text: 'I lead the expedition — someone has to.' },
        { id: 'a2', text: 'I stay behind to protect what we have.' },
        { id: 'a3', text: 'I am the scientist studying the new world.' },
        { id: 'a4', text: 'I go wherever the adventure is.' },
      ],
      weights: {
        a1: { 'leia-organa': 3, 'james-t-kirk': 2 },
        a2: { 'rick-deckard': 3, 'ellen-ripley': 2 },
        a3: { 'spock': 3, 'dr-grant': 2 },
        a4: { 'james-t-kirk': 3, 'doctor-who': 2 },
      },
    },
    {
      id: 'q2',
      text: 'How do you feel about artificial intelligence?',
      answers: [
        { id: 'a1', text: 'It is a tool — useful but dangerous.' },
        { id: 'a2', text: 'I am fascinated by its potential.' },
        { id: 'a3', text: 'I distrust it — too much can go wrong.' },
        { id: 'a4', text: 'I see it as a potential equal.' },
      ],
      weights: {
        a1: { 'rick-deckard': 3, 'spock': 2 },
        a2: { 'dr-grant': 3, 'doctor-who': 2 },
        a3: { 'ellen-ripley': 3, 'leia-organa': 2 },
        a4: { 'doctor-who': 3, 'james-t-kirk': 2 },
      },
    },
    {
      id: 'q3',
      text: 'What is your approach to the unknown?',
      answers: [
        { id: 'a1', text: 'I study it methodically until I understand it.' },
        { id: 'a2', text: 'I charge in — the unknown is an invitation.' },
        { id: 'a3', text: 'I approach with caution and backup.' },
        { id: 'a4', text: 'I embrace it as part of the adventure.' },
      ],
      weights: {
        a1: { 'spock': 3, 'dr-grant': 2 },
        a2: { 'james-t-kirk': 3, 'doctor-who': 2 },
        a3: { 'ellen-ripley': 3, 'rick-deckard': 2 },
        a4: { 'doctor-who': 3, 'leia-organa': 2 },
      },
    },
    {
      id: 'q4',
      text: 'What matters most in a crisis?',
      answers: [
        { id: 'a1', text: 'Logic and clear analysis.' },
        { id: 'a2', text: 'Gut instinct and bold action.' },
        { id: 'a3', text: 'Protecting the people around me.' },
        { id: 'a4', text: 'Finding a creative solution nobody expected.' },
      ],
      weights: {
        a1: { 'spock': 3, 'rick-deckard': 2 },
        a2: { 'james-t-kirk': 3, 'leia-organa': 2 },
        a3: { 'ellen-ripley': 3, 'leia-organa': 2, 'dr-grant': 1 },
        a4: { 'doctor-who': 3, 'dr-grant': 2 },
      },
    },
    {
      id: 'q5',
      text: 'How do you handle authority?',
      answers: [
        { id: 'a1', text: 'I am the authority — I lead.' },
        { id: 'a2', text: 'I question it constantly.' },
        { id: 'a3', text: 'I respect it but follow my own code.' },
        { id: 'a4', text: 'I operate entirely outside it.' },
      ],
      weights: {
        a1: { 'james-t-kirk': 3, 'leia-organa': 3 },
        a2: { 'rick-deckard': 3, 'doctor-who': 2 },
        a3: { 'ellen-ripley': 3, 'spock': 2 },
        a4: { 'doctor-who': 3, 'dr-grant': 1 },
      },
    },
    {
      id: 'q6',
      text: 'What is your greatest fear?',
      answers: [
        { id: 'a1', text: 'Losing the people I am responsible for.' },
        { id: 'a2', text: 'Not understanding something critical in time.' },
        { id: 'a3', text: 'Becoming like the things I fight against.' },
        { id: 'a4', text: 'A universe without wonder or discovery.' },
      ],
      weights: {
        a1: { 'james-t-kirk': 3, 'leia-organa': 2, 'ellen-ripley': 2 },
        a2: { 'spock': 3, 'dr-grant': 2 },
        a3: { 'rick-deckard': 3, 'ellen-ripley': 2 },
        a4: { 'doctor-who': 3, 'spock': 1 },
      },
    },
    {
      id: 'q7',
      text: 'Pick your ideal spacecraft:',
      answers: [
        { id: 'a1', text: 'A sleek explorer with the latest tech.' },
        { id: 'a2', text: 'A warship — I am ready for anything.' },
        { id: 'a3', text: 'Something bigger on the inside.' },
        { id: 'a4', text: 'A reliable freighter that gets the job done.' },
      ],
      weights: {
        a1: { 'james-t-kirk': 3, 'spock': 2 },
        a2: { 'leia-organa': 3, 'ellen-ripley': 2 },
        a3: { 'doctor-who': 3 },
        a4: { 'ellen-ripley': 3, 'rick-deckard': 2 },
      },
    },
    {
      id: 'q8',
      text: 'How do you deal with loss?',
      answers: [
        { id: 'a1', text: 'I turn it into purpose.' },
        { id: 'a2', text: 'I bury it in logic and work.' },
        { id: 'a3', text: 'I carry it quietly and keep going.' },
        { id: 'a4', text: 'I transform it into a lesson for the future.' },
      ],
      weights: {
        a1: { 'leia-organa': 3, 'doctor-who': 2 },
        a2: { 'spock': 3, 'dr-grant': 2 },
        a3: { 'rick-deckard': 3, 'ellen-ripley': 3 },
        a4: { 'doctor-who': 3, 'james-t-kirk': 2 },
      },
    },
    {
      id: 'q9',
      text: 'What is your relationship with humanity?',
      answers: [
        { id: 'a1', text: 'I am its protector, even when it disappoints me.' },
        { id: 'a2', text: 'I study it with fascination and concern.' },
        { id: 'a3', text: 'I am part of it and fight for its future.' },
        { id: 'a4', text: 'I am its curious observer from afar.' },
      ],
      weights: {
        a1: { 'ellen-ripley': 3, 'leia-organa': 2 },
        a2: { 'spock': 3, 'dr-grant': 2 },
        a3: { 'james-t-kirk': 3, 'rick-deckard': 2 },
        a4: { 'doctor-who': 3, 'spock': 1 },
      },
    },
    {
      id: 'q10',
      text: 'The universe is ending. What do you do?',
      answers: [
        { id: 'a1', text: 'I find the cause and fix it with science.' },
        { id: 'a2', text: 'I rally everyone for one last stand.' },
        { id: 'a3', text: 'I face it with calm and dignity.' },
        { id: 'a4', text: 'I bend time to find another way.' },
      ],
      weights: {
        a1: { 'spock': 3, 'dr-grant': 3 },
        a2: { 'james-t-kirk': 3, 'leia-organa': 3, 'ellen-ripley': 2 },
        a3: { 'rick-deckard': 3, 'ellen-ripley': 2 },
        a4: { 'doctor-who': 3, 'james-t-kirk': 1 },
      },
    },
  ],
  results: [
    {
      key: 'leia-organa',
      name: 'Leia Organa',
      archetype: 'The Rebel Leader',
      description:
        'You are a leader forged in war and driven by hope. You fight tyranny with both a blaster and a cause, and you never give up on the people you lead.',
      traits: ['Bold', 'Compassionate', 'Resilient', 'Determined'],
      strength: 'You inspire rebellion through sheer conviction',
      weakness: 'You carry the galaxy on your shoulders',
      movieEnergy: 'Space opera revolution with a royal backbone',
      humorousObservation:
        'You have strangulated a crime lord with the very chain that bound you. Power move.',
      imagePromptBase:
        'A determined woman in rebel military gear, space station corridor, stars visible through viewport, sci-fi aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'spock',
      name: 'Spock',
      archetype: 'The Logical Mind',
      description:
        'You navigate the universe through logic and science. You feel deeply but choose reason, and your loyalty is as steadfast as your intellect.',
      traits: ['Logical', 'Loyal', 'Brilliant', 'Stoic'],
      strength: 'You remain calm and analytical in any situation',
      weakness: 'You struggle to accept your own emotions',
      movieEnergy: 'Vulcan serenity with a mind-meld backup',
      humorousObservation:
        'You have said "fascinating" during events that were absolutely terrifying.',
      imagePromptBase:
        'A composed figure in a science officer uniform, futuristic bridge, blue lights and screens, sci-fi aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'james-t-kirk',
      name: 'James T. Kirk',
      archetype: 'The Bold Explorer',
      description:
        'You leap before you look, and somehow it always works out. You lead with instinct, courage, and a belief that every problem has a bold solution.',
      traits: ['Bold', 'Charismatic', 'Instinctive', 'Loyal'],
      strength: 'You trust your gut and it is usually right',
      weakness: 'You rush into danger without a plan',
      movieEnergy: 'Warp-speed bravado with a Kobayashi Maru workaround',
      humorousObservation:
        'You have punched a problem and it worked. Multiple times.',
      imagePromptBase:
        'A confident captain on a starship bridge, stars through the viewscreen, golden light, sci-fi aesthetic, cinematic heroic portrait',
    },
    {
      key: 'ellen-ripley',
      name: 'Ellen Ripley',
      archetype: 'The Pragmatic Survivor',
      description:
        'You do not want to be a hero, but when the situation demands it, you are the most capable person in the room. You survive because you are practical.',
      traits: ['Practical', 'Brave', 'Resilient', 'Level-headed'],
      strength: 'You stay calm and effective under extreme pressure',
      weakness: 'You carry the weight of what you have survived',
      movieEnergy: 'Sci-fi survival with a flamethrower and no patience',
      humorousObservation:
        'You have been asked to deal with the alien and frankly, you are over it.',
      imagePromptBase:
        'A woman in a utilitarian spacesuit, dark spaceship corridor, steam and warning lights, sci-fi horror aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'rick-deckard',
      name: 'Rick Deckard',
      archetype: 'The Weary Detective',
      description:
        'You navigate a world where the line between human and machine is blurred. You question what makes someone real, and you do it with quiet intensity.',
      traits: ['Observant', 'Cynical', 'Determined', 'Conflicted'],
      strength: 'You see through deception and find the truth',
      weakness: 'You doubt your own identity and purpose',
      movieEnergy: 'Cyberpunk noir with a synthesizer soundtrack',
      humorousObservation:
        'You have questioned your own humanity more than once and still made it to work on time.',
      imagePromptBase:
        'A trench-coated figure in a neon-lit rainy city, reflections on wet pavement, cyberpunk aesthetic, cinematic noir portrait, moody blue and pink tones',
    },
    {
      key: 'doctor-who',
      name: 'The Doctor',
      archetype: 'The Timeless Wanderer',
      description:
        'You are infinitely curious, endlessly resourceful, and impossibly old. You travel through time and space because standing still is not in your nature.',
      traits: ['Curious', 'Brilliant', 'Eccentric', 'Compassionate'],
      strength: 'You find a creative solution to literally anything',
      weakness: 'You run from your own loneliness',
      movieEnergy: 'Timey-wimey adventure with a sonic screwdriver',
      humorousObservation:
        'You have saved the universe with a screwdriver and a monologue. Several times.',
      imagePromptBase:
        'An eccentric figure in a long coat, blue police box, starry nebula background, sci-fi fantasy aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'dr-grant',
      name: 'Dr. Ellie Sattler',
      archetype: 'The Brilliant Scientist',
      description:
        'You are the expert everyone turns to when things go wrong. You combine deep knowledge with practical courage and a determination to uncover the truth.',
      traits: ['Intelligent', 'Brave', 'Curious', 'Determined'],
      strength: 'You turn knowledge into action under pressure',
      weakness: 'You are so focused on the truth you miss the danger',
      movieEnergy: 'Scientific discovery with a dinosaur-chasing twist',
      humorousObservation:
        'You have been chased by something extinct and still took notes.',
      imagePromptBase:
        'A woman in field gear studying prehistoric flora, jungle environment, dramatic sunlight through canopy, sci-fi adventure aesthetic, cinematic portrait',
    },
  ],
};
