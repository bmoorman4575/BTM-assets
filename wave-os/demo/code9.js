gdjs.DesktopCode = {};
gdjs.DesktopCode.GDmouseObjects1= [];
gdjs.DesktopCode.GDmouseObjects2= [];
gdjs.DesktopCode.GDmessagetoelijahObjects1= [];
gdjs.DesktopCode.GDmessagetoelijahObjects2= [];
gdjs.DesktopCode.GDtaskbarbottomObjects1= [];
gdjs.DesktopCode.GDtaskbarbottomObjects2= [];
gdjs.DesktopCode.GDrefrenseObjects1= [];
gdjs.DesktopCode.GDrefrenseObjects2= [];
gdjs.DesktopCode.GDfilesiconObjects1= [];
gdjs.DesktopCode.GDfilesiconObjects2= [];
gdjs.DesktopCode.GDnotetoelijahObjects1= [];
gdjs.DesktopCode.GDnotetoelijahObjects2= [];
gdjs.DesktopCode.GDsystemtexticonObjects1= [];
gdjs.DesktopCode.GDsystemtexticonObjects2= [];
gdjs.DesktopCode.GDbackroundObjects1= [];
gdjs.DesktopCode.GDbackroundObjects2= [];
gdjs.DesktopCode.GDwhiteObjects1= [];
gdjs.DesktopCode.GDwhiteObjects2= [];

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
gdjs.DesktopCode.GDtaskbarbottomObjects1.length = 0;
gdjs.DesktopCode.GDtaskbarbottomObjects2.length = 0;
gdjs.DesktopCode.GDrefrenseObjects1.length = 0;
gdjs.DesktopCode.GDrefrenseObjects2.length = 0;
gdjs.DesktopCode.GDfilesiconObjects1.length = 0;
gdjs.DesktopCode.GDfilesiconObjects2.length = 0;
gdjs.DesktopCode.GDnotetoelijahObjects1.length = 0;
gdjs.DesktopCode.GDnotetoelijahObjects2.length = 0;
gdjs.DesktopCode.GDsystemtexticonObjects1.length = 0;
gdjs.DesktopCode.GDsystemtexticonObjects2.length = 0;
gdjs.DesktopCode.GDbackroundObjects1.length = 0;
gdjs.DesktopCode.GDbackroundObjects2.length = 0;
gdjs.DesktopCode.GDwhiteObjects1.length = 0;
gdjs.DesktopCode.GDwhiteObjects2.length = 0;

gdjs.DesktopCode.eventsList0(runtimeScene);
return;

}

gdjs['DesktopCode'] = gdjs.DesktopCode;
