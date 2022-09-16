gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDsavebuttonObjects1= [];
gdjs.Untitled_32sceneCode.GDsavebuttonObjects2= [];
gdjs.Untitled_32sceneCode.GDopenbuttonObjects1= [];
gdjs.Untitled_32sceneCode.GDopenbuttonObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDsavebuttonObjects1Objects = Hashtable.newFrom({"savebutton": gdjs.Untitled_32sceneCode.GDsavebuttonObjects1});
gdjs.Untitled_32sceneCode.userFunc0x753c40 = function(runtimeScene) {
"use strict";
var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob(["funny moment"], {type: "text/plain"}));
a.download = "save.txt";
a.click();
};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0x753c40(runtimeScene);

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDopenbuttonObjects1Objects = Hashtable.newFrom({"openbutton": gdjs.Untitled_32sceneCode.GDopenbuttonObjects1});
gdjs.Untitled_32sceneCode.userFunc0x7539d0 = function(runtimeScene) {
"use strict";
showOpenFilePicker()
};
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0x7539d0(runtimeScene);

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("savebutton"), gdjs.Untitled_32sceneCode.GDsavebuttonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDsavebuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("openbutton"), gdjs.Untitled_32sceneCode.GDopenbuttonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDopenbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDsavebuttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsavebuttonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDopenbuttonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDopenbuttonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
