async function loadPhotos() {
    const r = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            console.log("request done");
            return response.json();
        })
        .catch(error => {
            console.log("error");
        });

    console.log("passed")
}

const photos = loadPhotos();
console.log("passed out function")
// console.log(photos)
