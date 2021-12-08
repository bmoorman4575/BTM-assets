gdjs.step3Code = {};
gdjs.step3Code.GDgofowardObjects1_1final = [];

gdjs.step3Code.GDnextObjects1_1final = [];

gdjs.step3Code.GDmouseObjects1= [];
gdjs.step3Code.GDmouseObjects2= [];
gdjs.step3Code.GDexampleObjects1= [];
gdjs.step3Code.GDexampleObjects2= [];
gdjs.step3Code.GDgradiantObjects1= [];
gdjs.step3Code.GDgradiantObjects2= [];
gdjs.step3Code.GDwhitebox2Objects1= [];
gdjs.step3Code.GDwhitebox2Objects2= [];
gdjs.step3Code.GDwhiteboxObjects1= [];
gdjs.step3Code.GDwhiteboxObjects2= [];
gdjs.step3Code.GDWaveoslogoObjects1= [];
gdjs.step3Code.GDWaveoslogoObjects2= [];
gdjs.step3Code.GDstep1Objects1= [];
gdjs.step3Code.GDstep1Objects2= [];
gdjs.step3Code.GDwelcometowaveosObjects1= [];
gdjs.step3Code.GDwelcometowaveosObjects2= [];
gdjs.step3Code.GDpressnexttostartofObjects1= [];
gdjs.step3Code.GDpressnexttostartofObjects2= [];
gdjs.step3Code.GDinstallerbootedbyObjects1= [];
gdjs.step3Code.GDinstallerbootedbyObjects2= [];
gdjs.step3Code.GDbootofusbObjects1= [];
gdjs.step3Code.GDbootofusbObjects2= [];
gdjs.step3Code.GDorObjects1= [];
gdjs.step3Code.GDorObjects2= [];
gdjs.step3Code.GDnextObjects1= [];
gdjs.step3Code.GDnextObjects2= [];
gdjs.step3Code.GDnotyourlaunguageObjects1= [];
gdjs.step3Code.GDnotyourlaunguageObjects2= [];
gdjs.step3Code.GDlaunguageObjects1= [];
gdjs.step3Code.GDlaunguageObjects2= [];
gdjs.step3Code.GDblackboxObjects1= [];
gdjs.step3Code.GDblackboxObjects2= [];
gdjs.step3Code.GDsmallwhiteboxObjects1= [];
gdjs.step3Code.GDsmallwhiteboxObjects2= [];
gdjs.step3Code.GDgobackObjects1= [];
gdjs.step3Code.GDgobackObjects2= [];
gdjs.step3Code.GDgofowardObjects1= [];
gdjs.step3Code.GDgofowardObjects2= [];
gdjs.step3Code.GDdriverepairObjects1= [];
gdjs.step3Code.GDdriverepairObjects2= [];
gdjs.step3Code.GDinsallrepairObjects1= [];
gdjs.step3Code.GDinsallrepairObjects2= [];
gdjs.step3Code.GDmouseObjects1= [];
gdjs.step3Code.GDmouseObjects2= [];
gdjs.step3Code.GDkeybordObjects1= [];
gdjs.step3Code.GDkeybordObjects2= [];

gdjs.step3Code.conditionTrue_0 = {val:false};
gdjs.step3Code.condition0IsTrue_0 = {val:false};
gdjs.step3Code.condition1IsTrue_0 = {val:false};
gdjs.step3Code.condition2IsTrue_0 = {val:false};
gdjs.step3Code.conditionTrue_1 = {val:false};
gdjs.step3Code.condition0IsTrue_1 = {val:false};
gdjs.step3Code.condition1IsTrue_1 = {val:false};
gdjs.step3Code.condition2IsTrue_1 = {val:false};


gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDbootofusbObjects1Objects = Hashtable.newFrom({"bootofusb": gdjs.step3Code.GDbootofusbObjects1});gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDgobackObjects1Objects = Hashtable.newFrom({"goback": gdjs.step3Code.GDgobackObjects1});gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.step3Code.GDnextObjects2});gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDgofowardObjects2Objects = Hashtable.newFrom({"gofoward": gdjs.step3Code.GDgofowardObjects2});gdjs.step3Code.eventsList0 = function(runtimeScene) {

{


gdjs.step3Code.condition0IsTrue_0.val = false;
{
gdjs.step3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.step3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.step3Code.GDmouseObjects1);
{for(var i = 0, len = gdjs.step3Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step3Code.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.step3Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step3Code.GDmouseObjects1[i].setZOrder(gdjs.step3Code.GDmouseObjects1[i].getZOrder() + (50));
}
}}

}


{


gdjs.step3Code.condition0IsTrue_0.val = false;
{
gdjs.step3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.step3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("whitebox2"), gdjs.step3Code.GDwhitebox2Objects1);
{for(var i = 0, len = gdjs.step3Code.GDwhitebox2Objects1.length ;i < len;++i) {
    gdjs.step3Code.GDwhitebox2Objects1[i].setColor("36;201;255");
}
}{for(var i = 0, len = gdjs.step3Code.GDwhitebox2Objects1.length ;i < len;++i) {
    gdjs.step3Code.GDwhitebox2Objects1[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bootofusb"), gdjs.step3Code.GDbootofusbObjects1);

gdjs.step3Code.condition0IsTrue_0.val = false;
gdjs.step3Code.condition1IsTrue_0.val = false;
{
gdjs.step3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDbootofusbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step3Code.condition0IsTrue_0.val ) {
{
gdjs.step3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.step3Code.GDbootofusbObjects1 */
{for(var i = 0, len = gdjs.step3Code.GDbootofusbObjects1.length ;i < len;++i) {
    gdjs.step3Code.GDbootofusbObjects1[i].setColor("255;0;0");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "desktop", false);
}}

}


{


gdjs.step3Code.condition0IsTrue_0.val = false;
gdjs.step3Code.condition1IsTrue_0.val = false;
{
gdjs.step3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.step3Code.condition0IsTrue_0.val ) {
{
gdjs.step3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}}
if (gdjs.step3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notyourlaunguage"), gdjs.step3Code.GDnotyourlaunguageObjects1);
{for(var i = 0, len = gdjs.step3Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step3Code.GDnotyourlaunguageObjects1[i].setString("keybord");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs.step3Code.GDgobackObjects1);

gdjs.step3Code.condition0IsTrue_0.val = false;
gdjs.step3Code.condition1IsTrue_0.val = false;
{
gdjs.step3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDgobackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step3Code.condition0IsTrue_0.val ) {
{
gdjs.step3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.step3Code.GDgofowardObjects1.length = 0;

gdjs.step3Code.GDnextObjects1.length = 0;


gdjs.step3Code.condition0IsTrue_0.val = false;
gdjs.step3Code.condition1IsTrue_0.val = false;
{
{gdjs.step3Code.conditionTrue_1 = gdjs.step3Code.condition0IsTrue_0;
gdjs.step3Code.GDgofowardObjects1_1final.length = 0;gdjs.step3Code.GDnextObjects1_1final.length = 0;gdjs.step3Code.condition0IsTrue_1.val = false;
gdjs.step3Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.step3Code.GDnextObjects2);
gdjs.step3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDnextObjects2Objects, runtimeScene, true, false);
if( gdjs.step3Code.condition0IsTrue_1.val ) {
    gdjs.step3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step3Code.GDnextObjects2.length;j<jLen;++j) {
        if ( gdjs.step3Code.GDnextObjects1_1final.indexOf(gdjs.step3Code.GDnextObjects2[j]) === -1 )
            gdjs.step3Code.GDnextObjects1_1final.push(gdjs.step3Code.GDnextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gofoward"), gdjs.step3Code.GDgofowardObjects2);
gdjs.step3Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step3Code.mapOfGDgdjs_46step3Code_46GDgofowardObjects2Objects, runtimeScene, true, false);
if( gdjs.step3Code.condition1IsTrue_1.val ) {
    gdjs.step3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step3Code.GDgofowardObjects2.length;j<jLen;++j) {
        if ( gdjs.step3Code.GDgofowardObjects1_1final.indexOf(gdjs.step3Code.GDgofowardObjects2[j]) === -1 )
            gdjs.step3Code.GDgofowardObjects1_1final.push(gdjs.step3Code.GDgofowardObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.step3Code.GDgofowardObjects1_1final, gdjs.step3Code.GDgofowardObjects1);
gdjs.copyArray(gdjs.step3Code.GDnextObjects1_1final, gdjs.step3Code.GDnextObjects1);
}
}
}if ( gdjs.step3Code.condition0IsTrue_0.val ) {
{
gdjs.step3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "step4");
}}

}


};

gdjs.step3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.step3Code.GDmouseObjects1.length = 0;
gdjs.step3Code.GDmouseObjects2.length = 0;
gdjs.step3Code.GDexampleObjects1.length = 0;
gdjs.step3Code.GDexampleObjects2.length = 0;
gdjs.step3Code.GDgradiantObjects1.length = 0;
gdjs.step3Code.GDgradiantObjects2.length = 0;
gdjs.step3Code.GDwhitebox2Objects1.length = 0;
gdjs.step3Code.GDwhitebox2Objects2.length = 0;
gdjs.step3Code.GDwhiteboxObjects1.length = 0;
gdjs.step3Code.GDwhiteboxObjects2.length = 0;
gdjs.step3Code.GDWaveoslogoObjects1.length = 0;
gdjs.step3Code.GDWaveoslogoObjects2.length = 0;
gdjs.step3Code.GDstep1Objects1.length = 0;
gdjs.step3Code.GDstep1Objects2.length = 0;
gdjs.step3Code.GDwelcometowaveosObjects1.length = 0;
gdjs.step3Code.GDwelcometowaveosObjects2.length = 0;
gdjs.step3Code.GDpressnexttostartofObjects1.length = 0;
gdjs.step3Code.GDpressnexttostartofObjects2.length = 0;
gdjs.step3Code.GDinstallerbootedbyObjects1.length = 0;
gdjs.step3Code.GDinstallerbootedbyObjects2.length = 0;
gdjs.step3Code.GDbootofusbObjects1.length = 0;
gdjs.step3Code.GDbootofusbObjects2.length = 0;
gdjs.step3Code.GDorObjects1.length = 0;
gdjs.step3Code.GDorObjects2.length = 0;
gdjs.step3Code.GDnextObjects1.length = 0;
gdjs.step3Code.GDnextObjects2.length = 0;
gdjs.step3Code.GDnotyourlaunguageObjects1.length = 0;
gdjs.step3Code.GDnotyourlaunguageObjects2.length = 0;
gdjs.step3Code.GDlaunguageObjects1.length = 0;
gdjs.step3Code.GDlaunguageObjects2.length = 0;
gdjs.step3Code.GDblackboxObjects1.length = 0;
gdjs.step3Code.GDblackboxObjects2.length = 0;
gdjs.step3Code.GDsmallwhiteboxObjects1.length = 0;
gdjs.step3Code.GDsmallwhiteboxObjects2.length = 0;
gdjs.step3Code.GDgobackObjects1.length = 0;
gdjs.step3Code.GDgobackObjects2.length = 0;
gdjs.step3Code.GDgofowardObjects1.length = 0;
gdjs.step3Code.GDgofowardObjects2.length = 0;
gdjs.step3Code.GDdriverepairObjects1.length = 0;
gdjs.step3Code.GDdriverepairObjects2.length = 0;
gdjs.step3Code.GDinsallrepairObjects1.length = 0;
gdjs.step3Code.GDinsallrepairObjects2.length = 0;
gdjs.step3Code.GDmouseObjects1.length = 0;
gdjs.step3Code.GDmouseObjects2.length = 0;
gdjs.step3Code.GDkeybordObjects1.length = 0;
gdjs.step3Code.GDkeybordObjects2.length = 0;

gdjs.step3Code.eventsList0(runtimeScene);
return;

}

gdjs['step3Code'] = gdjs.step3Code;
