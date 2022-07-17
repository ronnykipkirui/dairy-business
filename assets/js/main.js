//alert("welcome to dairy business website")
let costOfMilk= 45
const shades =["Shade A", "Shade B", "Shade C", "Shade D"]





function totalProduction(milk) {
    let sumOfMilk = 0

    for (i = 0; i < milk.lenght; i++) {
        sumOfMilk += milk[i];
        if (i == 0) {
            console.log("the production for A is" + milk[0] * "per day")
        }
        else if (i == 1) {
            console.log("the production for B is" + milk[1] * "per day")
        }
        else if (i == 2) {
            console.log("the production for C is" + milk[2] * "per day")
        }
        else if (i == 3) {
            console.log("the production for D is" + milk[3] * "per day")
        }
        else if (i == 4) {
            console.log("the production for E is" + milk[4] * "per day")
        }
        else  {
            console.log("the production for F is" + milk[5] * "per day")
        }
    }
    console.log("the production for the day is "+ sumOfMilk* "litres of milk per day")
}
totalProduction([1])


//production of milk in litres per shade each day






//income per week for 45/- per litre




//income per year 




//laep year report