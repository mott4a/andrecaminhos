/*function bgMuda(interval, frames){
        for(numero = 0; numero < 5; numero++){
            setTimeout(() => { bgMuda(); }, 5000);
            if(numero == 4){
                numero = 0;
            }
            document.body.id = "b"+numero;
        }
        window.setInterval(bgMuda, interval);
        console.log(numero);
}*/


function run(interval, frames) {
    var int = 0;
    
    function func() {
        document.body.id = "b"+int;
        int++;
        if(int === 5){
             int = 0; 
        }
    }
    
    var swap = window.setInterval(func, interval);
}

run(5000, 6);  //milliseconds, frames*/
