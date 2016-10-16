/* Dice Rolls simulation
*/

function rollDice(n=6) {
    return Math.floor(Math.random() * n + 1);
}


function rollNDice(times=2, n=6) {
	var roll = [];
	for (var i = 0; i < times; i++) {
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

// Rewrite
function rollsValueArray(array) {
	rollsValArr = [];
	for (var i = 0; i < array.length; i++) {
		roll = array[i];
		rollsValArr[i] = roll.reduce(getSum);
	}
	return rollsValArr;
}


function getSum(total, num) {
    return total + num;
}


function frequency(array) {
	var freq = {};
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		if (freq[element]) {
			freq[element]++;
		} else {
			freq[element] = 1;
		}
	}
	return freq;
}


function createTableRolls(parent, rolls, rollsValues) {
	var table = document.createElement('table');

	for (var i = 0; i < rolls.length; i++) {
        var row = document.createElement('tr');
        row.appendChild(document.createElement('td'));
        row.cells[0].appendChild(document.createTextNode("Roll " + (i+1) + ":  "));

        for (var j = 0; j < rolls[i].length; j++) {
            row.appendChild(document.createElement('td'));
            row.cells[j + 1].appendChild(document.createTextNode(rolls[i][j]));
        }
        row.appendChild(document.createElement('td'));
        row.cells[rolls[i].length + 1].appendChild(document.createTextNode("Points: " + rollsValues[i]));
        table.appendChild(row);
    }
	parent.appendChild(table);
}


var diceRolls = rollsArray(36000);
var diceRollsValues = rollsValueArray(diceRolls);

console.log(frequency(diceRollsValues));
console.log(frequency(diceRolls));


window.onload = function() {
	var tablearea = document.getElementById('tablearea');
	createTableRolls(tablearea, diceRolls, diceRollsValues);
};
