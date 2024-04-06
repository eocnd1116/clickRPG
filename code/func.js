function cookieGet(_key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        item = item.replace(' ', '');

        var dic = item.split('=');

        if (_key === dic[0]) {
            result = dic[1];
            return '';
        }
    });
    return result;
}
function cookieSet(_key, _value) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 365);
    document.cookie = _key + "=" + escape(_value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function cookieReset(_key, _value) {
    if ( cookieGet(_key) == null ) {
        cookieSet(_key, _value)
    }
    return cookieGet(_key);
}



function buttonSign(_sNum, _sPer, _goNum, _goPer, _gNum, _gPer, _plus, _clss) {
    return " "+(_sNum==0 ? "" : "<span style='background-color:#e0e0e0;' id='buttonSign1' class='"+_clss+"'>+"+_sNum+" STONE"+(_sPer==0 ? "" : (" at "+_sPer+"%"))+"</span> " )+(_goNum==0 ? "" : "<span style='background-color:#ffff80;' id='buttonSign2' class='"+_clss+"'>+"+_goNum+" GOLD"+(_goPer==0 ? "" : (" at "+_goPer+"%"))+"</span> " ) + (_gNum==0 ? "" : "<span style='background-color:#ffC0ff;' id='buttonSign3' class='"+_clss+"'>+"+_gNum+" GEM"+(_gPer==0 ? "" : (" at "+_gPer+"%"))+"</span> " )+(_plus=="" ? "" : _plus)+"</span></span>";
}


function pickaxeSign(_type) {
    var returnText = ""
    if ( _type == 0 ) { //기본
        if ( pickaxeEvo[_type]>0 ) returnText += "get stone amount + "+pickaxeEvo[_type];
        if ( pickaxeEvo[_type]>0 && pickaxeEvoStar[_type]>0 ) returnText += ", "
        if ( pickaxeEvoStar[_type]>0 ) returnText += "auto stone + "+pickaxeEvoStar[_type];
    }
    if ( returnText == "") return "none";
    return returnText;
}