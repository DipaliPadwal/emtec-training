function loadlocalreg_form()
{

	if(typeof(Storage)!=undefined)
	{
		 document.getElementById("firstname").value=localStorage.getItem("firstname");
		 document.getElementById("lastname").value=localStorage.getItem("lastname");
		 document.getElementById("email").value=localStorage.getItem("email");
		 document.getElementById("mobile").value=localStorage.getItem("mobile");
	}

}

function loadlocallogin()
{

	if(typeof(Storage)!=undefined)
	{
		 document.getElementById("form-username").value=localStorage.getItem("uname");
		 document.getElementById("form-password").value=localStorage.getItem("password");
		
	}

}

function resultval()
{

	if(typeof(Storage)!=undefined)
	{
		var result11= document.getElementById("result").innerHTML=localStorage.getItem("result");
		if(result11)
		{

  			document.getElementById("t").innerHTML="Thank you.....";

		}


		
	}

}