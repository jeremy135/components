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

    var lDevTopMenu = React.createClass({

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                <div className="DevTopMenu">
                    <header>
                        <Link to="Home">Home</Link>
                    </header>
                </div>
            );
        }
    });

    return lDevTopMenu;
});

