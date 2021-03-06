!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/Dev/DevHighlight/highlight/highlight.pack',
            'css!components/Dev/DevHighlight/DevHighlight.css',
            'css!components/Dev/DevHighlight/highlight/styles/default.css'
        ], factory);
    }
}(this, function(pHighlight) {
    var lDevHighlight = React.createClass({displayName: 'lDevHighlight',

        propTypes: {

        },

        getInitialState: function(){
            return {hide: true};
        },
        highlight:function(){
            //console.log('componentDidUpdate');
           // var $dom = $('.DevHighlight pre');
            if(this.state.hide === false){
                //console.log(this.refs.theInput.getDOMNode());
                pHighlight.highlightBlock(this.refs.theInput.getDOMNode());
            }

        },
        componentDidMount:function(){
           this.highlight();
        },
        componentDidUpdate:function(){
            this.highlight();
        },
        getDefaultProps: function(){
            return {lang:'html'}
        },

        show: function(){
           this.setState({hide: !this.state.hide});
        },
        render: function() {
            if(this.props.hasOwnProperty('json')){
                var lText =  JSON.stringify(this.props.json, undefined, 4);
            }else{
                var lText = this.props.children;
            }

            var lResult = '';
            if(this.state.hide === true){
                lResult = React.createElement("div", {className: "DevHighlightLink", onClick: this.show}, "Показать");
            }else{
                lResult = (
                    React.createElement("div", null, 
                        React.createElement("div", {className: "DevHighlightLink", onClick: this.show}, "Скрыть"), 
                        React.createElement("pre", {ref: "theInput"}, lText)
                    )
                );
            }

            return (

                React.createElement("div", {className: "DevHighlight"}, 
                    lResult
                )
            );
        }
    });



    return lDevHighlight;
});

