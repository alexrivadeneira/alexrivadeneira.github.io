renderHome();

function getMainContentNode(){
    let mainContent = document.getElementById('main-content');
    while(mainContent.firstChild){
        mainContent.removeChild(mainContent.firstChild);
    }

    return mainContent;
}
function renderHome(){
    let mainContent = getMainContentNode();

    homePosts.map(post => {
        let newPost = document.createElement('div');
        newPost.classList.add('post');

        let postTitle = document.createElement('h2');
        let postTitleText = document.createTextNode(`${post.title}`);
        postTitle.appendChild(postTitleText);

        let postDate = document.createElement('h4');
        let postDateText = document.createTextNode(`${post.date}`);
        postDate.appendChild(postDateText);

        let postContent = document.createElement('div');
        postContent.innerHTML += post.content;

        newPost.appendChild(postTitle);
        newPost.appendChild(postDate);
        newPost.appendChild(postContent);

        mainContent.appendChild(newPost);
    });
    
    let firstPortfolioPiece = document.createElement('div');
    firstPortfolioPiece.classList.add('post');
    
    let label = document.createElement('div');
    label.classList.add('label');
    label.onclick = function(){
        rerender('portfolio');
    }
    let labelText = document.createTextNode('Portfolio');
    label.appendChild(labelText);

    let postLink = document.createElement('a');
    postLink.setAttribute('target', '_blank');
    postLink.setAttribute('href', `${portfolioPosts[0].link}`);

    let postImage = document.createElement('img');
    postImage.setAttribute('src', `img/${portfolioPosts[0].image}`);
    postImage.setAttribute('alt', `${portfolioPosts[0].title}`);

    let postTitle = document.createElement('h2');
    let postTitleText = document.createTextNode(`${portfolioPosts[0].title}`);
    postTitle.appendChild(postTitleText);

    let postContent = document.createElement('p');
    let postContentText = document.createTextNode(`${portfolioPosts[0].content}`);

    firstPortfolioPiece.appendChild(label);
    firstPortfolioPiece.appendChild(postLink);
    firstPortfolioPiece.appendChild(postImage);
    firstPortfolioPiece.appendChild(postImage);
    firstPortfolioPiece.appendChild(postTitle);
    firstPortfolioPiece.appendChild(postImage);

    mainContent.appendChild(firstPortfolioPiece);

    truncatePosts();

}

function renderPortfolio(){
    // TODO: Remove this hard coded html
    let mainContent = getMainContentNode();

    const portfolioPostHtmlCollection = portfolioPosts.map(post => {
        return `
            <div class='post'>
                <a href='${post.link}' target='_blank'>
                    <img src='img/${post.image}' alt='${post.title}'/>
                </a>
                <h2>${post.title}</h2> 
                <p>${post.content}<p>
            </div>`;
    });
    portfolioPostHtmlString = portfolioPostHtmlCollection.join('');
    mainContent.innerHTML = portfolioPostHtmlString;
    truncatePosts();

}

function renderJournal(){
    // TODO: Remove html strings
let mainContent = getMainContentNode();

    const journalPostHtmlCollection = journalPosts.map(post => {
        return `
            <div class='post'>
                <h2>${post.title}</h2>
                ${post.content}
            </div>
        `;
    });
    journalPostHtmlString = journalPostHtmlCollection.join('');
    mainContent.innerHTML = journalPostHtmlString;
    truncatePosts();
}


function truncatePosts(){
    let pagePostsCollection = document.getElementsByClassName('post');

    for(let i = 0; i < pagePostsCollection.length; i++){
        let postContent = pagePostsCollection[i];
        if(postContent.clientHeight > 450){
            if(postContent.children.length > 3){
                for(let i = 3; i < postContent.children.length; i++){
                    postContent.children[i].style.display = 'none';
                }
                let button = document.createElement('div');
                button.classList.add('btn-show-more');
                let textNode = document.createTextNode('Show more...');
                button.appendChild(textNode);
                button.onclick = function(){
                    for(let i = 0; i < postContent.children.length; i++){
                        postContent.children[i].style.display = 'block';
                        this.style.display = 'none';
                    }
                }
                postContent.appendChild(button);
            };
            for(let i = 0; i < postContent.length; i++){
                if(i > 3){
                    postContent[i].style.display = 'none';                    
                }   
            }
        }
    }
}

