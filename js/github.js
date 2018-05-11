/////////////////////////////////////////////////////////////
//// 

class Github {
	constructor() {
		this.client_id = 'c499c49fec315968d98b';
		this.client_secret = '5e9687fdcbc2a3dd6d10ec27b6ad0d4de0fa4f22';
		//this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {

		// Da izvucemo osnovne podatke od korisniku
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		// Pretvaranje tih podataka u .json file (profileData)
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		// Vracamo ih ...
		return {
			//profile: profileData;
			// profile: profile
			profile,
			repos
		}
	}
}