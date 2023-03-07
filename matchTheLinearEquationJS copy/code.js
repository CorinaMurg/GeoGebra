var parameters = {
    "id":"ggbApplet",
    "material_id":"yfrxrdw7",
    "appName":"classic",
    "width":500,
    "height":500,
    "showToolBar":false,
    "borderColor":null,
    "showMenuBar":false,
    "allowStyleBar":false,
    "showAlgebraInput":false,
    "showAlgebraView":false,
    "enableLabelDrags":false,
    "enableShiftDragZoom":false,
    "capturingThreshold":null,
    "showToolBarHelp":false,
    "errorDialogsActive":false,
    "showTutorialLink":false,
    "showLogging":false,
    "useBrowserForJS":false,
    "appletOnLoad": function(api){ 
        api.setCoordSystem(-8, 8, -8, 8);
        api.setAxisSteps(1, 1, 1, 0);  
    },
}

var applet = new GGBApplet(parameters, true);
window.onload = function() { 
    applet.inject(applet_container);
}

// creates a random equation
function createEquation() {
    let a = Math.floor(Math.random() * 11) - 5; 
    let b = Math.floor(Math.random() * 11) - 5;
    let c = a + 1;
    if (a != 0) {
        let equation = "y=-( " + b + " / " + a + " )x+" + b;
        
        return equation;
    } else {
        let equation = "y=-( " + b + " / " + c + " )x+" + b;
        
        return equation;
    }
}



// graph the random/new line

    let randomEquationBtn = document.querySelector('#randomEquationBtn');
    randomEquationBtn.addEventListener('click', evalRandomInput);
    function evalRandomInput(strInput) {
        let randomLine = ggbApplet.evalCommandGetLabels(strInput);
        ggbApplet.setColor(randomLine, 0, 102, 153);
        ggbApplet.setLineThickness(randomLine, 10);
        ggbApplet.setLabelVisible(randomLine, false);
    }


// graph the user line
function evalUserInput(strInput) {
    let userEquation = document.querySelector("#")
    let userLine = ggbApplet.evalCommandGetLabels(strInput);
    ggbApplet.setColor(userLine, 255, 0, 0);
    ggbApplet.setLineThickness(userLine, 10);
    ggbApplet.setLabelVisible(userLine, false);

    var randomEquation = document.getElementById("random-equation").value.trim();
    if (userLine === randomEquation) {
        ggbApplet.setLabelVisible(userLine, true);
    }

    //ggbApplet.setCaption(userLine, "Correct!");
    //ggbApplet.setLabelStyle(userLine, 3);
    
    //ggbApplet.setLabelVisible(userLine, true);
    
}

// deleteObject(String objName)
// function compareLines() {
    //var pointC = ggbApplet(evalCommand)
    //if (evalRandomInput(strInput) === evalUserInput(strInput)) {
        
    










// delete line if not matching
