export const handleError = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}

export function capFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}