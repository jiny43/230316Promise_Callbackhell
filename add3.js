let todos;

const get = url => {   
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

// funtion xhr.onload(){}
xhr.onload =() => {
if (xhr.status === 200){
  todos = JSON.parse(xhr.response); //서버의 응답을 상위 스코프의 변수에 할당한다.
}
  console.error(`${xhr.status}${xhr.statusText}`)
}
};

const respone = get('https://jsonplaceholder.typicode.com/post/1');
console.log(todos); //undefined
