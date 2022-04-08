const postlar = [
    { user_id: "1", caption: "Konu 1" },
    { user_id: "2", caption: "Konu 2"},
    { user_id: "3", caption: "Konu 3"},
  ];
  
  const postGoruntule = () => {
    postlar.map((post) => {
      console.log(post.caption);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      postlar.push(newPost);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  postGoruntule();

  addPost({ user_id: "4", caption: "Konu 4" })
    .then(() => {
      console.log("Yeni Post Eklemesi");
      postGoruntule();
    })
    .catch((error) => {
      console.log(error);
    });
  
  //postGoruntule();