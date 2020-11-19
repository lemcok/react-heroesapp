import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    
    // Buena practica hacer una validacion primero
    const validPublishers = [ 'DC Comics', 'Marvel Comics'  ]; 

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher )

}
