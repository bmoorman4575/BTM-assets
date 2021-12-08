gdjs.step6Code = {};
gdjs.step6Code.GDgofowardObjects1_1final = [];

gdjs.step6Code.GDnextObjects1_1final = [];

gdjs.step6Code.GDmouseObjects1= [];
gdjs.step6Code.GDmouseObjects2= [];
gdjs.step6Code.GDexampleObjects1= [];
gdjs.step6Code.GDexampleObjects2= [];
gdjs.step6Code.GDgradiantObjects1= [];
gdjs.step6Code.GDgradiantObjects2= [];
gdjs.step6Code.GDwhiteboxObjects1= [];
gdjs.step6Code.GDwhiteboxObjects2= [];
gdjs.step6Code.GDWaveoslogoObjects1= [];
gdjs.step6Code.GDWaveoslogoObjects2= [];
gdjs.step6Code.GDstep1Objects1= [];
gdjs.step6Code.GDstep1Objects2= [];
gdjs.step6Code.GDwelcometowaveosObjects1= [];
gdjs.step6Code.GDwelcometowaveosObjects2= [];
gdjs.step6Code.GDpressnexttostartofObjects1= [];
gdjs.step6Code.GDpressnexttostartofObjects2= [];
gdjs.step6Code.GDinstallerbootedbyObjects1= [];
gdjs.step6Code.GDinstallerbootedbyObjects2= [];
gdjs.step6Code.GDbootofusbObjects1= [];
gdjs.step6Code.GDbootofusbObjects2= [];
gdjs.step6Code.GDmObjects1= [];
gdjs.step6Code.GDmObjects2= [];
gdjs.step6Code.GDorObjects1= [];
gdjs.step6Code.GDorObjects2= [];
gdjs.step6Code.GDnextObjects1= [];
gdjs.step6Code.GDnextObjects2= [];
gdjs.step6Code.GDnotyourlaunguageObjects1= [];
gdjs.step6Code.GDnotyourlaunguageObjects2= [];
gdjs.step6Code.GDlaunguageObjects1= [];
gdjs.step6Code.GDlaunguageObjects2= [];
gdjs.step6Code.GDblackboxObjects1= [];
gdjs.step6Code.GDblackboxObjects2= [];
gdjs.step6Code.GDsmallwhiteboxObjects1= [];
gdjs.step6Code.GDsmallwhiteboxObjects2= [];
gdjs.step6Code.GDgobackObjects1= [];
gdjs.step6Code.GDgobackObjects2= [];
gdjs.step6Code.GDgofowardObjects1= [];
gdjs.step6Code.GDgofowardObjects2= [];
gdjs.step6Code.GDdriverepairObjects1= [];
gdjs.step6Code.GDdriverepairObjects2= [];
gdjs.step6Code.GDinsallrepairObjects1= [];
gdjs.step6Code.GDinsallrepairObjects2= [];
gdjs.step6Code.GDmouseObjects1= [];
gdjs.step6Code.GDmouseObjects2= [];
gdjs.step6Code.GDkeybordObjects1= [];
gdjs.step6Code.GDkeybordObjects2= [];
gdjs.step6Code.GDNewObjectObjects1= [];
gdjs.step6Code.GDNewObjectObjects2= [];
gdjs.step6Code.GDpasswordt2Objects1= [];
gdjs.step6Code.GDpasswordt2Objects2= [];
gdjs.step6Code.GDpasswordtObjects1= [];
gdjs.step6Code.GDpasswordtObjects2= [];
gdjs.step6Code.GDusernametObjects1= [];
gdjs.step6Code.GDusernametObjects2= [];
gdjs.step6Code.GDcpasswordObjects1= [];
gdjs.step6Code.GDcpasswordObjects2= [];
gdjs.step6Code.GDpasswordObjects1= [];
gdjs.step6Code.GDpasswordObjects2= [];
gdjs.step6Code.GDusernameObjects1= [];
gdjs.step6Code.GDusernameObjects2= [];
gdjs.step6Code.GDnameObjects1= [];
gdjs.step6Code.GDnameObjects2= [];
gdjs.step6Code.GDuseawaveObjects1= [];
gdjs.step6Code.GDuseawaveObjects2= [];
gdjs.step6Code.GDnametObjects1= [];
gdjs.step6Code.GDnametObjects2= [];
gdjs.step6Code.GDgetkeybordintryObjects1= [];
gdjs.step6Code.GDgetkeybordintryObjects2= [];

gdjs.step6Code.conditionTrue_0 = {val:false};
gdjs.step6Code.condition0IsTrue_0 = {val:false};
gdjs.step6Code.condition1IsTrue_0 = {val:false};
gdjs.step6Code.condition2IsTrue_0 = {val:false};
gdjs.step6Code.conditionTrue_1 = {val:false};
gdjs.step6Code.condition0IsTrue_1 = {val:false};
gdjs.step6Code.condition1IsTrue_1 = {val:false};
gdjs.step6Code.condition2IsTrue_1 = {val:false};


gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDbootofusbObjects1Objects = Hashtable.newFrom({"bootofusb": gdjs.step6Code.GDbootofusbObjects1});gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDgobackObjects1Objects = Hashtable.newFrom({"goback": gdjs.step6Code.GDgobackObjects1});gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.step6Code.GDnextObjects2});gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDgofowardObjects2Objects = Hashtable.newFrom({"gofoward": gdjs.step6Code.GDgofowardObjects2});gdjs.step6Code.eventsList0 = function(runtimeScene) {

{


gdjs.step6Code.condition0IsTrue_0.val = false;
{
gdjs.step6Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.step6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.step6Code.GDmouseObjects1);
{for(var i = 0, len = gdjs.step6Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step6Code.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.step6Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step6Code.GDmouseObjects1[i].setZOrder(gdjs.step6Code.GDmouseObjects1[i].getZOrder() + (50));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bootofusb"), gdjs.step6Code.GDbootofusbObjects1);

gdjs.step6Code.condition0IsTrue_0.val = false;
gdjs.step6Code.condition1IsTrue_0.val = false;
{
gdjs.step6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDbootofusbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step6Code.condition0IsTrue_0.val ) {
{
gdjs.step6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step6Code.condition1IsTrue_0.val) {
/* Reuse gdjs.step6Code.GDbootofusbObjects1 */
{for(var i = 0, len = gdjs.step6Code.GDbootofusbObjects1.length ;i < len;++i) {
    gdjs.step6Code.GDbootofusbObjects1[i].setColor("255;0;0");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "desktop", false);
}}

}


{


gdjs.step6Code.condition0IsTrue_0.val = false;
gdjs.step6Code.condition1IsTrue_0.val = false;
{
gdjs.step6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.step6Code.condition0IsTrue_0.val ) {
{
gdjs.step6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}}
if (gdjs.step6Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notyourlaunguage"), gdjs.step6Code.GDnotyourlaunguageObjects1);
{for(var i = 0, len = gdjs.step6Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step6Code.GDnotyourlaunguageObjects1[i].setString("keybord");
}
}{for(var i = 0, len = gdjs.step6Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step6Code.GDnotyourlaunguageObjects1[i].setColor("39;206;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs.step6Code.GDgobackObjects1);

gdjs.step6Code.condition0IsTrue_0.val = false;
gdjs.step6Code.condition1IsTrue_0.val = false;
{
gdjs.step6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDgobackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step6Code.condition0IsTrue_0.val ) {
{
gdjs.step6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step6Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.step6Code.GDgofowardObjects1.length = 0;

gdjs.step6Code.GDnextObjects1.length = 0;


gdjs.step6Code.condition0IsTrue_0.val = false;
gdjs.step6Code.condition1IsTrue_0.val = false;
{
{gdjs.step6Code.conditionTrue_1 = gdjs.step6Code.condition0IsTrue_0;
gdjs.step6Code.GDgofowardObjects1_1final.length = 0;gdjs.step6Code.GDnextObjects1_1final.length = 0;gdjs.step6Code.condition0IsTrue_1.val = false;
gdjs.step6Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.step6Code.GDnextObjects2);
gdjs.step6Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDnextObjects2Objects, runtimeScene, true, false);
if( gdjs.step6Code.condition0IsTrue_1.val ) {
    gdjs.step6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step6Code.GDnextObjects2.length;j<jLen;++j) {
        if ( gdjs.step6Code.GDnextObjects1_1final.indexOf(gdjs.step6Code.GDnextObjects2[j]) === -1 )
            gdjs.step6Code.GDnextObjects1_1final.push(gdjs.step6Code.GDnextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gofoward"), gdjs.step6Code.GDgofowardObjects2);
gdjs.step6Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step6Code.mapOfGDgdjs_46step6Code_46GDgofowardObjects2Objects, runtimeScene, true, false);
if( gdjs.step6Code.condition1IsTrue_1.val ) {
    gdjs.step6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step6Code.GDgofowardObjects2.length;j<jLen;++j) {
        if ( gdjs.step6Code.GDgofowardObjects1_1final.indexOf(gdjs.step6Code.GDgofowardObjects2[j]) === -1 )
            gdjs.step6Code.GDgofowardObjects1_1final.push(gdjs.step6Code.GDgofowardObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.step6Code.GDgofowardObjects1_1final, gdjs.step6Code.GDgofowardObjects1);
gdjs.copyArray(gdjs.step6Code.GDnextObjects1_1final, gdjs.step6Code.GDnextObjects1);
}
}
}if ( gdjs.step6Code.condition0IsTrue_0.val ) {
{
gdjs.step6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step6Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "step7");
}}

}


};

gdjs.step6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.step6Code.GDmouseObjects1.length = 0;
gdjs.step6Code.GDmouseObjects2.length = 0;
gdjs.step6Code.GDexampleObjects1.length = 0;
gdjs.step6Code.GDexampleObjects2.length = 0;
gdjs.step6Code.GDgradiantObjects1.length = 0;
gdjs.step6Code.GDgradiantObjects2.length = 0;
gdjs.step6Code.GDwhiteboxObjects1.length = 0;
gdjs.step6Code.GDwhiteboxObjects2.length = 0;
gdjs.step6Code.GDWaveoslogoObjects1.length = 0;
gdjs.step6Code.GDWaveoslogoObjects2.length = 0;
gdjs.step6Code.GDstep1Objects1.length = 0;
gdjs.step6Code.GDstep1Objects2.length = 0;
gdjs.step6Code.GDwelcometowaveosObjects1.length = 0;
gdjs.step6Code.GDwelcometowaveosObjects2.length = 0;
gdjs.step6Code.GDpressnexttostartofObjects1.length = 0;
gdjs.step6Code.GDpressnexttostartofObjects2.length = 0;
gdjs.step6Code.GDinstallerbootedbyObjects1.length = 0;
gdjs.step6Code.GDinstallerbootedbyObjects2.length = 0;
gdjs.step6Code.GDbootofusbObjects1.length = 0;
gdjs.step6Code.GDbootofusbObjects2.length = 0;
gdjs.step6Code.GDmObjects1.length = 0;
gdjs.step6Code.GDmObjects2.length = 0;
gdjs.step6Code.GDorObjects1.length = 0;
gdjs.step6Code.GDorObjects2.length = 0;
gdjs.step6Code.GDnextObjects1.length = 0;
gdjs.step6Code.GDnextObjects2.length = 0;
gdjs.step6Code.GDnotyourlaunguageObjects1.length = 0;
gdjs.step6Code.GDnotyourlaunguageObjects2.length = 0;
gdjs.step6Code.GDlaunguageObjects1.length = 0;
gdjs.step6Code.GDlaunguageObjects2.length = 0;
gdjs.step6Code.GDblackboxObjects1.length = 0;
gdjs.step6Code.GDblackboxObjects2.length = 0;
gdjs.step6Code.GDsmallwhiteboxObjects1.length = 0;
gdjs.step6Code.GDsmallwhiteboxObjects2.length = 0;
gdjs.step6Code.GDgobackObjects1.length = 0;
gdjs.step6Code.GDgobackObjects2.length = 0;
gdjs.step6Code.GDgofowardObjects1.length = 0;
gdjs.step6Code.GDgofowardObjects2.length = 0;
gdjs.step6Code.GDdriverepairObjects1.length = 0;
gdjs.step6Code.GDdriverepairObjects2.length = 0;
gdjs.step6Code.GDinsallrepairObjects1.length = 0;
gdjs.step6Code.GDinsallrepairObjects2.length = 0;
gdjs.step6Code.GDmouseObjects1.length = 0;
gdjs.step6Code.GDmouseObjects2.length = 0;
gdjs.step6Code.GDkeybordObjects1.length = 0;
gdjs.step6Code.GDkeybordObjects2.length = 0;
gdjs.step6Code.GDNewObjectObjects1.length = 0;
gdjs.step6Code.GDNewObjectObjects2.length = 0;
gdjs.step6Code.GDpasswordt2Objects1.length = 0;
gdjs.step6Code.GDpasswordt2Objects2.length = 0;
gdjs.step6Code.GDpasswordtObjects1.length = 0;
gdjs.step6Code.GDpasswordtObjects2.length = 0;
gdjs.step6Code.GDusernametObjects1.length = 0;
gdjs.step6Code.GDusernametObjects2.length = 0;
gdjs.step6Code.GDcpasswordObjects1.length = 0;
gdjs.step6Code.GDcpasswordObjects2.length = 0;
gdjs.step6Code.GDpasswordObjects1.length = 0;
gdjs.step6Code.GDpasswordObjects2.length = 0;
gdjs.step6Code.GDusernameObjects1.length = 0;
gdjs.step6Code.GDusernameObjects2.length = 0;
gdjs.step6Code.GDnameObjects1.length = 0;
gdjs.step6Code.GDnameObjects2.length = 0;
gdjs.step6Code.GDuseawaveObjects1.length = 0;
gdjs.step6Code.GDuseawaveObjects2.length = 0;
gdjs.step6Code.GDnametObjects1.length = 0;
gdjs.step6Code.GDnametObjects2.length = 0;
gdjs.step6Code.GDgetkeybordintryObjects1.length = 0;
gdjs.step6Code.GDgetkeybordintryObjects2.length = 0;

gdjs.step6Code.eventsList0(runtimeScene);
return;

}

gdjs['step6Code'] = gdjs.step6Code;
