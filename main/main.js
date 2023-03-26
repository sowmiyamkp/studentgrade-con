let tamil=parseInt(prompt("enter the tamil mark"));
 let english=parseInt(prompt("enter the english mark"));
 let maths=parseInt(prompt("enter the maths mark"));
 let science=parseInt(prompt("enter the science mark"));
 let social=parseInt(prompt("enter the social mark"));
 let total=tamil+english+maths+science+social;
 
 document.write(total);
 document.write("<br>");
 let avg=total/5;
 document.write(avg);
 document.write("<br>");
 document.write(Math.floor(avg));
 document.write("<br>");
 document.write(Math.round(avg));
 document.write("<br>");
 
if(avg>=90&&avg<=100)
{
	document.write("s grade");
}
else if(avg>=89&&avg<=70)
{
	document.write(" A grade");
}
else if(avg>=61&&avg<=50)
{
	document.write("B grade");
}
else if(avg>=40&&avg<=49)
{
	document.write("Pass");
}
else
{
	document.write("Fail");
}





	