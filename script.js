// for (let counter = 0; counter < 10; counter++){
//   console.log(counter);
// }

const main = document.querySelector('main');
let html = '';

for (let i = 0; i <= 10; i++){
  html += `<div>${i}</div>`
}

main.innerHTML = html;