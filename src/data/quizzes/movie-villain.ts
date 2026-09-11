import type { Quiz } from '../../types';

export const movieVillainQuiz: Quiz = {
  id: 'movie-villain',
  slug: 'which-movie-villain-are-you',
  title: 'Which Movie Villain Are You?',
  subtitle: 'Embrace your darker side and discover your cinematic nemesis within',
  description:
    'Are you a chaotic agent of anarchy, a fallen knight of empire, or a cultured predator with impeccable taste? Answer ten questions about ambition, power, conflict, and control to reveal which legendary movie villain lives inside you.',
  category: 'Movie Villain',
  emoji: '😈',
  accentColor: '#8b0000',
  gradient: 'linear-gradient(135deg, #8b0000 0%, #2c0000 100%)',

  questions: [
    {
      id: 'q1',
      text: 'How do you go after something you want badly?',
      answers: [
        { id: 'a1', text: 'I create a spectacle — the chase is the point.' },
        { id: 'a2', text: 'I command others to get it done.' },
        { id: 'a3', text: 'I plan every angle before I make a move.' },
        { id: 'a4', text: 'I pursue it with total, singular focus.' },
      ],
      weights: {
        a1: { joker: 3, 'anton-chigurh': 1 },
        a2: { 'darth-vader': 3, voldemort: 2 },
        a3: { 'hans-gruber': 3, 'hannibal-lecter': 2 },
        a4: { voldemort: 3, 'anton-chigurh': 2 },
      },
    },
    {
      id: 'q2',
      text: 'When someone betrays your trust, what happens next?',
      answers: [
        { id: 'a1', text: "They're erased — completely and permanently." },
        { id: 'a2', text: 'I curse them for eternity. They will remember me.' },
        { id: 'a3', text: 'I have a contingency for that. Always.' },
        { id: 'a4', text: 'I let fate decide. A coin toss, perhaps.' },
      ],
      weights: {
        a1: { voldemort: 3, maleficent: 1 },
        a2: { maleficent: 3, voldemort: 2 },
        a3: { 'hans-gruber': 3, 'darth-vader': 1 },
        a4: { 'anton-chigurh': 3, joker: 1 },
      },
    },
    {
      id: 'q3',
      text: 'Which environment feels most like home to you?',
      answers: [
        { id: 'a1', text: 'A place where order is absolute and quiet.' },
        { id: 'a2', text: 'The open road — nowhere and everywhere.' },
        { id: 'a3', text: 'A refined space with art, wine, and good company.' },
        { id: 'a4', text: 'A seat of power where my commands are law.' },
      ],
      weights: {
        a1: { 'nurse-ratched': 3, 'darth-vader': 1 },
        a2: { 'anton-chigurh': 3, joker: 2 },
        a3: { 'hannibal-lecter': 3, 'hans-gruber': 1 },
        a4: { 'darth-vader': 3, voldemort: 2 },
      },
    },
    {
      id: 'q4',
      text: 'How do you handle a direct conflict?',
      answers: [
        { id: 'a1', text: "I don't negotiate. Ever." },
        { id: 'a2', text: 'I talk my way through it — charm and strategy.' },
        { id: 'a3', text: 'I stay calm and apply pressure until they crack.' },
        { id: 'a4', text: 'I read them completely, then dismantle them.' },
      ],
      weights: {
        a1: { 'anton-chigurh': 3, voldemort: 1 },
        a2: { 'hans-gruber': 3, 'hannibal-lecter': 2 },
        a3: { 'nurse-ratched': 3, maleficent: 1 },
        a4: { 'hannibal-lecter': 3, joker: 1 },
      },
    },
    {
      id: 'q5',
      text: "What's your relationship with the rules?",
      answers: [
        { id: 'a1', text: 'Rules are a joke — I break them for the joy of it.' },
        { id: 'a2', text: 'Rules are beneath me.' },
        { id: 'a3', text: 'I am the rules.' },
        { id: 'a4', text: 'I enforce them — quietly and without exception.' },
      ],
      weights: {
        a1: { joker: 3, voldemort: 1 },
        a2: { voldemort: 3, 'darth-vader': 2 },
        a3: { 'darth-vader': 3, 'nurse-ratched': 1 },
        a4: { 'nurse-ratched': 3, 'hannibal-lecter': 1 },
      },
    },
    {
      id: 'q6',
      text: 'When you walk into a room, how do people react?',
      answers: [
        { id: 'a1', text: "Fear and awe — they know who's in charge." },
        { id: 'a2', text: 'A creeping unease they cannot quite name.' },
        { id: 'a3', text: 'Dread and reverence, like royalty has arrived.' },
        { id: 'a4', text: "They don't notice me until it's too late." },
      ],
      weights: {
        a1: { 'darth-vader': 3, voldemort: 2 },
        a2: { 'hannibal-lecter': 3, 'nurse-ratched': 1 },
        a3: { maleficent: 3, 'darth-vader': 1 },
        a4: { 'nurse-ratched': 3, 'anton-chigurh': 2 },
      },
    },
    {
      id: 'q7',
      text: 'What scares you the most?',
      answers: [
        { id: 'a1', text: 'Death and the loss of everything I have built.' },
        { id: 'a2', text: 'Being hurt again — truly vulnerable.' },
        { id: 'a3', text: 'Becoming the person I used to be.' },
        { id: 'a4', text: 'Someone outsmarting my plan.' },
      ],
      weights: {
        a1: { voldemort: 3, 'darth-vader': 1 },
        a2: { maleficent: 3, 'hannibal-lecter': 1 },
        a3: { 'darth-vader': 3, voldemort: 1 },
        a4: { 'hans-gruber': 3, 'anton-chigurh': 1 },
      },
    },
    {
      id: 'q8',
      text: 'How do you present yourself to the world?',
      answers: [
        { id: 'a1', text: 'Impeccable tailoring. Sharp. In control.' },
        { id: 'a2', text: 'Refined, understated, impossible to forget.' },
        { id: 'a3', text: 'Bold, theatrical, impossible to ignore.' },
        { id: 'a4', text: 'Majestic and dramatic — I make an entrance.' },
      ],
      weights: {
        a1: { 'hans-gruber': 3, 'darth-vader': 1 },
        a2: { 'hannibal-lecter': 3, 'nurse-ratched': 1 },
        a3: { joker: 3, maleficent: 2 },
        a4: { maleficent: 3, joker: 1 },
      },
    },
    {
      id: 'q9',
      text: 'What drives you at your core?',
      answers: [
        { id: 'a1', text: 'Principle. Fate. The rules of the universe.' },
        { id: 'a2', text: 'Control — order above all else.' },
        { id: 'a3', text: 'Pain transformed into power.' },
        { id: 'a4', text: 'Exposing the lies everyone pretends are not there.' },
      ],
      weights: {
        a1: { 'anton-chigurh': 3, voldemort: 1 },
        a2: { 'nurse-ratched': 3, 'darth-vader': 1 },
        a3: { maleficent: 3, voldemort: 1 },
        a4: { joker: 3, 'hannibal-lecter': 1 },
      },
    },
    {
      id: 'q10',
      text: 'How will you be remembered?',
      answers: [
        { id: 'a1', text: 'As the punchline that broke everything.' },
        { id: 'a2', text: 'A name whispered in fear for generations.' },
        { id: 'a3', text: 'A legend of taste, intelligence, and menace.' },
        { id: 'a4', text: 'As something inevitable — like gravity.' },
      ],
      weights: {
        a1: { joker: 3, 'anton-chigurh': 1 },
        a2: { voldemort: 3, 'darth-vader': 1 },
        a3: { 'hannibal-lecter': 3, 'hans-gruber': 1 },
        a4: { 'anton-chigurh': 3, 'darth-vader': 1 },
      },
    },
  ],

  results: [
    {
      key: 'joker',
      name: 'The Joker',
      archetype: 'The Agent of Chaos',
      description:
        'You embrace unpredictability and question every rule society holds dear. You find humor where others find horror.',
      traits: ['Unpredictable', 'Theatrical', 'Brilliant', 'Subversive'],
      strength: 'You expose the contradictions everyone else ignores',
      weakness: "You destroy what you can't control",
      movieEnergy: 'Controlled chaos with a punchline',
      humorousObservation:
        'You think the real joke is that everyone else is following rules that don\\'t exist.',
      imagePromptBase:
        'Create the exact movie character The Joker as portrayed by Heath Ledger in The Dark Knight (2008). Adult white male, lean build, pale white makeup, heavily smeared black eye makeup, scarred red Glasgow-smile makeup, messy medium-length dirty green hair, intense blue-green eyes, recognizable Heath Ledger facial structure, wearing the authentic worn purple coat and dark vest/shirt from The Dark Knight. Dark Gotham City atmosphere, gritty 2008 crime-thriller cinematography, realistic practical makeup, dramatic cinematic lighting. ONE PERSON ONLY. Exact Heath Ledger Joker, not Joaquin Phoenix Joker, not Jack Nicholson Joker, not a generic clown, not a random actor, not an invented villain, no other people.',
    },
    {
      key: 'darth-vader',
      name: 'Darth Vader',
      archetype: 'The Fallen Knight',
      description:
        'You once had ideals, but power and loss transformed you. You command respect through authority and unflinching resolve.',
      traits: ['Authoritative', 'Powerful', 'Conflicted', 'Relentless'],
      strength: 'You command any room with sheer presence',
      weakness: "You're haunted by who you used to be",
      movieEnergy: 'Imperial dominance with a hint of redemption',
      humorousObservation:
        "You've force-choked someone for incompetence and honestly considered it a team-building exercise.",
      imagePromptBase:
        'Create the exact movie character Darth Vader from the original Star Wars trilogy, especially The Empire Strikes Back (1980) and Return of the Jedi (1983). Tall imposing human male completely enclosed in authentic black Darth Vader armor, iconic black helmet and triangular mouth grille, black cape, chest control panel, armored gloves, heavy black boots, unmistakable original trilogy costume design. Black mechanical armor should look physical and practical, not futuristic generic armor. Dark Imperial Star Destroyer interior, subtle red and white practical lighting, cinematic 1970s/1980s Star Wars visual style. ONE PERSON ONLY. Exact original-trilogy Darth Vader, not Kylo Ren, not a generic armored villain, not a random character, no other people, no stormtroopers.',
    },
    {
      key: 'hannibal-lecter',
      name: 'Hannibal Lecter',
      archetype: 'The Cultured Predator',
      description:
        'You possess refined taste and a brilliant mind. You see through everyone\\'s pretenses with unsettling clarity.',
      traits: ['Sophisticated', 'Brilliant', 'Manipulative', 'Refined'],
      strength: 'You understand people better than they understand themselves',
      weakness: 'You view others as either interesting or boring',
      movieEnergy: 'Elegant psychological horror',
      humorousObservation:
        "You pair your wine with something questionable and still get compliments on your hosting.",
      imagePromptBase:
        'Create the exact movie character Dr. Hannibal Lecter as portrayed by Anthony Hopkins in The Silence of the Lambs (1991). Adult white male in his 50s, pale complexion, intelligent penetrating blue eyes, short neatly combed dark brown hair with subtle gray, distinctive Anthony Hopkins facial structure, calm controlled expression, refined elegant posture. Authentic Hannibal Lecter appearance from the film: restrained prison clothing or sophisticated dark suit, immaculate and understated. Psychological thriller atmosphere, stark institutional prison setting, cold cinematic lighting, realistic 1991 film aesthetic. ONE MAN ONLY. Exact Anthony Hopkins Hannibal Lecter, not Mads Mikkelsen, not a generic serial killer, not a generic businessman, not another actor, no other people.',
    },
    {
      key: 'voldemort',
      name: 'Lord Voldemort',
      archetype: 'The Obsessed Tyrant',
      description:
        'You fear nothing more than imperfection and loss of control. You pursue power with singular, terrifying focus.',
      traits: ['Ambitious', 'Ruthless', 'Intelligent', 'Fearless'],
      strength: 'You pursue your goals with absolute single-mindedness',
      weakness: 'You cannot accept vulnerability or mortality',
      movieEnergy: 'Dark magical supremacy with snake-like precision',
      humorousObservation:
        'You have serious commitment issues — specifically, to your own nose.',
      imagePromptBase:
        'Create the exact movie character Lord Voldemort as portrayed by Ralph Fiennes in the Harry Potter films, especially Harry Potter and the Goblet of Fire (2005). Tall thin adult male wizard with extremely pale corpse-like skin, completely hairless head, flattened snake-like nose with narrow slits instead of a normal human nose, red-tinged eyes, thin lips, long skeletal fingers, sinister expression, recognizable Ralph Fiennes facial structure transformed by Voldemort makeup and prosthetics. Authentic long black wizard robes, dark magical atmosphere, Hogwarts-era dark stone interior, subtle green magical light. Photorealistic cinematic fantasy, practical prosthetic detail. ONE PERSON ONLY. Exact Ralph Fiennes Voldemort, not a generic wizard, not a normal bald man, not another Harry Potter character, no other people.',
    },
    {
      key: 'nurse-ratched',
      name: 'Nurse Ratched',
      archetype: 'The Quiet Authority',
      description:
        'You maintain control through calm, not volume. Your power lies in knowing exactly which buttons to press.',
      traits: ['Composed', 'Controlling', 'Patient', 'Strategic'],
      strength: 'You dominate through psychological precision',
      weakness: 'You punish anyone who challenges your order',
      movieEnergy: 'Institutional control with a smile',
      humorousObservation:
        "You've made people feel guilty for breathing too loudly, and you enjoyed it.",
      imagePromptBase:
        'Create the exact movie character Nurse Mildred Ratched as portrayed by Louise Fletcher in One Flew Over the Cuckoo\\'s Nest (1975). Adult white woman in her 40s, composed symmetrical face, pale complexion, cool blue eyes, neatly styled short light-brown to auburn hair, controlled expression, unmistakable Louise Fletcher appearance. Authentic 1960s psychiatric hospital nurse uniform: crisp white nurse dress, white cardigan or medical attire, modest professional styling. Sterile psychiatric ward corridor, muted institutional colors, soft but unsettling fluorescent lighting, realistic 1975 film aesthetic. ONE WOMAN ONLY. Exact Louise Fletcher Nurse Ratched, not a generic nurse, not a modern nurse, not another actress, no patients, no other people.',
    },
    {
      key: 'hans-gruber',
      name: 'Hans Gruber',
      archetype: 'The Mastermind',
      description:
        "You plan every detail and always have a contingency. You're charming, intelligent, and always three steps ahead.",
      traits: ['Strategic', 'Charming', 'Cunning', 'Sophisticated'],
      strength: 'You anticipate every move before it happens',
      weakness: 'You underestimate genuine heroism',
      movieEnergy: 'Heist precision with tailored-suit style',
      humorousObservation:
        "You've delivered a monologue mid-heist and still hit your deadline.",
      imagePromptBase:
        'Create the exact movie character Hans Gruber as portrayed by Alan Rickman in Die Hard (1988). Adult white German male in his 40s, slim elegant build, pale complexion, sharp intelligent facial features, piercing blue eyes, dark neatly styled hair, recognizable Alan Rickman face, calm sophisticated expression. Authentic Hans Gruber wardrobe: impeccably tailored charcoal or dark gray suit, crisp dress shirt, elegant tie, expensive understated clothing. Inside the Nakatomi Plaza skyscraper in Los Angeles, nighttime city lights through large windows, sophisticated 1980s action-thriller cinematography. ONE MAN ONLY. Exact Alan Rickman Hans Gruber, not Severus Snape, not a generic businessman, not a generic terrorist, not another actor, no other people.',
    },
    {
      key: 'anton-chigurh',
      name: 'Anton Chigurh',
      archetype: 'The Inevitable Force',
      description:
        "You are fate personified. You don't negotiate, you don't compromise, and you make decisions with a coin toss.",
      traits: ['Relentless', 'Principled', 'Unnerving', 'Inevitable'],
      strength: 'You cannot be intimidated or swayed',
      weakness: 'You lack all empathy',
      movieEnergy: 'Existential dread in boots',
      humorousObservation:
        "You've asked someone to call a coin toss and they didn't find it nearly as fun as you did.",
      imagePromptBase:
        'Create the exact movie character Anton Chigurh as portrayed by Javier Bardem in No Country for Old Men (2007). Adult Spanish male in his late 40s, tall lean build, pale weathered complexion, distinctive severe bowl haircut with straight dark brown hair, dark brown eyes, broad angular face, recognizable Javier Bardem facial structure, expressionless unsettling stare. Authentic dark 1970s-style clothing, dusty brown or dark jacket, shirt and trousers. West Texas landscape, roadside or motel atmosphere, harsh natural sunlight, muted earthy colors, neo-western crime-thriller cinematography. A small coin may be present in one hand. ONE MAN ONLY. Exact Javier Bardem Anton Chigurh, not a generic cowboy, not a generic hitman, not another actor, no other people.',
    },
    {
      key: 'maleficent',
      name: 'Maleficent',
      archetype: 'The Spurned Power',
      description:
        'You were wronged and now guard your heart with thorns. Your power is ancient, your grudges are eternal, and your wings are your own.',
      traits: ['Majestic', 'Vengeful', 'Powerful', 'Misunderstood'],
      strength: 'You transform pain into formidable power',
      weakness: 'You guard your heart so tightly it isolates you',
      movieEnergy: 'Dark fairy-tale grandeur with green fire',
      humorousObservation:
        'You showed up uninvited and somehow made the whole party about you. Iconic.',
      imagePromptBase:
        'Create the exact movie character Maleficent as portrayed by Angelina Jolie in Maleficent (2014). Adult white woman with extremely distinctive Angelina Jolie facial features, high sculpted cheekbones, sharp jawline, pale skin, intense green eyes, full lips, elegant sinister expression. Large black curved ram-like horns emerging from her head, long black cloak and gothic medieval-fantasy costume, enormous dark wings behind her, sophisticated dark fairy design from the 2014 film. Enchanted dark forest or gothic fantasy kingdom, subtle green magical glow, cinematic fantasy lighting, highly detailed realistic costume and makeup. ONE WOMAN ONLY. Exact Angelina Jolie Maleficent, not a generic witch, not a generic fairy, not another actress, no other people.',
    },
  ],
};
