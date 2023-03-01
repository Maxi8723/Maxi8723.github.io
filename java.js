window.addEventListener("load", function() {
    var imagenes = document.querySelectorAll("img");
    var imagenGrande = document.createElement("img");
    
    var mostrarFotoAmpliada = (f) => {
        for(var i=0; i<document.getElementsByClassName("eterno").length+1;i++){
            switch(f.target.id){
            case `${i}`: cambioImagen(`${i}`);    
            break;
            }
        }
    }
    var cambioImagen = (id) => {
        var marco = document.getElementById("marco");
        var source = document.getElementById(id).getAttribute("src");
        imagenGrande.setAttribute("src", source);
        imagenGrande.classList.add("expandir");

        marco.appendChild(imagenGrande);
    } 
    imagenes.forEach((i) => {
        i.addEventListener("click", mostrarFotoAmpliada);
    });
};
