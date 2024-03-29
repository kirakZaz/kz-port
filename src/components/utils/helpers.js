export const getUnique = (arr, comp) => {

    const uniqueV = arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);

    return uniqueV;
}

export const prop = propName => obj => obj[propName];