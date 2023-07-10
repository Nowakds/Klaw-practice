const raffledict = {
  'Genesis kong': Array.from({length: 10 - 1 + 1}, (_, i) => i + 1),
  'Baby kong': Array.from({length: 35 - 10 + 1}, (_, i) => i + 10),
  'Cyberkong VX': Array.from({length: 125 - 35 + 1}, (_, i) => i + 35),
  'Meebits': Array.from({length: 135 - 125 + 1}, (_, i) => i + 125),
  'Kaiju Kingz': Array.from({length: 146 - 135 + 1}, (_, i) => i + 135),
  'ASM AIFA Box': Array.from({length: 154 - 146 + 1}, (_, i) => i + 146),
  'Goblintown': Array.from({length: 162 - 154 + 1}, (_, i) => i + 154),
  'Treeverse': Array.from({length: 170 - 162 + 1}, (_, i) => i + 162),
  'MCBurger': Array.from({length: 173 - 170 + 1}, (_, i) => i + 170),
  'Deadfellaz': Array.from({length: 189 - 173 + 1}, (_, i) => i + 173),
  'Boss Beauties': Array.from({length: 208 - 189 + 1}, (_, i) => i + 189),
  'SupDucks': Array.from({length: 244 - 208 + 1}, (_, i) => i + 208),
  'Purrnelopes Country Club': Array.from({length: 279 - 244 + 1}, (_, i) => i + 244),
  'FoxFam': Array.from({length: 309 - 279 + 1}, (_, i) => i + 279),
  'The Doggies': Array.from({length: 326 - 309 + 1}, (_, i) => i + 309),
  'Worldwide Webb Land': Array.from({length: 329 - 326 + 1}, (_, i) => i + 326),
  'CyberBrokers': Array.from({length: 333 - 329 + 1}, (_, i) => i + 329),
  'The Potatoz': Array.from({length: 336 - 333 + 1}, (_, i) => i + 333),
  'EtherOrcs Genesis': Array.from({length: 343 - 336 + 1}, (_, i) => i + 336),
  'EtherOrcs Allies': Array.from({length: 362 - 343 + 1}, (_, i) => i + 343),
  'EZU': Array.from({length: 370 - 362 + 1}, (_, i) => i + 362),
  'Furballs': Array.from({length: 375 - 370 + 1}, (_, i) => i + 370),
  'Nifty League DEGENs': Array.from({length: 380 - 375 + 1}, (_, i) => i + 375),
  'Gangster All Star Evolution': Array.from({length: 502 - 380 + 1}, (_, i) => i + 380),
  'Jadu Ava': Array.from({length: 520 - 502 + 1}, (_, i) => i + 502),
  'Captainz': Array.from({length: 526 - 520 + 1}, (_, i) => i + 520),
  'Cool Pets': Array.from({length: 540 - 526 + 1}, (_, i) => i + 526),
  'Squishiverse': Array.from({length: 552 - 540 + 1}, (_, i) => i + 540),
  'Sappy Seals': Array.from({length: 557 - 552 + 1}, (_, i) => i + 552),
  'Mocaverse': Array.from({length: 563 - 557 + 1}, (_, i) => i + 557),
  'Habbo Avatars': Array.from({length: 572 - 563 + 1}, (_, i) => i + 563),
  'Grumpls': Array.from({length: 582 - 572 + 1}, (_, i) => i + 572),
  'Kubz': Array.from({length: 590 - 582 + 1}, (_, i) => i + 582),
  'Cel Mates Crime Reports': Array.from({length: 594 - 590 + 1}, (_, i) => i + 590),
  'Realms (for Adventurers)': Array.from({length: 595 - 594 + 1}, (_, i) => i + 594),
  'Acclimated Moon Cats': Array.from({length: 601 - 595 + 1}, (_, i) => i + 595),
  'My Pet Hooligan': Array.from({length: 602 - 601 + 1}, (_, i) => i + 601)
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
  'My Pet Hooligan': 'hooligan.png'
};

function roll() {
  const random_number = Math.floor(Math.random() * 601) + 1;

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