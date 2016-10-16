/* Dice Rolls simulation
*/

function rollDice(n=6) {
    return Math.floor(Math.random() * n + 1);
}


function rollNDice(times=2, n=6) {
	var roll = [];
	for (let i = 0; i < times; i++) {
		roll[i]= rollDice(n);
	}
	return roll;
}


function rollsArray(rolls, times=2, n=6) {
	var rollsArr = [];
	for (var i = 0; i < rolls; i++) {
		rollsArr[i] = rollNDice(times, n);
	}
	return rollsArr;
}


function rollsValues(array) {
	return array.map(function(element) {
		return element.reduce(getSum);
	});
}


function getSum(total, num) {
    return total + num;
}


function frequency(array) {
	var freq = {};
	for (let i = 0; i < array.length; i++) {
		var element = array[i];
		if (freq[element]) {
			freq[element]++;
		} else {
			freq[element] = 1;
		}
	}
	return freq;
}


function createTableRolls(parent, rolls) {
	var table = document.createElement('table');
	var rollsVal = rollsValues(rolls);

	var topRow = document.createElement('tr');
	topRow.appendChild(document.createElement('td'));
	topRow.cells[0].appendChild(document.createTextNode("Roll"));
	for (let i = 0; i < rolls[0].length; i++) {
		topRow.appendChild(document.createElement('td'));
        topRow.cells[i + 1].appendChild(document.createTextNode("Dice " + (i + 1)));
	}
	topRow.appendChild(document.createElement('td'));
	topRow.cells[rolls[0].length + 1].appendChild(document.createTextNode("Points"));
	table.appendChild(topRow);

	for (let i = 0; i < rolls.length; i++) {
        var row = document.createElement('tr');
        row.appendChild(document.createElement('td'));
        row.cells[0].appendChild(document.createTextNode(i + 1));

        for (let j = 0; j < rolls[i].length; j++) {
            row.appendChild(document.createElement('td'));
            row.cells[j + 1].appendChild(document.createTextNode(rolls[i][j]));
        }
        row.appendChild(document.createElement('td'));
        row.cells[rolls[i].length + 1].appendChild(document.createTextNode(rollsVal[i]));
        table.appendChild(row);
    }
	parent.appendChild(table);
}


var diceRolls = rollsArray(36000);
var diceRollsValues = rollsValues(diceRolls);

console.log(frequency(diceRollsValues));
console.log(frequency(diceRolls));


window.onload = function() {
	var tablearea = document.getElementById('tablearea');
	createTableRolls(tablearea, diceRolls);
};