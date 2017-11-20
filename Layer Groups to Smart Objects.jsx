#target Photoshop
 main();

function main(){
if(!documents.length) return;
var doc = activeDocument;
for(var c =0; c<doc.layers.length;c++){
   doc.activeLayer= doc.layers[c];
   doc.activeLayer.visible=false;
    }
for(var a=doc.layers.length-1;a > -1;a--){
    doc.activeLayer= doc.layers[a];
    if(doc.activeLayer.isBackgroundLayer) continue;
     doc.activeLayer.visible=true;
    createSmartObject();
    doc.activeLayer.visible=false;
    }
doc.activeLayer.visible=true;
}

function createSmartObject(){
    var idnewPlacedLayer = stringIDToTypeID( 'newPlacedLayer' );
    executeAction(idnewPlacedLayer, undefined, DialogModes.NO);  //photoshop action manager
}
