gdjs.step7Code = {};
gdjs.step7Code.GDgofowardObjects1_1final = [];

gdjs.step7Code.GDnextObjects1_1final = [];

gdjs.step7Code.GDmouseObjects1= [];
gdjs.step7Code.GDmouseObjects2= [];
gdjs.step7Code.GDexampleObjects1= [];
gdjs.step7Code.GDexampleObjects2= [];
gdjs.step7Code.GDgradiantObjects1= [];
gdjs.step7Code.GDgradiantObjects2= [];
gdjs.step7Code.GDblueboxObjects1= [];
gdjs.step7Code.GDblueboxObjects2= [];
gdjs.step7Code.GDwhiteboxObjects1= [];
gdjs.step7Code.GDwhiteboxObjects2= [];
gdjs.step7Code.GDWaveoslogoObjects1= [];
gdjs.step7Code.GDWaveoslogoObjects2= [];
gdjs.step7Code.GDstep1Objects1= [];
gdjs.step7Code.GDstep1Objects2= [];
gdjs.step7Code.GDwelcometowaveosObjects1= [];
gdjs.step7Code.GDwelcometowaveosObjects2= [];
gdjs.step7Code.GDpressnexttostartofObjects1= [];
gdjs.step7Code.GDpressnexttostartofObjects2= [];
gdjs.step7Code.GDinstallerbootedbyObjects1= [];
gdjs.step7Code.GDinstallerbootedbyObjects2= [];
gdjs.step7Code.GDbootofusbObjects1= [];
gdjs.step7Code.GDbootofusbObjects2= [];
gdjs.step7Code.GDmObjects1= [];
gdjs.step7Code.GDmObjects2= [];
gdjs.step7Code.GDorObjects1= [];
gdjs.step7Code.GDorObjects2= [];
gdjs.step7Code.GDnextObjects1= [];
gdjs.step7Code.GDnextObjects2= [];
gdjs.step7Code.GDnotyourlaunguageObjects1= [];
gdjs.step7Code.GDnotyourlaunguageObjects2= [];
gdjs.step7Code.GDlaunguageObjects1= [];
gdjs.step7Code.GDlaunguageObjects2= [];
gdjs.step7Code.GDblackboxObjects1= [];
gdjs.step7Code.GDblackboxObjects2= [];
gdjs.step7Code.GDsmallwhiteboxObjects1= [];
gdjs.step7Code.GDsmallwhiteboxObjects2= [];
gdjs.step7Code.GDgobackObjects1= [];
gdjs.step7Code.GDgobackObjects2= [];
gdjs.step7Code.GDgofowardObjects1= [];
gdjs.step7Code.GDgofowardObjects2= [];
gdjs.step7Code.GDdriverepairObjects1= [];
gdjs.step7Code.GDdriverepairObjects2= [];
gdjs.step7Code.GDinsallrepairObjects1= [];
gdjs.step7Code.GDinsallrepairObjects2= [];
gdjs.step7Code.GDmouseObjects1= [];
gdjs.step7Code.GDmouseObjects2= [];
gdjs.step7Code.GDkeybordObjects1= [];
gdjs.step7Code.GDkeybordObjects2= [];
gdjs.step7Code.GDNewObjectObjects1= [];
gdjs.step7Code.GDNewObjectObjects2= [];
gdjs.step7Code.GDpasswordt2Objects1= [];
gdjs.step7Code.GDpasswordt2Objects2= [];
gdjs.step7Code.GDpasswordtObjects1= [];
gdjs.step7Code.GDpasswordtObjects2= [];
gdjs.step7Code.GDusernametObjects1= [];
gdjs.step7Code.GDusernametObjects2= [];
gdjs.step7Code.GDcpasswordObjects1= [];
gdjs.step7Code.GDcpasswordObjects2= [];
gdjs.step7Code.GDpasswordObjects1= [];
gdjs.step7Code.GDpasswordObjects2= [];
gdjs.step7Code.GDcopyingfilesObjects1= [];
gdjs.step7Code.GDcopyingfilesObjects2= [];
gdjs.step7Code.GDnumberObjects1= [];
gdjs.step7Code.GDnumberObjects2= [];
gdjs.step7Code.GDnumber2Objects1= [];
gdjs.step7Code.GDnumber2Objects2= [];
gdjs.step7Code.GDuseawaveObjects1= [];
gdjs.step7Code.GDuseawaveObjects2= [];
gdjs.step7Code.GDnametObjects1= [];
gdjs.step7Code.GDnametObjects2= [];
gdjs.step7Code.GDgetkeybordintryObjects1= [];
gdjs.step7Code.GDgetkeybordintryObjects2= [];

