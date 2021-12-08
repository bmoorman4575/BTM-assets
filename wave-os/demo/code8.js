gdjs.loggonCode = {};
gdjs.loggonCode.GDmouseObjects1= [];
gdjs.loggonCode.GDmouseObjects2= [];
gdjs.loggonCode.GDmouseObjects3= [];
gdjs.loggonCode.GDbackroundObjects1= [];
gdjs.loggonCode.GDbackroundObjects2= [];
gdjs.loggonCode.GDbackroundObjects3= [];
gdjs.loggonCode.GDNewObjectObjects1= [];
gdjs.loggonCode.GDNewObjectObjects2= [];
gdjs.loggonCode.GDNewObjectObjects3= [];
gdjs.loggonCode.GDboxObjects1= [];
gdjs.loggonCode.GDboxObjects2= [];
gdjs.loggonCode.GDboxObjects3= [];
gdjs.loggonCode.GDgetkeybordintryObjects1= [];
gdjs.loggonCode.GDgetkeybordintryObjects2= [];
gdjs.loggonCode.GDgetkeybordintryObjects3= [];
gdjs.loggonCode.GDpasswordtObjects1= [];
gdjs.loggonCode.GDpasswordtObjects2= [];
gdjs.loggonCode.GDpasswordtObjects3= [];
gdjs.loggonCode.GDusernameObjects1= [];
gdjs.loggonCode.GDusernameObjects2= [];
gdjs.loggonCode.GDusernameObjects3= [];
gdjs.loggonCode.GDpasswordObjects1= [];
gdjs.loggonCode.GDpasswordObjects2= [];
gdjs.loggonCode.GDpasswordObjects3= [];
gdjs.loggonCode.GDfadeObjects1= [];
gdjs.loggonCode.GDfadeObjects2= [];
gdjs.loggonCode.GDfadeObjects3= [];

gdjs.loggonCode.conditionTrue_0 = {val:false};
gdjs.loggonCode.condition0IsTrue_0 = {val:false};
gdjs.loggonCode.condition1IsTrue_0 = {val:false};
gdjs.loggonCode.condition2IsTrue_0 = {val:false};
gdjs.loggonCode.condition3IsTrue_0 = {val:false};
gdjs.loggonCode.conditionTrue_1 = {val:false};
gdjs.loggonCode.condition0IsTrue_1 = {val:false};
gdjs.loggonCode.condition1IsTrue_1 = {val:false};
gdjs.loggonCode.condition2IsTrue_1 = {val:false};
gdjs.loggonCode.condition3IsTrue_1 = {val:false};


gdjs.loggonCode.mapOfGDgdjs_46loggonCode_46GDpasswordtObjects2Objects = Hashtable.newFrom({"passwordt": gdjs.loggonCode.GDpasswordtObjects2});gdjs.loggonCode.mapOfGDgdjs_46loggonCode_46GDpasswordtObjects2Objects = Hashtable.newFrom({"passwordt": gdjs.loggonCode.GDpasswordtObjects2});gdjs.loggonCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects2);

gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
gdjs.loggonCode.condition2IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loggonCode.mapOfGDgdjs_46loggonCode_46GDpasswordtObjects2Objects, runtimeScene, true, false);
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.loggonCode.GDpasswordtObjects2.length;i<l;++i) {
    if ( gdjs.loggonCode.GDpasswordtObjects2[i].getVariableNumber(gdjs.loggonCode.GDpasswordtObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.loggonCode.condition1IsTrue_0.val = true;
        gdjs.loggonCode.GDpasswordtObjects2[k] = gdjs.loggonCode.GDpasswordtObjects2[i];
        ++k;
    }
}
gdjs.loggonCode.GDpasswordtObjects2.length = k;}if ( gdjs.loggonCode.condition1IsTrue_0.val ) {
{
gdjs.loggonCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.loggonCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("getkeybordintry"), gdjs.loggonCode.GDgetkeybordintryObjects2);
/* Reuse gdjs.loggonCode.GDpasswordtObjects2 */
{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects2[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects2[i].returnVariable(gdjs.loggonCode.GDpasswordtObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.loggonCode.GDgetkeybordintryObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDgetkeybordintryObjects2[i].activate(true);
}
}{for(var i = 0, len = gdjs.loggonCode.GDgetkeybordintryObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDgetkeybordintryObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects2);

gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
gdjs.loggonCode.condition2IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loggonCode.mapOfGDgdjs_46loggonCode_46GDpasswordtObjects2Objects, runtimeScene, true, true);
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.loggonCode.GDpasswordtObjects2.length;i<l;++i) {
    if ( gdjs.loggonCode.GDpasswordtObjects2[i].getVariableNumber(gdjs.loggonCode.GDpasswordtObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.loggonCode.condition1IsTrue_0.val = true;
        gdjs.loggonCode.GDpasswordtObjects2[k] = gdjs.loggonCode.GDpasswordtObjects2[i];
        ++k;
    }
}
gdjs.loggonCode.GDpasswordtObjects2.length = k;}if ( gdjs.loggonCode.condition1IsTrue_0.val ) {
{
gdjs.loggonCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.loggonCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("getkeybordintry"), gdjs.loggonCode.GDgetkeybordintryObjects2);
/* Reuse gdjs.loggonCode.GDpasswordtObjects2 */
{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects2[i].returnVariable(gdjs.loggonCode.GDpasswordtObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.loggonCode.GDgetkeybordintryObjects2.length ;i < len;++i) {
    gdjs.loggonCode.GDgetkeybordintryObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects1);

gdjs.loggonCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.loggonCode.GDpasswordtObjects1.length;i<l;++i) {
    if ( gdjs.loggonCode.GDpasswordtObjects1[i].getVariableNumber(gdjs.loggonCode.GDpasswordtObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.loggonCode.condition0IsTrue_0.val = true;
        gdjs.loggonCode.GDpasswordtObjects1[k] = gdjs.loggonCode.GDpasswordtObjects1[i];
        ++k;
    }
}
gdjs.loggonCode.GDpasswordtObjects1.length = k;}if (gdjs.loggonCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("getkeybordintry"), gdjs.loggonCode.GDgetkeybordintryObjects1);
/* Reuse gdjs.loggonCode.GDpasswordtObjects1 */
{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].setString((( gdjs.loggonCode.GDgetkeybordintryObjects1.length === 0 ) ? "" :gdjs.loggonCode.GDgetkeybordintryObjects1[0].getString()));
}
}}

}


};gdjs.loggonCode.eventsList1 = function(runtimeScene) {

{


gdjs.loggonCode.condition0IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.loggonCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.loggonCode.GDmouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects1);
gdjs.copyArray(runtimeScene.getObjects("username"), gdjs.loggonCode.GDusernameObjects1);
{for(var i = 0, len = gdjs.loggonCode.GDmouseObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.loggonCode.GDmouseObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDmouseObjects1[i].setZOrder(gdjs.loggonCode.GDmouseObjects1[i].getZOrder() + (50));
}
}{for(var i = 0, len = gdjs.loggonCode.GDusernameObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDusernameObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.loggonCode.GDusernameObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.loggonCode.GDpasswordtObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
gdjs.loggonCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.01, "fadeout"));
}}
if (gdjs.loggonCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.loggonCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.loggonCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDfadeObjects1[i].setOpacity(gdjs.loggonCode.GDfadeObjects1[i].getOpacity() - (5));
}
}}

}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
gdjs.loggonCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "fadeout");
}}
if (gdjs.loggonCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.loggonCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.loggonCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDfadeObjects1[i].setOpacity(gdjs.loggonCode.GDfadeObjects1[i].getOpacity() + (5));
}
}}

}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.loggonCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.loggonCode.GDbackroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.loggonCode.GDfadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.loggonCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("username"), gdjs.loggonCode.GDusernameObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("root", "username", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readStringFromJSONFile("root", "password", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.loggonCode.GDusernameObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDusernameObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeout");
}{for(var i = 0, len = gdjs.loggonCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDfadeObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.loggonCode.GDbackroundObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDbackroundObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}}

}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "wait");
}if (gdjs.loggonCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("backround"), gdjs.loggonCode.GDbackroundObjects1);
{for(var i = 0, len = gdjs.loggonCode.GDbackroundObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDbackroundObjects1[i].setOpacity(gdjs.loggonCode.GDbackroundObjects1[i].getOpacity() + (10));
}
}}

}


{


gdjs.loggonCode.eventsList0(runtimeScene);
}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
{gdjs.loggonCode.conditionTrue_1 = gdjs.loggonCode.condition1IsTrue_0;
gdjs.loggonCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9950924);
}
}}
if (gdjs.loggonCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects1);
{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].returnVariable(gdjs.loggonCode.GDpasswordtObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.loggonCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects1);

