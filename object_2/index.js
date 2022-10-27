const market = { nom: "Shaxzod", hajm: 1, rang: "jigarrang" };

function getKeyByValue(obj, value) {
    const keys = Object.keys(obj);
    const result = keys.find((key, index, array) => {
        return obj[key] === value
    })

    if (value === keys) {
        console.log(keys)
    } else {
        console.log('no things')
    }

    console.log(result)
}

getKeyByValue(market, 1);

