YUI.add('aui-diagram-node-YONLENDIRME', function (A, NAME) {

/**
 * A base class for `A.DiagramNodeYONLENDIRME`.
 *
 * @class A.DiagramNodeYONLENDIRME
 * @extends A.DiagramNodeState
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var DiagramNodeYONLENDIRME = A.Component.create({

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type String
     * @static
     */
    NAME: 'diagram-node',

    /**
     * Static property used to define the default attribute
     * configuration for the `A.DiagramNodeYONLENDIRME`.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    ATTRS: {

        /**
         * The height of the node.
         *
         * @attribute height
         * @default 70
         * @type Number
         */
        height: {
            value: 70
        },

        /**
         * The type of the node.
         *
         * @attribute type
         * @default 'YONLENDIRME'
         * @type String
         */
        type: {
            value: 'YONLENDIRME'
        },

        /**
         * The width of the node.
         *
         * @attribute width
         * @default 70
         * @type Number
         */
        width: {
            value: 70
        }
    },

    /**
     * Static property used to define which component it extends.
     *
     * @property EXTENDS
     * @type String
     * @static
     */
    EXTENDS: A.DiagramNodeState,

    prototype: {
        hotPoints: A.DiagramNode.SQUARE_POINTS,

        /**
         * Renders the shape boundary.
         *
         * @method renderShapeBoundary
         */
        renderShapeBoundary: function() {
            var instance = this;

            var boundary = instance.boundary = instance.get('graphic').addShape(
                instance.get('shapeBoundary')
            );

            boundary.translate(8, 8);

            return boundary;
        },

        /**
         * Gets the shape boundary definitions.
         *
         * @method _valueShapeBoundary
         * @protected
         * @return {Object}
         */
        _valueShapeBoundary: function() {
            return {
                height: 55,
                type: 'rect',
                stroke: {
                    weight: 7,
                    color: 'transparent',
                    opacity: 0
                },
                width: 55
            };
        }
    }
});

A.DiagramNodeYONLENDIRME = DiagramNodeYONLENDIRME;


}, '3.0.1', {"requires": ["aui-diagram-node-state"]});
