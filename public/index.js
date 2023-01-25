import { createMainContent, fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

};
const addButton = () => {
    let button = document.createElement('button')
    document.body.appendChild(button)
    button.innerText = 'New Image'

    button.addEventListener('click', event => {
        fetchImage()
    })
    likeButton()
    dislikeButton()
}
// const NewImage = () => {
//     let button1 = addButton('New Image')
//     button1.addEventListener('click', event => {
//             fetchImage()
// })
// }
const popularity = () => {

    let Click = 0
    const likeButton = () => {
        let like = document.createElement('button')
        // let click = 0
        like.innerText =`Like`
        document.body.appendChild(like)
        like.addEventListener('click', event => {
            click += 1;
            like.innerText = `Like ${click}`

        })

    }

    const dislikeButton = () => {
        let like = document.createElement('button')
        // let click = 0
        like.innerText =`Dislike`
        document.body.appendChild(like)
        like.addEventListener('click', event => {
            click += 1;
            like.innerText = `Dislike ${click}`

        })

    }
}

// const comment

window.onload = () => {
    initializePage();
    createMainContent();
    addButton();
    // NewImage()
    // likeButton();
    // dislikeButton();
};
