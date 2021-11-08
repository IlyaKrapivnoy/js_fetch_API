const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
//     .then((response) => response.json())
//     .then(console.log);

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//Get all btns
const getPost = document.querySelector('.get-post');
const addPost = document.querySelector('.add-post');
const editPost = document.querySelector('.edit-post');
const deletePost = document.querySelector('.delete-post');

// GET
getPost.addEventListener('click', () => {
    console.log('Get response')
})
