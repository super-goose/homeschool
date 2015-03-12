var pics = ['sm-Captain-America-1.jpg', 'sm-Iron-Man-2.png',
'sm-Iron-Man-1.png', 'sm-Wolverine-1.jpg'];

function isMatch(answer) {
    if (current.sum == answer) {
        return true;
    } else {
        return false;
    }        
}

function displayProblem() {
    $('#topNum').html(current.num1);
    $('#bottomNum').html(current.num2);
}

function nextProblem() {
    index = Math.floor(Math.random() * (problems.length));
    current = problems[index];
    problems.splice(index, 1);
    displayProblem();
}

function populateTiles(problems) {
    for (var i = 0; i < problems.length; i++) {
        $( "#tile" + i ).html(problems[i].sum);
    }

    return problems;
}

function createArrayOfProblems(limit) {
    var problems = [];
    for (var i = 0; i < 20; i++) {
        problems.push(new problem(limit));
    }
    return problems;
}

function problem(limit) {
    this.num1 = Math.floor(Math.random() * ((limit / 2) + 1));
    this.num2 = Math.floor(Math.random() * ((limit / 2) + 1));
    this.sum = this.num1 + this.num2;
}




/*var pics = [ "Juggernaut2.png", "Abomination.png", "MrFreeze.jpg", "Abomination2.jpg", "Nightcrawler.gif",
"Nightcrawler2.png", "Angel.png", "Nightwing.jpg", "Angel2.png", "Nightwing2.jpg",
"Aquaman.png", "ProfessorX_CharlesXavier.png", "Azrael2.png",
"Bane.png", "Reed_Richards_MisterFantastic.png", "Banshee.png", "Robin.png",
"Batman.png", "Robin2.jpg", "Batman3.png", "Sabretooth.png", "Batman4.jpg",
"Silver_Surfer.png", "Beast.png", "Silver_Surfer2.jpg",
"Beast2.png", "Silver_Surfer3.png",
"Spawn.jpg", "BlackWidow.png", "Spawn2.png", "CaptainAmerica.jpg", "Spider-Man.png",
"CaptainAmerica2.png", "Spider-Man2.jpg", "CaptainAmerica3.png", "Superman.jpg",
"CaptainAmerica4.jpg", "Superman2.png", "Colossus.png", "Superman3.png", "Colossus2.png",
"Superman4.png", "Cyclops_ScottSummers.png", "SusanStorm_InvisibleWoman2.jpg",
"Daredevil.png", "Taskmaster.png", "Daredevil2.jpg", "Taskmaster2.jpg", "Deadpool.png",
"Doctor_Doom.png", "Doctor_Strange.jpg", "TheJoker.jpg",
"Doctor_Strange2.png", "TheTick.png", "Falcon.png", "Thing.jpg", "Flash.png", "Thing2.gif",
"Flash2.png", "Thor.png", "Flash3.png", "Thor2.png", "Gambit.png", "Thor3.png",
"Havok_AlexanderSummers.png", "Thor4.png", "Hawkeye.png", "War_Machine.jpg", "Hulk.jpg",
"Wasp.png", "Hulk2.jpg", "Winter_Soldier.png", "HumanTorch.png", "Wolverine.png", "wolverine.jpg",
"Iceman.png", "Wolverine2.png", "Iceman2.png", "Wolverine3.jpg", "IronMan.jpg", "Wolverine4.png",
"IronMan2.jpg", "Wonder_Woman.png", "IronMan3.png", "Wonder_Woman2.jpg", "IronPatroit.png",
"Wonder_Woman3.jpg", "Juggernaut.png" ];
*/