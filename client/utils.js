import axios from "axios";

export function capFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function removeJPG(str) {
    return str.slice(0, str.indexOf('.'));
}

export function replaceWithSpace(str) {
    return str.replaceAll('_', ' ');
}

export async function getDrinksCategory() {
    const res = await axios.get(`${import.meta.env.VITE_API}/api/drinks/all`);
    const category = res.data.category;
    return category;
}