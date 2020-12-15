function documentacion(){
    location.href ="Documentacion.html"
}


function interpretar(){
    var elemento = document.getElementById("parrafo-bueno-o-malo");
    if(document.getElementById("inputprincipal").value!=""){
        try {
            Comp.parse(document.getElementById("inputprincipal").value);
            document.getElementById("inputprincipal").style.border="solid 2px green";//cammbia de color si es correcto el textarea
            elemento.className = "tipo1";
            document.getElementById("parrafo-bueno-o-malo").innerHTML = "<p>Entrada Validada Correctamente</p>";
        } catch (error) {
            document.getElementById("inputprincipal").style.border="solid 2px red";//cambia de color si es incorrecto el textarea
            elemento.className = "tipo2";
            document.getElementById("parrafo-bueno-o-malo").innerHTML = "<p>Entrada Con errores</p>";
        }
    }else{
        document.getElementById("inputprincipal").style.border="solid 2px orange";
        elemento.className = "tipo3";
        document.getElementById("parrafo-bueno-o-malo").innerHTML = "<p>Ingrese Código a Validar</p>";
    }
    

}

function prueba(){
    var CodigoP=
    "algoritmo prueba(){\n"+
    "   Tdato p<- 4;\n" +
    "   Tdato t<- 3;\n" +
    "   hacer{\n"+
    "     si cumple(p menor| 7){\n"+
    "         p plus; \n"+
    "     }no cumple si cumple(t mayor|= 0){\n"+
    "        ciclof(Tdato i<-0;i menor|= 5; i plus){\n"+
    "           t less;\n"+
    "        }\n"+
    "     }\n"+
    "   }hasta que(t mayor|= 0);\n"+
    "}\n"+
    "prueba();";
    document.getElementById("inputprincipal").value=CodigoP;
}