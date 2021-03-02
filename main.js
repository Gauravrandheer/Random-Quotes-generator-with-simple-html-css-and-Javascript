const output = document.getElementById('Quoteplace');
const button  = document.getElementById('btn');
const quotes = ["Truth can only be found in one place: the code.-Robert C. Martin.",
               "Walking on water and developing software from a specification are easy if both are frozen.-Edward V.Berad",
               "The sooner you start to code, the longer the program will take.-Roy Carlson",
               "Talk is cheap. Please show me the code.-By Linus Torvalds.",
               "Programs must be written for people to read, and only incidentally for machines to execute.-By Harold Abelson.",
               "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.-John Woods.",
               "I’m not a great programmer; I’m just a good programmer with great habits. -Kent Beck.",
               "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime -By Muhammad Waseem.",
               "if you optimize everything, you will always be unhappy.-Donald Knuth."]


button.addEventListener("click",function(){
  var yourquote = quotes[Math.round(Math.random()*quotes.length)]
  console.log(yourquote);

 if(yourquote!=undefined){
   output.innerHTML = yourquote;
 }

})
