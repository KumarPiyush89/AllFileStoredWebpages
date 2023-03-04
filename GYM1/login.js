function eyeFunction()
{
  var x = document.getElementById("psw");
  if (x.type === "password")
  {
    x.type = "text";
    document.getElementById("color").style.color = "red";
  } else
  {
    x.type = "password";
    document.getElementById("color").style.color = "white";
  }
}


function eyeFunction2()
{ 
 
  var x = document.getElementById("psw-repeat");
  
  if (x.type === "password")
  {
    x.type = "text";
    document.getElementById("color2").style.color = "red";
  } else
  {
    x.type = "password";
    document.getElementById("color2").style.color = "white";
  }
}

