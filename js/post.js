/**

// p: 01
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))

}
loadPosts()

function displayPost(userPost) {
    const postContainer = document.getElementById('post_container');
    for (const post of userPost) {
        console.log(post.body);

        const postDiv = document.createElement('div');
        postDiv.classList.add('post_style')
        postDiv.innerHTML = `
            <h3> User id Number : ${post.userId} </h3>    
            <h3> Post id Number : ${post.id} </h3>    
            <h2> Title : ${post.title} ! </h2> 
            <h4> Description :  Eligendi ducimus ratione quidem, delectus quas error consectetur praesentium omnis non, sit, ipsa architecto vel porro odit dolorum sapiente doloribus harum. Aperiam, itaque! ${post.body}</h4>
        `;
        postContainer.appendChild(postDiv);
    }
    
};
// p: 02 added post from api. !
function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(userData) {
    const divContainer = document.getElementById('post_container');
    for (const post of userData) {
        // console.log(post.userId);
        const childDiv = document.createElement('div');
        childDiv.classList.add('post_style');
        childDiv.innerHTML= `
            <h2> User Id : ${post.userId} </h2>
            <h2> Title : ${post.title} </h2>
            <h3> Description: ${post.body} </h3>
        `
        divContainer.appendChild(childDiv);
    }
}
loadPosts();
 */
// p: 03 added post from api. !
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(userData) {
    const divContainer = document.getElementById('post_container')
    for (const post of userData) {
        console.log(post.body);
        const childDiv = document.createElement('div')
        childDiv.classList.add('post_style')
        childDiv.innerHTML = `
        <h3> User Id Number: ${post.userId}</h3>
        <h2>Title: ${post.title} </h2>
        <h4> Description: ${post.dody}
        `;

        divContainer.appendChild(childDiv);

    }
}
loadPosts()