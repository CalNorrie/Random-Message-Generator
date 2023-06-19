const randomNouns = () => {
    const nounsList = ['vibes', 'blessings', 'riches', 'tidings', 'memories', 'fortunes', 'misfortunes', 'days', 'nights', 'futures']
    return nounsList[Math.floor(Math.random() * 10)]
}

console.log(randomNouns());
