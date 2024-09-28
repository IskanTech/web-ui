export function setCookie(name: string, value: string, expirationHours: number = 1) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationHours * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
}

export function getCookie(name: string) {
    const cookies = document.cookie.split('; ');

    const [cookieName, value] = cookies[0].split('=')

    if (cookieName === name) {
        return value
    }

    return null
}