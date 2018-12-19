YUI.add("aui-hsva-palette-modal",function(e,t){var n=e.Widget,r=e.Lang,i=e.getClassName,s=i("hsv-palette-modal"),o=e.Base.create("hsv-palette-modal",e.Modal,[e.WidgetCssClass,e.WidgetToggle],{initializer:function(){var e=this;e.after("render",e._renderHSVAPalette,e),e.on("selectedChange",e._onSelectionChange,e)},_getSelected:function(){var e=this;return e._hsvPalette.get("selected")},_onSelectionChange:function(e){var t=this;e.src!==n.UI_SRC&&t._hsvPalette.set("selected",e.newVal)},_renderHSVAPalette:function(){var t=this,r,i,o,u,a;i=t.get("contentBox"),u=t.get("hsv"),a=u.alpha,o=e.HSVPalette,a&&(o=e.HSVAPalette),i.addClass(s),r=t.getStdModNode(e.WidgetStdMod.BODY),t._hsvPalette=(new o(u)).render(r),t.get("centered")&&t.align(),t._hsvPalette.after("selectedChange",function(e){t.set("selected",e.newVal,{src:n.UI_SRC})})}},{ATTRS:{hsv:{validator:r.isObject,value:{alpha:!1}},selected:{getter:"_getSelected",validator:r.isString,value:""}},CSS_PREFIX:i("hsv-palette-modal"),NAME:"hsv-palette-modal",NS:"hsv-palette-modal"});e.HSVAPaletteModal=o},"3.1.0",{requires:["aui-hsva-palette","aui-modal"],skinnable:!0});
