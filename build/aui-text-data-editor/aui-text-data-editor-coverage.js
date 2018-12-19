if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-text-data-editor/aui-text-data-editor.js']) {
   __coverage__['build/aui-text-data-editor/aui-text-data-editor.js'] = {"path":"build/aui-text-data-editor/aui-text-data-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":31,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":28}}},"3":{"name":"(anonymous_3)","line":51,"loc":{"start":{"line":51,"column":13},"end":{"line":51,"column":24}}},"4":{"name":"(anonymous_4)","line":61,"loc":{"start":{"line":61,"column":13},"end":{"line":61,"column":24}}},"5":{"name":"(anonymous_5)","line":75,"loc":{"start":{"line":75,"column":29},"end":{"line":75,"column":40}}},"6":{"name":"(anonymous_6)","line":85,"loc":{"start":{"line":85,"column":29},"end":{"line":85,"column":40}}},"7":{"name":"(anonymous_7)","line":95,"loc":{"start":{"line":95,"column":20},"end":{"line":95,"column":31}}},"8":{"name":"(anonymous_8)","line":106,"loc":{"start":{"line":106,"column":23},"end":{"line":106,"column":45}}},"9":{"name":"(anonymous_9)","line":117,"loc":{"start":{"line":117,"column":23},"end":{"line":117,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":169,"column":87}},"2":{"start":{"line":9,"column":0},"end":{"line":10,"column":83}},"3":{"start":{"line":21,"column":0},"end":{"line":166,"column":3}},"4":{"start":{"line":32,"column":8},"end":{"line":32,"column":36}},"5":{"start":{"line":34,"column":8},"end":{"line":34,"column":48}},"6":{"start":{"line":35,"column":8},"end":{"line":35,"column":76}},"7":{"start":{"line":37,"column":8},"end":{"line":40,"column":11}},"8":{"start":{"line":41,"column":8},"end":{"line":41,"column":56}},"9":{"start":{"line":42,"column":8},"end":{"line":42,"column":56}},"10":{"start":{"line":52,"column":8},"end":{"line":52,"column":53}},"11":{"start":{"line":62,"column":8},"end":{"line":64,"column":9}},"12":{"start":{"line":63,"column":12},"end":{"line":63,"column":60}},"13":{"start":{"line":66,"column":8},"end":{"line":66,"column":21}},"14":{"start":{"line":76,"column":8},"end":{"line":76,"column":56}},"15":{"start":{"line":86,"column":8},"end":{"line":86,"column":56}},"16":{"start":{"line":96,"column":8},"end":{"line":96,"column":58}},"17":{"start":{"line":107,"column":8},"end":{"line":107,"column":46}},"18":{"start":{"line":118,"column":8},"end":{"line":118,"column":79}},"19":{"start":{"line":120,"column":8},"end":{"line":120,"column":59}}},"branchMap":{"1":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":8},"end":{"line":62,"column":8}},{"start":{"line":62,"column":8},"end":{"line":62,"column":8}}]}},"code":["(function () { YUI.add('aui-text-data-editor', function (A, NAME) {","","/**\r"," * The Text Data Editor Component\r"," *\r"," * @module aui-text-data-editor\r"," */\r","\r","var CSS_TEXT_DATA_EDITOR = A.getClassName('text', 'data', 'editor'),\r","    CSS_TEXT_DATA_EDITOR_INPUT = A.getClassName('text', 'data', 'editor', 'input');\r","\r","/**\r"," * A base class for Text Data Editor.\r"," *\r"," * @class A.TextDataEditor\r"," * @extends A.DataEditor\r"," * @param {Object} config Object literal specifying widget configuration\r"," *     properties.\r"," * @constructor\r"," */\r","A.TextDataEditor = A.Base.create('text-data-editor', A.DataEditor, [], {\r","    TPL_EDITOR_CONTENT: '<div class=\"' + CSS_TEXT_DATA_EDITOR + '\">' +\r","        '<input type=\"text\" class=\"' + CSS_TEXT_DATA_EDITOR_INPUT + ' form-control\"></input></div>',\r","\r","    /**\r","     * Constructor for the `A.TextDataEditor`. Lifecycle.\r","     *\r","     * @method initializer\r","     * @protected\r","     */\r","    initializer: function() {\r","        var node = this.get('node');\r","\r","        this.input_ = node.one('.form-control');\r","        this.input_.after('valuechange', A.bind(this._onValueChange, this));\r","\r","        this.after({\r","            editedValueChange: this._afterEditedValueChange,\r","            placeholderChange: this._afterPlaceholderChange\r","        });\r","        this._uiSetEditedValue(this.get('editedValue'));\r","        this._uiSetPlaceholder(this.get('placeholder'));\r","    },\r","\r","    /**\r","     * Returns `true` if this edited value has no elements.\r","     *\r","     * @method isEmpty\r","     * @return {Boolean}\r","     */\r","    isEmpty: function() {\r","        return !A.Lang.trim(this.get('editedValue'));\r","    },\r","\r","    /**\r","     * If the Text Data Editor has a String on text field this will return true.\r","     *\r","     * @method isValid\r","     * @return {Boolean}\r","     */\r","    isValid: function() {\r","        if (A.TextDataEditor.superclass.isValid.call(this)) {\r","            return A.Lang.isString(this.get('editedValue'));\r","        }\r","\r","        return false;\r","    },\r","\r","    /**\r","     * Fired after the `editedValue` attribute is set.\r","     *\r","     * @method _afterEditedValueChange\r","     * @protected\r","     */\r","    _afterEditedValueChange: function() {\r","        this._uiSetEditedValue(this.get('editedValue'));\r","    },\r","\r","    /**\r","     * Fired after the `placeholder` attribute is set.\r","     *\r","     * @method _afterPlaceholderChange\r","     * @protected\r","     */\r","    _afterPlaceholderChange: function() {\r","        this._uiSetPlaceholder(this.get('placeholder'));\r","    },\r","\r","    /**\r","     * Fired when the input's value changes.\r","     *\r","     * @method _onValueChange\r","     * @protected\r","     */\r","    _onValueChange: function() {\r","        this.set('editedValue', this.input_.get('value'));\r","    },\r","\r","    /**\r","     * Updates the ui according to the value of the `editedValue` attribute.\r","     *\r","     * @method _uiSetEditedValue\r","     * @param {String} editedValue\r","     * @protected\r","     */\r","    _uiSetEditedValue: function(editedValue) {\r","        this.input_.set('value', editedValue);\r","    },\r","\r","    /**\r","     * Updates the ui according to the value of the `placeholder` attribute.\r","     *\r","     * @method _uiSetPlaceholder\r","     * @param {String} placeholder\r","     * @protected\r","     */\r","    _uiSetPlaceholder: function(placeholder) {\r","        var inputNode = this.get('node').one('.' + CSS_TEXT_DATA_EDITOR_INPUT);\r","\r","        inputNode.setAttribute('placeholder', placeholder);\r","    }\r","}, {\r","    /**\r","     * Static property used to define the default attribute configuration\r","     * for the `A.TextDataEditor`.\r","     *\r","     * @property ATTRS\r","     * @type Object\r","     * @static\r","     */\r","    ATTRS: {\r","        /**\r","         * The value after edition.\r","         *\r","         * @attribute editedValue\r","         * @default ''\r","         * @type String\r","         */\r","        editedValue: {\r","            value: ''\r","        },\r","\r","        /**\r","         * The value to be edited.\r","         *\r","         * @attribute originalValue\r","         * @default ''\r","         * @type String\r","         */\r","        originalValue: {\r","            value: ''\r","        },\r","\r","        /**\r","         * The placeholder text to be used on the Text Data Editor input.\r","         *\r","         * @attribute placeholder\r","         * @default ''\r","         * @type String\r","         */\r","        placeholder: {\r","            validator: A.Lang.isString,\r","            value: ''\r","        }\r","    }\r","});\r","","","}, '3.1.0', {\"requires\": [\"aui-data-editor\", \"event-valuechange\"], \"skinnable\": true});","","}());"]};
}
var __cov_yPGR_vkVYpWLAWIfWs1NcQ = __coverage__['build/aui-text-data-editor/aui-text-data-editor.js'];
__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['1']++;YUI.add('aui-text-data-editor',function(A,NAME){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['1']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['2']++;var CSS_TEXT_DATA_EDITOR=A.getClassName('text','data','editor'),CSS_TEXT_DATA_EDITOR_INPUT=A.getClassName('text','data','editor','input');__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['3']++;A.TextDataEditor=A.Base.create('text-data-editor',A.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+CSS_TEXT_DATA_EDITOR+'">'+'<input type="text" class="'+CSS_TEXT_DATA_EDITOR_INPUT+' form-control"></input></div>',initializer:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['2']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['4']++;var node=this.get('node');__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['5']++;this.input_=node.one('.form-control');__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['6']++;this.input_.after('valuechange',A.bind(this._onValueChange,this));__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['7']++;this.after({editedValueChange:this._afterEditedValueChange,placeholderChange:this._afterPlaceholderChange});__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['8']++;this._uiSetEditedValue(this.get('editedValue'));__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['9']++;this._uiSetPlaceholder(this.get('placeholder'));},isEmpty:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['3']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['10']++;return!A.Lang.trim(this.get('editedValue'));},isValid:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['4']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['11']++;if(A.TextDataEditor.superclass.isValid.call(this)){__cov_yPGR_vkVYpWLAWIfWs1NcQ.b['1'][0]++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['12']++;return A.Lang.isString(this.get('editedValue'));}else{__cov_yPGR_vkVYpWLAWIfWs1NcQ.b['1'][1]++;}__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['13']++;return false;},_afterEditedValueChange:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['5']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['14']++;this._uiSetEditedValue(this.get('editedValue'));},_afterPlaceholderChange:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['6']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['15']++;this._uiSetPlaceholder(this.get('placeholder'));},_onValueChange:function(){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['7']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['16']++;this.set('editedValue',this.input_.get('value'));},_uiSetEditedValue:function(editedValue){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['8']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['17']++;this.input_.set('value',editedValue);},_uiSetPlaceholder:function(placeholder){__cov_yPGR_vkVYpWLAWIfWs1NcQ.f['9']++;__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['18']++;var inputNode=this.get('node').one('.'+CSS_TEXT_DATA_EDITOR_INPUT);__cov_yPGR_vkVYpWLAWIfWs1NcQ.s['19']++;inputNode.setAttribute('placeholder',placeholder);}},{ATTRS:{editedValue:{value:''},originalValue:{value:''},placeholder:{validator:A.Lang.isString,value:''}}});},'3.1.0',{'requires':['aui-data-editor','event-valuechange'],'skinnable':true});
