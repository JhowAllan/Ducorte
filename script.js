// Exibir o botão "Voltar ao topo" quando o usuário rolar a página para baixo
window.onscroll = function() {mostrarBotaoTopo()};

function mostrarBotaoTopo() {
  var botaoTopo = document.getElementById("botao-topo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
}

// Rolagem suave até o topo da página quando o botão for clicado
function voltarAoTopo() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
} 





// if (mail($to, $subject, $body, $headers)) {
//     // Exibe um modal de confirmação com jQuery UI
//     $('<div>Mensagem enviada com sucesso!</div>').dialog({
//         modal: true,
//         buttons: {
//             OK: function () {
//                 $(this).dialog('close');
//             }
//         },
//         close: function () {
//             // Redireciona para a página inicial após fechar o modal
//             window.location.href = '/';
//         }
//     });
// } else {
//     // Exibe um modal de erro com jQuery UI
//     $('<div>Houve um problema ao enviar a mensagem. Por favor, tente novamente mais tarde.</div>').dialog({
//         modal: true,
//         buttons: {
//             OK: function () {
//                 $(this).dialog('close');
//             }
//         }
//     });
// }





// window.onscroll = function() { myFunction() };

// var menu = document.getElementById("menu");
// var sticky = menu.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     menu.classList.add("sticky");
//   } else {
//     menu.classList.remove("sticky");
//   }
// }




