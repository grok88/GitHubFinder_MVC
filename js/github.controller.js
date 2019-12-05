export default class Controller{
	constructor(model, view){
		this.model = model;
		this.view = view;
		this.init();
	}
	
	//
	init(){
		this.view.DOMElems.searchUser.addEventListener('keyup', this.handler.bind(this));
	}

	//
	handler(e){
		const userText = e.target.value;
		if (userText !== ''){
			// Make http request
			this.model.getUser(userText)
				.then(data => {
					if (data.profile.message === 'Not Found'){
						//show alert
						console.log('error');
						this.view.showAlert('User not found', 'alert alert-danger');
					} else {
						// show profile
						this.view.showProfile(data.profile);
						this.view.showRepos(data.repos);
						console.log(data.repos);
					}
				});
		} else {
			// clear profile
			this.view.clearProfile();
		}
	}
}