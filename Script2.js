// JavaScript source code
<script>
  // Captura o evento de submit do formulário
  document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    // Previne o comportamento padrão do formulário, que é recarregar a página
    event.preventDefault();

    // Monta a mensagem de texto com os dados do formulário
    var mensagem = "Opção:";
    var opcoes = document.getElementsByName("opcao[]");
    for (var i = 0; i < opcoes.length; i++) {
      if (opcoes[i].checked) {
        mensagem += " " + opcoes[i].value + ",";
      }
    }
    mensagem = mensagem.substring(0, mensagem.length - 1); // remove a última vírgula
    mensagem += "\n\n*Cliente:* " + document.getElementsByName("cliente")[0].value;
    mensagem += "\n*Endereço:* " + document.getElementsByName("endereco")[0].value;
    mensagem += "\n*Telefone:* " + document.getElementsByName("telefone")[0].value;
    mensagem += "\n*CNPJ/CPF:* " + document.getElementsByName("cnpj_cpf")[0].value;
	mensagem += "\n*Data    :* " + document.getElementsByName("data")[0].value;
    mensagem += "\n\n*Quant.* | *Produto* | *Valor und* | *Total*\n";
    var quant = document.getElementsByName("quant[]");
    var produto = document.getElementsByName("produto[]");
    var valor = document.getElementsByName("valor[]");
    var total = document.getElementsByName("total[]");
    for (var i = 0; i < quant.length; i++) {
      if (quant[i].value && produto[i].value && valor[i].value && total[i].value) {
        mensagem += quant[i].value + " | " + produto[i].value + " | " + valor[i].value + " | " + total[i].value + "\n";
      }
    }
    mensagem += "\nTotal Geral: " + document.getElementsByName("total_geral")[0].value;

    // Abre o aplicativo do WhatsApp com a mensagem de texto preenchida
    window.open("https://wa.me/5585997754915?text=" + encodeURIComponent(mensagem));
  });
</script>
