gdjs.DesktopCode = {};
gdjs.DesktopCode.GDmouseObjects1= [];
gdjs.DesktopCode.GDmouseObjects2= [];
gdjs.DesktopCode.GDmessagetoelijahObjects1= [];
gdjs.DesktopCode.GDmessagetoelijahObjects2= [];

gdjs.DesktopCode.conditionTrue_0 = {val:false};
gdjs.DesktopCode.condition0IsTrue_0 = {val:false};
gdjs.DesktopCode.condition1IsTrue_0 = {val:false};


gdjs.DesktopCode.eventsList0 = function(runtimeScene) {

{


gdjs.DesktopCode.condition0IsTrue_0.val = false;
{
gdjs.DesktopCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.DesktopCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mouse"), gdjs.DesktopCode.GDmouseObjects1);
{for(var i = 0, len = gdjs.DesktopCode.GDmouseObjects1.length ;i < len;++i) {
    gdjs.DesktopCode.GDmouseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.DesktopCode.GDmouseObjects1.length ;i < len;++i) {
    gdjs.DesktopCode.GDmouseObjects1[i].setZOrder(gdjs.DesktopCode.GDmouseObjects1[i].getZOrder() + (50));
}
}}

}


{


{
}

}


};

gdjs.DesktopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DesktopCode.GDmouseObjects1.length = 0;
gdjs.DesktopCode.GDmouseObjects2.length = 0;
gdjs.DesktopCode.GDmessagetoelijahObjects1.length = 0;
gdjs.DesktopCode.GDmessagetoelijahObjects2.length = 0;

gdjs.DesktopCode.eventsList0(runtimeScene);
return;

}

gdjs['DesktopCode'] = gdjs.DesktopCode;
