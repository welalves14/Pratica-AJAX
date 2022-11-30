const buscarGit = document.getElementById("usuario-github");
const avatar = document.querySelector("#gitCardd");
const btnGit = document.getElementById("buscar-github");

const getGitHubInfo = function (username) {
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax2 = JSON.parse(this.responseText);
            CriarEstrutura(ajax2);
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

btnGit.onclick = function(e) {
    e.preventDefault()
    //const retornoGit = getGitHubInfo(buscarGit);
    alert("botão ok");
    getGitHubInfo(buscarGit.value);
}

const CriarEstrutura = function(ajax2){
    const estruturaDiv = document.createElement("div");

    estruturaDiv.innerHTML = `
    <div class="header User"></div>
        <a class="avatar" href="${ajax2.avatar_url}" target="_top"><img src="${ajax2.avatar_url}" alt="${ajax2.name}"></a>
        <div class="content">
            <h1>${ajax2.name}</h1>
            <ul class="status">
                <li><a href="${ajax2.repos_url}" target="_top"><strong>${ajax2.public_repos}</strong>Repositórios</a></li>
                <li><a href="${ajax2.gists_url}" target="_top"><strong>${ajax2.public_gists}</strong>Gists</a></li>
                <li><a href="${ajax2.followers_url}" target="_top"><strong>${ajax2.followers}</strong>Seguidores</a></li>
            </ul>
        </div>
        <br><br><br>
    `;
    avatar.prepend(estruturaDiv);
}