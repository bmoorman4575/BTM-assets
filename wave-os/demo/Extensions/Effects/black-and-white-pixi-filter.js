var gdjs;(function(a){const i=GlobalPIXIModule.PIXI;a.PixiFiltersTools.registerFilterCreator("BlackAndWhite",{makePIXIFilter:function(t,r){const e=new i.filters.ColorMatrixFilter;return e.blackAndWhite(!1),e},updatePreRender:function(t,r){},updateDoubleParameter:function(t,r,e){const l=t;r==="opacity"&&(l.alpha=a.PixiFiltersTools.clampValue(e,0,1))},updateStringParameter:function(t,r,e){},updateBooleanParameter:function(t,r,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=black-and-white-pixi-filter.js.map