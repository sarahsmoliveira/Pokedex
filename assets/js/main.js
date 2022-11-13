const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function convertPokemonToLi(pokemon) {
    return `
        <li class="card" id="idCard${pokemon.number}" onclick = "selectPokemon(${pokemon.number})">
            <h2 class="card-name">${pokemon.name}</h2>    
                     <div class="card-detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img class="card-image" src="${pokemon.photo}"
                            alt="${pokemon.name}">
    
                    </div>
            <h3 class="card-number">#${pokemon.number}</h3>
        </li>
        
    ` 

}

const selectPokemon = async (number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    
    const res = await fetch(url);
    const pokeCard = await res.json();
    displayPopUp(pokeCard);
};

const displayPopUp = (pokeCard) => {
    const type = pokeCard.types.map((type) => type.type.name).join(', ');
    const ability = pokeCard.abilities.map((ability) => ability.ability.name).join(', ');
    const stat = pokeCard.stats.map((stat) => stat.stat.name).join(', ');
    const base_stat = pokeCard.stats.map((base_stat) => base_stat.base_stat).join(', ');
    const princType = pokeCard.types[0].type.name;

    const htmlString = `
    <div class="popUp"> 
        <button id="closeBtn" onclick="closePopup()">Fechar
        </button>

        <div class="Type ${princType} pokeScrn">

            <img class="pp-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeCard.id}.svg" alt="${pokeCard.name}">
        
            <h2> ${pokeCard.name} #${pokeCard.id}</h2>
            <h4> Tipos  = ${type}  
            <br/> Abilidades: ${ability}
            <br/>Altura = ${pokeCard.height} 
            <br/>Peso  = ${pokeCard.weight}</h4>
    
            <table class="ppcard-statusBasicos"> 
            <tr> 
            <th>Status</th> </tr>
            <tr><td>${pokeCard.stats[0].stat.name}</td> <td> ${pokeCard.stats[0].base_stat}</td></tr>
            <tr><td>${pokeCard.stats[1].stat.name}</td> <td> ${pokeCard.stats[1].base_stat}</td></tr>
            <tr><td>${pokeCard.stats[2].stat.name}</td> <td> ${pokeCard.stats[2].base_stat}</td></tr>
            <tr><td>${pokeCard.stats[3].stat.name}</td> <td> ${pokeCard.stats[3].base_stat}</td></tr>
            <tr><td>${pokeCard.stats[4].stat.name}</td> <td> ${pokeCard.stats[4].base_stat}</td></tr>
            <tr><td>${pokeCard.stats[5].stat.name}</td> <td> ${pokeCard.stats[5].base_stat}</td></tr>
            
            </table>
        </div>
    </div>
    `
    pokemonList.innerHTML = htmlString + pokemonList.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popUp = document.querySelector('.popUp');
    popUp.parentElement.removeChild(popUp);
};

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
            pokemonList.innerHTML += newHtml
    })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
        const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
            loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
            loadPokemonItens(offset, limit)
        }
})

