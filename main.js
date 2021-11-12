let typeChartNames = ["NORMAL", "FIRE", "WATER", "GRASS", "ELECTRIC", "ICE", "FIGHTING", "POISON", "GROUND",
                        "FLYING", "PSYCHIC", "BUG", "ROCK", "GHOST", "DRAGON", "DARK", "STEEL", "FAIRY"];

let typeChart =
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
    [1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
    [1, 2, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
    [1, 0.5, 2, 0.5, 1, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
    [1, 0.5, 0.5, 2, 1, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
    [1, 1, 1, 2, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
    [1, 2, 1, 0.5, 2, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 2, 0.5, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
    [1, 0.5, 1, 2, 1, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
    [1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]];

let totalResistances = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let typeList = [];


function addType(typeIndex) {
    console.log(typeIndex);
    console.log(typeChartNames);

    console.log("before:");
    console.log(typeList);
    console.log(totalResistances);
    if (!typeList.includes(typeChartNames[typeIndex])) {
        typeList.push(typeChartNames[typeIndex])
        for (let i = 0; i < typeChart.length; i++) {
            totalResistances[i] = totalResistances[i] * typeChart[i][typeIndex];
        }
    } else {
        console.log("Already has this type!");
    }
    console.log("after:");
    console.log(typeList);
    console.log(totalResistances);

    let buttonType = typeChartNames[typeIndex].toLowerCase();
    let addButton = document.getElementById(buttonType + "Add");
    let removeButton = document.getElementById(buttonType + "Remove");
    addButton.style.display = "none";
    removeButton.style.display = "inline";

    displayResutls();
    calculateResistanceScore();
}

function removeType(typeIndex) {


    console.log("before:");
    console.log(typeList);
    console.log(totalResistances);
    
    
    //removing from typeList array
    console.log("before splice");
    console.log(typeList);
    let removeTypeIndex  = typeList.indexOf(typeChartNames[typeIndex]);
    typeList.splice(removeTypeIndex, 1);
    console.log("after splice");
    console.log(typeList);

    //rebuild totalResistances array
    totalResistances = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    
    
    let listOfCurrentTypes = [];
    for (let i = 0; i < typeList.length; i++) {
        listOfCurrentTypes[i] = typeChartNames.indexOf(typeList[i]);
    }

    for (let i = 0; i < listOfCurrentTypes.length; i++) {
        for (let j = 0; j < typeChart.length; j++) {
            totalResistances[j] = totalResistances[j] * typeChart[j][listOfCurrentTypes[i]];
        }
    }

    console.log("after:");
    console.log(typeList);
    console.log(totalResistances);


    let buttonType = typeChartNames[typeIndex].toLowerCase();
    let addButton = document.getElementById(buttonType + "Add");
    let removeButton = document.getElementById(buttonType + "Remove");
    addButton.style.display = "inline";
    removeButton.style.display = "none";

    displayResutls();
    calculateResistanceScore();
}

function displayResutls() {

    document.getElementById("output").innerHTML = 
    `<table id="resultsTable">
        <tr>
            <th colspan="6">
                <h2>Resistance Table:</h2>
            </th>
        </tr>
        <tr>
            <td>
                Normal <br>x` + totalResistances[0] + `
            </td>
            <td>
                Fire <br>x` + totalResistances[1] + `
            </td>
            <td>
                Water <br>x` + totalResistances[2] + `
            </td>
            <td>
                Grass <br>x` + totalResistances[3] + `
            </td>
            <td>
                Electric <br>x` + totalResistances[4] + `
            </td>
            <td>
                Ice <br>x` + totalResistances[5] + `
            </td>
        </tr>
        <tr>
            <td>
                Fighting <br>x` + totalResistances[6] + `
            </td>
            <td>
                Poison <br>x` + totalResistances[7] + `
            </td>
            <td>
                Ground <br>x` + totalResistances[8] + `
            </td>
            <td>
                Flying <br>x` + totalResistances[9] + `
            </td>
            <td>
                Psychic <br>x` + totalResistances[10] + `
            </td>
            <td>
                Bug <br>x` + totalResistances[11] + `
            </td>
        </tr>
        <tr>
            <td>
                Rock <br>x` + totalResistances[12] + `
            </td>
            <td>
                Ghost <br>x` + totalResistances[13] + `
            </td>
            <td>
                Dragon <br>x` + totalResistances[14] + `
            </td>
            <td>
                Dark <br>x` + totalResistances[15] + `
            </td>
            <td>
                Steel <br>x` + totalResistances[16] + `
            </td>
            <td>
                Fairy <br>x` + totalResistances[17] + `
            </td>
        </tr>
    </table>`;
}

function calculateResistanceScore() {
    let resistanceScore = 0;
    
    for (let i = 0; i < totalResistances.length; i++) {
        resistanceScore += totalResistances[i];
    }

    document.getElementById("scoreBox").innerHTML = 
    `<h2>Resistance Score :</h2> ` + resistanceScore + 
    `<h3>The lower, the better</h3>`
}


/*
    some possible functions:
    resistance score
    breakdown of immunites and weaknesses
    add table
*/ 