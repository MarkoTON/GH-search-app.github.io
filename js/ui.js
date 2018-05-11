class UI { constructor() { this.profile = document.getElementById('profile'); } 
//// Display Profile in UI 
showProfile(user)
{ this.profile.innerHTML = `
	<div class="card card-body mb-3">
	<div class="row">
	<div class="col-md-3">
	<img src="${user.avatar_url}" class="img-fluid mb-2" alt="" />
	<a class="btn btn-primary btn-block mb-4" href="${user.html_url}" target="_blank">View Profile</a>
	</div>
	<div class="col-md-9">
	<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
	<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
	<span class="badge badge-success">Followers: ${user.followers}</span>
	<span class="badge badge-info">Following: ${user.following}</span>
	<br>
	<br>
	<ul class="list-group">
	<li class="list-group-item">Company: ${user.company}</li>
	<li class="list-group-item">Website/Blog: ${user.blog}</li>
	<li class="list-group-item">Location: ${user.location}</li>
	<li class="list-group-item">Member Since: ${user.created_at}</li>
	</ul>
	</div>
	</div>
	</div>
	<h3 class="page-heading mb-3">Latest Repos</h3>
	<div id="repos"></div>
`; } 
//// Show Alert Message 
showAlert(message, className) { 
// Clear any remaining alerts 
this.clearAlert(); 
// Create DIV
const div = document.createElement('div'); 
// Add Class 
div.className = className; 
// Add text 
div.appendChild(document.createTextNode(message));
// Get Perent 
const container = document.querySelector('.searchContainer'); 
// Get search box 
const search = document.querySelector('.search');
//Insert alert
container.insertBefore(div, search); 
 // Time out afret 3 s 
 setTimeout(() => {
 	this.clearAlert(); 
 }, 3000);
} 
//// Show user Repos 
showRepos(repos){ let output = ''; repos.forEach((repo)=> { output += `
	<div class="card card-body mb-2">
	<div class="row">
	<div class="col-md-6">
	<a href="${repo.html_url}" target="_blank">${repo.name}</a>
	</div>
	<div class="col-md-6">
	<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
	<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
	<span class="badge badge-success">Forks: ${repo.forks_count}</span>
	</div>
	</div>
	</div>
	`; }); 
// Output repos
document.getElementById('repos').innerHTML = output;
} 
//// Clear alert message 
clearAlert() { const currentAlert = document.querySelector('.alert'); 
		if (currentAlert){ 
				currentAlert.remove(); 
			}
		} 
//// Clear Profile 
clearProfile(){
 this.profile.innerHTML = '';
  }
   }