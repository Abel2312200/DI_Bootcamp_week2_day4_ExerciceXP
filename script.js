
// Exercice 1

    // Part I

        //  Question 1 and 2 : creation of infoAboutMe function
        function infoAboutMe(){
            console.log("My name's Abel N'gbandaman, I'm 22 and am into listenning music, playing football and checker. I'm also a big Messi's fan.");
        }

        // Question 3 : call of infoAboutMe
        infoAboutMe()

    // Part 2

        // Question 1 and 2 : creation of infoAboutPerson function
        function infoAboutPerson(personName, personAge, personFavoriteColor){
            console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`);
        }

        // Question 3 : call of infoAboutPerson
        infoAboutPerson("David", 45, "blue");
        infoAboutPerson("Josh", 12, "yellow");


// Exercice 2

    // Question 1, 2 and 3: creation of calculateTip function
    function calculateTip(){
        let amountOfTheBill = prompt('Hi, please enter the amount of the bill');
        let tip = 10;
        switch(amountOfTheBill){
            case (amountOfTheBill < 50):
                tip = 20;
                amountOfTheBill -= amountOfTheBill*(tip/100); 
                break;
            case (amountOfTheBill >= 50 && amountOfTheBill < 200) :
                tip = 20;
                amountOfTheBill -= amountOfTheBill*(tip/100); 
                break;
            default :
                // tip value is equal to 10 already
                amountOfTheBill -= amountOfTheBill*(tip/100);
                break;
        }
        console.log(`Tip amount : ${amountOfTheBill*(tip/100)}\nFinal bill : ${amountOfTheBill}`); // Question 4 : displaying amount of the bill
    }

    // Question 5 : call calculateTip function
    calculateTip();


// Exercice 3

    // Question from 1 to 5 : creation of isDivisible function 
    function isDivisible( divisor ){
        let sum = 0 ;
        for( let number = 0 ; number <= 500 ; number++){
            if( number % divisor == 0 ){
                console.log(number+" ");
                sum += number ;
            }
        }
        console.log("Sum : " + sum);
    }

// Exercice 4

    // Question 1 : adding stock and prices objects
    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  

    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    }
    
    // Question 2 : creation of shoppingList
    const shoppingList = [
        "banana",
        "orange",
        "apple"
    ]

    // Question 3 and 4 : creation myBill function
    function myBill(){
        let totalPrice = 0;
        for(let shoppingProduct of shoppingList){
            if(shoppingProduct in stock) {
                if(stock.shoppingProduct != 0){
                    stock[shoppingList] -= 1; // question  bonus : decrease the item's stock
                    totalPrice += prices[shoppingProduct];
                }
            }
        }
        return totalPrice;
    }
    // Question 5 : call of myBill function
    myBill();

// Exercice 5

    // Question 1, 2, 3 : creation of changeEnough function
    function changeEnough(itemPrice, amountOfChange){
        let response = false;
        let sumChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01 ;
        if(sumChange >= itemPrice){
            response = true;
        }
        return response;
    }

    // Question 4 : call of changeEnough function
    changeEnough(4.25, [25, 20, 5, 0]);

// Exercice 6

    // Question 1 : creation of  hotelCosts function
    function hotelCost(){
        let numberOfNight = 0;
        do{
            numberOfNight = prompt('How many nights you would like to stay in the hotel ?');
        }while(isNaN(numberOfNight));
        let hotelCosts = numberOfNight * 140 ;
        return hotelCosts;
    }
    hotelCost();
    
    // Question 2 : creation of  planeRideCost function
    function planeRideCost(){
        let destination;
        let planRideCosts = 300;
        do{
            destination = prompt('Where do you wanna go ?');
        }while(typeof(destination) !== 'string');
        switch(destination){
            case (destination === 'London') :
                planRideCosts = 183;
                break;
            case (destination === 'Paris') :
                planRideCosts = 220;
                break;
            default:
                break;
        }
        return planRideCosts;
    }

    // Question 3 : creation of  rentalCarCost function
    function rentalCarCost(){
        let numberOfDays = 0;
        let rentalCarCosts = 0;
        do{
            numberOfDays = prompt('How many days you would like to rent the car ?');
        }while(isNaN(numberOfNight));
        rentalCarCosts = numberOfNight * 40;
        if(numberOfDays > 10)
            rentalCarCosts *= 0.95;
        return rentalCarCosts;
    }
    // Question 4 : creation of  totalVacationCost function
    function totalVacationCost(){
        let _hotelCost = hotelCost();
        let _planeRideCost = planeRideCost();
        let _rentalCarCost = rentalCarCost();
        alert(`The car cost : ${_hotelCost}, the hotel cost :${_planeRideCost}, the  plane tickets cost :${_rentalCarCost}\nTotal : ${hotelCosts + planeRideCosts +  rentalCarCosts}`);
    }
    // Question 5 : call totalVacationCost
    totalVacationCost();
    // Question 6 : Bonus

 