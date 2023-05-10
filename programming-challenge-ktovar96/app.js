const {figures, height, width, variables} = require('./resources/numberValue')

class App {
    constructor(value, width, height){
        this.value=value;
        this.height=height;
        this.width=width;
        this.numbers= Array.from(String(this.value), Number);
        this.LCDString= "";
    }

    numberToLCD1(){
        if(!isNaN(this.numbers[0])) {
            for (let i=0; i<=2; i++){
                let string="";

                for(let l=0; l < this.numbers.length; l++){
                    const index = figures[this.numbers[l]];
                    string += ` ${index[i]}`;
                }
                this.LCDString += string + `\n`;
            }
        } else {
            console.log("That is not a number.")
        }
    }

    numberToLCD2(){
        if(!isNaN(this.numbers[0]) && !isNaN(this.width) && !isNaN(this.height)) {
            for(let i=0; i<=4; i++){
                if(i==0 || i==2 || i==4){
                    let string="";
                    for(let l=0; l<this.numbers.length; l++){
                        const index1=variables[this.numbers[l]];
                        const index2=width[index1[i]];
                        string += `${index2(this.width)}`;
                    }
                    this.LCDString += string + `\n`;
                } else {
                    let string ="";
                    for(let k=0; k<this.height; k++){
                        for(let l=0; l<this.numbers.length; l++){
                            const index1=variables[this.numbers[l]];
                            const index2=height[index1[i]];
                            string += `${index2(this.width)}`;
                        }
                        this.LCDString += string + `\n`;
                        string="";
                    }
                }
            }
        } else {
            console.log("That is not a number.")
        }
    }

}

let arg= process.argv.slice(2);

if(arg[1] && arg[2]) {
    let app= new App(arg[0], arg[1], arg[2]);
    app.numberToLCD2();
    console.log(app.LCDString);
} else {
    let app= new App(arg[0], 0, 0);
    app.numberToLCD1();
    console.log(app.LCDString);
}
