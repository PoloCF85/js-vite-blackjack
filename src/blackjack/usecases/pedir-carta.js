
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}