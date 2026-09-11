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
        'JOHN WICK — specifically the John Wick film portrayal played by Keanu Reeves. Recreate the recognizable on-screen appearance of the character, not a generic male assassin. Adult man in his mid-to-late 40s, lean athletic build, pale/light complexion, angular masculine face, dark brown almost black medium-length hair parted naturally and slightly falling around the sides of the face, distinctive short full dark beard and mustache, serious emotionally restrained expression, intense dark eyes. He wears the iconic fitted black tailored three-piece suit or black tactical suit, crisp white dress shirt, black tie, polished black leather dress shoes. His appearance must clearly evoke the modern John Wick films: elegant assassin styling, slightly weathered face, controlled posture, understated professional appearance. If a weapon is visible, keep it secondary and unobtrusive. One person only, full recognizable character identity, no generic businessman, no random model, no unrelated celebrity. Photorealistic cinematic film still, realistic human anatomy, authentic movie wardrobe, dramatic practical lighting, subtle dark neo-noir atmosphere.',
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
        'INDIANA JONES — specifically the classic film portrayal played by Harrison Ford, especially the Raiders of the Lost Ark / Indiana Jones trilogy appearance. Recreate the recognizable movie character, not a generic adventurer. Adult white man in his late 30s to 40s, rugged athletic build, strong square masculine face, slightly weathered skin, dark brown medium-length hair brushed back with natural volume, thick dark eyebrows, clean-shaven or very light stubble depending on scene. Iconic brown leather fedora with a wide brim, worn brown leather jacket, light khaki button-up shirt, dark brown trousers, leather shoulder satchel crossing the torso, sturdy brown leather boots. His signature bullwhip may be attached at his side or held naturally, but it must not obscure his face. Adventurous archaeologist appearance, dusty clothing and subtle signs of travel. One person only, recognizable Harrison Ford-era Indiana Jones silhouette and wardrobe, no generic cowboy, no modern explorer, no other characters. Photorealistic cinematic adventure film still, authentic 1930s-inspired costume, realistic proportions, warm natural light, dusty archaeological environment.',
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
        'ELLE WOODS — specifically Reese Witherspoon as Elle Woods in Legally Blonde (2001). Recreate the recognizable film character, not a generic blonde woman. Young adult white woman in her early 20s, petite slim build, fair skin, heart-shaped feminine face, bright expressive blue eyes, small nose, youthful features, long straight glossy golden-blonde hair styled neatly with a center or soft side part. Polished glamorous appearance. She wears fashionable early-2000s feminine clothing dominated by vivid pink: fitted pink blazer or cardigan, coordinated pink top or dress, tasteful accessories, manicured appearance. Include a subtle legal/student context such as Harvard law books, but keep Elle herself as the unmistakable focal point. Her expression should be confident, intelligent, upbeat and slightly playful. One person only, no generic fashion model, no unrelated blonde celebrity, no modern influencer aesthetic. Photorealistic cinematic film still, authentic Legally Blonde-era styling, realistic face and hair, bright polished lighting, pink visual identity.',
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
        'FERRIS BUELLER — specifically Matthew Broderick as Ferris Bueller in Ferris Bueller’s Day Off (1986). Recreate the recognizable film character, not a generic young man. Teenaged white male, slim average build, youthful clean-cut face, fair/light complexion, dark brown short neatly styled hair with natural volume, expressive brown eyes, confident mischievous smile. Iconic 1980s Ferris styling: relaxed white shirt or patterned short-sleeve shirt layered under a casual jacket, distinctive casual 1980s clothing, youthful polished appearance. He should look charming, carefree and playfully confident rather than like a modern teenager. A classic Chicago setting or parade atmosphere can appear in the background, but Ferris must remain the single clear subject. One person only, no Cameron, no Sloane, no crowd surrounding him, no generic model. Photorealistic cinematic comedy film still, authentic 1980s color and wardrobe, realistic youthful facial proportions, joyful mischievous expression.',
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
        'KATNISS EVERDEEN — specifically Jennifer Lawrence as Katniss in The Hunger Games film series. Recreate the recognizable movie character, not a generic female archer. Young adult white woman around 17–20, athletic lean build, light olive/fair complexion, strong determined oval face, gray-blue eyes, straight dark brown hair usually worn in her iconic long side braid, natural eyebrows, minimal makeup, practical rugged appearance. She wears the recognizable District 12 / Hunger Games styling: dark fitted survival clothing, practical jacket or arena outfit, sturdy boots, muted earthy colors. Her signature recurve bow and arrows may be present and naturally held or carried. Include subtle details associated with the Hunger Games world, but do not turn her into a generic fantasy warrior. Her expression should be focused, guarded and quietly defiant. One person only, no Peeta, no Gale, no other tributes, no crowd. Photorealistic cinematic film still, realistic Jennifer Lawrence-era facial appearance, authentic dystopian costume, natural skin texture, dramatic but believable lighting.',
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
        'SHERLOCK HOLMES — specifically Robert Downey Jr. as Sherlock Holmes in the Guy Ritchie Sherlock Holmes films (2009 and 2011). Recreate this exact cinematic interpretation, not a generic detective and not the Benedict Cumberbatch television version. Adult white British man in his late 30s to early 40s, slim athletic build, pale complexion, narrow angular face, sharp cheekbones, intense light-colored eyes, dark brown wavy medium-length hair, slightly unkempt but deliberate Victorian styling, subtle facial stubble. Wear authentic late-19th-century London clothing associated with Robert Downey Jr.’s version: dark Victorian suit, waistcoat, white shirt, dark tie or cravat, long dark overcoat, period-appropriate details. His expression should be intensely analytical, eccentric and confident. Optional subtle detective props such as a magnifying glass or notebook, but no other people. One person only, unmistakably Robert Downey Jr.’s Sherlock Holmes, not a generic Victorian detective. Photorealistic cinematic film still, gritty Victorian London atmosphere, period-authentic wardrobe, dramatic gaslight, realistic anatomy and facial detail.',
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
        'THELMA DICKINSON — specifically Geena Davis as Thelma in Thelma & Louise (1991). Recreate the recognizable film character, not a generic woman driving a car. Young adult white woman in her late 20s to early 30s, slim average build, fair complexion, expressive youthful face, large expressive eyes, soft feminine facial features, medium-to-long light brown hair with natural volume, casual early-1990s appearance. She wears the recognizable casual road-trip clothing from the film: practical denim or casual shirt, light-colored top, jeans, simple accessories, natural makeup. She is adventurous but initially somewhat innocent, with an increasingly confident and liberated expression. If a car appears, use a classic early-1990s vintage Ford Thunderbird convertible associated with the film, but Thelma must remain the single visual focus. One woman only, no Louise, no second person, no crowd. Photorealistic cinematic road-movie film still, authentic early-1990s styling, realistic skin and hair, warm desert sunlight, open American highway atmosphere.',
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
        'NEO — specifically Keanu Reeves as Neo in The Matrix (1999). Recreate the recognizable movie character, not a generic cyberpunk man. Adult male in his late 20s to early 30s, slim athletic build, pale/light complexion, angular oval face, strong jawline, dark brown eyes, straight dark brown medium-length hair parted naturally and falling slightly over the forehead, clean-shaven face. Iconic Matrix appearance: long black leather coat, black shirt, black trousers, black boots, narrow dark sunglasses when appropriate, minimalist futuristic styling. His expression should be calm, serious, introspective and determined. Use subtle green-tinted Matrix atmosphere or rain-soaked urban architecture, but do not turn the image into a generic cyberpunk character. One person only, no Trinity, no Morpheus, no agents, no crowd. Photorealistic cinematic film still, recognizable Keanu Reeves-era Neo appearance, authentic 1999 Matrix wardrobe, realistic facial features, dramatic controlled lighting, subtle green digital atmosphere.',
    },
  ],
};
