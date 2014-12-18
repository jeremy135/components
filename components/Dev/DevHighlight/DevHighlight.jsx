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
    var lDevHighlight = React.createClass({

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
                lResult = <div onClick={this.show}>Показать</div>;
            }else{
                lResult = (
                    <div>
                        <div  onClick={this.show}>Скрыть</div>
                        <pre ref="theInput">{lText}</pre>
                    </div>
                );
            }

            return (

                <div className="DevHighlight">
                {lResult}
                </div>
            );
        }
    });



    return lDevHighlight;
});

