var userName;
var followersCount;
var followingCount;
var repoCount;
var des;
var avatar;

var userData;
var input;

function search() {
    input = document.getElementById("input").value;
    var wrapper = document.querySelector(".container");

    if (input.trim()) {
        fetchedData();
        wrapper.innerHTML = `
    <div class="card">
            <div class="header">
                <img id="avatar" src='' alt="">
                <h2 id="name">Name</h2>
            </div>

            <div class="social-data">
                <div class="data">
                    <p>Followers</p>
                    <p id="followers">100</p>
                </div>
                <div class="data">
                    <p>Following</p>
                    <p id="following">300</p>
                </div>
                <div class="data">
                    <p>Repos</p>
                    <p id="repos">20</p>
                </div>
            </div>
            <div id="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea molestias veniam quam pariatur, quia assumenda cumque et modi dignissimos.
            </div>
            <button class="github-btn" onclick="showGithubProfile()">View on Github</button>
        </div>
    `
        userName = document.getElementById("name");
        followersCount = document.getElementById("followers");
        followingCount = document.getElementById("following");
        repoCount = document.getElementById("repos");
        des = document.getElementById("des");
        avatar = document.getElementById("avatar");
        document.getElementById("input").value = "";
        getData();
    }
     else {
        Swal.fire({
            title: 'Error!',
            text: 'Please Enter valid username',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
}

function fetchedData() {
    userData = fetch(`https://api.github.com/users/${input}`)
        .then((data) => data.json())
        .then((res) => res)
        .catch((error) => alert("error : ", error))
}

function getData() {
    userData.then((users) => userName.textContent = users.name)
    userData.then((users) => followersCount.textContent = users.followers)
    userData.then((users) => followingCount.textContent = users.following)
    userData.then((users) => repoCount.textContent = users.public_repos)
    userData.then((users) => des.textContent = users.bio)
    userData.then((users) => avatar.src = users.avatar_url)
}

function showGithubProfile() {
    location.href = `https://github.com/${input}`
}