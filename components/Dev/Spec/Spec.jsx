!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/Dev/Spec/Spec.css'
        ], factory);
    }
}(this, function() {
    var lSpec = React.createClass({

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                <div className="Spec">
                    <h3>Спецификация</h3>
                </div>
            );
        }
    });

    return lSpec;
});

