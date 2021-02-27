const contentT = document.getElementById('content2')
const inputLevel = document.getElementById('input-level')
let dados = 0

async function getChamp(nome) {

    let url = `http://ddragon.leagueoflegends.com/cdn/11.4.1/data/pt_BR/champion/${nome}.json`


    const response = await fetch(url)
    const dadosJSON = await response.json()

    dados = dadosJSON.data[nome]

    showChamp(dados)
}

function showChamp(statsL) {
    
    let sLevel = statsL
    let valorInput = inputLevel.value

    let hp = sLevel.stats.hp
    let movespeed = sLevel.stats.movespeed
    let attackrange = sLevel.stats.attackrange
    let attackspeed = sLevel.stats.attackspeed
    let attackdamage = sLevel.stats.attackdamage
    let armor = sLevel.stats.armor
    let spellblock = sLevel.stats.spellblock
    let mp = sLevel.stats.mp

    let hppl = sLevel.stats.hpperlevel
    let attackspeedpl = sLevel.stats.attackspeedperlevel
    let attackdamagepl = sLevel.stats.attackdamageperlevel
    let armorpl = sLevel.stats.armorperlevel
    let spellblockpl = sLevel.stats.spellblockperlevel
    let mppl = sLevel.stats.mpperlevel

    console.log(hp+(valorInput * hppl))
    
    contentT.innerHTML =
    `<p>Vida base: ${hp+(valorInput * hppl)}</p>
    <p>Velocidade de Movimento base: ${movespeed}</p>
    <p>Distancia de Ataque: ${attackrange}</p>
    <p>Velocidade de Ataque Base: ${attackspeed}</p>
    <p>Dano de Ataque Base: ${attackdamage}</p>
    <p>Armadura Base: ${armor}</p>
    <p>Resistência Mágica: ${spellblock}</p>
    <p>Mana Base: ${mp}</p>
    `
}