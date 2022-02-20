function fetchImages (searchName, page) {
    const KEY = '24739758-4c739ca612149bb371b205192';
    const BASE_URL = 'https://pixabay.com/api'

    return fetch(`${BASE_URL}/?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
        if (response.ok) {
          return response.json();
        }
    
        return Promise.reject(new Error(`No image with the name ${searchName}`));
    });
}

const api = {
    fetchImages,
};
  
export default api;