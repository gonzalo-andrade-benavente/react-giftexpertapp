
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=ZG4jv5xayrFGw6j8nkoKz18CGyPKacWa`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images?.downsized_medium.url
        }
    }
    );
    //setImages(gifs);
    return gifs;
}

//export default getGifs;