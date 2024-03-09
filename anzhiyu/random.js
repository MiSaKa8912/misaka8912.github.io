var posts=["posts/230527/","posts/230705/","posts/230718/","posts/231216/","posts/231213/","posts/230726/","posts/240103/","posts/240106/","posts/240218/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };