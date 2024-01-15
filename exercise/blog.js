const blog = {
    title: 'movie',
    body: ' body',
    author: 'bob',
    views: 99,
    comments: [
        {author:'unkown', body: 'hello'},
        {author:'unkown', body: 'bye'}
    ],
    isLive: false
}


function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}