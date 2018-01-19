#target Photoshop
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
     var Name = doc.activeLayer.name;
    doc.layerComps.add((Name + "").toLowerCase(), "",true, true, true);
    doc.activeLayer.visible=false;
    }
doc.layerComps[0].apply();
}
main();