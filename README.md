# Pokedex

#### _node version 14.15.1_

1. Dowload the zipped project folder
2. Unzip the folder
3. In the terminal, move to the project folder:  _.../Pokedex-main_
4. Type `npm install` in order to install node_modules

Now, in the terminal you can type:
`npm start`
to run the application in development mode.

##### installed packeges:
`npm install @material-ui/core @material-ui/icons @material-ui/styles axios`

### Components tree:

```src
|
\---_Components_
    \---_Pokedex_
        |
        |   Pokedex.component.jsx
        |   pokedex.style.js
        |
        \---_Components_ //children of pokedex
            |
            +---_pokemonslist_  //handles the grid with pokemons
            |   |   pokemonslist.component.jsx
            |   |   pokemonslist.style.js
            |   |
            |   \---_components_  //children of pokemonslist
            |       |
            |       \---_header_  //contains the search input and the sorting dropdown menu
            |               header.component.jsx
            |               header.style.js
            |
            \---_pokemonspecs_  //handles the single pokemon's specification
                    pokemonspecs.component.jsx
                    pokemonspecs.style.js
                    typesstyle.style.js```
