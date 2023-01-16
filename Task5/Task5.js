const resultNode = document.querySelector('.result');        

function displayResult(apiData) {
    
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}" class="card-image" style="width: 200px; height: 200px;" >
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }


  const saveJson = localStorage.getItem("json");

  document.addEventListener("DOMContentLoaded", () => {
      if (saveJson) {
          displayResult(JSON.parse(saveJson));
      }
  });

  const btnNode = document.querySelector('.btnEnter');

  btnNode.onclick = () => {

      const value1 = Number(document.querySelector('.pageNumber').value);
      const value2 = Number(document.querySelector('.limit').value);

      if ( (value1 < 1 || value1 > 10 || isNaN(value1)) && (value2 < 1 || value2 > 10 || isNaN(value2))) {
          alert("Номер страницы и лимит вне диапазона от 1 до 10");
      } else if (value1 < 1 || value1 > 10 || isNaN(value1)) {
          alert("Номер страницы вне диапазона от 1 до 10");   
      } else if (value2 < 1 || value2 > 10 || isNaN(value2)) {
          alert("Лимит вне диапазона от 1 до 10");
      } else {
          fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
          .then((response) => {
              return response.json();
          })
          .then((json) => {
              displayResult(json);
              localStorage.setItem('json', JSON.stringify(json));
          })
          .catch(() => { console.log('error') });
      }
  }