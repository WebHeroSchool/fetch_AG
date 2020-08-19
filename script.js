const url = window.location.toString();

const getUserName = (url) => {
	let urlSplit = url.split('=');
	let urlName = urlSplit[1];
	if(urlName == undefined) {
		urlName = 'AnnaG2019';
	} 
	return urlName;
}
getUserName(url);


fetch(`https://api.github.com/users/${getUserName(url)}`)
    .then(res => res.json())
	.then(userInfo => {
		
		let name = userInfo.name;
		let bio = userInfo.bio;
		let avatar = userInfo.avatar_url;
		let page = userInfo.html_url;

		let addName = () => {
			let getName = document.getElementById('userName');
			getName.innerHTML = name;
		}
		
		let addBio = () => {
			let getBio = document.getElementById('userStatus');
			getBio.innerHTML = bio;
		}
		
		let addAvatar = () => {
			let getAvatar = document.getElementById('userFoto');
			getAvatar.setAttribute('src', avatar);
		}
		
		
		let addPage = () => {
			let getPage = document.getElementById('userUrl');
			getPage.setAttribute('href', page);
		}		
		
		addName();
		addBio();
		addAvatar();
		addPage();
    })
    .catch(err => document.body.innerHTML = 'Информация о пользователе не доступна!');

	
