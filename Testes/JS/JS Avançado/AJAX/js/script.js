const xhttp = new XMLHttpRequest();
const main = document.querySelector("main");

xhttp.onreadystatechange = e => {
    const json = xhttp.responseText;
    if(e.currentTarget.readyState === 4 && e.currentTarget.status === 200) {
        let obj = JSON.parse(json);
        obj = obj.splice(0, 5)

        // console.log(obj)
        let posts = "";
        let counter = 0;
        for (let post of obj) {
            // console.log(post)
            counter ++;
            posts += `<div class="post" id="post${counter}">
                            <div class="up">
                                <p class="title">${post.title}</p>
                            </div>
                            <img class="photo" src="https://via.placeholder.com/150/d32776" alt="">
                        </div>`
        }
        // main.innerHTML = posts;
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhttp.send();