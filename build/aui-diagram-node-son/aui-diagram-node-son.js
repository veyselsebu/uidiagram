YUI.add('aui-diagram-node-son', function (A, NAME) {

/**
 * A base class for DiagramNodeEnd.
 *
 * @class A.DiagramNodeSon
 * @extends A.DiagramNodeState
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var DiagramNodeSon = A.Component.create({

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
     * configuration for the `A.DiagramNodeSon`.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    ATTRS: {

        /**
         * The type of the node.
         *
         * @attribute type
         * @default 'son'
         * @type String
         */
        type: {
            value: 'son'
        }
    },

    /**
     * Static property used to define which component it extends.
     *
     * @property EXTENDS
     * @type String
     * @static
     */
    EXTENDS: A.DiagramNodeState
});

A.DiagramNodeSon = DiagramNodeSon;


}, '3.1.0', {"requires": ["aui-diagram-node-state"]});
