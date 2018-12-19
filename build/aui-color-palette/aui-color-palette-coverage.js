if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-color-palette/aui-color-palette.js']) {
   __coverage__['build/aui-color-palette/aui-color-palette.js'] = {"path":"build/aui-color-palette/aui-color-palette.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":48}}},"2":{"name":"(anonymous_2)","line":49,"loc":{"start":{"line":49,"column":27},"end":{"line":49,"column":38}}},"3":{"name":"(anonymous_3)","line":50,"loc":{"start":{"line":50,"column":19},"end":{"line":50,"column":65}}},"4":{"name":"(anonymous_4)","line":75,"loc":{"start":{"line":75,"column":19},"end":{"line":75,"column":35}}},"5":{"name":"(anonymous_5)","line":79,"loc":{"start":{"line":79,"column":39},"end":{"line":79,"column":54}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":167,"column":3}},"2":{"start":{"line":10,"column":0},"end":{"line":152,"column":7}},"3":{"start":{"line":50,"column":12},"end":{"line":64,"column":14}},"4":{"start":{"line":51,"column":16},"end":{"line":52,"column":40}},"5":{"start":{"line":54,"column":16},"end":{"line":63,"column":18}},"6":{"start":{"line":76,"column":12},"end":{"line":77,"column":23}},"7":{"start":{"line":79,"column":12},"end":{"line":93,"column":15}},"8":{"start":{"line":80,"column":16},"end":{"line":81,"column":26}},"9":{"start":{"line":83,"column":16},"end":{"line":90,"column":17}},"10":{"start":{"line":84,"column":20},"end":{"line":84,"column":47}},"11":{"start":{"line":86,"column":20},"end":{"line":89,"column":22}},"12":{"start":{"line":92,"column":16},"end":{"line":92,"column":27}},"13":{"start":{"line":95,"column":12},"end":{"line":95,"column":35}},"14":{"start":{"line":97,"column":12},"end":{"line":97,"column":26}},"15":{"start":{"line":154,"column":0},"end":{"line":154,"column":30}}},"branchMap":{"1":{"line":59,"type":"cond-expr","locations":[{"start":{"line":59,"column":54},"end":{"line":59,"column":79}},{"start":{"line":59,"column":82},"end":{"line":59,"column":84}}]},"2":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":16},"end":{"line":83,"column":16}},{"start":{"line":83,"column":16},"end":{"line":83,"column":16}}]}},"code":["(function () { YUI.add('aui-color-palette', function (A, NAME) {","","/**\r"," * The Color Picker Component\r"," *\r"," * @module aui-color-picker\r"," * @submodule aui-color-palette\r"," */\r","\r","var AArray = A.Array,\r","    AColor = A.Color,\r","    Lang = A.Lang,\r","\r","    getClassName = A.getClassName,\r","\r","    CSS_PALETTE_ITEM = getClassName('palette-item'),\r","    CSS_PALETTE_ITEM_INNER = getClassName('palette-item-inner'),\r","    CSS_PALETTE_ITEM_SELECTED = getClassName('palette-item-selected'),\r","\r","    /**\r","     * A base class for `ColorPalette`.\r","     *\r","     * @class A.ColorPalette\r","     * @extends Widget\r","     * @uses A.Palette, A.WidgetCssClass, A.WidgetToggle\r","     * @param {Object} config Object literal specifying widget configuration\r","     *     properties.\r","     * @constructor\r","     * @include http://alloyui.com/examples/color-picker/basic-markup.html\r","     * @include http://alloyui.com/examples/color-picker/basic.js\r","     */\r","    ColorPalette = A.Base.create('color-palette', A.Widget, [\r","    A.Palette,\r","    A.WidgetCssClass,\r","    A.WidgetToggle\r","], {\r","        ITEM_TEMPLATE: '<li class=\"' + CSS_PALETTE_ITEM +\r","            ' {selectedClassName}\" data-column={column} data-index={index} data-row={row} data-value=\"{value}\">' +\r","            '<a href=\"\" class=\"' + CSS_PALETTE_ITEM_INNER +\r","            '\" style=\"background-color:{value}\" onclick=\"return false;\" title=\"{title}\"></a>' + '</li>',\r","\r","        /**\r","         * Provides a default value (Function) to the `formatter` property.\r","         *\r","         * @method _valueFormatterFn\r","         * @return {Function} The formatter function\r","         * @protected\r","         */\r","        _valueFormatterFn: function() {\r","            return function(items, index, row, column, selected) {\r","                var instance = this,\r","                    item = items[index];\r","\r","                return Lang.sub(\r","                    instance.ITEM_TEMPLATE, {\r","                        column: column,\r","                        index: index,\r","                        row: row,\r","                        selectedClassName: selected ? CSS_PALETTE_ITEM_SELECTED : '',\r","                        title: item.name,\r","                        value: item.value\r","                    }\r","                );\r","            };\r","        },\r","\r","        /**\r","         * Sets `items` attribute of the `ColorPalette` instance.\r","         *\r","         * @method _setItems\r","         * @param {Array} value\r","         * @return {Object}\r","         * @protected\r","         */\r","        _setItems: function(value) {\r","            var instance = this,\r","                result;\r","\r","            result = AArray.map(value, function(item) {\r","                var tmp = item,\r","                    color;\r","\r","                if (Lang.isString(item)) {\r","                    color = AColor.toHex(item);\r","\r","                    tmp = {\r","                        name: color,\r","                        value: color\r","                    };\r","                }\r","\r","                return tmp;\r","            });\r","\r","            instance._items = null;\r","\r","            return result;\r","        }\r","    }, {\r","\r","        /**\r","         * Static property provides a string to identify the CSS prefix.\r","         *\r","         * @property CSS_PREFIX\r","         * @type {String}\r","         * @static\r","         */\r","        CSS_PREFIX: getClassName('color-palette'),\r","\r","        /**\r","         * Static property provides a string to identify the class.\r","         *\r","         * @property NAME\r","         * @type {String}\r","         * @static\r","         */\r","        NAME: 'color-palette',\r","\r","        /**\r","         * Static property used to define the default attribute\r","         * configuration for the `ColorPalette`.\r","         *\r","         * @property ATTRS\r","         * @type {Object}\r","         * @static\r","         */\r","        ATTRS: {\r","\r","            /**\r","             * Colors available to the `ColorPalette`.\r","             *\r","             * @attribute items\r","             * @type {Array}\r","             */\r","            items: {\r","                setter: '_setItems',\r","                value: [\r","                '#9FC6E7',\r","                '#5484ED',\r","                '#A4BDFC',\r","                '#51B749',\r","                '#FBD75B',\r","                '#FFB878',\r","                '#FF887C',\r","                '#DC2127',\r","                '#DBADFF',\r","                '#E1E1E1'\r","            ]\r","\r","            }\r","        }\r","    });\r","\r","A.ColorPalette = ColorPalette;\r","","","}, '3.1.0', {","    \"requires\": [","        \"array-extras\",","        \"aui-palette\",","        \"color-base\",","        \"node-core\",","        \"aui-widget-cssclass\",","        \"aui-widget-toggle\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_0qJbk46HQ3KvaTG75uhgqg = __coverage__['build/aui-color-palette/aui-color-palette.js'];
__cov_0qJbk46HQ3KvaTG75uhgqg.s['1']++;YUI.add('aui-color-palette',function(A,NAME){__cov_0qJbk46HQ3KvaTG75uhgqg.f['1']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['2']++;var AArray=A.Array,AColor=A.Color,Lang=A.Lang,getClassName=A.getClassName,CSS_PALETTE_ITEM=getClassName('palette-item'),CSS_PALETTE_ITEM_INNER=getClassName('palette-item-inner'),CSS_PALETTE_ITEM_SELECTED=getClassName('palette-item-selected'),ColorPalette=A.Base.create('color-palette',A.Widget,[A.Palette,A.WidgetCssClass,A.WidgetToggle],{ITEM_TEMPLATE:'<li class="'+CSS_PALETTE_ITEM+' {selectedClassName}" data-column={column} data-index={index} data-row={row} data-value="{value}">'+'<a href="" class="'+CSS_PALETTE_ITEM_INNER+'" style="background-color:{value}" onclick="return false;" title="{title}"></a>'+'</li>',_valueFormatterFn:function(){__cov_0qJbk46HQ3KvaTG75uhgqg.f['2']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['3']++;return function(items,index,row,column,selected){__cov_0qJbk46HQ3KvaTG75uhgqg.f['3']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['4']++;var instance=this,item=items[index];__cov_0qJbk46HQ3KvaTG75uhgqg.s['5']++;return Lang.sub(instance.ITEM_TEMPLATE,{column:column,index:index,row:row,selectedClassName:selected?(__cov_0qJbk46HQ3KvaTG75uhgqg.b['1'][0]++,CSS_PALETTE_ITEM_SELECTED):(__cov_0qJbk46HQ3KvaTG75uhgqg.b['1'][1]++,''),title:item.name,value:item.value});};},_setItems:function(value){__cov_0qJbk46HQ3KvaTG75uhgqg.f['4']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['6']++;var instance=this,result;__cov_0qJbk46HQ3KvaTG75uhgqg.s['7']++;result=AArray.map(value,function(item){__cov_0qJbk46HQ3KvaTG75uhgqg.f['5']++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['8']++;var tmp=item,color;__cov_0qJbk46HQ3KvaTG75uhgqg.s['9']++;if(Lang.isString(item)){__cov_0qJbk46HQ3KvaTG75uhgqg.b['2'][0]++;__cov_0qJbk46HQ3KvaTG75uhgqg.s['10']++;color=AColor.toHex(item);__cov_0qJbk46HQ3KvaTG75uhgqg.s['11']++;tmp={name:color,value:color};}else{__cov_0qJbk46HQ3KvaTG75uhgqg.b['2'][1]++;}__cov_0qJbk46HQ3KvaTG75uhgqg.s['12']++;return tmp;});__cov_0qJbk46HQ3KvaTG75uhgqg.s['13']++;instance._items=null;__cov_0qJbk46HQ3KvaTG75uhgqg.s['14']++;return result;}},{CSS_PREFIX:getClassName('color-palette'),NAME:'color-palette',ATTRS:{items:{setter:'_setItems',value:['#9FC6E7','#5484ED','#A4BDFC','#51B749','#FBD75B','#FFB878','#FF887C','#DC2127','#DBADFF','#E1E1E1']}}});__cov_0qJbk46HQ3KvaTG75uhgqg.s['15']++;A.ColorPalette=ColorPalette;},'3.1.0',{'requires':['array-extras','aui-palette','color-base','node-core','aui-widget-cssclass','aui-widget-toggle'],'skinnable':true});
