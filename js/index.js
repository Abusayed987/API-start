/**

// p:01 Dynamically display loaded data on your website !
function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser2(data))
}

function displayUser2(data) {
    const ul = document.getElementById('user_list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}

// p:02 Dynamically display loaded data on your website !
function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)  // here is backend link
        .then(res => res.json())
        .then(data => diaplayUser2(data))
}

function diaplayUser2(userdata) {
    const ul = document.getElementById('user_list');

    for (const user of userdata) {
        console.log();
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    
}
// p:03 Dynamically display loaded data on your website !
function loadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser2(data));
}

function displayUser2(userData) {
    const ul = document.getElementById('user_list');
    for (const user of userData) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
// p:04 Dynamically display loaded data on your website !
function loadUser(){
    const url ='https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then( data => displayUser(data))
}
function displayUser(userData){
    const ol = document.getElementById('user_list');
    for (const user of userData) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText= user.name;
        ol.appendChild(li);
    }
}
 */
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayUser(data))
}
function displayUser(userDatas) {
    const ol = document.getElementById('user_list');
    for (const data of userDatas) {
        const li = document.createElement('li');
        li.innerText = data.title;
        ol.append(li);
    }
}