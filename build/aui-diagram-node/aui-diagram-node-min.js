YUI.add("aui-diagram-node",function(e,t){var n,r=function(t,n){var r=e.Lang.isArray(t)?t:t.get("boundingBox").getXY();return[r[0]+n[0],r[1]+n[1]]},i=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},s=function(e,t){var n=e.hotPoints,s=t.hotPoints,o=e.get("boundingBox").getXY(),u=t.get("boundingBox").getXY(),a,f,l,c,h=Infinity,p=[[0,0],[0,0]];for(l=0,a=n.length;l<a;l++){var d=n[l],v=r(o,d);for(c=0,f=s.length;c<f;c++){var m=s[c],g=r(u,m),y=i(g,v);y<h&&(p[0]=d,p[1]=m,h=y)}}return p},o=function(t){return e.instanceOf(t,e.PropertyBuilder)},u=function(t){return e.instanceOf(t,e.Map)},a=e.getClassName("diagram","builder","controls"),f=e.getClassName("diagram","node"),l=e.getClassName("diagram","node","label"),c=e.getClassName("diagram","node","selected"),h=e.getClassName("diagram","node","shape","boundary");n=e.Component.create({NAME:"diagram-node",UI_ATTRS:["highlighted","name","required","selected"],ATTRS:{builder:{validator:o},connectors:{valueFn:"_connectorsValueFn",writeOnce:!0},controlsToolbar:{validator:e.Lang.isObject,valueFn:"_controlsToolbarValueFn"},description:{value:"",validator:e.Lang.isString},graphic:{writeOnce:!0,validator:e.Lang.isObject},height:{value:60},highlighted:{validator:e.Lang.isBoolean,value:!1},name:{valueFn:function(){var t=this;return t.get("type")+ ++e.Env._uidx},validator:e.Lang.isString},required:{value:!1,validator:e.Lang.isBoolean},selected:{value:!1,validator:e.Lang.isBoolean},shapeBoundary:{validator:e.Lang.isObject,valueFn:"_valueShapeBoundary"},highlightBoundaryStroke:{validator:e.Lang.isObject,value:{weight:7,color:"#484B4C",opacity:.25}},shapeInvite:{validator:e.Lang.isObject,value:{radius:12,type:"circle",stroke:{weight:6,color:"#ff6600",opacity:.8},fill:{color:"#ffd700",opacity:.8}}},strings:{value:{closeMessage:"Close",connectMessage:"Connect",description:"Description",editMessage:"Edit",name:"Name",type:"Type"}},tabIndex:{value:1},transitions:{value:null,writeOnce:!0,setter:"_setTransitions"},type:{value:"node",validator:e.Lang.isString},width:{value:60},zIndex:{value:100}},EXTENDS:e.Overlay,CIRCLE_POINTS:[[35,20],[28,33],[14,34],[5,22],[10,9],[24,6],[34,16],[31,30],[18,35],[6,26],[7,12],[20,5],[33,12],[34,26],[22,35],[9,30],[6,16],[16,6],[30,9],[35,22],[26,34],[12,33],[5,20],[12,7],[26,6],[35,18],[30,31],[16,34],[6,24],[9,10],[22,5],[34,14],[33,28],[20,35],[7,28],[6,14],[18,5],[31,10],[34,24],[24,34],[10,31],[5,18],[14,6],[28,8],[35,20],[28,33],[14,34],[5,22],[10,8],[25,6],[34,16],[31,30],[18,35],[6,26],[8,12],[20,5],[33,12],[33,27],[22,35],[8,30],[6,15],[16,6],[30,9],[35,23],[26,34],[12,32],[5,20],[12,7],[27,7],[35,18],[29,32],[15,34]],DIAMOND_POINTS:[[30,5],[35,10],[40,15],[45,20],[50,25],[55,30],[50,35],[45,40],[40,45],[35,50],[30,55],[25,50],[20,45],[15,40],[10,35],[5,30],[10,25],[15,20],[20,15],[25,10]],SQUARE_POINTS:[[5,5],[10,5],[15,5],[20,5],[25,5],[30,5],[35,5],[40,5],[50,5],[55,5],[60,5],[65,5],[65,10],[65,15],[65,20],[65,25],[65,30],[65,35],[65,40],[65,45],[65,50],[65,55],[65,60],[65,65],[60,65],[55,65],[50,65],[45,65],[40,65],[35,65],[30,65],[25,65],[20,65],[15,65],[10,65],[5,65],[5,60],[5,55],[5,50],[5,45],[5,40],[5,35],[5,30],[5,25],[5,20],[5,15],[5,10]],getNodeByName:function(t){return e.Widget.getByNode("[data-nodeId="+e.DiagramNode.buildNodeId(t)+"]")},getNodeCoordinates:function(t,n){var r=e.Lang.isArray(n)?n:n.getXY(),i=e.Lang.isArray(t)?t:t.getXY();return e.Array.map(i,function(e,t){return Math.max(0,e-r[t])})},buildNodeId:function(e){return"diagramNode_field_"+e.replace(/[^a-z0-9.:_\-]/ig,"_")},prototype:{LABEL_TEMPLATE:'<div class="'+l+'">{label}</div>',boundary:null,hotPoints:[[0,0]],CONTROLS_TEMPLATE:'<div class="'+a+'"></div>',SERIALIZABLE_ATTRS:["description","name","required","type","width","height","zIndex","xy"],initializer:function(){var t=this;t.after({"map:remove":e.bind(t._afterMapRemove,t),render:t._afterRender}),t.on({nameChange:t._onNameChange}),t.publish({connectDrop:{defaultFn:t.connectDrop},connectEnd:{defaultFn:t.connectEnd},connectMove:{defaultFn:t.connectMove},connectOutTarget:{defaultFn:t.connectOutTarget},connectOverTarget:{defaultFn:t.connectOverTarget},connectStart:{defaultFn:t.connectStart},boundaryMouseEnter:{},boundaryMouseLeave:{}}),t.boundingBox=t.get("boundingBox"),t.toolbarContainer=t.get("toolbarContainer"),t.boundingBox.addClass(f+"-"+t.get("type")),t.boundingBox.setAttribute("draggable",!0)},destructor:function(){var e=this;e.eachConnector(function(e,t,n){n.removeTransition(e.get("transition"))}),e.invite.destroy(),e.get("graphic").destroy(),e.get("builder").removeField(e)},addTransition:function(t){var n=this,r=n.get("transitions");return t=n.prepareTransition(t),r.has(t.uid)||(t.uid=e.guid(),r.put(t.uid,t)),t},alignTransition:function(t){var n=this,i=e.DiagramNode.getNodeByName(t.target);if(i){var o=s(n,i);t=e.merge(t,{sourceXY:o[0],targetXY:o[1]}),n.getConnector(t).setAttrs({p1:r(n,t.sourceXY),p2:r(i,t.targetXY)})}},alignTransitions:function(){var t=this,n=t.get("transitions");e.Array.each(n.values(),e.bind(t.alignTransition,t))},close:function(){var e=this;return e.destroy()},connect:function(t,n){var r=this;t=r.addTransition(t);var i=null,o=e.DiagramNode.getNodeByName(t.target);if(o&&!r.isTransitionConnected(t)){var u=r.get("builder"),a=s(r,o);e.mix(t,{sourceXY:a[0],targetXY:a[1]}),i=new e.Connector(e.merge({after:{selectedChange:function(){r.alignTransition(t)}},builder:u,graphic:u.get("graphic"),transition:t},n)),r.get("connectors").put(t.uid,i)}return r.alignTransition(t),i},connectDrop:function(e){var t=this;t.connectNode(e.publishedTarget)},connectEnd:function(){var e=this,t=e.get("builder"),n=t.publishedSource;!t.isAbleToConnect()&&t.get("showSuggestConnector")&&t.connector.get("visible")?t.showSuggestConnectorOverlay():(t.connector.hide(),n.invite.set("visible",!1)),t.get("highlightDropZones")&&t.get("fields").each(function(e){e.set("highlighted",!1)})},connectMove:function(e){var t=this,n=t.get("builder"),r=e.mouseXY;n.connector.set("p2",r);if(n.publishedTarget){
var i=t.invite,s=i.get("radius")||0;i.get("visible")||i.set("visible",!0),i.setXY([r[0]-s,r[1]-s])}},connectNode:function(t){var n=this,r=n.boundaryDragDelegate.dd;n.connect(n.prepareTransition({sourceXY:e.DiagramNode.getNodeCoordinates(r.startXY,n.get("boundingBox")),target:t.get("name"),targetXY:e.DiagramNode.getNodeCoordinates(r.mouseXY,t.get("boundingBox"))}))},connectOutTarget:function(){var e=this,t=e.get("builder");t.publishedTarget=null,t.publishedSource.invite.set("visible",!1)},connectOverTarget:function(){var e=this,t=e.get("builder");t.publishedSource!==e&&(t.publishedTarget=e)},connectStart:function(t){var n=this,r=n.get("builder");r.connector.show().set("p1",t.startXY),r.get("highlightDropZones")&&r.get("fields").each(function(e){e.set("highlighted",!0)}),e.DiagramNodeManager.fire("publishedSource",{publishedSource:n})},disconnect:function(e){var t=this;t.isTransitionConnected(e)&&t.removeTransition(e)},eachConnector:function(t){var n=this,r=[],i=[].concat(n.get("connectors").values()),s=i.length;return e.Array.each(n.get("builder").getSourceNodes(n),function(t){var s=t.get("connectors");e.Array.each(s.values(),function(e){n.get("name")===e.get("transition").target&&(r.push(t),i.push(e))})}),e.Array.each(i,function(e,i){t.call(n,e,i,i<s?n:r[i-s])}),i=r=null,i},getConnector:function(e){var t=this;return t.get("connectors").getValue(e.uid)},getContainer:function(){var e=this;return e.get("builder").dropContainer||e.get("boundingBox").get("parentNode")},getNodeCoordinates:function(){var t=this;return e.DiagramNode.getNodeCoordinates(t.get("boundingBox"),t.getContainer())},getProperties:function(){var t=this,n=t.getPropertyModel();return e.Array.each(n,function(n){var r=t.get(n.attributeName),i=e.Lang.type(r);i==="boolean"&&(r=String(r)),n.value=r}),n},getPropertyModel:function(){var t=this,n=t.getStrings();return[{attributeName:"description",editor:new e.TextAreaCellEditor,name:n.description},{attributeName:"name",editor:new e.TextCellEditor({validator:{rules:{value:{required:!0}}}}),name:n.name},{attributeName:"type",editor:!1,name:n.type}]},isBoundaryDrag:function(e){var t=this;return e===t.boundaryDragDelegate.dd},isTransitionConnected:function(e){var t=this;return t.get("connectors").has(e.uid)},prepareTransition:function(t){var n=this,r=t,i;return e.Lang.isObject(t)&&(r=t.target),e.Array.some(n.get("transitions").values(),function(e){return i=r===e.target?e:null,i}),i||(i={source:n.get("name"),target:null,uid:e.guid()},e.Lang.isString(t)?i.target=t:e.Lang.isObject(t)&&(i=e.merge(i,t))),i},removeTransition:function(e){var t=this;return t.get("transitions").remove(e.uid)},renderShapeBoundary:function(){var e=this,t=e.boundary=e.get("graphic").addShape(e.get("shapeBoundary"));return t},renderShapeInvite:function(){var e=this,t=e.invite=e.get("builder").get("graphic").addShape(e.get("shapeInvite"));return t.set("visible",!1),t},syncConnectionsUI:function(){var t=this,n=t.get("transitions");e.Array.each(n.values(),function(e){t.connect(e,e.connector)})},_afterConnectorRemove:function(e){e.value.destroy()},_afterRender:function(){var t=this;t.setStdModContent(e.WidgetStdMod.BODY,"",e.WidgetStdMod.AFTER),t._renderGraphic(),t._renderControls(),t._renderLabel(),t._uiSetHighlighted(t.get("highlighted"))},_afterTransitionsRemove:function(e){var t=this;t.get("connectors").remove(e.value.uid)},_bindBoundaryEvents:function(){var t=this;t.boundary.detachAll().on({mouseenter:e.bind(t._onBoundaryMouseEnter,t),mouseleave:e.bind(t._onBoundaryMouseLeave,t)})},_connectorsValueFn:function(){var t=this;return new e.Map({after:{remove:e.bind(t._afterConnectorRemove,t)}})},_controlsToolbarValueFn:function(){var t=this;return{children:[{icon:"glyphicon glyphicon-remove",on:{click:e.bind(t._handleCloseEvent,t)}}]}},_handleCloseEvent:function(){var e=this;e.get("builder").deleteSelectedNode()},_handleConnectStart:function(e){var t=this;t.fire("connectStart",{startXY:e})},_handleConnectMove:function(e){var t=this,n=t.get("builder");t.fire("connectMove",{mouseXY:e,publishedSource:n.publishedSource})},_handleConnectEnd:function(){var e=this,t=e.get("builder"),n=t.publishedSource,r=t.publishedTarget;n&&r&&e.fire("connectDrop",{publishedSource:n,publishedTarget:r}),e.fire("connectEnd",{publishedSource:n})},_handleConnectOutTarget:function(){var e=this,t=e.get("builder"),n=t.publishedSource;n&&e.fire("connectOutTarget",{publishedSource:n})},_handleConnectOverTarget:function(){var e=this,t=e.get("builder"),n=t.publishedSource;n&&e.fire("connectOverTarget",{publishedSource:n})},_onBoundaryDrag:function(){var e=this,t=e.boundaryDragDelegate.dd;e._handleConnectMove(t.con._checkRegion(t.mouseXY))},_onBoundaryDragEnd:function(e){var t=this;t._handleConnectEnd(),e.target.get("dragNode").show()},_onBoundaryDragStart:function(e){var t=this;t._handleConnectStart(t.boundaryDragDelegate.dd.startXY),e.target.get("dragNode").hide()},_onBoundaryMouseEnter:function(e){var t=this;t.fire("boundaryMouseEnter",{domEvent:e}),t._handleConnectOverTarget()},_onBoundaryMouseLeave:function(e){var t=this;t.fire("boundaryMouseLeave",{domEvent:e}),t._handleConnectOutTarget()},_onNameChange:function(e){var t=this;t.eachConnector(function(n,r,i){var s=n.get("transition");s[t===i?"source":"target"]=e.newVal,n.set("transition",s)})},_renderControls:function(){var t=this,n=t.get("boundingBox");t.controlsNode=e.Node.create(t.CONTROLS_TEMPLATE).appendTo(n)},_renderControlsToolbar:function(){var t=this;t.controlsToolbar=(new e.Toolbar(t.get("controlsToolbar"))).render(t.controlsNode),t._uiSetRequired(t.get("required"))},_renderGraphic:function(){var t=this;t.set("graphic",new e.Graphic({height:t.get("height"),render:t.bodyNode,width:t.get("width")})),t.renderShapeInvite(),t.renderShapeBoundary().addClass(h),t._bindBoundaryEvents(),t._setupBoundaryDrag()},_renderLabel:function(){var t=this;t.labelNode=e.Node.create(e.Lang.sub(t.LABEL_TEMPLATE,{label:e.Escape.html(t.get("name"))})),t.get("contentBox").placeAfter(t.labelNode)},_setTransitions:function(
t){var n=this;if(!u(t)){var r=new e.Map({after:{remove:e.bind(n._afterTransitionsRemove,n)}});e.Array.each(t,function(t){var i=e.guid();t=e.Lang.isObject(t)?e.mix(t,{uid:i}):{uid:i,target:t},r.put(i,n.prepareTransition(t))}),t=r}return t},_setupBoundaryDrag:function(){var t=this,n=t.get("builder");t.boundaryDragDelegate=new e.DD.Delegate({bubbleTargets:t,container:t.bodyNode,nodes:"."+h,dragConfig:{useShim:!1,plugins:[{cfg:{constrain:n?n.get("canvas"):null},fn:e.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:e.Plugin.DDWinScroll},{cfg:{borderStyle:"0px",moveOnEnd:!1,resizeFrame:!1},fn:e.Plugin.DDProxy}]},on:{"drag:drag":e.bind(t._onBoundaryDrag,t),"drag:end":e.bind(t._onBoundaryDragEnd,t),"drag:start":e.bind(t._onBoundaryDragStart,t)}}),e.Do.after(t._bindBoundaryEvents,t.boundaryDragDelegate.dd,"_unprep",t)},_uiSetHighlighted:function(e){var t=this;if(t.get("rendered")){var n=e?t.get("highlightBoundaryStroke"):t.get("shapeBoundary.stroke");n&&t.boundary.set("stroke",n)}},_uiSetName:function(t){var n=this,r=n.get("boundingBox");r.setAttribute("data-nodeId",e.Escape.html(e.DiagramNode.buildNodeId(t))),n.get("rendered")&&n.labelNode.setContent(e.Escape.html(t))},_uiSetRequired:function(){},_uiSetSelected:function(e){var t=this;t.get("boundingBox").toggleClass(c,e),e&&!t.controlsToolbar&&t._renderControlsToolbar()},_uiSetXY:function(e){var t=this,n=t.getContainer().getXY();this._posNode.setXY([e[0]+n[0],e[1]+n[1]])},_valueShapeBoundary:function(){return{height:41,type:"rect",stroke:{weight:7,color:"transparent",opacity:0},width:41}}}}),e.DiagramNode=n},"3.1.0",{requires:["aui-aria","aui-diagram-node-manager-base","escape","overlay"]});
