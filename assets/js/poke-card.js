

const detailsCard = document.getElementById('detailsCard')
const returnButton = document.returnbutton('returnButton')


function pokemonCard(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            
            <div="sobre">
                <span class="altura">Altura = ${pokemon.height}</span>
                <span class="peso">Peso - ${pokemon.weight}</span>
                <ol class="abilidades">
                        Abilidades: ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                    </ol>
            </div>

            div="statusBasicos">
                <ol class="statusBasicos">
                    ${pokemon.stats.map((stat) => `<li class="stats ${stat}">${stat}</li>`).join('')}    
                        </ol>
            </div>
        </li>
    `
}

function pokemonCard () {
    

returnButton.addEventListener('click', () => {
    url
})