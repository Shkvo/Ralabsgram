export const instagramAPI = 'https://api.instagram.com/v1';
export const userInfoURL = `${instagramAPI}/users/self/`;
export const userRecentMediaURL = `${instagramAPI}/users/self/media/recent/`;
export const getMediaDetailsURL = (mediaID) => `${instagramAPI}/media/${mediaID}`;
export const getMediaCommentsURL = (mediaID) => `${instagramAPI}/media/${mediaID}/comments`;
