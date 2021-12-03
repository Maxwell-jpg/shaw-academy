var mark= prompt("Enter passmark to get grade");

if( mark >=90 )
{
alert("Congratulations!!! you received an A");
}

else if(mark>=80)
{
alert("Well Done you got a B");
} 

else if (mark>=70)
{
alert("Not Bad you got a C");
}

else if (mark>=60)
{
alert("Better luck next time thats a D");
}

else if (mark>=0&&mark<=59)
{
alert("Did you even try you got an f");
}

else
{
alert("!!Invalid Entry!!");
}
