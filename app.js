jsPlumb.ready(function () {

    var instance = window.jsp = jsPlumb.getInstance({
        // default drag options
        DragOptions: { cursor: 'pointer', zIndex: 2000 },
        // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
        // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
        ConnectionOverlays: [
            [ "Arrow", {
                location: 1,
                visible:true,
                width:11,
                length:11,
                id:"ARROW",
                events:{
                    click:function() { alert("you clicked on the arrow overlay")}
                }
            } ],
        ],
        // Container: "canvas"
    });

    var sourceEndpoint = {
        isSource: true,
        connector: [ "Flowchart", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true } ],
        anchor: 'Right',
        paintStyle: { fill: "#7AB02C", radius: 7 },
    };

    var targetEndpoint = {
        isTarget: true,
        anchor: 'Left',
        paintStyle: {
            stroke: "#7AB02C",
            fill: "transparent",
            radius: 7,
            strokeWidth: 1
        },
    }

    instance.addEndpoint('a', sourceEndpoint);
    instance.addEndpoint('a', targetEndpoint);

    instance.addEndpoint('b', sourceEndpoint);
    instance.addEndpoint('b', targetEndpoint);

    instance.addEndpoint('c', sourceEndpoint);
    instance.addEndpoint('c', targetEndpoint);

    .connect({source: "a",target: "b",});

    var els = document.querySelectorAll(".note");
    instance.draggable(els);

    instance.bind("connectionDragStop", function (connection) {
        console.log("connection " + connection.id + " was dragged");
    });
});