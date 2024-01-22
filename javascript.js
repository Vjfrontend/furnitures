function checkDrive(){
var age = prompt("whats your age ");
if(Number(age) < 18) {
	alert("your to young to drive","powering off");
}else if(Number(age) > 18){
	alert("powering on ");
}else if (Number(age) === 18){
	alert("welcome to your first drive!");
}

} 
checkDrive();

// function checkDriverAge(){
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }
//  checkDriverAge()