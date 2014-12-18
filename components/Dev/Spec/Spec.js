!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/Dev/Spec/Spec.css',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(DevHighlight) {
    var lSpec = React.createClass({displayName: 'lSpec',

        getInitialState:function(){
          return {hide: true}
        },
        getDefaultProps: function(){
            return {}
        },

        hide:function(){
          this.setState({hide: !this.state.hide});
        },

        render: function() {

            if(this.state.hide == true){
                return (
                    React.createElement("div", {className: "Spec"}, 
                        React.createElement("h3", null, "Спецификация ", React.createElement("span", {className: "SpecShow", onClick: this.hide}, "(Показать)"))
                    )
                );
            }else{
                return (
                    React.createElement("div", {className: "Spec"}, 
                        React.createElement("h3", null, "Спецификация ", React.createElement("span", {className: "SpecShow", onClick: this.hide}, "(Скрыть)")), 
                        React.createElement("div", null, 
                            this.props.children
                        )
                    )
                );
            }

        }
    });

    return lSpec;
});

