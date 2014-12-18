!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/DiaryApp/FoodDiary/Desktop/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram.css'
        ], factory);
    }
}(this, function() {

    var NutrientRow = React.createClass({
        render: function() {

            console.log(this.props);
            var divBarInnerStyle = {
                backgroundColor: this.props.barColor,
                width: Math.min(this.props.percent, 100)
            };

            return (
                <div className="NutrientsBalanceDiagram_Row__cell">
                    <div className="NutrientsBalanceDiagram_Row__name">{this.props.nameShort}</div>
                    <div className="NutrientsBalanceDiagram_Row__bar"><div className="NutrientsBalanceDiagram_Row__bar__inner" style={divBarInnerStyle}></div></div>
                    <div className="NutrientsBalanceDiagram_Row__value">{this.props.percent}</div>
                </div>
            );
        }
    });

    var NutrientColumns = React.createClass({
        render: function() {
            var lFirstColumn = this.props.first;
            var lSecondColumn = this.props.second;


            var lResult = [];

            if(lFirstColumn!==null){
                lResult.push(<NutrientRow {...lFirstColumn} key={lFirstColumn.id}/>);
            }else{
                lResult.push(<div className="NutrientsBalanceDiagram_Row__cell"/>);
            }


            //if(lSecondColumn!==null){
                lResult.push(<NutrientRow {...lSecondColumn} key={lSecondColumn.id}/>);
            //}
            return (
                <div className="NutrientsBalanceDiagram_Row">
                    {lResult}
                </div>

            );
        }
    });


    var lNutrientsBalanceDiagram = React.createClass({

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            var lRows = [];

            if(this.props.hasOwnProperty('items')===false || this.props.items.hasOwnProperty('length')===false ){
                return (<div className="NutrientsBalanceDiagram"></div>);
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
                lRows.push(<NutrientColumns first={lFirstColumn} second={lSecondColumn}  key={lKey}/>);
            }
            if(lLength!==this.props.items.length){
                lRows.push(<NutrientColumns first={null} second={this.props.items[this.props.items.length-1]}  key={'_row_last'}/>);
            }


            return (
                <div className="NutrientsBalanceDiagram">

                    <div className="NutrientsBalanceDiagram_Table">
                        <div className="NutrientsBalanceDiagram_Column" />
                        <div className="NutrientsBalanceDiagram_Column"/>
                        {lRows}
                    </div>

                </div>
            );
        }
    });
    return lNutrientsBalanceDiagram;
});

