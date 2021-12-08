gdjs.step2Code = {};
gdjs.step2Code.GDgofowardObjects1_1final = [];

gdjs.step2Code.GDnextObjects1_1final = [];

gdjs.step2Code.GDmouseObjects1= [];
gdjs.step2Code.GDmouseObjects2= [];
gdjs.step2Code.GDexampleObjects1= [];
gdjs.step2Code.GDexampleObjects2= [];
gdjs.step2Code.GDgradiantObjects1= [];
gdjs.step2Code.GDgradiantObjects2= [];
gdjs.step2Code.GDwhiteboxObjects1= [];
gdjs.step2Code.GDwhiteboxObjects2= [];
gdjs.step2Code.GDWaveoslogoObjects1= [];
gdjs.step2Code.GDWaveoslogoObjects2= [];
gdjs.step2Code.GDstep1Objects1= [];
gdjs.step2Code.GDstep1Objects2= [];
gdjs.step2Code.GDwelcometowaveosObjects1= [];
gdjs.step2Code.GDwelcometowaveosObjects2= [];
gdjs.step2Code.GDpressnexttostartofObjects1= [];
gdjs.step2Code.GDpressnexttostartofObjects2= [];
gdjs.step2Code.GDinstallerbootedbyObjects1= [];
gdjs.step2Code.GDinstallerbootedbyObjects2= [];
gdjs.step2Code.GDbootofusbObjects1= [];
gdjs.step2Code.GDbootofusbObjects2= [];
gdjs.step2Code.GDmObjects1= [];
gdjs.step2Code.GDmObjects2= [];
gdjs.step2Code.GDorObjects1= [];
gdjs.step2Code.GDorObjects2= [];
gdjs.step2Code.GDnextObjects1= [];
gdjs.step2Code.GDnextObjects2= [];
gdjs.step2Code.GDnotyourlaunguageObjects1= [];
gdjs.step2Code.GDnotyourlaunguageObjects2= [];
gdjs.step2Code.GDlaunguageObjects1= [];
gdjs.step2Code.GDlaunguageObjects2= [];
gdjs.step2Code.GDblackboxObjects1= [];
gdjs.step2Code.GDblackboxObjects2= [];
gdjs.step2Code.GDsmallwhiteboxObjects1= [];
gdjs.step2Code.GDsmallwhiteboxObjects2= [];
gdjs.step2Code.GDgobackObjects1= [];
gdjs.step2Code.GDgobackObjects2= [];
gdjs.step2Code.GDgofowardObjects1= [];
gdjs.step2Code.GDgofowardObjects2= [];
gdjs.step2Code.GDdriverepairObjects1= [];
gdjs.step2Code.GDdriverepairObjects2= [];
gdjs.step2Code.GDinsallrepairObjects1= [];
gdjs.step2Code.GDinsallrepairObjects2= [];
gdjs.step2Code.GDmouseObjects1= [];
gdjs.step2Code.GDmouseObjects2= [];
gdjs.step2Code.GDkeybordObjects1= [];
gdjs.step2Code.GDkeybordObjects2= [];

gdjs.step2Code.conditionTrue_0 = {val:false};
gdjs.step2Code.condition0IsTrue_0 = {val:false};
gdjs.step2Code.condition1IsTrue_0 = {val:false};
gdjs.step2Code.condition2IsTrue_0 = {val:false};
gdjs.step2Code.condition3IsTrue_0 = {val:false};
gdjs.step2Code.conditionTrue_1 = {val:false};
gdjs.step2Code.condition0IsTrue_1 = {val:false};
gdjs.step2Code.condition1IsTrue_1 = {val:false};
gdjs.step2Code.condition2IsTrue_1 = {val:false};
gdjs.step2Code.condition3IsTrue_1 = {val:false};


gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDbootofusbObjects1Objects = Hashtable.newFrom({"bootofusb": gdjs.step2Code.GDbootofusbObjects1});gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDgobackObjects1Objects = Hashtable.newFrom({"goback": gdjs.step2Code.GDgobackObjects1});gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.step2Code.GDnextObjects2});gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDgofowardObjects2Objects = Hashtable.newFrom({"gofoward": gdjs.step2Code.GDgofowardObjects2});gdjs.step2Code.eventsList0 = function(runtimeScene) {

{


gdjs.step2Code.condition0IsTrue_0.val = false;
{
gdjs.step2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.step2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.step2Code.GDmouseObjects1);
{for(var i = 0, len = gdjs.step2Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step2Code.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.step2Code.GDmouseObjects1.length ;i < len;++i) {
    gdjs.step2Code.GDmouseObjects1[i].setZOrder(gdjs.step2Code.GDmouseObjects1[i].getZOrder() + (50));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bootofusb"), gdjs.step2Code.GDbootofusbObjects1);

gdjs.step2Code.condition0IsTrue_0.val = false;
gdjs.step2Code.condition1IsTrue_0.val = false;
{
gdjs.step2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDbootofusbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step2Code.condition0IsTrue_0.val ) {
{
gdjs.step2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.step2Code.GDbootofusbObjects1 */
{for(var i = 0, len = gdjs.step2Code.GDbootofusbObjects1.length ;i < len;++i) {
    gdjs.step2Code.GDbootofusbObjects1[i].setColor("255;0;0");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "desktop", false);
}}

}


{


gdjs.step2Code.condition0IsTrue_0.val = false;
gdjs.step2Code.condition1IsTrue_0.val = false;
{
gdjs.step2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.step2Code.condition0IsTrue_0.val ) {
{
gdjs.step2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}}
if (gdjs.step2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notyourlaunguage"), gdjs.step2Code.GDnotyourlaunguageObjects1);
{for(var i = 0, len = gdjs.step2Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step2Code.GDnotyourlaunguageObjects1[i].setString("keybord");
}
}{for(var i = 0, len = gdjs.step2Code.GDnotyourlaunguageObjects1.length ;i < len;++i) {
    gdjs.step2Code.GDnotyourlaunguageObjects1[i].setColor("39;206;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("goback"), gdjs.step2Code.GDgobackObjects1);

gdjs.step2Code.condition0IsTrue_0.val = false;
gdjs.step2Code.condition1IsTrue_0.val = false;
{
gdjs.step2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDgobackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.step2Code.condition0IsTrue_0.val ) {
{
gdjs.step2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.step2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("notyourlaunguage"), gdjs.step2Code.GDnotyourlaunguageObjects1);
gdjs.step2Code.GDgofowardObjects1.length = 0;

gdjs.step2Code.GDnextObjects1.length = 0;


gdjs.step2Code.condition0IsTrue_0.val = false;
gdjs.step2Code.condition1IsTrue_0.val = false;
gdjs.step2Code.condition2IsTrue_0.val = false;
{
{gdjs.step2Code.conditionTrue_1 = gdjs.step2Code.condition0IsTrue_0;
gdjs.step2Code.GDgofowardObjects1_1final.length = 0;gdjs.step2Code.GDnextObjects1_1final.length = 0;gdjs.step2Code.condition0IsTrue_1.val = false;
gdjs.step2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.step2Code.GDnextObjects2);
gdjs.step2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDnextObjects2Objects, runtimeScene, true, false);
if( gdjs.step2Code.condition0IsTrue_1.val ) {
    gdjs.step2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step2Code.GDnextObjects2.length;j<jLen;++j) {
        if ( gdjs.step2Code.GDnextObjects1_1final.indexOf(gdjs.step2Code.GDnextObjects2[j]) === -1 )
            gdjs.step2Code.GDnextObjects1_1final.push(gdjs.step2Code.GDnextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("gofoward"), gdjs.step2Code.GDgofowardObjects2);
gdjs.step2Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.step2Code.mapOfGDgdjs_46step2Code_46GDgofowardObjects2Objects, runtimeScene, true, false);
if( gdjs.step2Code.condition1IsTrue_1.val ) {
    gdjs.step2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.step2Code.GDgofowardObjects2.length;j<jLen;++j) {
        if ( gdjs.step2Code.GDgofowardObjects1_1final.indexOf(gdjs.step2Code.GDgofowardObjects2[j]) === -1 )
            gdjs.step2Code.GDgofowardObjects1_1final.push(gdjs.step2Code.GDgofowardObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.step2Code.GDgofowardObjects1_1final, gdjs.step2Code.GDgofowardObjects1);
gdjs.copyArray(gdjs.step2Code.GDnextObjects1_1final, gdjs.step2Code.GDnextObjects1);
}
}
}if ( gdjs.step2Code.condition0IsTrue_0.val ) {
{
gdjs.step2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.step2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.step2Code.GDnotyourlaunguageObjects1.length;i<l;++i) {
    if ( gdjs.step2Code.GDnotyourlaunguageObjects1[i].getString() == "keybord" ) {
        gdjs.step2Code.condition2IsTrue_0.val = true;
        gdjs.step2Code.GDnotyourlaunguageObjects1[k] = gdjs.step2Code.GDnotyourlaunguageObjects1[i];
        ++k;
    }
}
gdjs.step2Code.GDnotyourlaunguageObjects1.length = k;}}
}
if (gdjs.step2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "step3");
}}

}


};

gdjs.step2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.step2Code.GDmouseObjects1.length = 0;
gdjs.step2Code.GDmouseObjects2.length = 0;
gdjs.step2Code.GDexampleObjects1.length = 0;
gdjs.step2Code.GDexampleObjects2.length = 0;
gdjs.step2Code.GDgradiantObjects1.length = 0;
gdjs.step2Code.GDgradiantObjects2.length = 0;
gdjs.step2Code.GDwhiteboxObjects1.length = 0;
gdjs.step2Code.GDwhiteboxObjects2.length = 0;
gdjs.step2Code.GDWaveoslogoObjects1.length = 0;
gdjs.step2Code.GDWaveoslogoObjects2.length = 0;
gdjs.step2Code.GDstep1Objects1.length = 0;
gdjs.step2Code.GDstep1Objects2.length = 0;
gdjs.step2Code.GDwelcometowaveosObjects1.length = 0;
gdjs.step2Code.GDwelcometowaveosObjects2.length = 0;
gdjs.step2Code.GDpressnexttostartofObjects1.length = 0;
gdjs.step2Code.GDpressnexttostartofObjects2.length = 0;
gdjs.step2Code.GDinstallerbootedbyObjects1.length = 0;
gdjs.step2Code.GDinstallerbootedbyObjects2.length = 0;
gdjs.step2Code.GDbootofusbObjects1.length = 0;
gdjs.step2Code.GDbootofusbObjects2.length = 0;
gdjs.step2Code.GDmObjects1.length = 0;
gdjs.step2Code.GDmObjects2.length = 0;
gdjs.step2Code.GDorObjects1.length = 0;
gdjs.step2Code.GDorObjects2.length = 0;
gdjs.step2Code.GDnextObjects1.length = 0;
gdjs.step2Code.GDnextObjects2.length = 0;
gdjs.step2Code.GDnotyourlaunguageObjects1.length = 0;
gdjs.step2Code.GDnotyourlaunguageObjects2.length = 0;
gdjs.step2Code.GDlaunguageObjects1.length = 0;
gdjs.step2Code.GDlaunguageObjects2.length = 0;
gdjs.step2Code.GDblackboxObjects1.length = 0;
gdjs.step2Code.GDblackboxObjects2.length = 0;
gdjs.step2Code.GDsmallwhiteboxObjects1.length = 0;
gdjs.step2Code.GDsmallwhiteboxObjects2.length = 0;
gdjs.step2Code.GDgobackObjects1.length = 0;
gdjs.step2Code.GDgobackObjects2.length = 0;
gdjs.step2Code.GDgofowardObjects1.length = 0;
gdjs.step2Code.GDgofowardObjects2.length = 0;
gdjs.step2Code.GDdriverepairObjects1.length = 0;
gdjs.step2Code.GDdriverepairObjects2.length = 0;
gdjs.step2Code.GDinsallrepairObjects1.length = 0;
gdjs.step2Code.GDinsallrepairObjects2.length = 0;
gdjs.step2Code.GDmouseObjects1.length = 0;
gdjs.step2Code.GDmouseObjects2.length = 0;
gdjs.step2Code.GDkeybordObjects1.length = 0;
gdjs.step2Code.GDkeybordObjects2.length = 0;

gdjs.step2Code.eventsList0(runtimeScene);
return;

}

gdjs['step2Code'] = gdjs.step2Code;
