function validate()
{


	var flag=1;
	var firstname1= document.getElementById("firstname").value;
	var lastname1= document.getElementById("lastname").value;
	var email1 = document.getElementById("email").value;
	var mobile1 = document.getElementById("mobile").value;
	
	
	
	var re_mobile=/^\d{10}$/;
	var re_name=/^[a-zA-Z]+$/;
	var re_email =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		
		
		// first name validation 
		if (firstname1== "") 
		{
			//alert("Please enter firstname" + "\n");
			document.getElementById("firstnameerr").innerHTML='<font color="red">Please enter firstname</font>';
			flag=0;
			
		}
		else if (re_name.test(firstname1))
		{
				//alert("firstname ok");
				document.getElementById("firstnameerr").innerHTML='<font color="green">firstname ok</font>';
								localStorage.setItem("firstname", firstname1);



		}
		else
		{
				//alert ("FirstName accepts Characters and spaces only" + "\n");
				document.getElementById("firstnameerr").innerHTML='<font color="red">FirstName accepts Characters and spaces only</font>';
				flag=0;

				
		}
	
	// last name validation 
	
		if (lastname1== "") 
		{
			//alert("Please enter lastname" + "\n");
			document.getElementById("lastnameerr").innerHTML='<font color="red"><b>Please enter lastname</b></font>';
			flag=0;
		
		}
		else if (re_name.test(lastname1))
		{
				//alert("lastname ok");;
				document.getElementById("lastnameerr").innerHTML='<font color="green">lastname ok</font>';
				localStorage.setItem("lastname",lastname1);

		}
		else
		{
				//alert ("lastName accepts Characters and spaces only" + "\n");
				document.getElementById("lastnameerr").innerHTML='<font color="red">FirstName accepts Characters and spaces only</font>';
				flag=0;

				
		}
		
		
				



		//Email validation 
	
		if ( email1 == "")
			{
					//alert("Please Enter Email" + "\n");
					document.getElementById("emailerr").innerHTML='<font color="red"><b>Please enter email</b></font>';
					flag=0;

					
			}
			else if (re_email.test(email1))
			{
				//alert( "email ok");
							document.getElementById("emailerr").innerHTML='<font color="green"><b>email okk</b></font>';
							localStorage.setItem("email", email1);

			}
			else
			{
											document.getElementById("emailerr").innerHTML='<font color=""><b>wrong email</b></font>';
											flag=0;

			}
	


			 if(re_mobile.test(mobile1))
			{
					document.getElementById("mobileerr").innerHTML='<font color="green"><b>mobile number okk</b></font>';
					localStorage.setItem("mobile", mobile1);

			}
			else
			{
				document.getElementById("mobileerr").innerHTML='<font color="green"><b>plz enter 10 digit number</b></font>';
				flag=0;

			}

			if(flag)
			{
				avg();
			}



	
}

function avg()
{
		var sub1 = document.getElementById("s1").value;
		var sub2 = document.getElementById("s2").value;
		var sub3 = document.getElementById("s3").value;


		var marks=[sub1,sub2,sub3];
		console.log(marks[0]);
		
		var total = 0;

		for(var i = 0; i <marks.length; i++)
		 {
		    total +=parseInt(marks[i],10);
		}

		var avg1 = total / marks.length;

		
 localStorage.setItem("result1",avg1);
 window.location = "third.html";

}


 
