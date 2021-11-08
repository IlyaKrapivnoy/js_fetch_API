const listGroup = document.querySelector('.list-group');

//Get all btns
const getPost = document.querySelector('.get-post');
const addPost = document.querySelector('.add-post');
const editPost = document.querySelector('.edit-post');
const deletePost = document.querySelector('.delete-post');

const url = 'https://jsonplaceholder.typicode.com/posts';
let output = '';

const getResponse = (response) => response.json();
const processJSON = (json) => {
    output = `
        <li class="list-group-item">${json.title}</li>
        <li class="list-group-item">${json.body}</li>
    `;
    listGroup.innerHTML = output;
};
// GET
getPost.addEventListener('click', () => {
    fetch(`${url}/1`).then(getResponse).then(processJSON);
});