gdjs.loggonCode.condition0IsTrue_0.val = false;
gdjs.loggonCode.condition1IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.loggonCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.loggonCode.GDpasswordtObjects1.length;i<l;++i) {
    if ( gdjs.loggonCode.GDpasswordtObjects1[i].getString() != (( gdjs.loggonCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.loggonCode.GDpasswordObjects1[0].getString()) ) {
        gdjs.loggonCode.condition1IsTrue_0.val = true;
        gdjs.loggonCode.GDpasswordtObjects1[k] = gdjs.loggonCode.GDpasswordtObjects1[i];
        ++k;
    }
}
gdjs.loggonCode.GDpasswordtObjects1.length = k;}}
if (gdjs.loggonCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("getkeybordintry"), gdjs.loggonCode.GDgetkeybordintryObjects1);
/* Reuse gdjs.loggonCode.GDpasswordtObjects1 */
{for(var i = 0, len = gdjs.loggonCode.GDgetkeybordintryObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDgetkeybordintryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].setString("wrong password!");
}
}{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].setColor("255;15;15");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.loggonCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("passwordt"), gdjs.loggonCode.GDpasswordtObjects1);

gdjs.loggonCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.loggonCode.GDpasswordtObjects1.length;i<l;++i) {
    if ( gdjs.loggonCode.GDpasswordtObjects1[i].getString() == (( gdjs.loggonCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.loggonCode.GDpasswordObjects1[0].getString()) ) {
        gdjs.loggonCode.condition0IsTrue_0.val = true;
        gdjs.loggonCode.GDpasswordtObjects1[k] = gdjs.loggonCode.GDpasswordtObjects1[i];
        ++k;
    }
}
gdjs.loggonCode.GDpasswordtObjects1.length = k;}if (gdjs.loggonCode.condition0IsTrue_0.val) {
/* Reuse gdjs.loggonCode.GDpasswordtObjects1 */
{for(var i = 0, len = gdjs.loggonCode.GDpasswordtObjects1.length ;i < len;++i) {
    gdjs.loggonCode.GDpasswordtObjects1[i].setColor("0;255;77");
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fadeout");
}}

}


{


gdjs.loggonCode.condition0IsTrue_0.val = false;
{
gdjs.loggonCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "fadeout");
}if (gdjs.loggonCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desktop", true);
}}

}


};

gdjs.loggonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loggonCode.GDmouseObjects1.length = 0;
gdjs.loggonCode.GDmouseObjects2.length = 0;
gdjs.loggonCode.GDmouseObjects3.length = 0;
gdjs.loggonCode.GDbackroundObjects1.length = 0;
gdjs.loggonCode.GDbackroundObjects2.length = 0;
gdjs.loggonCode.GDbackroundObjects3.length = 0;
gdjs.loggonCode.GDNewObjectObjects1.length = 0;
gdjs.loggonCode.GDNewObjectObjects2.length = 0;
gdjs.loggonCode.GDNewObjectObjects3.length = 0;
gdjs.loggonCode.GDboxObjects1.length = 0;
gdjs.loggonCode.GDboxObjects2.length = 0;
gdjs.loggonCode.GDboxObjects3.length = 0;
gdjs.loggonCode.GDgetkeybordintryObjects1.length = 0;
gdjs.loggonCode.GDgetkeybordintryObjects2.length = 0;
gdjs.loggonCode.GDgetkeybordintryObjects3.length = 0;
gdjs.loggonCode.GDpasswordtObjects1.length = 0;
gdjs.loggonCode.GDpasswordtObjects2.length = 0;
gdjs.loggonCode.GDpasswordtObjects3.length = 0;
gdjs.loggonCode.GDusernameObjects1.length = 0;
gdjs.loggonCode.GDusernameObjects2.length = 0;
gdjs.loggonCode.GDusernameObjects3.length = 0;
gdjs.loggonCode.GDpasswordObjects1.length = 0;
gdjs.loggonCode.GDpasswordObjects2.length = 0;
gdjs.loggonCode.GDpasswordObjects3.length = 0;
gdjs.loggonCode.GDfadeObjects1.length = 0;
gdjs.loggonCode.GDfadeObjects2.length = 0;
gdjs.loggonCode.GDfadeObjects3.length = 0;

gdjs.loggonCode.eventsList1(runtimeScene);
return;

}

gdjs['loggonCode'] = gdjs.loggonCode;
