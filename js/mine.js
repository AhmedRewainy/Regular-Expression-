


/*

number ;
string ;
boolean;
null 
undefined 
object
*/


/*


variable 
	- variable declaration , assignment 
	- scope 
	- DataTypes (number , string , boolean , null , symbol and object)

objects 
	- object Properties 
	- object Methods
	
function
	- why function
	- how implement function
	- function parameters and arguments
	- anonymous function
	- self invoke function (function(){})();
	- function Hoisting 

phoneBook

localstorage

regularExp
	- [xyz] find any char between brackets 
	- [a-z] find any char between a-z 
	- (a|c) find char a or c
	- \d find any digit
	- \s find any space
	- n+ at least one
	- n* zero or more
	- n? zero or one
	- n{x} , n{x,y} , n{x,}
	- n$
	- ^n







var userName = document.getElementById("userName");
var userMail = document.getElementById("userMail");
var userPhone = document.getElementById("userPhone");
var userAge = document.getElementById("userAge");
var inputs = document.getElementsByTagName("input");
var usersContainer;

if(localStorage.getItem("usersData") == null)
	{
		usersContainer = [];	
	}
else
	{
usersContainer = 	JSON.parse(localStorage.getItem("usersData"));
		
	}


function validateUserName()
{
	
	var regx = /[a-z]/;
	var alrt = document.getElementById("userNameAlert");
	if(regx.test(userName.value) == false )
		{
		alrt.style.display = "block";
		return false;
		}
	else
		{
		alrt.style.display = "none";
		return true;
		}
}
function validateUserAge()
{
	
	var regx = /^([1-7][0-9]|80)$/;
	var alrt = document.getElementById("userAgeAlert");
	if(regx.test(userAge.value) == false )
		{
		alrt.style.display = "block";
		return false;
		}
	else
		{
		alrt.style.display = "none";
		return true;
		}
}

function addUser()
{
	
	if(validateUserName() || validateUserAge())
		{
			
		
		
	var newUser = {name:userName.value , mail:userMail.value , phone:userPhone.value , age:userAge.value};

	usersContainer.push(newUser);
	
	localStorage.setItem("usersData" ,JSON.stringify(usersContainer));
		
	displayData();
	//clearForm();
			
		}
	else
		{
			alert("You Have some errors ");
		}
}

function displayData()
{
	var temp = "";
	for(var i = 0 ; i < usersContainer.length ; i++)
		{
			temp +="<tr><td>"+usersContainer[i].name+"</td><td>"+usersContainer[i].age+"</td><td>"+usersContainer[i].phone+"</td><td>"+usersContainer[i].mail+"</td></tr>"	
		}
	document.getElementById("tableResult").innerHTML = temp;
}



function clearForm()
{
	for(var i= 0 ; i<inputs.length ; i++)
		{
			inputs[i].value = "";
		}
}

function toggleForm()
{
	var formContainer = document.getElementById("formContainer");
	var btnToggle  = document.getElementById("btnToggle");
	if(formContainer.style.display == "none")
		{
			formContainer.style.display = "block";
			btnToggle.innerHTML = "hide";
		}
	else
		{
			formContainer.style.display = "none";
			btnToggle.innerHTML = "show";
			
		}
}








//console.log(localStorage.getItem("usersData"));

		*/