import type { Quiz } from '../../types';

export const actionHeroQuiz: Quiz = {
  id: 'action-hero',
  slug: 'which-action-hero-are-you',
  title: 'Which Action Hero Are You?',
  subtitle: 'Find out which legendary action hero matches your personality',
  description:
    'Are you the reluctant everyman who rises to the occasion, the elite agent who never runs out of plans, or the post-apocalyptic survivor who just wants to be left alone? Answer 10 questions and discover your inner action hero.',
  category: 'Action Hero',
  emoji: '💥',
  accentColor: '#ff6b00',
  gradient: 'linear-gradient(135deg, #ff6b00 0%, #cc4400 100%)',
  questions: [
    {
      id: 'q1',
      text: 'Danger strikes without warning. What is your first instinct?',
      answers: [
        { id: 'a1', text: 'Assess the situation and find the most practical way out' },
        { id: 'a2', text: 'Spring into action immediately, no time to think' },
        { id: 'a3', text: 'Quietly analyze who is behind this and why' },
        { id: 'a4', text: 'Grab whoever is nearby and get them to safety first' },
      ],
      weights: {
        a1: { ripley: 3, 'sarah-connor': 2, 'ethan-hunt': 1 },
        a2: { 'john-mclane': 3, furiosa: 2, 'mad-max': 1 },
        a3: { neo: 3, 'ethan-hunt': 2, 'beatrix-kiddo': 1 },
        a4: { furiosa: 3, 'sarah-connor': 2, 'john-mclane': 1 },
      },
    },
    {
      id: 'q2',
      text: 'How do you feel about working with a team?',
      answers: [
        { id: 'a1', text: 'I prefer to go it alone, people slow me down' },
        { id: 'a2', text: 'I will lead, but the mission comes first' },
        { id: 'a3', text: 'A small, trusted crew can make all the difference' },
        { id: 'a4', text: 'I work alone because trusting others has cost me' },
      ],
      weights: {
        a1: { 'mad-max': 3, neo: 2, 'ethan-hunt': 1 },
        a2: { 'sarah-connor': 3, 'john-mclane': 2, furiosa: 1 },
        a3: { ripley: 3, furiosa: 2, 'ethan-hunt': 1 },
        a4: { 'beatrix-kiddo': 3, furiosa: 2, 'mad-max': 1 },
      },
    },
    {
      id: 'q3',
      text: 'You have one weapon and one chance. What do you reach for?',
      answers: [
        { id: 'a1', text: 'Whatever is lying around, I will make it work' },
        { id: 'a2', text: 'A flamethrower, burn the problem away' },
        { id: 'a3', text: 'A katana, precision and discipline in one blade' },
        { id: 'a4', text: 'My fists and my willpower, that is all I need' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'mad-max': 2, furiosa: 1 },
        a2: { ripley: 3, 'sarah-connor': 2, furiosa: 1 },
        a3: { 'beatrix-kiddo': 3, neo: 2, 'ethan-hunt': 1 },
        a4: { neo: 3, 'mad-max': 2, 'john-mclane': 1 },
      },
    },
    {
      id: 'q4',
      text: 'The villain has you cornered and monologuing. What do you do?',
      answers: [
        { id: 'a1', text: 'Crack a sarcastic joke while secretly freeing myself' },
        { id: 'a2', text: 'Wait for the perfect opening, then strike without mercy' },
        { id: 'a3', text: 'Look for the escape route they did not notice' },
        { id: 'a4', text: 'Stare them down and refuse to show fear' },
      ],
      weights: {
        a1: { 'john-mclane': 3, neo: 2, 'ethan-hunt': 1 },
        a2: { 'beatrix-kiddo': 3, furiosa: 2, 'mad-max': 1 },
        a3: { 'ethan-hunt': 3, ripley: 2, neo: 1 },
        a4: { 'sarah-connor': 3, 'mad-max': 2, furiosa: 1 },
      },
    },
    {
      id: 'q5',
      text: 'What is your relationship with authority and rules?',
      answers: [
        { id: 'a1', text: 'Rules get people killed, I trust my own judgment' },
        { id: 'a2', text: 'I follow orders until they stop making sense' },
        { id: 'a3', text: 'I operate outside the system entirely' },
        { id: 'a4', text: 'Authority is a tool, I use it when it suits me' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'mad-max': 2, furiosa: 1 },
        a2: { 'sarah-connor': 3, ripley: 2, 'ethan-hunt': 1 },
        a3: { 'beatrix-kiddo': 3, neo: 2, 'mad-max': 1 },
        a4: { 'ethan-hunt': 3, neo: 2, 'john-mclane': 1 },
      },
    },
    {
      id: 'q6',
      text: 'How do you handle physical pain and injury?',
      answers: [
        { id: 'a1', text: 'I push through and complain about it later' },
        { id: 'a2', text: 'Pain is information, I keep moving' },
        { id: 'a3', text: 'I have trained my body to endure beyond normal limits' },
        { id: 'a4', text: 'I fight smarter so I do not have to take the hit' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'mad-max': 2, furiosa: 1 },
        a2: { furiosa: 3, 'mad-max': 2, ripley: 1 },
        a3: { 'sarah-connor': 3, 'beatrix-kiddo': 2, furiosa: 1 },
        a4: { 'ethan-hunt': 3, neo: 2, ripley: 1 },
      },
    },
    {
      id: 'q7',
      text: 'You discover a conspiracy that changes everything you knew. What now?',
      answers: [
        { id: 'a1', text: 'Question reality and learn to bend it to my will' },
        { id: 'a2', text: 'Gather intel quietly and dismantle it from the inside' },
        { id: 'a3', text: 'Prepare for the worst-case scenario, no matter how crazy it sounds' },
        { id: 'a4', text: 'I do not care about conspiracies, I just survive what is in front of me' },
      ],
      weights: {
        a1: { neo: 3, 'ethan-hunt': 2, ripley: 1 },
        a2: { 'ethan-hunt': 3, 'beatrix-kiddo': 2, neo: 1 },
        a3: { 'sarah-connor': 3, ripley: 2, furiosa: 1 },
        a4: { 'mad-max': 3, 'john-mclane': 2, furiosa: 1 },
      },
    },
    {
      id: 'q8',
      text: 'What drives you to keep fighting when all hope seems lost?',
      answers: [
        { id: 'a1', text: 'Sheer stubbornness, I refuse to be beaten' },
        { id: 'a2', text: 'Protecting someone who cannot protect themselves' },
        { id: 'a3', text: 'A promise I made, and I intend to keep it' },
        { id: 'a4', text: 'Pure survival instinct, I just will not die' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'sarah-connor': 2, ripley: 1 },
        a2: { furiosa: 3, 'sarah-connor': 2, 'john-mclane': 1 },
        a3: { 'beatrix-kiddo': 3, 'ethan-hunt': 2, ripley: 1 },
        a4: { 'mad-max': 3, ripley: 2, furiosa: 1 },
      },
    },
    {
      id: 'q9',
      text: 'Pick your ideal action-movie setting:',
      answers: [
        { id: 'a1', text: 'A towering skyscraper on Christmas Eve, alone' },
        { id: 'a2', text: 'A derelict spaceship drifting through the void' },
        { id: 'a3', text: 'A sprawling desert wasteland with custom war machines' },
        { id: 'a4', text: 'A rain-soaked city where nothing is as it seems' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'ethan-hunt': 1, ripley: 1 },
        a2: { ripley: 3, neo: 2, 'sarah-connor': 1 },
        a3: { furiosa: 3, 'mad-max': 3, 'john-mclane': 1 },
        a4: { neo: 3, 'ethan-hunt': 2, 'beatrix-kiddo': 1 },
      },
    },
    {
      id: 'q10',
      text: 'When the dust settles and the battle is won, what do you do?',
      answers: [
        { id: 'a1', text: 'Limps away, muttering that I just wanted a normal day' },
        { id: 'a2', text: 'Make sure the threat is gone for good, no matter the cost' },
        { id: 'a3', text: 'Disappear into the sunset before anyone can thank me' },
        { id: 'a4', text: 'Take a breath, then start preparing for the next fight' },
      ],
      weights: {
        a1: { 'john-mclane': 3, 'mad-max': 2, 'ethan-hunt': 1 },
        a2: { ripley: 3, 'sarah-connor': 2, 'beatrix-kiddo': 1 },
        a3: { 'mad-max': 3, 'beatrix-kiddo': 2, neo: 1 },
        a4: { 'sarah-connor': 3, furiosa: 2, 'ethan-hunt': 1 },
      },
    },
  ],
  results: [
    {
      key: 'john-mclane',
      name: 'John McClane',
      archetype: 'The Reluctant Badass',
      description:
        "You're just a regular person caught in extraordinary circumstances, and somehow you always come out on top through grit and stubbornness.",
      traits: ['Tough', 'Resourceful', 'Sarcastic', 'Determined'],
      strength: 'You never give up, no matter the odds',
      weakness: 'You have a complicated relationship with authority',
      movieEnergy: 'Blue-collar heroism with a yippee-ki-yay',
      humorousObservation:
        "You've walked barefoot on glass and still complained about your day job.",
      imagePromptBase:
        'Create the exact character John McClane as portrayed by Bruce Willis in Die Hard (1988). Adult white American male, late 30s, rugged average-athletic build, recognizable Bruce Willis facial structure, square jaw, blue eyes, very short dark brown hair, light stubble. He wears the iconic dirty white sleeveless undershirt, dark trousers and a shoulder holster, visibly battered and blood-stained after the Nakatomi Plaza events. 1980s Los Angeles skyscraper interior, broken glass and industrial debris. ONE PERSON ONLY. Exact John McClane appearance, not a generic action hero, not another actor, not an invented character, no extra people.',
    },
    {
      key: 'ripley',
      name: 'Ellen Ripley',
      archetype: 'The Survivor',
      description:
        'You face the unimaginable with practical intelligence and raw courage. When everyone panics, you get the job done.',
      traits: ['Brave', 'Practical', 'Resilient', 'Level-headed'],
      strength: 'You stay calm and think clearly under extreme pressure',
      weakness: 'You carry trauma from things most people can\\u2019t imagine',
      movieEnergy: 'Sci-fi survival with a flamethrower',
      humorousObservation:
        "You've been asked to deal with the alien situation and frankly, you're over it.",
      imagePromptBase:
        'Create the exact character Ellen Ripley as portrayed by Sigourney Weaver in Alien (1979) and Aliens (1986). Adult white woman in her 30s, tall athletic build, angular oval face, brown eyes, shoulder-length dark brown hair, natural appearance. Authentic Nostromo/Aliens-era utilitarian clothing: white or light work shirt, dark trousers, practical boots, rugged industrial gear, optionally carrying the iconic flamethrower. Gritty industrial spaceship corridor with steam and warning lights. ONE WOMAN ONLY. Exact Ellen Ripley appearance, not a generic sci-fi woman, not another actress, no other people, no invented character.',
    },
    {
      key: 'ethan-hunt',
      name: 'Ethan Hunt',
      archetype: 'The Impossible Agent',
      description:
        "You operate in shadows, always with a plan and always running against the clock. Trust is a luxury you can't afford.",
      traits: ['Skilled', 'Adaptable', 'Dedicated', 'Daring'],
      strength: 'You improvise brilliantly under impossible pressure',
      weakness: 'You put the mission above your own wellbeing',
      movieEnergy: 'Globe-trotting espionage with a hanging wire',
      humorousObservation:
        "You've dangled from things no insurance company would ever approve.",
      imagePromptBase:
        'Create the exact character Ethan Hunt as portrayed by Tom Cruise in the Mission: Impossible film series. Adult white American male, athletic compact build, recognizable Tom Cruise facial structure, brown eyes, short dark brown hair, clean-shaven or subtle stubble. Authentic Ethan Hunt tactical/spy clothing, fitted dark shirt or black tactical outfit, practical harness or mission gear. High-tech vault or dangerous espionage environment with laser security grids. ONE MAN ONLY. Exact Ethan Hunt appearance, not a generic secret agent, not another actor, not James Bond, no extra people, no invented character.',
    },
    {
      key: 'furiosa',
      name: 'Furiosa',
      archetype: 'The Fearless Warrior',
      description:
        "You've survived the wasteland and fight for something better. You don't need words when action speaks louder.",
      traits: ['Fearless', 'Driven', 'Tough', 'Compassionate'],
      strength: 'You fight for others even when the world has given up',
      weakness: 'You struggle to trust anyone fully',
      movieEnergy: 'Post-apocalyptic fury with a mechanical arm',
      humorousObservation:
        "You've driven through a desert warzone and called it Tuesday.",
      imagePromptBase:
        'Create the exact character Imperator Furiosa as portrayed by Charlize Theron in Mad Max: Fury Road (2015). Adult white woman, shaved head, athletic muscular build, pale dusty skin, intense blue-gray eyes, strong angular face, dark dirt and grease across forehead and face. She has her distinctive mechanical prosthetic left arm. Authentic Fury Road clothing: worn dark leather, rugged combat gear, dusty post-apocalyptic clothing. Vast orange desert wasteland, War Rig atmosphere, dust storm and harsh sunlight. ONE WOMAN ONLY. Exact Furiosa appearance, not a generic warrior, not another actress, no extra people, no invented character.',
    },
    {
      key: 'neo',
      name: 'Neo',
      archetype: 'The Awakened Fighter',
      description:
        'You discovered the truth and learned to bend reality. You fight not just with fists but with mind.',
      traits: ['Awakened', 'Skilled', 'Determined', 'Philosophical'],
      strength: 'You see through illusions and fight the system',
      weakness: 'You doubt your own abilities until forced to act',
      movieEnergy: 'Digital revolution with bullet-time',
      humorousObservation:
        "You've dodged bullets and still been late to meetings.",
      imagePromptBase:
        'Create the exact character Neo as portrayed by Keanu Reeves in The Matrix (1999). Adult white male around 30, tall slim-athletic build, pale skin, angular oval face, brown eyes, straight dark brown medium-length hair. Authentic black Matrix outfit: long black leather coat, black shirt, black trousers, black boots and narrow black sunglasses. Subtle green Matrix code atmosphere and dark urban setting. ONE MAN ONLY. Exact Neo appearance from the 1999 film, not a generic cyberpunk man, not another actor, no Trinity, no other people, no invented character.',
    },
    {
      key: 'beatrix-kiddo',
      name: 'Beatrix Kiddo',
      archetype: 'The Vengeful Blade',
      description:
        'You were wronged and now nothing will stop your revenge. You are discipline, skill, and fury given form.',
      traits: ['Disciplined', 'Vengeful', 'Skilled', 'Indomitable'],
      strength: 'You have unmatched focus and combat skill',
      weakness: 'Your thirst for revenge consumes everything else',
      movieEnergy: 'Tarantino-style vengeance with a Hattori Hanzo sword',
      humorousObservation:
        "You've made a list and checked it twice, but not in the fun holiday way.",
      imagePromptBase:
        'Create the exact character Beatrix Kiddo as portrayed by Uma Thurman in Kill Bill Vol. 1 and Vol. 2 (2003-2004). Adult white woman in her 30s, tall athletic build, pale skin, blue eyes, blonde hair styled according to the Kill Bill era. Iconic yellow Bruce Lee-inspired tracksuit with black stripes and matching athletic shoes, holding her distinctive Hattori Hanzo katana. Japanese dojo or snowy Japanese garden atmosphere, cinematic martial-arts lighting. ONE WOMAN ONLY. Exact Beatrix Kiddo appearance, not a generic female fighter, not another actress, no extra people, no invented character.',
    },
    {
      key: 'mad-max',
      name: 'Max Rockatansky',
      archetype: 'The Wasteland Drifter',
      description:
        'You survive because you have to, not because you want to. You want to be left alone, but the world won\\u2019t allow it.',
      traits: ['Self-reliant', 'Tough', 'Reluctant', 'Survivor'],
      strength: 'You survive when survival seems impossible',
      weakness: 'You push people away to protect them',
      movieEnergy: 'Diesel-fueled survival in the desert',
      humorousObservation:
        'You just want to be left alone and somehow that makes you the protagonist.',
      imagePromptBase:
        'Create the exact character Max Rockatansky as portrayed by Tom Hardy in Mad Max: Fury Road (2015). Adult white Australian male, early 30s, lean muscular build, weathered face, blue-gray eyes, short dark brown hair, rugged beard stubble. Authentic Max clothing: battered black leather jacket, dark trousers, worn boots, improvised restraints and survival gear. His face and clothing are dusty and battle-worn. Vast Fury Road desert wasteland with his iconic black Interceptor or rugged war vehicle nearby. ONE MAN ONLY. Exact Max Rockatansky appearance from Fury Road, not Mel Gibson, not a generic post-apocalyptic man, no extra people, no invented character.',
    },
    {
      key: 'sarah-connor',
      name: 'Sarah Connor',
      archetype: 'The Prepared Warrior',
      description:
        'You transformed from ordinary to extraordinary because the future demanded it. You train, you prepare, you endure.',
      traits: ['Determined', 'Protective', 'Tough', 'Strategic'],
      strength: 'You prepare for the worst and never stop fighting',
      weakness: 'Your intensity can push people away',
      movieEnergy: 'Future-war preparation with pull-ups in the asylum',
      humorousObservation:
        "You've been called crazy for predicting the apocalypse and then the apocalypse showed up.",
      imagePromptBase:
        'Create the exact character Sarah Connor as portrayed by Linda Hamilton in Terminator 2: Judgment Day (1991). Adult white woman in her early 30s, athletic muscular physique, strong angular face, blue eyes, dark brown curly shoulder-length hair. Authentic T2 Sarah Connor appearance: black tank top, dark tactical clothing, combat boots, muscular arms and determined expression, practical weapons and survival gear. Gritty industrial or psychiatric-facility environment with dramatic cinematic lighting. ONE WOMAN ONLY. Exact Sarah Connor appearance from Terminator 2, not a generic female soldier, not another actress, no extra people, no invented character.',
    },
  ],
};
