var multiply = function (num1, num2) {
	let small = num2, large = num1, ls = num2.length - 1, ll = num1.length - 1, i, j, sum = '', multi, row, carry = 0, trailingZero = '', offset, temp;
	if (ls > ll) {
		[small, large] = [large, small];
		[ls, ll] = [ll, ls];
	}

	for (i = ls; i >= 0; i--) {
		row = trailingZero;
		trailingZero += '0';
		carry = 0;
		for (j = ll; j >= 0; j--) {
			multi = +small[i] * +large[j] + carry;
			row = multi % 10 + row;
			carry = Math.floor(multi / 10);
		}
		if (carry) row = carry + row;
		carry = 0;
		temp = '';
		if (sum.length > 0) {
			j = row.length - 1;
			offset = j - sum.length + 1;
			for (; j >= 0; j--) {
				multi = (+sum[j - offset] || 0) + +row[j] + carry;
				temp = multi % 10 + temp;
				carry = Math.floor(multi / 10);
			}
			if (carry) temp = carry + temp;
			sum = temp;
		} else {
			sum = row;
		}
	}
	return sum;
};

console.log(multiply('123456789', '987654321'));