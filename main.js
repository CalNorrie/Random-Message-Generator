const randomNouns = () => {
    const nounsList = ['vibes', 'blessings', 'riches', 'tidings', 'memories', 'fortunes', 'misfortunes', 'days', 'nights', 'futures']
    return nounsList[Math.floor(Math.random() * 10)]
}

const randomAdjective = () => {
    const adjectiveList = ['good', 'bad', 'questionable', 'immaculate', 'horrific', 'confusing', 'memorable', 'cataclysmic', 'boring', 'marvellous']
    return adjectiveList[Math.floor(Math.random() * 10)]
}

const randomVerb = () => {
    const verbList = ['can dunk', 'run', 'wait', 'push on', 'fight', 'remember', 'forget', 'strive for greatness', 'skip leg day', 'recognise the trebuchet as the superior seige weapon of the middle ages']
    return verbList[Math.floor(Math.random() * 10)]
}

let messageAdjective = randomAdjective();
let messageNoun = randomNouns();
let messageVerb = randomVerb();

console.log(`${messageAdjective} ${messageNoun} come to those who ${messageVerb}...`);