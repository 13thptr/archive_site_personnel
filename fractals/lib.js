function LString(alphabet,constants,init,rules,iteration)
{
	let currentString=init;
	for(let i=0;i<iteration;i++){
		currentString=currentString.split``;
		for(j in currentString){
			for(k in alphabet){
				if(currentString[j]===alphabet[k]){
					currentString[j]=rules[k];
				}
			}
		}
		currentString=currentString.join``;

	}
	return currentString;

}
function draw(instructionString,ctx)
{
	/*
	F:avancer dans la direction courante
	+:Tourner à gauche d’angle α (∈ S)
	-:Tourner à droite d’un angle α (∈ S)
	*/
	const unitLength=1;
	let instructions=instructionString.split``;
	let currentInstruction="";
	let currentAngle=0;
	let d=10;
	let offset=250;
	for(let i=0;i<instructions.length;i++)
	{
		currentInstruction=instructions[i];
		//console.log(currentInstruction);
		switch(currentInstruction){
			case "F":
				ctx.beginPath();
				ctx.moveTo(d*Math.cos(currentAngle)+offset,d*Math.sin(currentAngle)+offset);
				ctx.lineTo((d+10)*Math.cos(currentAngle)+offset,(d+10)*Math.sin(currentAngle)+offset);
				ctx.stroke();
				break;
			case "+":
				currentAngle=60*Math.PI/180;
				break;
			case "-":
				currentAngle=-60*Math.PI/180;
				break;
			default:
				console.warn("Instruction '"+currentInstruction+"' does not exist.");
		}
	}
}
function drawImageData(instructionString)
{

}

