!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/.../ComponentTemplate.css'
        ], factory);
    }
}(this, function() {
    var lComponentTemplate = React.createClass({

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                <div className="ComponentTemplate">

                </div>
            );
        }
    });

    return lComponentTemplate;
});

