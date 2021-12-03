var burgerName;
var friesName;
var sodaName;
var burgerTotal;
var friesTotal;
var sodaTotal;
var orderTotal =0;
var deliveryConfirm=false;

alert("Hi there! Thanks for choosing Burger Mart as your preferred online ordering system, Below is our menu. Burgers:\n\n1.Large Dusty:£5\n2.Small Dusty: £3.95\n3.Big Chief: £7.50\n\nFries:\n1.Small Fries: £1.75 \n2. Large Fries: £2.40\n\nSoda\n1.Small soda: £1.25\n2. Large Soda £2"); 



var burgerVar= prompt("to start placing your order, Select a Burgers:\n\n1.Large Dusty:£5\n2.Small Dusty: £3.95\n3.Big Chief: £7.50");
var friesVar= prompt("Fries:\n1.Small Fries: £1.75 \n2. Large Fries: £2.40");
var sodaVar= prompt("Soda\n1.Small soda: £1.25\n2. Large Soda £2");

function mealOrder(burger,fries,soda)

{
    this.burger=burger;

    if (this.burger==1)
    {
        burgerName="Large Dusty";
        burgerTotal=5;
    }
    else if (this.burger==2)
    {
        burgerName="Small Dusty";
        burgerTotal=3.95;
    }
   else if (this.burger==3)
    {
        burgerName="Big Chief";
        burgerTotal=7.5;
    }


    this.fries=fries;

    if (this.fries==1)
    {
        friesName="Small Fries";
        friesTotal=1.75;
    }
    else if (this.fries==2)
    {
        friesName="Larger Fries";
        friesTotal=2.40;
    }


    this.soda=soda;

    if (this.soda==1)
    {
        sodaName="Small Soda";
        sodaTotal=1.25;
    }
    else if (this.soda==2)
    {
        sodaName="Larger Soda";
        sodaTotal=2;
    }

 orderTotal=calculateTotal(burgerTotal,friesTotal,sodaTotal);   
  
    this.delivery=function()
    {
        var askDelivery= prompt("would you like your meal to be delivered?");
        if(askDelivery=="yes")
        {
            deliveryConfirm=true
        }
    }

this.displayOrder = function(){
    if(deliveryConfirm==false)
        {
    alert("Your order details are below:\n\n"+burgerName+"£"+burgerTotal+"\n"+friesName+"£"+friesTotal+"\n"+sodaName+"£"+sodaTotal+"\n Your order total is £"+orderTotal);
        }
        else(deliveryConfirm==true)
        {
            alert("Your order details are below:\n\n"+burgerName+"£"+burgerTotal+"\n"+friesName+"£"+friesTotal+"\n"+sodaName+"£"+sodaTotal+"\n"+"Delivery fee £5\n "+" Your order total is £"+(orderTotal+5));
        }
        
    }

}

var newOrder= new mealOrder(burgerVar,friesVar,sodaVar)
    
newOrder.delivery();
newOrder.displayOrder();

function calculateTotal(burger,fries,soda)
{
   return burger+fries+soda;
}

