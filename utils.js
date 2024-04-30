export function capFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function removeJPG(str) {
    return str.slice(0, str.indexOf('.'));
}

export function replaceWithSpace(str) {
    return str.replaceAll('_', ' ');
}