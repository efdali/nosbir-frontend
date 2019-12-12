const BASE_URL=process.env.NODE_ENV === "production" ? "http://kuzenbilisim.com/api" : "http://localhost/nosbir-backend";

export const API_URL = `${BASE_URL}/v0/`;
export const IMAGE_URL= `${BASE_URL}/resimler/`;
export const GROUP_IMAGE_URL= `${BASE_URL}/gruplar/`;
//export const API_URL = 'http://localhost/nosbir-backend/v0/';
