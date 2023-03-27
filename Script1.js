// JavaScript source code
<script>
  function calcTotal() {
    var quant = document.getElementsByName("quant[]");
    var valor = document.getElementsByName("valor[]");
    var total = document.getElementsByName("total[]");
    var total_geral = 0;
    for (var i = 0; i < quant.length; i++) {
      var valor_total = quant[i].value * valor[i].value;
      total[i].value = valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      total_geral += parseFloat(valor_total);
    }
    document.getElementsByName("total_geral")[0].value = total_geral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  calcTotal(); // chama a função ao carregar a página

  var quant = document.getElementsByName("quant[]");
  var valor = document.getElementsByName("valor[]");
  for (var i = 0; i < quant.length; i++) {
    quant[i].addEventListener("change", calcTotal);
    valor[i].addEventListener("change", calcTotal);
  }
</script>