function validateForm()
{
    var name=document.forms["myform"]["name"].value;  
    if(name==null || name=="" )
    {
        alert("Name is required!!");
        return false;
    }
	var letterNumber = /^[a-zA-Z]+$/;  
    if(!(name.match(letterNumber)))   
    {  
        alert("Name must contain only alphabets!!");
        return false; 
    }  
    var email=document.forms["myform"]["email"].value;
    if(email==null || email=="")
    {
        alert("E-mail is required!!");
        return false;
    }
	var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
        alert("Not a valid E-mail address");
        return false;
    }
	var exp=document.forms["myform"]["exp"].value;
    if(exp==null || exp=="")
    {
        alert("Experience is required!!");
        return false;
    }
    else
    {
       alert("Success: All Fields are correct!!");
	   return true;
	   
    }

}