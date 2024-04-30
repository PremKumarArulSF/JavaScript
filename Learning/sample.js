// var name1="Prem kumar";             //Concantenation 
// var value=10;
// document.write("<h3> The name is "+name1+" and value is "+value+"</h3");



// var n=-1;                    //If-else statement
// if(n>=0)
// {
//   if(n%2==0)
//   {
//     console.log("number is even")
//   }
//   else{
//     console.log("number is odd..");
//   }
// }
// else{
//     console.log("Number is negative")
// }



// for(var i=0;i<10;i++)               //For loop
// {
//     console.log(i);
// }


// var i=1;                             //While loop    
// while(i<10)
// {
//     console.log(i);
//     i+=2;
// }

 
// function addNumber(a,b)                //Function 
// {
//     return a+b;
// }
// console.log(addNumber(99,1));

 
// function localScope()         //local Scope and Global Scope
// {
//      a=1;
//     console.log(a);
// }
// localScope();

// console.log(a);


// var arr=new Array(1,2,3,4,"Prem",0.22);     //Array
// console.log(arr.length);
// arr.push(2,3,1,true,1);
// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

 
// var Person={                                           //Object
//     name1:"Prem kumar",
//     age:21,
//     city:"Chennai",
//     showMyDetails:function()
//     {
//         console.log(`${Person.name1} and his age is ${Person.age    }`);
//     }
// }
//     Person.showMyDetails();



// function Model(name,age,city)             //Object with Constructors
// {
//     var Name=name;
//     var Age=age;
//     var City=city;
//     this.details=function()
//     {
//         console.log(`${Name} and hgis age ${Age} from ${City}`)
//     }
// }
// var c=new Model("Sneha",21,"Thirumulaivayal");
// c.details();


// function Color()             Simple DOM Concept
// {
//     console.log(1+99);
//     var btn=document.getElementById("heading");
//     console.log(btn.innerHTML);
// }

//Radio box
// function color()                   //Events
// { 
    
//     console.log("1");
//     var radio1=document.getElementById("id1");
//     var class1=document.getElementById("class1");
//      class1.style.color="red";
//     var radio2=document.getElementById("id2");
//     console.log(radio1.value);
//     if(radio1.checked==true)
//     {
//         console.log(radio1.value);
//         document.getElementById("insert").innerHTML=radio1.value;
//     }
//     else{
//         console.log(radio2.value);
//         document.getElementById("insert").innerHTML=radio2.value;
//     }
    
// }

function contentChange()
{
    document.getElementById("hover").innerHTML="Sneha";
}
function Content()
{
    console.log(1);
    document.getElementById("hover").innerHTML="kumar";
}
