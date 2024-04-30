var outputScreen;

function Clear()
{
    btn=document.getElementById("output-screen");
    btn.value="";
}

function view(a)
{
    btn=document.getElementById("output-screen");
    btn.value+=a;
}
function calculate()
{
    try{
        btn.value=eval(btn.value);
    }
    catch(error)
    {
      btn.value="error";

    }
}