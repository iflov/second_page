const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const logoutButton = document.querySelector("#logout-button");



const HIDDEN_CLASSNAME = "hidden"; //개발 관습인데, string만 저장된 변수는 대분자로만 작성하는게 좋다. 동일한 string을 계쏙 사용하면 오타날 확률이 높아서
const USERNAME_KEY = "username";

function onLoginSubmit(event){ // eventListener에서 이벤트가 발생했을때 어떤 결과가 나왔는지를 첫번째 매개변수에 객체의 형태로 함수에 저장한다!!!!!!!!
    event.preventDefault(); // 태그의 기본동작을 막아주는 함수 : prevent(예방하다)default(지금걸)
    loginForm.classList.add(HIDDEN_CLASSNAME); // classList : html에 사용된 클래스 명들을 list에 저장하는 느낌 classList.add("hidden") 할시 hidden이란 클래스를 넣어준다 어디에? loginForm에 
    const userName = loginInput.value; // userName 변수에 input에 제출된 값을 넣는다 > 변수를 선언할때 const를 기본적으로 사용하고 값의 변화가 있을때 let을 사용한다.
    localStorage.setItem(USERNAME_KEY,userName); // 새로고침해도 값을 저장하기위해 브라우저의 미니 db같은 친구에게 넣어주는것 localStorage.getItem("key값",value값);
    paintGreeting(userName); // 같은 코드가 있으므로 함수로 만들어서 호춝하는 식으로 한다.
    window.location.reload();
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`; // "Hello " + userName; 과 같은 값이다 string과 변수를 합쳐서 나타낸다 중요한점은 변수의 값을 ${변수명} 이렇게 나타내는것이고 작은따옴표 큰따옴표가아닌 ``(백틱) 에 추가해야한다. option + 1왼쪽키
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden이 2번 사용되었으므로 오류를 줄이기 위해 "hidden"을 변수로 대입한다.
    logoutButton.classList.remove(HIDDEN_CLASSNAME);
}

function clickLogoutButton(event){
    event.preventDefault(); // <- 이거 안넣어도 될지도?
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
}else{
    paintGreeting(savedUsername);
    logoutButton.addEventListener("click", clickLogoutButton);
}