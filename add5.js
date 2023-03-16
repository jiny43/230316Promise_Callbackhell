
const get = (url,Callback) =>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();


xhr.onload =() => {
  if (xhr.status === 200){
    Callback(JSON.parse(xhr.response));
  }else{
    console.error(`${xhr.status}${xhr.statusText}`);
  }
  };
  };

  const url ='https://jsonplaceholder.typicode.com';
//id 가 1 인 post 의 userid 를 취득
  get(`${url}/posts/1`),({userId}) =>{
    console.log(userId); // 1
    //post의 userId를 사용하여 user 정보 취득
    get(`${url}/users/${userId}`,userInfo => {
      console.log(userInfo); //{id :1 , name : "" ,username:""}
    });
  }