gdjs.step7Code.conditionTrue_0 = {val:false};
gdjs.step7Code.condition0IsTrue_0 = {val:false};
gdjs.step7Code.condition1IsTrue_0 = {val:false};
gdjs.step7Code.condition2IsTrue_0 = {val:false};
gdjs.step7Code.conditionTrue_1 = {val:false};
gdjs.step7Code.condition0IsTrue_1 = {val:false};
gdjs.step7Code.condition1IsTrue_1 = {val:false};
gdjs.step7Code.condition2IsTrue_1 = {val:false};


gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDbootofusbObjects1Objects = Hashtable.newFrom({"bootofusb": gdjs.step7Code.GDbootofusbObjects1});gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDgobackObjects1Objects = Hashtable.newFrom({"goback": gdjs.step7Code.GDgobackObjects1});gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.step7Code.GDnextObjects2});gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDgofowardObjects2Objects = Hashtable.newFrom({"gofoward": gdjs.step7Code.GDgofowardObjects2});gdjs.step7Code.eventsList0 = function(runtimeScene) {

{


gdjs.step7Code.condition0IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.step7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bluebox"), gdjs.step7Code.GDblueboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.step7Code.GDmouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("number"), gdjs.step7Code.GDnumberObjects1);
{for(var i = 0, len = gdjs.step7Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.step7Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDmouseObjects1[i].setZOrder(gdjs.step7Code.GDmouseObjects1[i].getZOrder() + (50));
}
}{for(var i = 0, len = gdjs.step7Code.GDblueboxObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDblueboxObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.step7Code.GDblueboxObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.step7Code.GDnumberObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDnumberObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.step7Code.GDblueboxObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.step7Code.GDblueboxObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{


gdjs.step7Code.condition0IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.step7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bluebox"), gdjs.step7Code.GDblueboxObjects1);
{for(var i = 0, len = gdjs.step7Code.GDblueboxObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDblueboxObjects1[i].setColor("0;0;255");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "copy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bluebox"), gdjs.step7Code.GDblueboxObjects1);

gdjs.step7Code.condition0IsTrue_0.val = false;
gdjs.step7Code.condition1IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "copy");
}if ( gdjs.step7Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.step7Code.GDblueboxObjects1.length;i<l;++i) {
    if ( gdjs.step7Code.GDblueboxObjects1[i].getVariableNumber(gdjs.step7Code.GDblueboxObjects1[i].getVariables().getFromIndex(0)) < 527 ) {
        gdjs.step7Code.condition1IsTrue_0.val = true;
        gdjs.step7Code.GDblueboxObjects1[k] = gdjs.step7Code.GDblueboxObjects1[i];
        ++k;
    }
}
gdjs.step7Code.GDblueboxObjects1.length = k;}}
if (gdjs.step7Code.condition1IsTrue_0.val) {
/* Reuse gdjs.step7Code.GDblueboxObjects1 */
{for(var i = 0, len = gdjs.step7Code.GDblueboxObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDblueboxObjects1[i].returnVariable(gdjs.step7Code.GDblueboxObjects1[i].getVariables().getFromIndex(0)).add(gdjs.randomFloatInRange(0.001, 0.51));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bluebox"), gdjs.step7Code.GDblueboxObjects1);

gdjs.step7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.step7Code.GDblueboxObjects1.length;i<l;++i) {
    if ( gdjs.step7Code.GDblueboxObjects1[i].getVariableNumber(gdjs.step7Code.GDblueboxObjects1[i].getVariables().getFromIndex(0)) >= 527 ) {
        gdjs.step7Code.condition0IsTrue_0.val = true;
        gdjs.step7Code.GDblueboxObjects1[k] = gdjs.step7Code.GDblueboxObjects1[i];
        ++k;
    }
}
gdjs.step7Code.GDblueboxObjects1.length = k;}if (gdjs.step7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeStringInJSONFile("root", "installed", "yes");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "boot", true);
}{gdjs.evtTools.storage.unloadJSONFile("root");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bootofusb"), gdjs.step7Code.GDbootofusbObjects1);

gdjs.step7Code.condition0IsTrue_0.val = false;
gdjs.step7Code.condition1IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDbootofusbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step7Code.condition0IsTrue_0.val ) {
{
gdjs.step7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step7Code.condition1IsTrue_0.val) {
/* Reuse gdjs.step7Code.GDbootofusbObjects1 */
{for(var i = 0, len = gdjs.step7Code.GDbootofusbObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDbootofusbObjects1[i].setColor("255;0;0");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "desktop", false);
}}

}


{


gdjs.step7Code.condition0IsTrue_0.val = false;
gdjs.step7Code.condition1IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.step7Code.condition0IsTrue_0.val ) {
{
gdjs.step7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}}
if (gdjs.step7Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notyourlaunguage"), gdjs.step7Code.GDnotyourlaunguageObjects1);
{for(var i = 0, len = gdjs.step7Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDnotyourlaunguageObjects1[i].setString("keybord");
}
}{for(var i = 0, len = gdjs.step7Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step7Code.GDnotyourlaunguageObjects1[i].setColor("39;206;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs.step7Code.GDgobackObjects1);

gdjs.step7Code.condition0IsTrue_0.val = false;
gdjs.step7Code.condition1IsTrue_0.val = false;
{
gdjs.step7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDgobackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step7Code.condition0IsTrue_0.val ) {
{
gdjs.step7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step7Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.step7Code.GDgofowardObjects1.length = 0;

gdjs.step7Code.GDnextObjects1.length = 0;


gdjs.step7Code.condition0IsTrue_0.val = false;
gdjs.step7Code.condition1IsTrue_0.val = false;
{
{gdjs.step7Code.conditionTrue_1 = gdjs.step7Code.condition0IsTrue_0;
gdjs.step7Code.GDgofowardObjects1_1final.length = 0;gdjs.step7Code.GDnextObjects1_1final.length = 0;gdjs.step7Code.condition0IsTrue_1.val = false;
gdjs.step7Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.step7Code.GDnextObjects2);
gdjs.step7Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDnextObjects2Objects, runtimeScene, true, false);
if( gdjs.step7Code.condition0IsTrue_1.val ) {
    gdjs.step7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step7Code.GDnextObjects2.length;j<jLen;++j) {
        if ( gdjs.step7Code.GDnextObjects1_1final.indexOf(gdjs.step7Code.GDnextObjects2[j]) === -1 )
            gdjs.step7Code.GDnextObjects1_1final.push(gdjs.step7Code.GDnextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gofoward"), gdjs.step7Code.GDgofowardObjects2);
gdjs.step7Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step7Code.mapOfGDgdjs_46step7Code_46GDgofowardObjects2Objects, runtimeScene, true, false);
if( gdjs.step7Code.condition1IsTrue_1.val ) {
    gdjs.step7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step7Code.GDgofowardObjects2.length;j<jLen;++j) {
        if ( gdjs.step7Code.GDgofowardObjects1_1final.indexOf(gdjs.step7Code.GDgofowardObjects2[j]) === -1 )
            gdjs.step7Code.GDgofowardObjects1_1final.push(gdjs.step7Code.GDgofowardObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.step7Code.GDgofowardObjects1_1final, gdjs.step7Code.GDgofowardObjects1);
gdjs.copyArray(gdjs.step7Code.GDnextObjects1_1final, gdjs.step7Code.GDnextObjects1);
}
}
}if ( gdjs.step7Code.condition0IsTrue_0.val ) {
{
gdjs.step7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step7Code.condition1IsTrue_0.val) {
}

}


};

gdjs.step7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.step7Code.GDmouseObjects1.length = 0;
gdjs.step7Code.GDmouseObjects2.length = 0;
gdjs.step7Code.GDexampleObjects1.length = 0;
gdjs.step7Code.GDexampleObjects2.length = 0;
gdjs.step7Code.GDgradiantObjects1.length = 0;
gdjs.step7Code.GDgradiantObjects2.length = 0;
gdjs.step7Code.GDblueboxObjects1.length = 0;
gdjs.step7Code.GDblueboxObjects2.length = 0;
gdjs.step7Code.GDwhiteboxObjects1.length = 0;
gdjs.step7Code.GDwhiteboxObjects2.length = 0;
gdjs.step7Code.GDWaveoslogoObjects1.length = 0;
gdjs.step7Code.GDWaveoslogoObjects2.length = 0;
gdjs.step7Code.GDstep1Objects1.length = 0;
gdjs.step7Code.GDstep1Objects2.length = 0;
gdjs.step7Code.GDwelcometowaveosObjects1.length = 0;
gdjs.step7Code.GDwelcometowaveosObjects2.length = 0;
gdjs.step7Code.GDpressnexttostartofObjects1.length = 0;
gdjs.step7Code.GDpressnexttostartofObjects2.length = 0;
gdjs.step7Code.GDinstallerbootedbyObjects1.length = 0;
gdjs.step7Code.GDinstallerbootedbyObjects2.length = 0;
gdjs.step7Code.GDbootofusbObjects1.length = 0;
gdjs.step7Code.GDbootofusbObjects2.length = 0;
gdjs.step7Code.GDmObjects1.length = 0;
gdjs.step7Code.GDmObjects2.length = 0;
gdjs.step7Code.GDorObjects1.length = 0;
gdjs.step7Code.GDorObjects2.length = 0;
gdjs.step7Code.GDnextObjects1.length = 0;
gdjs.step7Code.GDnextObjects2.length = 0;
gdjs.step7Code.GDnotyourlaunguageObjects1.length = 0;
gdjs.step7Code.GDnotyourlaunguageObjects2.length = 0;
gdjs.step7Code.GDlaunguageObjects1.length = 0;
gdjs.step7Code.GDlaunguageObjects2.length = 0;
gdjs.step7Code.GDblackboxObjects1.length = 0;
gdjs.step7Code.GDblackboxObjects2.length = 0;
gdjs.step7Code.GDsmallwhiteboxObjects1.length = 0;
gdjs.step7Code.GDsmallwhiteboxObjects2.length = 0;
gdjs.step7Code.GDgobackObjects1.length = 0;
gdjs.step7Code.GDgobackObjects2.length = 0;
gdjs.step7Code.GDgofowardObjects1.length = 0;
gdjs.step7Code.GDgofowardObjects2.length = 0;
gdjs.step7Code.GDdriverepairObjects1.length = 0;
gdjs.step7Code.GDdriverepairObjects2.length = 0;
gdjs.step7Code.GDinsallrepairObjects1.length = 0;
gdjs.step7Code.GDinsallrepairObjects2.length = 0;
gdjs.step7Code.GDmouseObjects1.length = 0;
gdjs.step7Code.GDmouseObjects2.length = 0;
gdjs.step7Code.GDkeybordObjects1.length = 0;
gdjs.step7Code.GDkeybordObjects2.length = 0;
gdjs.step7Code.GDNewObjectObjects1.length = 0;
gdjs.step7Code.GDNewObjectObjects2.length = 0;
gdjs.step7Code.GDpasswordt2Objects1.length = 0;
gdjs.step7Code.GDpasswordt2Objects2.length = 0;
gdjs.step7Code.GDpasswordtObjects1.length = 0;
gdjs.step7Code.GDpasswordtObjects2.length = 0;
gdjs.step7Code.GDusernametObjects1.length = 0;
gdjs.step7Code.GDusernametObjects2.length = 0;
gdjs.step7Code.GDcpasswordObjects1.length = 0;
gdjs.step7Code.GDcpasswordObjects2.length = 0;
gdjs.step7Code.GDpasswordObjects1.length = 0;
gdjs.step7Code.GDpasswordObjects2.length = 0;
gdjs.step7Code.GDcopyingfilesObjects1.length = 0;
gdjs.step7Code.GDcopyingfilesObjects2.length = 0;
gdjs.step7Code.GDnumberObjects1.length = 0;
gdjs.step7Code.GDnumberObjects2.length = 0;
gdjs.step7Code.GDnumber2Objects1.length = 0;
gdjs.step7Code.GDnumber2Objects2.length = 0;
gdjs.step7Code.GDuseawaveObjects1.length = 0;
gdjs.step7Code.GDuseawaveObjects2.length = 0;
gdjs.step7Code.GDnametObjects1.length = 0;
gdjs.step7Code.GDnametObjects2.length = 0;
gdjs.step7Code.GDgetkeybordintryObjects1.length = 0;
gdjs.step7Code.GDgetkeybordintryObjects2.length = 0;

gdjs.step7Code.eventsList0(runtimeScene);
return;

}

gdjs['step7Code'] = gdjs.step7Code;
