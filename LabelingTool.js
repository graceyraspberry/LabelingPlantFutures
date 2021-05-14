/// <reference path="jsdiag.d.ts" />
/// <reference path="jscommon.d.ts" />

var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ControlNode = MindFusion.Diagramming.ControlNode;

var Rect = MindFusion.Drawing.Rect;
var Point = MindFusion.Drawing.Point;

var Animation = MindFusion.Animations.Animation;
var AnimationType = MindFusion.Animations.AnimationType;
var EasingType = MindFusion.Animations.EasingType;
var AnimationEvents = MindFusion.Animations.Events;

var diagram = null;
document.addEventListener("DOMContentLoaded", function () {
  // create a Diagram component that wraps the "diagram" canvas
  diagram = Diagram.create(document.getElementById("diagram"));
  diagram.setVirtualScroll(true);

  // create an Overview component that wraps the "overview" canvas
  // var overview = MindFusion.Diagramming.Overview.create(
  //   document.getElementById("overview")
  // );
  // overview.setDiagram(diagram);

  // create an ZoomControl component that wraps the "zoomer" canvas
  var zoomer = MindFusion.Controls.ZoomControl.create(
    document.getElementById("zoomer")
  );
  zoomer.setTarget(diagram);

  var defaultTemplate = `
<p>What category does your brand fall under?<p>
<div><select data-interactive="true" data-event-change="selectClick" name="states" id="states">
  <option value="none" selected></option>
  <option value="Meat - burger">Meat - burger</option>
  <option value="Dairy replacement">Dairy replacement</option>
  <option value="Snacks">Snacks</option>
  <option value="Sweets">Sweets</option>
</select>
</div>`;

  diagram.setDefaultControlTemplate(defaultTemplate);

  var node1 = new MindFusion.Diagramming.ControlNode(diagram);
  node1.setTemplate(`
<p>What category does your brand fall under? :<p>
<div><select data-interactive="true" data-event-change="selectClick" name="states" id="states">
  <option value="none" selected></option>
  <option value="Meat - burger">Meat - burger</option>
  <option value="Meal replacement">Meal replacement</option>
  <option value="Dairy replacement">Dairy replacement</option>
  <option value="Snacks">Snacks</option>
  <option value="Yogurts">Yogurts</option>
</select>
</div>`);
  node1.setBounds(new Rect(40, 10, 40, 25));
  node1.setId("states");
  diagram.addItem(node1);
});

function selectClick(e, sender) {
  var selectControl = sender.getContent().getElementsByTagName("select")[0];

  deleteNode(selectControl.id);

  if (selectControl.id == "states") {
    if (selectControl.value != "none") nextNode(1, sender);
  } else if (selectControl.id == "speciality") {
    if (selectControl.value != "none") nextNode(2, sender);
  } else if (selectControl.id == "qualification") {
    if (selectControl.value != "none") nextNode(3, sender);
  } else if (selectControl.id == "urgency") {
    if (selectControl.value != "none") nextNode(4, sender);
  }
}

