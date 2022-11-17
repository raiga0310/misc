function calcCumP(nums: Array<number>): Array<number> {
	const cumP: Array<number> = [0];

	for(let i: number = 1;i < nums.length; i++) {
		cumP[i] = cumP[i - 1] + nums[i - 1];
	}

	return cumP;

}

function calcWordLength(nums: Array<number>): Array<number> {
	const symbolLength: Array<number> = [];

	for(let i: number = 0; i < nums.length; i++) {
		symbolLength.push(Math.floor(Math.log(nums[i]) / Math.log(2)) * (-1));
	}

	return symbolLength;
}

function toBinary(num: number,digit: number): String {
	let binaryString: String = "";

	for(let i = 0; i < digit; i++) {
		num *= 2;
		if(num >= 1 && num !== 0) {
			num -= 1;
			binaryString = binaryString + '1';
		} else {
			binaryString = binaryString + '0';
		}
	}

	return binaryString;
}

function encodeByShannon(nums: Array<number>): Array<String> {
	const cumP: Array<number> = calcCumP(nums);
	const symbolLength: Array<number> = calcWordLength(nums);
	const signArray: Array<String> = [];

	for(let i: number = 0;i < nums.length; i++) {
		signArray.push(toBinary(cumP[i],symbolLength[i]));
	}

	return signArray;
}

const a: Array<number> = [0.32, 0.23, 0.2, 0.15, 0.1];

console.log(encodeByShannon(a));
//console.log("0.3 to binary is (nearly):" + toBinary(0.3, 10));
