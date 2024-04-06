var stone = Number(cookieReset("stone", 0));         //현재 돌
var autoStone = Number(cookieReset("autoStone", 0)); //자동 수급 돌
var getStone = Number(cookieReset("getStone", 1));   //클릭 한 번으로 얻는 돌
var idkStone = cookieReset("idkStone", 0);           //얻은적 있나?
var stoneQ = Number(cookieReset("stoneQ", 0));       //돌 업글 - Q
var stoneW = Number(cookieReset("stoneW", 0));       //돌 업글 - W
var stoneE = Number(cookieReset("stoneE", 0));       //돌 업글 - E
var stoneR = Number(cookieReset("stoneR", 0));       //돌 업글 - R

var gold = Number(cookieReset("gold", 0));         //현재 골드
var autoGold = Number(cookieReset("autoGold", 0)); //자동 수급 골드
var getGold = Number(cookieReset("getGold", 1));   //클릭 한 번으로 얻는 골드
var idkGold = cookieReset("idkGold", 0);           //얻은적 있나?

var gem = Number(cookieReset("gem", 0));         //현재 잼
var autoGem = Number(cookieReset("autoGem", 0)); //자동 수급 잼
var getGem = Number(cookieReset("getGem", 1));   //클릭 한 번으로 얻는 잼
var idkGem = cookieReset("idkGem", 0);           //얻은적 있나?

//---------------------------------------------------------------------------------------

var pickaxeType = 0 //0:일반
var pickaxeEvo = [0] //숫자형 강화
var pickaxeEvoStar = [0] //스타포스
const pickaxeName = ["stone pickaxe"]
const pickaxeCost = [1]

var key = [];

function cookieSave() {
    cookieSet("stone", stone)
    cookieSet("autoStone", autoStone)
    cookieSet("getStone", getStone)
    cookieSet("idkStone", idkStone)
    cookieSet("stoneQ", stoneQ)
    cookieSet("stoneW", stoneW)
    cookieSet("stoneE", stoneE)
    cookieSet("stoneR", stoneR)

    cookieSet("gold", gold)
    cookieSet("autoGold", autoGold)
    cookieSet("getGold", getGold)
    cookieSet("idkGold", idkGold)

    cookieSet("gem", gem)
    cookieSet("autoGem", autoGem)
    cookieSet("getGem", getGem)
    cookieSet("idkGem", idkGem)

    cookieSet("pickaxeType", pickaxeType)
    var i;
    for(i=0; i<1; i++) {
        cookieSet("pickaxeEvo"+i, pickaxeEvo[i])
    }

    window.location.reload()
}