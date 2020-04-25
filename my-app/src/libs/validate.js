class Validate {
	
	static isNumber(value) {
		return !isNaN(parseFloat(value)) && isFinite(value);
	}

	static checkNum(value)  {
		if(value < 1 || value > 6 || Validate.isNumber(value) === false ) {
			return false;
		}

		return true;
	}
}

export default Validate;