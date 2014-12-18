!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'vendor/react-router/dist/react-router.min',
            'css!components/Dev/DevTopMenu/DevTopMenu.css'
        ], factory);
    }
}(this, function(pRouter) {


    var Link = pRouter.Link;

    var lDevTopMenu = React.createClass({displayName: 'lDevTopMenu',

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                React.createElement("div", {className: "DevTopMenu"}, 
                    React.createElement("header", null, 
                        React.createElement(Link, {to: "Home"}, "Home")
                    )
                )
            );
        }
    });

    return lDevTopMenu;
});

