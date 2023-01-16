const btn = document.querySelector('.btnEnter');

btn.onclick = () => {
  
 const value1 = Number(document.querySelector('.valueWidth').value);
 const value2 = Number(document.querySelector('.valueHeight').value); 
  
  if ((value1 > 300 || value1 < 100 ) || (value2 > 300 || value2 < 100)) {
    alert ("одно из чисел вне диапазона от 100 до 300");
    return;
  } 
          
fetch('https://picsum.photos/${value1}/${value2}')
.then((response) => {
  document.querySelector('.result').src = response.url;
 
})
.catch (() => {console.log('error')});
 
}
