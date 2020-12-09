export const setStorage = (name,data) => {
    localStorage.setItem(name,data);
}
export const getStorage = (name) => {
    return localStorage.getItem(name)
}
export const removeStorage = (name) => {
    localStorage.removeItem(name);
}