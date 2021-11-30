import {repeatWord} from './repeat_word.js';

describe ('test for repeatWord function', () => {
	
	it ('repeatWord("слово", 3) should return "слово1, слово2, слово3, "', 
		() => {
			let result = repeatWord('слово', 3);
			let resultOut = 'слово1, слово2, слово3, '
			expect(result).toEqual(resultOut);
	});

	it ('repeatWord("слово", number) should return message', 
		() => {
			let result = repeatWord('слово', 'number');
			let resultOut = 'count is not a number';
			expect(result).toBe(resultOut);
		
	});
	
	it ('repeatWord("слово", 4) should return "слово1, слово2, слово3, слово4, "', 
		() => {
		let result = repeatWord('слово', 4);
		let resultOut = 'слово1, слово2, слово3, слово4, ';
		expect(result).toEqual(resultOut);
	});

	it ('repeatWord("слово", 4) should return "слово1, слово2, слово3, слово4, "', 
		() => {
		let result = repeatWord('слово', 4);
		expect(result).toBe('слово1, слово2, слово3, слово4');
		expect(result).toBe('слово4, слово3, слово2, слово1, ');
	});

	it ('repeatWord("слово", 4) should return "слово1, слово2, слово3, слово4, "', 
		() => {
		let result = repeatWord('слово', 4);
		expect(result).toBe('слово4, слово3, слово2, слово1, ');
	});

});