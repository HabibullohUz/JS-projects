function play() {
    const ism = document.getElementById("ism").value;
    const tanlov = document.querySelector("input[name=tanlash]:checked").value;

    const tosh = document.getElementById('tosh')
    const qaychi = document.getElementById('qaychi')
    const qogoz = document.getElementById('qogoz')

    //  campyuter tanlovi
    let compTanlovi = Math.floor(Math.random() * (4 - 1) + 1);

    if (compTanlovi === tanlov) {
        if (compTanlovi > tanlov) {
            console.log('dead')
        }
        else if (compTanlovi < tanlov) {
            console.log('win')
        }
    } else {
        console.log('durrang')
    }

    innerHtmlName()
}

function innerHtmlName() {
    let outputName = document.getElementById('outputName')
    const ism = document.getElementById("ism").value;
    ism.addEventListener('change', () => {
        outputName.innerText = ism
    })
}