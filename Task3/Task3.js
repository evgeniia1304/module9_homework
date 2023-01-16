function useRequest(callback) {
  
    const value = document.querySelector('input').value;
    const inUrl = 'https://picsum.photos/v2/list?limit=' + value; 
   
     let xhr = new XMLHttpRequest();
     xhr.open('GET', inUrl, true);
     
     xhr.onload = function() {
       if (value > 10 || value < 1) {
         alert('число вне диапазона от 1 до 10');
       } else {
         const result = JSON.parse(xhr.response);
         if (callback) {
           callback(result);
         }
       }
     }
     xhr.send();
   }
   
   function displayResult(apiData) {
     const resultNode = document.querySelector('.result');
     let cards = '';
     apiData.forEach(item => {
       const cardBlock = `
         <div class="card">
           <img
             src="${item.download_url}" class="card-image"/>
           <p>${item.author}</p>
         </div>
       `;
       cards = cards + cardBlock;
     });
     resultNode.innerHTML = cards;
   }
   
   const btnNode = document.querySelector('.enter');
   
   btnNode.addEventListener('click', () => {
     useRequest(displayResult);
   });