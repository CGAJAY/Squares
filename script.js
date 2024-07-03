let numbers = [4, 9, 16, 25, 36, 49, 64];
function getSquareRoot(arr) {
	let squareRoot = arr.map((element) => {
		return Math.sqrt(element);
	});
	return squareRoot;
}

function render(arry) {
	let sqrRoot = getSquareRoot(arry);
	for (let i = 0; i < arry.length; i++) {
		console.log(`${arry[i]}:${sqrRoot[i]}`);
	}
}
// render(numbers);

function calculateSquareRoot2(numbers) {
	const result = numbers.map((num) => {
		const squareRoot = Math.sqrt(num);
		console.log(`${num}:${squareRoot}`);
	});
	return result;
}
// calculateSquareRoot2(numbers);
function calculateSquareRoot(numbers) {
	const result = [];
	for (let i = 0; i < numbers.length; i++) {
		const squareRoot = Math.sqrt(numbers[i]);
		result.push(squareRoot);
		console.log(`${numbers[i]}:${result[i]}`);
	}
	return result;
}
// calculateSquareRoot(numbers);

function squareRootEven(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num % 2 === 0) {
			result.push(Math.sqrt(num));
		}
	}

	return result;
}

// console.log(squareRootEven(numbers));

function squareRoot(arr, n) {
	return arr.map(Math.sqrt).filter((sqrt) => sqrt > n);
}

console.log(squareRoot(numbers, 4));
console.log(numbers.map(Math.sqrt));
