let who=['el perro', 'el gato', 'el raton'];
let what=['se lo comió', 'lo rompió', 'lo robó'];
let when=['por la mañana', 'al mediodía', 'por la tarde'];
let express=['guau', 'miau', '....']
function generador() {
    let whoRandom= who[Math.floor(Math.random()*who.length)];
    let whatRandom= what[Math.floor(Math.random()*what.length)];
    let whenRandom= when[Math.floor(Math.random()*when.length)];
    let expressRandom= express[Math.floor(Math.random()*express.length)]

    return `<p> ${whoRandom} ${whatRandom} ${whenRandom} ${expressRandom}</p>`
}
window.onload = function() {
    const text=generador()
    console.log(text);
  const container= document.getElementById('container')
  container.innerHTML=text
     }


