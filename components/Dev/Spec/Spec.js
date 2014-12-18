!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/Dev/Spec/Spec.css'
        ], factory);
    }
}(this, function() {
    var lSpec = React.createClass({displayName: 'lSpec',

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                React.createElement("div", {className: "Spec"}, 
                    React.createElement("h3", null, "Спецификация")
                )
            );
        }
    });

    return lSpec;
});

