function validation()
{
   var code = document.getElementById('passcode').value;
   var flag = false;
   for(var i=0;i<code.length;i++)
   {
   if(code.indexOf(i) == -1)
   {
      flag = true;
   	  break;
    }
   }
   if(flag == false)
   {
   	window.open("content.html","_parent");
   }
   else 
   	alert("<strong style='color:red';>"+Wrong Passcode+"</strong>");
}