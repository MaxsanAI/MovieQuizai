import type { Quiz } from '../../types';

export const horrorSurvivalQuiz: Quiz = {
  id: 'horror-survival',
  slug: 'could-you-survive-a-horror-movie',
  title: 'Could You Survive a Horror Movie?',
  subtitle: 'Would you make it to the credits or are you the opening scare?',
  description:
    'When the lights go out and the music shifts, what happens to you? Answer these 10 questions to find out your horror movie survival fate.',
  category: 'Horror Survival',
  emoji: '🔪',
  accentColor: '#b00020',
  gradient: 'linear-gradient(135deg, #b00020 0%, #3d0000 100%)',
  questions: [
    {
      id: 'q1',
      text: 'You hear a strange noise upstairs. What do you do?',
      answers: [
        { id: 'a1', text: 'I grab a weapon and go investigate carefully.' },
        { id: 'a2', text: 'I call out to see if anyone answers.' },
        { id: 'a3', text: 'I get out of the house immediately.' },
        { id: 'a4', text: 'I ignore it. It is probably the wind.' },
      ],
      weights: {
        a1: { 'final-girl': 2, 'the-hero': 3, 'the-mastermind': 2 },
        a2: { 'first-victim': 3, 'the-skeptic': 2 },
        a3: { 'the-escape-artist': 3, 'final-girl': 2 },
        a4: { 'first-victim': 3, 'the-skeptic': 3 },
      },
    },
    {
      id: 'q2',
      text: 'Your car will not start and something is coming. You...',
      answers: [
        { id: 'a1', text: 'Keep trying the ignition with shaking hands.' },
        { id: 'a2', text: 'Abandon the car and run for it.' },
        { id: 'a3', text: 'Check under the hood — it has to be something simple.' },
        { id: 'a4', text: 'Hide in the back seat and stay perfectly still.' },
      ],
      weights: {
        a1: { 'first-victim': 3, 'final-girl': 1 },
        a2: { 'the-escape-artist': 3, 'final-girl': 2 },
        a3: { 'the-skeptic': 3, 'first-victim': 2 },
        a4: { 'the-hero': 2, 'final-girl': 2, 'the-escape-artist': 1 },
      },
    },
    {
      id: 'q3',
      text: 'The group wants to split up. What do you say?',
      answers: [
        { id: 'a1', text: 'Absolutely not. We stay together.' },
        { id: 'a2', text: 'Fine, I will take the basement alone.' },
        { id: 'a3', text: 'I go solo — I move faster on my own.' },
        { id: 'a4', text: 'Whatever, just stay in touch by phone.' },
      ],
      weights: {
        a1: { 'the-mastermind': 3, 'final-girl': 3 },
        a2: { 'the-hero': 3, 'first-victim': 2 },
        a3: { 'the-escape-artist': 3, 'the-hero': 1 },
        a4: { 'first-victim': 3, 'the-skeptic': 2 },
      },
    },
    {
      id: 'q4',
      text: 'A friend says they saw something impossible. You...',
      answers: [
        { id: 'a1', text: 'Believe them immediately and prepare.' },
        { id: 'a2', text: 'Demand evidence before panicking.' },
        { id: 'a3', text: 'Go with them to investigate together.' },
        { id: 'a4', text: 'Suggest they get some sleep.' },
      ],
      weights: {
        a1: { 'final-girl': 3, 'the-mastermind': 2 },
        a2: { 'the-skeptic': 3, 'the-mastermind': 2 },
        a3: { 'the-hero': 3, 'final-girl': 1 },
        a4: { 'first-victim': 2, 'the-skeptic': 3 },
      },
    },
    {
      id: 'q5',
      text: 'You find a weapon. What do you choose?',
      answers: [
        { id: 'a1', text: 'A kitchen knife — reliable and close.' },
        { id: 'a2', text: 'A shotgun — distance is my friend.' },
        { id: 'a3', text: 'A flashlight — I need to see, not fight.' },
        { id: 'a4', text: 'My car keys — I am leaving, not fighting.' },
      ],
      weights: {
        a1: { 'final-girl': 3, 'the-hero': 2 },
        a2: { 'the-hero': 3, 'the-skeptic': 2 },
        a3: { 'the-mastermind': 3, 'the-escape-artist': 1 },
        a4: { 'the-escape-artist': 3, 'final-girl': 1 },
      },
    },
    {
      id: 'q6',
      text: 'The power goes out. Your first move?',
      answers: [
        { id: 'a1', text: 'Find the breaker and fix it.' },
        { id: 'a2', text: 'Light candles and stay put.' },
        { id: 'a3', text: 'Use my phone flashlight to get out.' },
        { id: 'a4', text: 'Wait for it to come back on.' },
      ],
      weights: {
        a1: { 'the-hero': 3, 'the-skeptic': 2 },
        a2: { 'the-skeptic': 3, 'first-victim': 2 },
        a3: { 'the-escape-artist': 3, 'final-girl': 2, 'the-mastermind': 1 },
        a4: { 'first-victim': 3, 'the-skeptic': 2 },
      },
    },
    {
      id: 'q7',
      text: 'You trip while running. What happens next?',
      answers: [
        { id: 'a1', text: 'I get up immediately and keep running.' },
        { id: 'a2', text: 'I stay down and hide where I fell.' },
        { id: 'a3', text: 'I crawl to the nearest cover.' },
        { id: 'a4', text: 'I turn around and fight whatever is chasing me.' },
      ],
      weights: {
        a1: { 'the-escape-artist': 3, 'final-girl': 2 },
        a2: { 'first-victim': 3, 'final-girl': 1 },
        a3: { 'final-girl': 3, 'the-escape-artist': 2 },
        a4: { 'the-hero': 3, 'the-mastermind': 1 },
      },
    },
    {
      id: 'q8',
      text: 'How do you feel about scary movies?',
      answers: [
        { id: 'a1', text: 'I love them — I know every survival rule.' },
        { id: 'a2', text: 'I watch them but they do not scare me.' },
        { id: 'a3', text: 'I hate them, but I would survive real life.' },
        { id: 'a4', text: 'I do not watch them. Too stressful.' },
      ],
      weights: {
        a1: { 'the-mastermind': 3, 'final-girl': 2 },
        a2: { 'the-skeptic': 3, 'final-girl': 1 },
        a3: { 'the-escape-artist': 2, 'final-girl': 2 },
        a4: { 'first-victim': 3, 'the-escape-artist': 1 },
      },
    },
    {
      id: 'q9',
      text: 'Someone is banging on your door at midnight. You...',
      answers: [
        { id: 'a1', text: 'Look through the peephole first.' },
        { id: 'a2', text: 'Ask who it is without opening.' },
        { id: 'a3', text: 'Call the police and stay hidden.' },
        { id: 'a4', text: 'Open the door — it is probably a neighbor.' },
      ],
      weights: {
        a1: { 'the-mastermind': 3, 'final-girl': 2 },
        a2: { 'the-skeptic': 3, 'final-girl': 2 },
        a3: { 'final-girl': 3, 'the-escape-artist': 2, 'the-mastermind': 1 },
        a4: { 'first-victim': 3, 'the-hero': 2 },
      },
    },
    {
      id: 'q10',
      text: 'It is finally over. The threat is gone. What do you do?',
      answers: [
        { id: 'a1', text: 'Make sure it is really gone.' },
        { id: 'a2', text: 'Get as far away as possible.' },
        { id: 'a3', text: 'Check on everyone else.' },
        { id: 'a4', text: 'Breathe and assume it is over.' },
      ],
      weights: {
        a1: { 'final-girl': 3, 'the-mastermind': 3 },
        a2: { 'the-escape-artist': 3, 'first-victim': 1 },
        a3: { 'the-hero': 3, 'final-girl': 2 },
        a4: { 'first-victim': 3, 'the-skeptic': 2 },
      },
    },
  ],
  results: [
    {
      key: 'final-girl',
      name: 'The Final Girl',
      archetype: 'The Ultimate Survivor',
      description:
        'You are the last one standing. Through intelligence, resilience, and sheer will, you outlast every threat.',
      traits: ['Resilient', 'Intelligent', 'Brave', 'Resourceful'],
      strength: 'You survive when everyone else falls',
      weakness: 'You carry the trauma of being the last one left',
      movieEnergy: 'Final act showdown with a kitchen knife',
      humorousObservation:
        "You've checked every closet twice and still can't sleep, but honestly, you're still here.",
      imagePromptBase:
        'A determined woman holding a weapon, dark suburban house, moonlight through blinds, horror movie aesthetic, cinematic dramatic portrait',
    },
    {
      key: 'first-victim',
      name: 'The First Victim',
      archetype: 'The Opening Scream',
      description:
        "Let's be honest — you would not make it past the opening credits. But your death sets the whole movie in motion, so there's that.",
      traits: ['Trusting', 'Carefree', 'Curious', 'Unlucky'],
      strength: 'You live in the moment (maybe too much)',
      weakness: 'You never check behind you',
      movieEnergy: 'Opening scene chaos',
      humorousObservation: 'You heard a noise and went toward it. Classic you.',
      imagePromptBase:
        'A shadowy figure approaching a door in a dark house, ominous red lighting, fog, horror movie opening scene aesthetic, cinematic',
    },
    {
      key: 'the-skeptic',
      name: 'The Skeptic',
      archetype: 'The Doubter',
      description:
        'You refuse to believe anything supernatural is happening until it is too late. Logic is your shield, but sometimes the threat is real.',
      traits: ['Rational', 'Stubborn', 'Analytical', 'Brave'],
      strength: 'You think clearly when others panic',
      weakness: "You dismiss real danger until it's right in front of you",
      movieEnergy: "It's just a prank gone wrong, right?",
      humorousObservation:
        "You said 'there's a logical explanation for this' while standing in a haunted house. There wasn't.",
      imagePromptBase:
        'A person with arms crossed in a dimly lit old house, skeptical expression, shadows and cobwebs, horror movie aesthetic, cinematic portrait',
    },
    {
      key: 'the-hero',
      name: 'The Would-Be Hero',
      archetype: 'The Sacrificial Savior',
      description:
        'You rush in to save everyone. Sometimes it works, sometimes it does not. Either way, you go down fighting.',
      traits: ['Brave', 'Selfless', 'Impulsive', 'Loyal'],
      strength: 'You put yourself between danger and others',
      weakness: 'You act without a plan',
      movieEnergy: 'Charging in with fists and heart',
      humorousObservation:
        "You said 'I'll go check it out' and the movie got significantly shorter.",
      imagePromptBase:
        'A brave figure running toward a dark cabin in the woods, flashlight beam, fog, horror movie aesthetic, cinematic dramatic scene',
    },
    {
      key: 'the-escape-artist',
      name: 'The Escape Artist',
      archetype: 'The Runner',
      description:
        "You don't fight — you flee. And honestly, running has kept you alive this long. You're the one who makes it to the sequel.",
      traits: ['Fast', 'Instinctive', 'Practical', 'Alert'],
      strength: 'You know when to run and you do it fast',
      weakness: 'You leave people behind',
      movieEnergy: 'Sprint to survival with no looking back',
      humorousObservation:
        'You tripped once while running and somehow that was the scariest part.',
      imagePromptBase:
        'A person sprinting through a dark forest, flashlight, moonlight through trees, horror movie chase scene aesthetic, cinematic dramatic',
    },
    {
      key: 'the-mastermind',
      name: 'The Horror Mastermind',
      archetype: 'The One Who Knew',
      description:
        "You've seen every horror movie and know every rule. You survive because you treat real life like a movie — and you're right.",
      traits: ['Knowledgeable', 'Strategic', 'Cautious', 'Clever'],
      strength: 'You anticipate danger before it arrives',
      weakness: 'You can overthink when quick action is needed',
      movieEnergy: "I've seen this movie before energy",
      humorousObservation:
        "You said 'don't split up' and nobody listened. You were right. They never are.",
      imagePromptBase:
        'A person surrounded by horror movie posters, maps and notes, dimly lit room, analytical expression, horror thriller aesthetic, cinematic portrait',
    },
  ],
};
