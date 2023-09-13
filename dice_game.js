var score = 0;
var side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
function throwdice() {
    // random integer between 1 and 6 
    var rand1 = Math.round(Math.random() * 5) + 1;
    var rand3 = Math.round(Math.random() * 5) + 1;

    // Image src 
    document.getElementById("mydice1").src = "images/d" + rand1 + ".png";
    document.getElementById("hisdice1").src = "images/e" + rand3 + ".png";

    who_won(rand1, rand3);
}

//gif: winner, looser, || tie 
function who_won(rand1, rand3,) {
    let player_points = rand1; // your's points 
    let enemy_points = rand3; // enemy's points 
    let giffy = winner(player_points, enemy_points);
    document.getElementById("message").src = "images/" + giffy;
}

function winner(player, enemy) {
    if (player < enemy) {// if player looses
        return "lose.gif"; // looser gif name
    }
    if (enemy < player) {// if player wins
        return "winner.gif"; // winner gif name
    }
    if (player == enemy) {// if tie
        return "Draw!.gif"; // tie gif name
    }
}

