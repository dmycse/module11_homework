/*
Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для повторения.
Например если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3, " на одной строке. 
*/

export function repeatWord(word, count) {
	let stringOut ='';
	if (isNaN(count)) return 'count is not a number';
	
	for (let i = 1; i <= count; i++) {
		stringOut += word + i +', ';
	}
	return stringOut;
}