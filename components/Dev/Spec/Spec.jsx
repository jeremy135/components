!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/Dev/Spec/Spec.css',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(DevHighlight) {
    var lSpec = React.createClass({

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
                    <div className="Spec">
                        <h3>Спецификация <span className="SpecShow" onClick={this.hide}>(Показать)</span></h3>
                    </div>
                );
            }else{
                return (
                    <div className="Spec">
                        <h3>Спецификация <span className="SpecShow" onClick={this.hide}>(Скрыть)</span></h3>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                );
            }

        }
    });

    return lSpec;
});

