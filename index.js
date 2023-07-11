const raffledict = {
  'Cyberkong VX': Array.from({ length: 78 }, (_, i) => i + 1),
  'Gangster All Star Evolution': Array.from({ length: 101 }, (_, i) => i + 78),
  'Captainz': Array.from({ length: 6 }, (_, i) => i + 179),
  'Genesis kong': Array.from({ length: 8 }, (_, i) => i + 185),
  'Baby kong': Array.from({ length: 19 }, (_, i) => i + 193),
  'Meebits': Array.from({ length: 5 }, (_, i) => i + 212),
  'Kaiju Kingz': Array.from({ length: 9 }, (_, i) => i + 217),
  'ASM AIFA Box': Array.from({ length: 5 }, (_, i) => i + 226),
  'Goblintown': Array.from({ length: 6 }, (_, i) => i + 231),
  'Treeverse': Array.from({ length: 8 }, (_, i) => i + 237),
  'MCBurger': Array.from({ length: 2 }, (_, i) => i + 245),
  'Deadfellaz': Array.from({ length: 10 }, (_, i) => i + 247),
  'Boss Beauties': Array.from({ length: 14 }, (_, i) => i + 257),
  'SupDucks': Array.from({ length: 29 }, (_, i) => i + 271),
  'Purrnelopes Country Club': Array.from({ length: 30 }, (_, i) => i + 300),
  'FoxFam': Array.from({ length: 26 }, (_, i) => i + 330),
  'The Doggies': Array.from({ length: 15 }, (_, i) => i + 356),
  'Worldwide Webb Land': Array.from({ length: 3 }, (_, i) => i + 371),
  'CyberBrokers': Array.from({ length: 2 }, (_, i) => i + 374),
  'The Potatoz': Array.from({ length: 3 }, (_, i) => i + 376),
  'EtherOrcs Genesis': Array.from({ length: 7 }, (_, i) => i + 379),
  'EtherOrcs Allies': Array.from({ length: 18 }, (_, i) => i + 386),
  'EZU': Array.from({ length: 5 }, (_, i) => i + 404),
  'Furballs': Array.from({ length: 4 }, (_, i) => i + 409),
  'Nifty League DEGENs': Array.from({ length: 4 }, (_, i) => i + 413),
  'Jadu Ava': Array.from({ length: 14 }, (_, i) => i + 417),
  'Cool Pets': Array.from({ length: 10 }, (_, i) => i + 431),
  'Squishiverse': Array.from({ length: 10 }, (_, i) => i + 441),
  'Sappy Seals': Array.from({ length: 4 }, (_, i) => i + 451),
  'Mocaverse': Array.from({ length: 5 }, (_, i) => i + 455),
  'Habbo Avatars': Array.from({ length: 8 }, (_, i) => i + 460),
  'Grumpls': Array.from({ length: 7 }, (_, i) => i + 468),
  'Kubz': Array.from({ length: 7 }, (_, i) => i + 475),
  'Cel Mates Crime Reports': Array.from({ length: 2 }, (_, i) => i + 482),
  'Realms (for Adventurers)': Array.from({ length: 1 }, (_, i) => i + 484),
  'Acclimated Moon Cats': Array.from({ length: 5 }, (_, i) => i + 485),
  'My Pet Hooligan': Array.from({ length: 1 }, (_, i) => i + 490),
  'Sandbox': Array.from({ length: 1 }, (_, i) => i + 491),
  'Castaway Genesis': Array.from({ length: 2 }, (_, i) => i + 492)
};
  
  const prizeImageDict = {
    'Cyberkong VX': '2818Kong.png',
    'Gangster All Star Evolution': 'gangsterstar.png',
    'Captainz': 'captainz.png',
    'Genesis kong': 'genkong.png',
    'Baby kong': 'babykong.png',
    'Meebits': 'meebits.png',
    'Kaiju Kingz': 'kaiju.png',
    'ASM AIFA Box': 'asmaifa.png',
    'Goblintown': 'goblintown.png',
    'Treeverse': 'treeverse.png',
    'MCBurger': 'mcgoblinburger.png',
    'Deadfellaz': 'deadfellaz.png',
    'Boss Beauties': 'bossbeauty.png',
    'SupDucks': 'supducks.png',
    'Purrnelopes Country Club': 'purrcat.png',
    'FoxFam': 'foxfam.png',
    'The Doggies': 'doggies.png',
    'Worldwide Webb Land': 'wwwland.png',
    'CyberBrokers': 'broker5.png',
    'The Potatoz': 'potatoz.png',
    'EtherOrcs Genesis': 'orcgenesis.png',
    'EtherOrcs Allies': 'orcalliance.png',
    'EZU': 'ezu.png',
    'Furballs': 'furballfix.png',
    'Nifty League DEGENs': 'nifty.png',
    'Jadu Ava': 'jaduava.png',
    'Cool Pets': 'coolpet.png',
    'Squishiverse': 'squish.png',
    'Sappy Seals': 'sappy.png',
    'Mocaverse': 'moca.png',
    'Habbo Avatars': 'habbopic.png',
    'Grumpls': 'grumpl.png',
    'Kubz': 'kubz.png',
    'Cel Mates Crime Reports': 'crimereport.png',
    'Realms (for Adventurers)': 'realms.png',
    'Acclimated Moon Cats': 'mooncat.png',
    'My Pet Hooligan': 'hooligan.png',
    'Sandbox': 'sandboxpic.png',
    'Castaway Genesis': 'castaway.png'
  };

  function roll() {
    const random_number = Math.floor(Math.random() * 494) + 1;

    let selected_key = null;
    for (const [key, value_range] of Object.entries(raffledict)) {
      if (value_range.includes(random_number)) {
        selected_key = key;
        break;
      }
    }
    const nftPic = prizeImageDict[selected_key];
    document.getElementById("nftImage").src = nftPic;
    document.getElementById("prize").innerHTML = (`Prize : ${selected_key}`);
  }

  // Button click event
  document.getElementById('rollButton').addEventListener('click', roll);