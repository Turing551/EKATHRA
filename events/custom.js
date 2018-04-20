function onSignIn(googleUser) {
    // console.log('goooooooooooogle');
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log(id_token);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/googletokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
};
