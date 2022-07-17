//alert("welcome to dairy business website")
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
totalProduction([2,3,4,5,6])



function clear_attribute(id) { // clear inner html required when empty input box is clcikced
    document.getElementById(id).innerHTML = ''
}


function compute() { /// get the date and compute

    var datee = document.getElementById('date_time').value
    var price = document.getElementById('price').value
    $valid = true
   
    if(datee == ''){

        document.getElementById('date_time_info').innerHTML = 'required'
        $valid = false

    }

    if(price == ''){

        document.getElementById('price_info').innerHTML = 'required'
        $valid = false
    }

    if ($valid) {
        //alert(datee)
        show_result(price,datee)
    }else{
        return $valid
    }
}

function show_result(price,time){
    var mon = document.getElementById("mon").value; 
    var tue = document.getElementById("tue").value; 
    var wed = document.getElementById("wed").value; 
    var thur = document.getElementById("thur").value; 
    var fri = document.getElementById("fri").value; 
    var sat = document.getElementById("sat").value; 
    var sun = document.getElementById("sun").value; 

    var data = [mon,tue,wed,thur,fri,sat,sun];
    //alert(data[0])

    var litres = mon+tue+wed+thur+fri+sat+sun;
    var amount = litres*price;
    //alert(time)

    document.getElementById('output').innerHTML = "Production per week is :"+ amount;

    var monthly_litres = sum_litres_in_a_month(data,time);

    alert(monthly_litres);
    
}


function sum_litres_in_a_month(data,given_date) { // return sum litres in that month
    var sum = []
  

    
    var year = new Date(given_date).getFullYear(); // get the year
    var month = new Date(given_date).getMonth()+1; // get the month
    
    days =  new Date(year,month,0).getDate();  // get number of days in a month 

    //if production per day is simply one value then per motn it will just be multiply value by number of days in the month and return it else if values of a of the days are varying like in the case of our find the value of each day using the loop and add onto sum


    for (var i = 1; i <= days; i++) { // do a loop beginiiing day 1 of the month
        var day = 0;

        //combine back to form a day adding i on the date part to get a date.
        var full_date = year + "-" + (month < 9 ? '0'+month : month)  + "-" + (i < 10 ?'0'+i :i); 
        

        day = new Date(full_date).getDay(); // get which day of the week is it



        sum.push(data[day]); // get the value of day from the array of data given and add to the sum
    }

    //var total = sum.reduce((a,b) => a + b, 0)

    return sum;
    
}
