export const actions = {
    //Первичное добавление всех изображений в стейт после их получения с сервера
    getImages: () => ({
        type: 'GET_IMAGES'
    } as const)
}