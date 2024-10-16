const nomsPokemons = [
    "Bulbizarre", "Herbizarre", "Florizarre", "Salamèche", "Reptincel", "Dracaufeu",
    "Carapuce", "Carabaffe", "Tortank", "Chenipan", "Chrysacier", "Papilusion",
    "Aspicot", "Coconfort", "Dardargnan", "Roucool", "Roucoups", "Roucarnage",
    "Rattata", "Rattatac", "Piafabec", "Rapasdepic", "Abo", "Arbok",
    "Pikachu", "Raichu", "Sabelette", "Sablaireau", "Nidoran femelle", "Nidorina",
    "Nidoqueen", "Nidoran mâle", "Nidorino", "Nidoking", "Mélofée", "Mélodelfe",
    "Goupix", "Feunard", "Rondoudou", "Grodoudou", "Nosferapti", "Nosferalto",
    "Mystherbe", "Ortide", "Rafflesia", "Paras", "Parasect", "Mimitoss",
    "Aéromite", "Taupiqueur", "Triopikeur", "Miaouss", "Persian", "Psykokwak",
    "Akwakwak", "Férosinge", "Colossinge", "Caninos", "Arcanin", "Ptitard",
    "Têtarte", "Tartard", "Abra", "Kadabra", "Alakazam", "Machoc",
    "Machopeur", "Mackogneur", "Chétiflor", "Boustiflor", "Empiflor", "Tentacool",
    "Tentacruel", "Racaillou", "Gravalanch", "Grolem", "Ponyta", "Galopa",
    "Ramoloss", "Flagadoss", "Magnéti", "Magnéton", "Canarticho", "Doduo",
    "Dodrio", "Otaria", "Lamantine", "Tadmorv", "Grotadmorv", "Kokiyas",
    "Crustabri", "Fantominus", "Spectrum", "Ectoplasma", "Onix", "Soporifik",
    "Hypnomade", "Krabby", "Krabboss", "Voltorbe", "Electrode", "Noeunoeuf",
    "Noadkoko", "Osselait", "Ossatueur", "Kicklee", "Tygnon", "Excelangue",
    "Smogo", "Smogogo", "Rhinocorne", "Rhinoféros", "Leveinard", "Saquedeneu",
    "Kangourex", "Hypotrempe", "Hypocéan", "Poissirène", "Poissoroy", "Stari",
    "Staross", "M. Mime", "Insécateur", "Lippoutou", "Elektek", "Magmar",
    "Scarabrute", "Tauros", "Magicarpe", "Léviator", "Lokhlass", "Métamorph",
    "Evoli", "Aquali", "Voltali", "Pyroli", "Porygon", "Amonita",
    "Amonistar", "Kabuto", "Kabutops", "Ptéra", "Ronflex", "Artikodin",
    "Electhor", "Sulfura", "Minidraco", "Draco", "Dracoloss", "Mewtwo", "Mew"
];



const pokeList = document.querySelector(".container");

for (let i = 1; i <= 151 ; i++) { 

setTimeout(() => {  

    const pokeItem = document.createElement("div")

    const newPoke = document.createElement("img");
    newPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
     
    const pokeText = document.createElement("p");
    pokeText.innerText = `N°${i}: ${nomsPokemons[i - 1]} `

    pokeItem.appendChild(pokeText); 
    pokeItem.appendChild(newPoke);
    
pokeList.appendChild(pokeItem);

}, i *500)

}
