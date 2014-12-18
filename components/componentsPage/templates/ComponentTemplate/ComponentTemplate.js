!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/.../ComponentTemplate.css'
        ], factory);
    }
}(this, function() {
    var lComponentTemplate = React.createClass({displayName: 'lComponentTemplate',

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                React.createElement("div", {className: "ComponentTemplate"}

                )
            );
        }
    });

    return lComponentTemplate;
});

