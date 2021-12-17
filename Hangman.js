var n=0
let stock=['PONDICHERRY', 'LADAKH', 'CHANDIGARH', 'LAKSHADWEEP']
var e=stock[Math.floor(Math.random() * ((stock.length-1) - 0 + 1)) + 0]
var saving=[]
var lis=e.split('')
let dash=('____ '.repeat(e.length)).split(' ')
var b=["+------+\n|\n|\n|\n|\n|\n|\n|\n|______\n","\n+------+\n|      |\n|      O\n|\n|\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|      |\n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|      \n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\\      \n|      |\n|\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\\      \n|      |\n|     /\n|\n|\n|\n|______","\n+------+\n|      |\n|      O\n|     /|\\      \n|      |\n|     / \\ \n|\n|\n|______"];       
console.log("\n               **HANGMAN**\n\nGuess a Territory from 9 Union Terristories of India.\n");
while (n<=7){
    e='';
    for (i of dash){
        e+=i+" "
    }
    console.log(e);
    if (dash.length-1===lis.length && !dash.includes('____')){
        console.log('\nYou Won the Game.');
        break
    }
    choice=((require('readline-sync')).question('\nType a letter: ')).toUpperCase();
    if (lis.includes(choice) && !saving.includes(choice)){
        saving.push(choice);
        for (let l=0; lis.length>l; l++){
            if (choice===lis[l]){
                dash.splice(l, 1, lis[l])
            }
        }
    }
    else{
        n===7?console.log('\nSorry You lost the Game.'):console.log(b[n])
        n+=1
    }

}

