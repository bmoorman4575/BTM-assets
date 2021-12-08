gdjs.bootCode = {};
gdjs.bootCode.GDmouseObjects1= [];
gdjs.bootCode.GDmouseObjects2= [];
gdjs.bootCode.GDWaveoslogoObjects1= [];
gdjs.bootCode.GDWaveoslogoObjects2= [];
gdjs.bootCode.GDNewObjectObjects1= [];
gdjs.bootCode.GDNewObjectObjects2= [];
gdjs.bootCode.GDNewObject2Objects1= [];
gdjs.bootCode.GDNewObject2Objects2= [];

gdjs.bootCode.conditionTrue_0 = {val:false};
gdjs.bootCode.condition0IsTrue_0 = {val:false};
gdjs.bootCode.condition1IsTrue_0 = {val:false};
gdjs.bootCode.condition2IsTrue_0 = {val:false};


gdjs.bootCode.eventsList0 = function(runtimeScene) {

{


gdjs.bootCode.condition0IsTrue_0.val = false;
{
gdjs.bootCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.bootCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ety");
}}

}


{


gdjs.bootCode.condition0IsTrue_0.val = false;
gdjs.bootCode.condition1IsTrue_0.val = false;
{
gdjs.bootCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "ety");
}if ( gdjs.bootCode.condition0IsTrue_0.val ) {
{
gdjs.bootCode.condition1IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("root", "installed"));
}}
if (gdjs.bootCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "step1", false);
}}

}


{


gdjs.bootCode.condition0IsTrue_0.val = false;
gdjs.bootCode.condition1IsTrue_0.val = false;
{
gdjs.bootCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("root", "installed");
}if ( gdjs.bootCode.condition0IsTrue_0.val ) {
{
gdjs.bootCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "ety");
}}
if (gdjs.bootCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "loggon", false);
}}

}


{


gdjs.bootCode.condition0IsTrue_0.val = false;
{
gdjs.bootCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if (gdjs.bootCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("root");
}}

}


};

gdjs.bootCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bootCode.GDmouseObjects1.length = 0;
gdjs.bootCode.GDmouseObjects2.length = 0;
gdjs.bootCode.GDWaveoslogoObjects1.length = 0;
gdjs.bootCode.GDWaveoslogoObjects2.length = 0;
gdjs.bootCode.GDNewObjectObjects1.length = 0;
gdjs.bootCode.GDNewObjectObjects2.length = 0;
gdjs.bootCode.GDNewObject2Objects1.length = 0;
gdjs.bootCode.GDNewObject2Objects2.length = 0;

gdjs.bootCode.eventsList0(runtimeScene);
return;

}

gdjs['bootCode'] = gdjs.bootCode;
