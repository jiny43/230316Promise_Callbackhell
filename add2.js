const get = url => {   
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

// funtion xhr.onload(){}
xhr.onload =() => {
if (xhr.status === 200){
  return(JSON.parse(xhr.response));
}
  console.error(`${xhr.status}${xhr.statusText}`)
}
};

const respone = get('https://jsonplaceholder.typicode.com/post/1');
console.log(respone);