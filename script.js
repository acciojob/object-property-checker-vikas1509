const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let k = object.keys(sampleObject);
	k.forEach((item)=>
		if(item==key){
			return true;
		}
		else{return false}
		
	)
	
	
}

//Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));

