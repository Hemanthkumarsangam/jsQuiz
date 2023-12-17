let crtAnswers = {
    q1 : 'd', q2 : 'c', q3 : 'b', q4 : 'd', q5 : 'c', q6 : 'a', q7 : 'b', q8 : 'c', q9 : 'd', q10 : 'a'
};
let i = parseInt(1);
let score = parseInt(0);
function verify(opt, qid) {
    let ans = crtAnswers[qid];
    if (opt == ans) {
        document.getElementById(opt+qid).style.background = "green";
        score ++;
    } else {
        document.getElementById(ans+qid).style.background = "green";
        document.getElementById(opt+qid).style.background = "red";
    }
    setTimeout(function(){
        document.getElementById('q'+i).style.display="none";
        document.getElementById('o'+i).style.display="none";
        document.getElementById('q'+(i+1)).style.display="block";
        document.getElementById('o'+(i+1)).style.display="block";
        i = i+1;
    }, 1000);
}

function displayScore() {
    document.getElementById('Score').style.display="block";
    document.getElementById('Score').textContent = "Your score is " + score;
    document.getElementById('restart').style.display="block";
}
