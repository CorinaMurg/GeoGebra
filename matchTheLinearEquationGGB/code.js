

var parameters = {
    "id": "ggbApplet",
    "width":500,
    "height":500,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":false,
    "enableShiftDragZoom":false,
    "enableRightClick":true,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":false,
    "capturingThreshold":3,
    "appletOnLoad":function(api){ 
        api.setCoordSystem(-8, 8, -8, 8);
        api.setLineThickness("eq1", 8);
        // api.setColor("...", 255, 0, 0);
        api.setView(0, 0, 1);
        //var a = api.getValue("a");
        //var b = api.getValue("b");
        //var slope = (-1)*b/a;
    },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    // "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    // use this instead of ggbBase64 to load a material from geogebra.org
    // "material_id":"RHYH3UQ8",
    
    "ggbBase64":"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",
};
    

var applet = new GGBApplet(parameters, '5.0');

window.onload = function() {
    applet.inject('ggbApplet')
};
                
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
                  

// creates the line when the button is clicked. does not delete the line when the input box is cleared
function evalInput(strInput) {
    var newLine = ggbApplet.evalCommandGetLabels(strInput);
    ggbApplet.setColor(newLine, 255, 0, 0);
    ggbApplet.setLineThickness(newLine, 13);
}
                    
                
                
                
                
