export default class Model{
	constructor(){
		this.client_id = '484cc7b45e2f64e4374b';
		this.client_secret = 'c8c96ebeffc7daa558c45f797958a87fab2e0215';
		this.userUrl = 'https://api.github.com/users/';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user){
		const profilePesponse = await fetch(`${this.userUrl}${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const reposPesponse = await fetch(`${this.userUrl}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profilePesponse.json();
		const repos = await reposPesponse.json();
		
		return {
			profile,
			repos
		}
	}
}