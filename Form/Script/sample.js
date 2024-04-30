console.log("outer")
// var firstname;
// var lastname;
// var password;
// var email;
// var phonenumber;
// var gender;
// var  address;
// var dob;
// var time;

function validate()
{
    var phonenumber=document.getElementById("phonenumber");
    var regx=/^[8-9]\d{9}/;
    if(regx.test(phonenumber.value))
    {
         
         document.getElementById("Check").innerHTML="valid number";
         document.getElementById("Check").style.display="initial";
         document.getElementById("Check").style.color="green";
         document.getElementById("phonenumber").style.borderColor="green";

    }
    else{
       
        document.getElementById("Check").innerHTML="enter a valid number";
        document.getElementById("Check").style.display="initial";
        document.getElementById("phonenumber").style.borderColor="red";
        document.getElementById("Check").style.color="red";

    }
}
function pwdContent()
{
    var password=document.getElementById("password");
    if(password.value.trim()!="" )
    {
         document.getElementById("password-check").innerHTML="valid password";
         document.getElementById("password-check").style.display="initial";
         document.getElementById("password-check").style.color="green";
         document.getElementById("password").style.borderColor="green";

    }
    else{
       
        document.getElementById("password-check").innerHTML="enter a password";
        document.getElementById("password-check").style.display="initial";
        document.getElementById("password").style.borderColor="red";
        document.getElementById("password-check").style.color="red";

    }
}
function photoContent()
{
    var photo=document.getElementById("photo");
    if(photo.value!="")
    {
        //document.getElementById("photo-check").innerHTML="valid password";
         document.getElementById("photo-check").style.display="initial";
         document.getElementById("photo").style.color="green";
         document.getElementById("photo-check").style.borderColor="green";
    }
    else{
        document.getElementById("photo-check").innerHTML="enter photo";
         document.getElementById("photo-check").style.display="initial";
         document.getElementById("photo").style.color="green";
         document.getElementById("photo-check").style.borderColor="green";
    }
}
function emailContent()
{
    var email=document.getElementById("email");
    var regx=/^([\w\.-]+)@([\w-]+).([a-z])/;
    if(regx.test(email.value))
    {
         
         document.getElementById("email-check").innerHTML="valid mail";
         document.getElementById("email-check").style.display="initial";
         document.getElementById("email-check").style.color="green";
         document.getElementById("email").style.borderColor="green";

    }
    else{
       
        document.getElementById("email-check").innerHTML="enter a valid email";
        document.getElementById("email-check").style.display="initial";
        document.getElementById("email").style.borderColor="red";
        document.getElementById("email-check").style.color="red";

    }

}
function TextContent()
{
    // console.log("text");
    var firstname=document.getElementById("firstname");
   
    let regx=/[a-z A-Z]/;
    if(regx.test(firstname.value))
    {
        console.log("correct")
        document.getElementById("usertext").innerHTML="valid name";
         document.getElementById("usertext").style.display="initial";
         document.getElementById("usertext").style.color="green";
         document.getElementById("firstname").style.borderColor="green";
    }
    else{
        console.log("wrong");
        document.getElementById("usertext").innerHTML="enter a valid name";
        document.getElementById("usertext").style.display="initial";
        document.getElementById("firstname").style.borderColor="red";
        document.getElementById("usertext").style.color="red";

    }
}
function view()
{
  
    // console.log("ineer")
   
    var firstname=document.getElementById("firstname");
    // var lastname=document.getElementById("lastname");
    var password=document.getElementById("password")
    var email=document.getElementById("email");
    var phonenumber=document.getElementById("phonenumber");
    var gender=document.getElementsByName("gender");
    var address=document.getElementById("address");
    var dob=document.getElementById("date");
    var time=document.getElementById("time");
    var language=document.getElementsByName("language");
    var select=document.getElementById("select");
    
    
    // var photo=document.getElementById("photo");
    // console.log(firstname.value);
    document.getElementById("username").innerHTML=firstname.value;
    document.getElementById("emailid").innerHTML=email.value;
    document.getElementById("Password").innerHTML=password.value;
    document.getElementById("phoneNumber").innerHTML=phonenumber.value;
    document.getElementById("DOB").innerHTML=dob.value;
    document.getElementById("Time").innerHTML=time.value;
    for(var i=0;i<gender.length;i++)
    {
        if(gender[i].checked==true)
        {
            document.getElementById("Gender").innerHTML=gender[i].value;
        }
    }
    for(var i=0;i<language.length;i++)
    {
        if(language[i].checked==true)
        {
            document.getElementById("Language").innerHTML+="<li>"+language[i].value+"</li>";
        }

    }
   for(var i=0;i<select.options.length;i++)
   {
    if(select.options[i].selected)
    {
        
        document.getElementById("interset").innerHTML+="<li>"+select.options[i].value+"</li>";
    }
    
   }
    // for(var option of document.getElementById("select").options)
    // {
    //     if(option.selected)
    //     {
    //         console.log(option.value);
    //     }
    // }
     // for(var i=0;i<document.getElementById("select").options;i++)
    // {
        
    //     if(options[i].selected)
    //     {
    //         console.log(select[i].value);
    //     }
        
    // }
    document.getElementById("Address").innerHTML=address.value;
}