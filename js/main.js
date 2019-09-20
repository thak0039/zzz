document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('btnuser').addEventListener('click',getplaceholder);
  
});
async function getplaceholder(){
			let url = `https://jsonplaceholder.typicode.com/users/`;
			let response = await fetch(url);
			let data = await response.json();
			vel.textContent += 'REQUEST SENT ';
			vel.textContent += JSON.stringify(data);
    }

//    let ret = getplaceholder();
//    console.log(ret);

 



























//const app = {
//    init () {
//        document.getElementById("btnuser").addEventListener('click',getplaceholder )
//	},
//    async function getplaceholder(){
//			let url = `https://jsonplaceholder.typicode.com/users`;
//			let response = await fetch(url);
//			let data = await response.json();
//			vel.textContent += 'REQUEST SENT ';
//			vel.textContent += JSON.stringify(data);
//    }
//    let ret = getplaceholder();
//    console.log(ret);
//
//}
//
//document.addEventListener('DOMContentLoaded',event => app.init(), false)