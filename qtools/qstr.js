import * as qstr from './qstr.js';

export const contains = function (line, searchText) {
	return String(line).includes(searchText);
}

export const replaceAll = function (text, search, replace) {
	text = qstr.forceAsString(text);
	const text2 = text.split(search).join(replace);
	return text2;
}

export const forceAsString = function (stringOrOther) {
	if (!qstr.isString(stringOrOther)) {
		return String(stringOrOther);
	} else {
		return stringOrOther;
	}
}

export const isString = function (obj) {
	if (typeof obj === 'string' || obj instanceof String) {
		return true;
	} else {
		return false;
	}
}

export const chopLeft = function (main, textToChop) {
	if (main.startsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(len, mainLen);
		}
	}
	return main;
}

export const chopRight = function (main, textToChop) {
	if (main.endsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(0, mainLen - (len));
		}
	}
	return main;
}

export const startsWithPrefixes = (text, unwantedPrefixes) => {
	let rb = false;
	unwantedPrefixes.forEach(unwantedPrefix => {
		if (text.startsWith(unwantedPrefix)) {
			rb = true;
		}
	});
	return rb;
};

export const convertStringBlockToLines = (stringBlock, trimLines = true) => {
	if (qstr.isEmpty(stringBlock)) {
		return [];
	}
	let roughLines = stringBlock.split("\n");
	if (trimLines) {
		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = qstr.trimLinesOfEndBlanks(roughLines);
	return roughLines;
}

export const isEmpty = (line) => {
	if (line == undefined || line == null) {
		return true;
	} else {
		line = line.toString();
		if (line.trim() == '') {
			return true;
		} else {
			return false;
		}
	}
}

export const trimAllLinesInLinesArray = (lines) => {
	const newLines = [];
	lines.forEach(function (line, index) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
}

export const trimLinesOfEndBlanks = (lines) => {
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	lines = qstr.trimBeginningLinesOfBlanks(lines);
	lines = lines.reverse();
	return lines;
}

export const trimBeginningLinesOfBlanks = (lines) => {
	const newLines = [];
	let trimmingBlanks = true;
	lines.forEach(function (line, index) {
		let newLine = line;
		if (trimmingBlanks && line == "") {
			//skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
}