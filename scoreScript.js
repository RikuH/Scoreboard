function init() {
    //First set the score values to zero
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
    document.getElementById("score3").innerHTML = 0;
    document.getElementById("score4").innerHTML = 0;
}

function addScore() {

    //Variables of givenscores parsed to integers
    var givenScore1 = parseInt(document.getElementById("addScore1").value);
    var givenScore2 = parseInt(document.getElementById("addScore2").value);
    var givenScore3 = parseInt(document.getElementById("addScore3").value);
    var givenScore4 = parseInt(document.getElementById("addScore4").value);

    //Variables of scores parsed to integers
    score1 = parseInt(document.getElementById("score1").innerHTML);
    score2 = parseInt(document.getElementById("score2").innerHTML);
    score3 = parseInt(document.getElementById("score3").innerHTML);
    score4 = parseInt(document.getElementById("score4").innerHTML);

    //Empty input field check
    if (document.getElementById("addScore1").value == "") {
        givenScore1 = 0;
    }
    if (document.getElementById("addScore2").value == "") {
        givenScore2 = 0;
    }
    if (document.getElementById("addScore3").value == "") {
        givenScore3 = 0;
    }
    if (document.getElementById("addScore4").value == "") {
        givenScore4 = 0;
    }

    //Set the scores to the sum of its value and given score value
    document.getElementById("score1").innerHTML = givenScore1 + score1;
    document.getElementById("score2").innerHTML = givenScore2 + score2;
    document.getElementById("score3").innerHTML = givenScore3 + score3;
    document.getElementById("score4").innerHTML = givenScore4 + score4;

    //Make array of score values
    a = [
        parseInt(document.getElementById("score1").innerHTML),
        parseInt(document.getElementById("score2").innerHTML),
        parseInt(document.getElementById("score3").innerHTML),
        parseInt(document.getElementById("score4").innerHTML)
    ];

    //Sort the table rows ascening order
    SortScore(a);
}

function SortScore(a) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("scoreTable");

    switching = true;
    while (switching) {

        switching = false;
        rows = table.rows;

        //Index starts at 1 so it doesn't take player name and points text
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            //compare every score value to the next of it
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];

            if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
