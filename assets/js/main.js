
function dailyProduction(id1,id2,id3,id4) {
   
    var litres1 = parseInt(document.getElementById(id1).value)
    console.log("the production for "+id1+" is" + litres1 +"per day")

    var litres2 = parseInt(document.getElementById(id2).value)
    console.log("the production for "+id2+" is" + litres2 +"per day")

    var litres3 = parseInt(document.getElementById(id3).value)
    console.log("the production for "+id3+" is" + litres3 +"per day")

    var litres4 = parseInt(document.getElementById(id4).value)
    console.log("the production for "+id4+" is" + litres4 +"per day")

    var total = litres1+litres2+litres3+litres4;

    console.log("Total production is "+total+" litres per day")

    
}

function weeklyProduction(id1,id2,id3,id4) {
    var price = parseInt(document.getElementById('price').value)

    var litres1 = parseInt(document.getElementById(id1).value)
    console.log("the production for "+id1+" is" + litres1*7 +"per week")

    var litres2 = parseInt(document.getElementById(id2).value)
    console.log("the production for "+id2+" is" + litres2*7 +"per week")

    var litres3 = parseInt(document.getElementById(id3).value)
    console.log("the production for "+id3+" is" + litres3*7 +"per day")

    var litres4 = parseInt(document.getElementById(id4).value)
    console.log("the production for "+id4+" is" + litres4*7 +"per day")
   
    var total = litres1+litres2+litres3+litres4;

    console.log("Total production is "+total*7+" litres per week")

    console.log("total cost is Shs. "+total*7*price+" per week ")
}

function leap_year(id1,id2,id3,id4) {
    var price = parseInt(document.getElementById('price').value)

    var litres1 = parseInt(document.getElementById(id1).value)
    console.log("the production for "+id1+" is" + litres1*7 +"per week")

    var litres2 = parseInt(document.getElementById(id2).value)
    console.log("the production for "+id2+" is" + litres2*7 +"per week")

    var litres3 = parseInt(document.getElementById(id3).value)
    console.log("the production for "+id3+" is" + litres3*7 +"per day")

    var litres4 = parseInt(document.getElementById(id4).value)
    console.log("the production for "+id4+" is" + litres4*7 +"per day")


    var total = litres1+litres2+litres3+litres4;

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    for (var i = 0; i <= 11; i++) {
        days =  new Date(2020,i+1,0).getDate();  // get number of days in a month
        var sum = total*days

        console.log("there is "+days+" days in "+monthNames[i]+" and production is "+sum+" cost is" +sum*price)

    }


}
