let jsGetUser = document.getElementsByClassName('js-get-user');
jsGetUser[0].addEventListener("click", () => {
    let selectedUser = document.getElementById('selectUser').value;
    getUser(selectedUser);
});

