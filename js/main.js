 function generar(){
     var campo = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
     var i;
     var largo = campo.length;
     for (i=0;i<6;i++){
	       var a = campo[Math.floor(Math.random() * largo)];
	       var b = campo[Math.floor(Math.random() * largo)];
	       var c = campo[Math.floor(Math.random() * largo)];
	       var d = campo[Math.floor(Math.random() * largo)];
	       var e = campo[Math.floor(Math.random() * largo)];
	       var f = campo[Math.floor(Math.random() * largo)];
	       var g = campo[Math.floor(Math.random() * largo)];
	      }
    var salida = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g; //code
    document.getElementById("ingreso").value = salida
  }


  function validacion(){
      var entrada1 = noEspacios(document.getElementById('ingreso').value);
      var entrada2 = noEspacios(document.getElementById('ingreso2').value);
      if (entrada2 == entrada2){
        return "Correcto";
      }
      else{        
        return "No coinciden";
      }
  }

  function noEspacios(string){
    return string.split(' ').join('');
  }