menu_list_array = ["Pizza Margarita Vegetariana",
                        "Pizza de Pollo Tandoori",
                        "Pizza Suprema Vegetariana",
                        "Pizza de Paneer Tikka",
                        "Pizza Vegetariana de Lujo",
                        "Pizza Extravaganza Vegetariana"];
                        //se crea el arreglo menu_list_array con una lista de pizzas
    
    function getmenu(){
        //función getmenu
        var htmldata="";
        //variable htmldata como ""
        menu_list_array.sort();
        //se va a ordenar en orden alfabetico el arrat menu_list_array
        for(var i=0;i<menu_list_array.length;i++){
            //bucle para poner variable i como 0 (osea inicia en 0) temina en menu_list_array y el intervalo es de 1
            htmldata=htmldata+ menu_list_array[i] + '<br>' 
            //htmldata es igual a htmldata + el array menu_list_array
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //manda a llamar el id display_menu y lo pone en la variable htmldata
        //escribe un nombre de id apropiado como display_menu 
    }

    function add_item(){
        //función add_item
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        //variable imgtags como img id=im1 src"pizzaImg.png
        var item=document.getElementById("add_item").value;
        //se manda a llamar el id add_item dentro de la variable item
        // utiliza la función sort como menu_list_array.sort();
        htmldata="";
        //variable htmldata como ""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
