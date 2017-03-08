 
          
            function Redirect() {
				var email = document.getElementById('email').value;
				var pass= document.getElementById('password').value;
				if(email=="guru@gmail.com" && pass=="pass"){
               window.location="file:///C:/Users/Ranjith/Desktop/TripGenrator/CustomerInfo.html";
				}
				else{
					if(email==""){
						alert("Enter Email Address");
					}
					else if(pass==""){
						alert("Enter password Address");
					}
					else{
						alert("invalid Credentials");
					}
					  
				}
            }
			
			 