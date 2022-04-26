var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

//console log pokemons whose ID is divisible by three

for(let i = 0; i < pokemon.length; i++){
    //modulo takes the remainder of number divided by 3, if it's 0 then it's a multiple of 3
    if(pokemon[i].id % 3 === 0){
        console.log(pokemon[i]);
    }
}

//pokemons with more than one type

console.log('more than 1 types pokemonss')
for(let i = 0; i < pokemon.length; i++){
    //checking the length of the types array
    if(pokemon[i].types.length > 1){
        console.log(pokemon[i]);
    }
}

//for poisonous types
console.log('poisonous pokemonss')
for(let i = 0; i < pokemon.length; i++){
    //check the length of the types array, if it is one, then also check if that type is poison
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] ==='poison'){
        console.log(pokemon[i].name);
    }
}

//for pokemons with SECOND type flying
console.log('second type flying pokemons')
for(let i = 0; i < pokemon.length; i++){
    //askss for second type flying so we check index 1 of the array types for 'flying'
    if(pokemon[i].types[1] ==='flying'){
        //we print the other type at index 0
        console.log(pokemon[i].types[0]);
    }
}

//reverse the name of ze pokemon whose only type is poison
console.log('backwards names poisonous pokemonss')
for(let i = 0; i < pokemon.length; i++){
    //same checking for types length 1 AND that the one type is poison
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] ==='poison'){
        //we have the pokemon we want now, just making another loop to reverse the name
        // start out with an empty string to add letters to in reverse
        let backwardsName = '';
        //minus one since indexes start at 0. strings are indexed like arrays apparently
        for(let j = pokemon[i].name.length -1 ; j >= 0; j--){
            backwardsName += pokemon[i].name[j];
        }
        console.log(backwardsName);
    }
}