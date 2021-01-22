<meta charcet="UTF-8">

  <script>

    function pulaLinha() {

      document.write("<br>");
      document.write("<br>");
    }

	  function mostra(frase) {

     document.write(frase);
     pulaLinha();
    }
  
    var pontosAnoPassado = parseInt(prompt("Digite quantos pontos seu time fez no ano passado:"))
    var vitorias = parseInt(prompt("Entre com o número de vitórias:"));
    var empates = parseInt(prompt("Entre com o número de empates"));

    var pontos = (vitorias * 3) + empates;
  
    mostra("Os pontos do seu time são " + pontos);
  
    if(pontos > pontosAnoPassado) {

      mostra("Seu time esta melhor que ano passado");

    }
    
    if(pontos < pontosAnoPassado) {

      mostra("Seu time está pior que ano passado");

    }

    if(pontos == pontosAnoPassado) {

      mostra("Seu time está igual ano passado");
    }
    
    mostra("FIM");
    
  </script>