let LatX = parseInt( prompt('Dono digite sua latitude'))
let LongX = parseInt( prompt('Dono digite sua logitude'))


let LatY = parseInt( prompt('Digite a latitude do PET') )
let LongY = parseInt( prompt('Digite a logitude do PET'))

let d = Math.sqrt((LatY - LongY ^ 2) + (LatX - LongX ^ 2))

document.write(d)


function localizacao(){
    if ( d >= 20) {

        alert('Corre Robson que o PET fugiu')
        document.write(d)
        
    } else {
        alert('Continua no suco Robson que ta tudo susa')
        document.write(d)
        
    }
  
}