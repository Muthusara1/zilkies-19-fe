function displayLoginFunctionality() {
    document.getElementById('home-container').style.opacity = '0.1';
    document.getElementById('login-1').style.display = 'flex';
    document.getElementById('login-1').style.left = '0';
    document.getElementById('login-1').style.top = '0';
    document.getElementById('login-1').style.zIndex = '1';
    document.getElementById('login-1').style.position = 'fixed';
    document.getElementById('login-1').style.width = '100%';
}

function displayRegisterFunctionality() {
    document.getElementById('home-container').style.opacity = '0.1';
    document.getElementById('register-1').style.display = 'flex';
    document.getElementById('register-1').style.left = '0';
    document.getElementById('register-1').style.top = '0';
    document.getElementById('register-1').style.zIndex = '1';
    document.getElementById('register-1').style.position = 'fixed';
    document.getElementById('register-1').style.width = '100%';
}

function displayHome() {
    document.getElementById('register-1').style.display = 'none';
    document.getElementById('login-1').style.display = 'none';
    document.getElementById('home-container').style.display = 'block';
    document.getElementById('home-container').style.opacity = '1';
}