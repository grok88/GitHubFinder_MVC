export default class View{
	constructor(){
		this.DOMElems = {
			searchUser : document.querySelector('#searchUser'),
			profile : document.querySelector('#profile'),
			searchContainer : document.querySelector('.searchContainer'),
		}
	}

	// Show Profile
	showProfile(user){
		this.DOMElems.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${user.avatar_url}">
						<a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary"> Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary"> Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success"> Public Followers: ${user.followers}</span>
						<span class="badge badge-info"> Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company:${user.company}</li>
							<li class="list-group-item">Website/Blog: ${user.blog}</li>
							<li class="list-group-item">Location:${user.location}</li>
							<li class="list-group-item">Since:${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class="page-headind mb-3">Latest Repos</h3>
			<div class="repos"></div>
		`;
	}

	//show repos
	showRepos(repos){
		let output = '';

		repos.forEach(repo => {
			output +=`
				<div class="card card-body mb-2>
					<div class="row">
						<div class="col-md-6">
							<a  href="${repo.html_url}" target="_blank">${repo.name}</a>
						</div>
						<div class="col-md-6">
							<span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
							<span class="badge badge-success"> Fokrs: ${repo.forks_count}</span>
						</div>
					</div>
				</div>
			`;
		});

		// output repos
		document.querySelector('.repos').innerHTML = output;

	}
	// Очистка отображения - если пользователь не найден
	clearProfile(){
		this.DOMElems.profile.innerHTML = '';
	}

	// Отображение alert
	showAlert(mess, className){
		// clear alert
		this.clearAlert();
		// create DIV
		const div = document.createElement('div');
		// add classes
		div.className = className;
		// create text
		div.append(document.createTextNode(mess));
		//Get parent
		this.DOMElems.searchContainer.prepend(div);
		setTimeout(() => div.remove(), 3000);
	}

	// clear alert
	clearAlert(){
		let alert = document.querySelector('.alert')
		if(alert){
			alert.remove();
		}
	}
}