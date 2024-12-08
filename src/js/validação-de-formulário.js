let dados = document.querySelectorAll(".dados");
const alertaObrigátorio = document.querySelectorAll(".alerta");
const enviarFormulário = document.getElementById("enviar-formulário");

enviarFormulário.addEventListener("click", () => {
  validação();
});

function validação() {
    dados.forEach((item) => {
    console.log(item.value);
    if (item.value === ''){
        item.classList.remove('ok')
      item.classList.add('obrigatório');
      item.nextElementSibling.classList.add('obrigatório')
    } else {
        item.classList.remove('obrigatório');
        item.classList.add('ok');
        item.nextElementSibling.classList.remove('obrigatório')
    }
  });
}