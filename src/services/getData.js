let data = null;

const appDataURL = '/images.json'

export const getData = () => {

    return new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            fetch(appDataURL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: 'cors'
            })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    resolve(json);
                })
                .catch(err => reject(err));
        }
    });
}
export default getData;