function nextNode(stage, originNode) {
  var node = new MindFusion.Diagramming.ControlNode(diagram);
  if (stage == 1) {
    node.setTemplate(`
			<p>What is the target age group for your brand?<p>
			<div><select data-interactive="true" data-event-change="selectClick" name="speciality" id="speciality">
			  <option value="none" selected></option>			  
        <option value="Kids">Kids</option>
        <option value="Gen Z">Gen Z</option>
			  <option value="Millenials">Millenials</option>
			  <option value="All">All</option>
			</select>
			</div>`);

    node.setBounds(new Rect(30, 60, 60, 25));
    node.setLocked(true);
    node.setVisible(false);
    node.setId("speciality");
    diagram.addItem(node);

    createAnimatedLink(originNode, node);
  } else if (stage == 2) {
    node.setTemplate(`
			<p>Your target eater identifies most closely with which of the following?<p>
			<div><select data-interactive="true" data-event-change="selectClick" name="qualification" id="qualification">
			  <option value="none" selected></option>			  
			  <option value="Flexitarian">Flexitarian</option>
			  <option value="Vegan">Vegan</option>
			  <option value="All">All</option>
			</select>
			</div>`);

    node.setBounds(new Rect(30, 110, 60, 25));
    node.setLocked(true);
    node.setVisible(false);
    node.setId("qualification");
    diagram.addItem(node);
    createAnimatedLink(originNode, node);
  } else if (stage == 3) {
    node.setTemplate(`
			<p>Select your brand's price point on the below scale<p>
			<div><select data-interactive="true" data-event-change="selectClick" name="urgency" id="urgency">
			  <option value="none" selected></option>			  
			  <option value="Convenience">Convenience</option>
			  <option value="Premium">Premium</option>
			</select>
			</div>`);

    node.setBounds(new Rect(40, 160, 40, 25));
    node.setLocked(true);
    node.setVisible(false);
    node.setId("urgency");
    diagram.addItem(node);

    createAnimatedLink(originNode, node);
  } else if (stage == 4) {
    let errorMessage = "";

    //filter all Converts by state
    var filter = document.getElementById("states").value;

    var availablePractitioners = practitioners.filter(function (p) {
      return p.state === filter;
    });

    if (availablePractitioners.length == 0)
      errorMessage = "Sorry, we have no Converts in this state";

    //filter the result by speciality
    filter = document.getElementById("speciality").value;

    var temp = availablePractitioners;
    availablePractitioners = temp.filter(function (p) {
      return p.speciality === filter;
    });

    if (availablePractitioners.length == 0)
      errorMessage =
        "Sorry, we have no dcotors in this speciality in this state";

    //filter by degree
    filter = document.getElementById("qualification").value;

    temp = availablePractitioners;
    availablePractitioners = temp.filter(function (p) {
      return p.rank === filter;
    });

    if (availablePractitioners.length == 0)
      errorMessage =
        "Sorry, we have no dcotors in this field with this qualifications. Please, change it.";

    //filter by urgency
    filter = document.getElementById("urgency").value;

    temp = availablePractitioners;
    availablePractitioners = temp.filter(function (p) {
      return p.time === filter;
    });

    if (availablePractitioners.length == 0)
      errorMessage =
        "Sorry, we have no dcotors in this field with this time frame. Please, change it.";

    if (errorMessage != "") {
      node.setTemplate("<p>" + errorMessage + "<p>");
      node.setBounds(new Rect(40, 210, 50, 50));
      node.setVisible(false);
      diagram.addItem(node);
      createAnimatedLink(originNode, node);
    } else {
      var layout = new MindFusion.Graphs.TreeLayout();
      layout.root = node;
      layout.direction = MindFusion.Graphs.LayoutDirection.TopToBottom;
      layout.keepRootPosition = true;
      layout.levelDistance = 10;
      linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;

      for (var i = 0; i < availablePractitioners.length; i++) {
        node = new MindFusion.Diagramming.ControlNode(diagram);
        node.setTemplate(
          '<p align="center" style="font-weight:bold; font-size: 124x;">' +
            availablePractitioners[i].name.first +
            " " +
            availablePractitioners[i].name.last +
            "<p>" +
            '<p align="center"><img src="images/' +
            availablePractitioners[i].photo +
            '" width="300" height="200"/></p><table><tr><td>company_link: </td><td>' +
            availablePractitioners[i].company_link +
            "</td></tr><tr><td>secondary_language: </td><td>" +
            availablePractitioners[i].secondary_language +
            "</td></tr><tr><td>output: </td><td>" +
            availablePractitioners[i].output +
            "</td></tr></table>"
        );
        node.setBounds(new Rect(40, 210, 100, 100));
        node.setStroke("#003466");
        node.setId("last");
        diagram.addItem(node);
        var link = new DiagramLink(diagram, originNode, node);
        link.setHeadShape("Triangle");
        link.setHeadBrush("#003466");
        link.setStroke("#003466");
        link.setLocked(true);
        diagram.addItem(link);
      }

      diagram.arrange(layout);
      diagram.resizeToFitItems(10);
      //	diagram.zoomToFit();
    }
  }
}

function createAnimatedLink(originNode, node) {
  var link = new DiagramLink(diagram, originNode, node);
  link.setHeadShape("Triangle");
  link.setHeadBrush("#003466");
  link.setStroke("#003466");
  link.setLocked(true);
  diagram.addItem(link);

  var ep = link.getEndPoint();
  link.setEndPoint(link.getStartPoint());
  var animation = new Animation(
    link,
    {
      fromValue: link.getStartPoint(),
      toValue: ep,
      animationType: AnimationType.Bounce,
      easingType: EasingType.EaseOut,
      duration: 1000,
    },
    onUpdateLink
  );

  animation.addEventListener(AnimationEvents.animationComplete, function (
    sender,
    args
  ) {
    node.setVisible(true);
  });

  animation.start();
}

function deleteNode(id) {
  var nodes = diagram.nodes.filter(function (p) {
    return p.id === id;
  });

  if (nodes.length > 0) {
    deleteRecursively(nodes[0].getOutgoingLinks());
  }
}

function deleteRecursively(links) {
  for (var i = links.length - 1; i >= 0; i--) {
    var node = links[i].getDestination();

    var nlinks = node.getOutgoingLinks();
    deleteRecursively(nlinks);
    diagram.removeItem(node);
  }
}

// a custom update callback for link animations
function onUpdateLink(animation, animationProgress) {
  var link = animation.item;
  var pointA = animation.getFromValue(),
    pointB = animation.getToValue();

  link.setEndPoint(
    new Point(
      pointA.x + (pointB.x - pointA.x) * animationProgress,
      pointA.y + (pointB.y - pointA.y) * animationProgress
    )
  );
  link.invalidate();
}
