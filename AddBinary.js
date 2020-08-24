var addBinary = function(a, b) {
	let ls = a.length - 1, ll = b.length - 1, small = a, large = b;
	if(ls > ll) {
			[ls, ll] = [ll, ls];
			[small, large] = [large, small];
	}
	let sum = "", carry = 0;
	
	for(let i=ls;i>=0;i--) {
			const d1 = +small[i];
			const d2 = +large[i+ll-ls];
			
			let temp = (d1 | d2) & ~(d1 & d2);
			let carryTemp = d1 & d2;
			sum = `${(carry | temp) & ~(carry & temp)}${sum}`;
			carry = carryTemp || carry & temp;
	}
	for(let i=ll-ls-1;i>=0;i--) {
			const d2 = +large[i];
			sum = `${(carry | d2) & ~(carry & d2)}${sum}`;
			carry &= d2;
	}
	if(carry) sum = carry + sum;
	return sum;
};

addBinary('1010', '1011');