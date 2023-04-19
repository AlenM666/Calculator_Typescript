import promptSync from 'prompt-sync';

//const prompt = promptSync({string: true});
var prompt = promptSync();

while(la != 'q'){
    var la: any;
    la = prompt("enter choice: \nAdd: 1\nSubtract: 2\nDevide: 3\nMultiply: 4\nQuit: q\n-----------------\n: ");
    if(la == 1){
        add();
    }
    else if(la ==2){
        min();
    }
    else if(la ==3){
        div();
    }
    else if(la ==4){
        mult();
    }
}


function add(){
    let x: any;
    x = prompt('enter x: ');
    let y: any;
    y = prompt('enter y: ');
    return console.log(Number(x)+Number(y),"\n");
}

function min(){
    let x: any;
    x = prompt('enter x: ');
    let y: any;
    y = prompt('enter y: ');
    return console.log(x-y, "\n");
}

function div(){
    let x: any;
    x = prompt('enter x: ');
    let y: any;
    y = prompt('enter y: ');
    return console.log(x / y, "\n");
}

function mult(){
    let x: any;
    x = prompt('enter x: ');
    let y: any;
    y = prompt('enter y: ');
    return console.log(x * y, "\n");
}


