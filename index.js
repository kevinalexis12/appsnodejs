/*const op=require('./ejercicio1');
const prompt=require("prompt-sync")();
var valor =prompt("ingrese la funcion que decea usar=",1)


switch (valor) {
    case "1":
        op.sumar(6,10)
        break;
        case "2":
        op.restar(6,10)
            break;
            case "3":
        op.potencia(6,2)
                break;
                case "4":
        op.multipli(6,5)
                    break;
                    case "6":
        op.divicion(6,10)
                        break;
                        case "7":
        op.radi(6,10)
                            break;
    default:
        break;
}*/

const http=require('http')
function handleServer(req,res){
    res.writeHead(404,{"content-type" :'text-html'})
    res.write('<h1>esta es la respuesta del servidor </h1>')
    res.end()
}
const server=http.createServer(handleServer).listen(5000)




//para poder usar un requerimiento de otros archivos js toca ponerlos en un objetos para  asi poder usar las funciones que tenga este archivo