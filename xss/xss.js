// Username
let username = 'thuk 👽';
// User simpledescription etc (48 characters allowed)
let description = 'value loyalty above all else.';
// User avatar
let avatar = 'https://img.xatblog.net/image/bjhcMtuS1g.png';




document.getElementById('username').innerHTML = username;
document.getElementById('description').innerHTML = description;
document.getElementById('userAvatar').innerHTML = `<img src="${avatar}" class="xp_profile_img">`;