export const localStorageUpdate = (data) => {
    const currentItem = localStorage.getItem('authUser')
    const userObject = JSON.parse(currentItem);
    const newObject = {...userObject, ...data}
    const authUser = JSON.stringify(newObject);
    localStorage.setItem('authUser', authUser);
}