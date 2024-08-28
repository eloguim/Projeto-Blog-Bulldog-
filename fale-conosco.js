
// esta função determina o num max de caracteres no campo do input type, ela reforça ou substitui a tag maxlenght no html. //
function checkMaxLength(input, maxLenght) {
  if (input.value.lenght > maxLenght) { // se o valor do input for maior que o valor máximo de caracteres, ele substitui o valor do input pelo máximo de caracters.//
    input.value = input.value.substring(0, maxLenght); // ele substitui o valor do campo input, por um substring de 0, impedindo a adição de mais caracteres. //
  }
}

 const cNome = document.getElementById("cNome"); // cria uma variável que recebe o id do campo input. //
cNome.addEventListener("input",function() {
  checkMaxLength(cNome,40);
});



//email://
const cEmail = document.getElementById("cEmail");
cEmail.addEventListener("input", function() {
  checkMaxLength(cEmail,30);
});



//telefone://
const cTel = document.getElementById("cPhone");
  cTel.addEventListener("input", function() {
   checkMaxLength(cPhone,12);
  });


//idade://
const cIdade = document.getElementById("cIdade");
  cIdade.addEventListener("input", function() {
   checkMaxLength(cIdade,2);
  });
