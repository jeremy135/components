!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/DiaryApp/FoodDiary/Desktop/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram.css'
        ], factory);
    }
}(this, function() {

    var NutrientRow = React.createClass({displayName: 'NutrientRow',
        render: function() {

            console.log(this.props);
            var divBarInnerStyle = {
                backgroundColor: this.props.barColor,
                width: Math.min(this.props.percent, 100)
            };

            return (
                React.createElement("div", {className: "NutrientsBalanceDiagram_Row__cell"}, 
                    React.createElement("div", {className: "NutrientsBalanceDiagram_Row__name"}, this.props.nameShort), 
                    React.createElement("div", {className: "NutrientsBalanceDiagram_Row__bar"}, React.createElement("div", {className: "NutrientsBalanceDiagram_Row__bar__inner", style: divBarInnerStyle})), 
                    React.createElement("div", {className: "NutrientsBalanceDiagram_Row__value"}, this.props.percent)
                )
            );
        }
    });

    var NutrientColumns = React.createClass({displayName: 'NutrientColumns',
        render: function() {
            var lFirstColumn = this.props.first;
            var lSecondColumn = this.props.second;


            var lResult = [];

            if(lFirstColumn!==null){
                lResult.push(React.createElement(NutrientRow, React.__spread({},  lFirstColumn, {key: lFirstColumn.id})));
            }else{
                lResult.push(React.createElement("div", {className: "NutrientsBalanceDiagram_Row__cell"}));
            }


            //if(lSecondColumn!==null){
                lResult.push(React.createElement(NutrientRow, React.__spread({},  lSecondColumn, {key: lSecondColumn.id})));
            //}
            return (
                React.createElement("div", {className: "NutrientsBalanceDiagram_Row"}, 
                    lResult
                )

            );
        }
    });


    var lNutrientsBalanceDiagram = React.createClass({displayName: 'lNutrientsBalanceDiagram',

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            var lRows = [];

            if(this.props.hasOwnProperty('items')===false || this.props.items.hasOwnProperty('length')===false ){
                return (React.createElement("div", {className: "NutrientsBalanceDiagram"}));
            }
            var lLength = this.props.items.length;
            if(lLength % 2 > 0){
                lLength = lLength - 1;
            }
            var lLengthOneColumn = lLength/2;

            for(var i=0;i<lLengthOneColumn;i++ ){

                var  lFirstColumn = this.props.items[i];
                var  lSecondColumn = this.props.items[i+lLengthOneColumn];
                var lKey = '_row_'+i;
                lRows.push(React.createElement(NutrientColumns, {first: lFirstColumn, second: lSecondColumn, key: lKey}));
            }
            if(lLength!==this.props.items.length){
                lRows.push(React.createElement(NutrientColumns, {first: null, second: this.props.items[this.props.items.length-1], key: '_row_last'}));
            }


            return (
                React.createElement("div", {className: "NutrientsBalanceDiagram"}, 

                    React.createElement("div", {className: "NutrientsBalanceDiagram_Table"}, 
                        React.createElement("div", {className: "NutrientsBalanceDiagram_Column"}), 
                        React.createElement("div", {className: "NutrientsBalanceDiagram_Column"}), 
                        lRows
                    )

                )
            );
        }
    });
    return lNutrientsBalanceDiagram;
});

