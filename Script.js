let Wood = 150;
let Food = 5;
let Stone = 5;
let Worker = 5;
let Gold = 150;
let Citie = 0;

let GoldMiners = 0;
let StoneWorkers = 0;
let Carpenters = 0;
let Farmers = 0;
let Ships = 0;
let Knights = 0;
let CostOfPeople = 0;

let PWood = Carpenters * 5;
let PFood = Farmers * 5;
let PStone = StoneWorkers * 4;
let PGold = GoldMiners * 3;
let EFood = 0;

function BtGoldAd () {
    if (Worker > 0) {
    GoldMiners ++;
    WorkerDe();
    NewView();
    }
}
function BtGoldDe () {
    if (GoldMiners > 0) {
    GoldMiners --;
    WorkerAd();
    }
}
function BtStoneAd () {
    if (Worker > 0) {
    StoneWorkers ++;
    WorkerDe();
    NewView();
    }
}
function BtStoneDe () {
    if (StoneWorkers > 0) {
    StoneWorkers --;
    WorkerAd();
    }
}
function BtWoodAd () {
    if (Worker > 0) {
    Carpenters ++;
    
    WorkerDe();
    NewView();
    }
}
function BtWoodDe () {
    if (Carpenters > 0) {
    Carpenters --;
    
    WorkerAd();
    }
}
function BtFoodAd () {
    if (Worker > 0) {
    Farmers ++;
    WorkerDe();
    NewView();
    }
}
function BtFoodDe () {
    if (Farmers > 0) {
    Farmers --;
    WorkerAd();
    }
}
function BtWorkerAd() {
    if (Wood>1 && Stone>0) {
        Wood = Wood - 2;
        Stone = Stone - 1;
        Worker++;
        NewView();
    }
}
function BtShipAd() {
    if (Wood>99 && Gold>99) {
        Wood = Wood - 100;
        Gold = Gold - 100;
        Ships++;
        NewView();
    }
}
function BtArmyAd() {
    if (Gold>1 && Stone>0 && Worker>0) {
        Gold = Gold -1;
        Stone--;
        Worker--;
        Knights++;
        NewView();
    }
    
}
function BtShipsDe() {
    if (Ships>0) {
        Ships = 0;
        //ustawić reszte parametrów i zależnośći do wojska wysłanego
        NewView();
    }
}
function CostOfPeoples () {
    CostOfPeople = (Knights * 2) + Worker + GoldMiners + StoneWorkers + Carpenters;
}
function WorkerAd() {
    Worker++;
    NewView();
}
function WorkerDe() {
    Worker--;
    NewView();
}
function EndFood () {
    CostOfPeoples();
    EFood = Food + (Farmers * 5) - CostOfPeople;
}
function EndOfTurn() {
    EndFood();
    CostOfPeoples();
    if (EFood>=0) {
            Wood = (Carpenters * 5) + Wood;
            Food = EFood;
            Stone = (StoneWorkers * 4) + Stone;
            Gold = (GoldMiners * 3) + Gold;
            NewView();
    } else {
        NoFoodInfo();
    }
    
}
function NewView() {
    CostOfPeoples()
    PWood = Carpenters * 5;
    PFood = (Farmers * 5) - CostOfPeople;
    PStone = StoneWorkers * 4;
    PGold = GoldMiners * 3;

    document.getElementById("Workers").innerHTML = Worker;
    document.getElementById("GoldMiners").innerHTML = GoldMiners;
    document.getElementById("StoneWorkers").innerHTML = StoneWorkers;
    document.getElementById("Carpenters").innerHTML = Carpenters;
    document.getElementById("Farmers").innerHTML = Farmers;
    document.getElementById("Ships").innerHTML = Ships;
    document.getElementById("Knights").innerHTML = Knights;

    document.getElementById("Wood").innerHTML = "Wood : " + Wood + "+(" + PWood + ")";
    document.getElementById("Food").innerHTML = "Food : " + Food + "+(" + PFood + ")";
    document.getElementById("Stone").innerHTML = "Stone : " + Stone + "+(" + PStone + ")";
    document.getElementById("Worker").innerHTML = "Workers : " + Worker;
    document.getElementById("Gold").innerHTML = "Gold : " + Gold + "+(" + PGold + ")";
    document.getElementById("Army").innerHTML = "Knights : " + Knights;
    document.getElementById("Cities").innerHTML = "Captured Cities : " + Citie;
}


function BtFoodInfo() {
    FoodInfoText = "One Worker eats one food per turn" + "<br>" + "One Farmer Produce 5 food";
    document.getElementById("Farmers").innerHTML = FoodInfoText;
    setTimeout(Clear, 4000);
    function Clear() {document.getElementById("Farmers").innerHTML = Farmers, 3000};
    
}
function NoFoodInfo() {
    NoFood = "No Food Check it"
    document.getElementById("BtEndTurn").innerHTML = NoFood;
    setTimeout(ClearEnd, 4000);
    function ClearEnd() {document.getElementById("BtEndTurn").innerHTML = "End Turn", 3000};
}
