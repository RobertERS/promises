let clearContent = () => {
    let currentNode = document.getElementById("info");
    while (currentNode.firstChild) {
        currentNode.removeChild(currentNode.firstChild);
    }
}

let addContent = (_el) => {
    let textnode, node = '';
    let el = JSON.parse(_el);
    let currentNode = document.getElementById("info");
    let htmlNode = document.createElement("div");
    let renderNode = (el) => {
        Object.keys(el).map(key => {  // map() is faster than forEach()
            if (typeof (el[key]) === 'object') {
                renderNode(el[key]);
            } else {
                node = document.createElement("p");
                textnode = document.createTextNode(key + ' : ' + el[key]);
                node.appendChild(textnode);
                htmlNode.appendChild(node);
            }
        });
        currentNode.appendChild(htmlNode);
    }
    renderNode(el);
}

let getUser = (selectedUser) => {
    Promise.all([
        loadContent('https://jsonplaceholder.typicode.com/users/' + selectedUser),
        loadContent('https://jsonplaceholder.typicode.com/todos/' + selectedUser)
    ]).then((userInfo) => {
        clearContent();
        userInfo.map(_el => { addContent(_el) })
    }).catch((error) => {
        // todo error later
    })
}