function documentacion(){
    location.href ="Documentacion.html"
}


function Validar(){
    console.log("operando");
    try {
        Comp.parse(document.getElementById("inputprincipal").value);
        document.getElementById("inputprincipal").style.border="solid 1px blue";//cammbia de color si es correcto el textarea
    } catch (error) {
        document.getElementById("inputprincipal").style.border="solid 1px red";//cambia de color si es incorrecto el textarea
    }

}

function cargar(){
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