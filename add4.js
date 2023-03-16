// function get(url) {}

const get = (url, successCallback, failureCallback) =>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();


xhr.onload =() => {
  if (xhr.status === 200){
    successCallback(JSON.parse(xhr.response));
  }else{
    failureCallback(xhr.status);
  }
  };
  };

  get('https://jsonplaceholder.typicode.com/post/1',console.log,console.error);

  //서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
  //이처럼 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 비동기 처리결과를 가지고
  //또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는데 , 이를 콜백 헬 이라고 한다.
