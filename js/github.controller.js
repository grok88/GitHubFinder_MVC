export default class Controller{
	constructor(model, view){
		this.model = model;
		this.view = view;
		this.init();
	}
	
	//
	init(){
		console.log('init');
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
					} else {
						// show profile
						console.log(data);
					}
				});
		} else {
			// clear profile
		}
	}
}