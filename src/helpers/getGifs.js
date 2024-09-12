const API_KEY='TAhy63wlcLuay9SAn7lgcOOHZAA6V59E';
const BASE_URL='https://api.giphy.com/v1/gifs/search';

export const getGifs = async category => {    
    const url = `${BASE_URL}?api_key=${API_KEY}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}