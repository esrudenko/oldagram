const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.getElementById("main");

function renderPosts() {
  let articles = "";

  for (let i = 0; i < posts.length; i++) {
    articles += `
    <article class="post">
          <div class="author_info_section section_container">
            <div class="author_info_container">
              <img
                class="profile_photo post_author_photo"
                src="${posts[i].avatar}"
                alt=""
              />
              <div class="post_author_info">
                <h2 class="post_author_name">${posts[i].name}</h2>
                <p class="post_author_location">${posts[i].location}</p>
              </div>
            </div>
          </div>
          <div class="post_image_section section_container">
            <img
              class="post_image"
              src="${posts[i].post}"
              alt="Self-portrait of ${posts[i].name}"
            />
          </div>
          <div class="post_info_section section_container">
            <div class="icons_container">
              <button class="like_btn" type="button" aria-label="Like post" data-index="${i}">
                <img
                  class="icons icon_like"
                  src="./images/icon-heart.png"
                  alt=""
                />
              </button>
              <button type="button" aria-label="Comment on post">
                <img
                  class="icons icon_comment"
                  src="./images/icon-comment.png"
                  alt=""
                />
              </button>
              <button type="button" aria-label="Share post">
                <img class="icons icon_dm" 
                src="./images/icon-dm.png" 
                alt="" />
              </button>
            </div>
            <p class="post_like_count"><strong>${posts[i].likes} likes</strong></p>
            <p class="post_caption">
              <strong class="username">${posts[i].username}</strong>
              <span class="comment">${posts[i].comment}</span>
            </p>
          </div>
        </article>
        <div class="gap"></div>
    `;
  }
  main.innerHTML = articles;
}

function addLikeListeners() {
  let likeButtons = document.querySelectorAll(".like_btn");

  likeButtons.forEach(function (button) {
    button.addEventListener("dblclick", function (event) {
      const index = event.currentTarget.dataset.index;
      posts[index].likes++;
      renderPosts();
      addLikeListeners();
    });
  });
}

renderPosts();
addLikeListeners();
