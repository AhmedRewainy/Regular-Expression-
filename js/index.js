	if(localStorage.getItem("myData") == null)
		{
			usersData = [];
		}
	else
		{
			usersData = JSON.parse(localStorage.getItem("myData"));
		}



var userNameInp = document.getElementById("userName");
var userMailInp = document.getElementById("userMail");
var userAgeInp = document.getElementById("userAge");
var userPhoneInp = document.getElementById("userPhone");
var inps  = document.getElementsByTagName("input");

function validateUserName()
{
	var regex = /^[A-Z][a-zA-Z]{2,8}$/;
	if(regex.test(userNameInp.value) == true)
		{
document.getElementById("userNameAlert").style.display="none";
		return true;

		}
	else
		{
document.getElementById("userNameAlert").style.display="block";
			return false;
		}
	
}


function validateUserPhone()
{
	var regex = /^(002)?010[0-9]{8}$/;
	if(regex.test(userPhoneInp.value) == true)
		{
document.getElementById("userPhoneAlert").style.display="none";
			return true;
		}
	else
		{
document.getElementById("userPhoneAlert").style.display="block";
			return false;
		}
	
}
function clearForm()
{

for(var i = 0 ; i<inps.length ; i++)
	{
		inps[i].value = "";
	}
}
	
function addUser()
{
	
	if(validateUserName() == true && validateUserPhone()==true)
		{

				var user = { name:userNameInp.value , age:userAgeInp.value , mail:userMailInp.value , phone:userPhoneInp.value};
	
				usersData.push(user);
	
			localStorage.setItem("myData" ,  JSON.stringify(usersData) )

			displayData();
			//clearForm();
			
		}
	else
		{
			alert("e7trm nafsk");
		}
	


}



function displayData()
{
	var temp = "";
	for(var i=0; i<usersData.length ;i++)
		{
		temp +="<tr><td>"+usersData[i].name+"</td><td>"+usersData[i].age+"</td><td>"+usersData[i].mail+"</td><td>"+usersData[i].phone+"</td></tr>";	
		}
	document.getElementById("tableBody").innerHTML = temp;
}


displayData();



