console.log('js ok');

/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// 1 Produrre i numeri da 1 a 100
// 2 selezionare i numeri multipli di 3
// 3 stampare Fizz al posto del numero
// 4 selezionare i numeri multipli di 5
// 5 stampare Buzz al posto del numero
// 6 selezionare i multipli di 3 e 5 
// 7 stampare frizzBuzz al posto dei numeri

//! ciclo per produrre i numeri da 1 a 100
let i = ''
for (let i=1; i <= 100; i++){
    if( i % 3 && i % 5 ) {
        console.log(i);
        document.getElementById('numbers').innerHTML += (`${i} <br>` )
    } else {
        if((i % 3==0) && (i % 5==0)){
            console.log(`Fizzbuzz`);
            document.getElementById('numbers').innerHTML += (`Fizzbuzz <br>` )
        }else{

            if( i % 3 == 0 ) {
                
                console.log(`fizz`);
                document.getElementById('numbers').innerHTML += (`fizz <br>` )
            }
            if( i % 5 == 0 ) {
                console.log(`buzz`);
                document.getElementById('numbers').innerHTML += (`buzz <br>` )
            }
        }
    }
    
}