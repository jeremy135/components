!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/DiaryApp/Print/FoodDiary/PrintFoodDiary.css'
        ], factory);
    }
}(this, function() {
    var PrintFoodDiary = React.createClass({displayName: 'PrintFoodDiary',

        propTypes: {
            optionalString: React.PropTypes.object
        },
        getDefaultProps: function(){
            return {items:[]}
        },
        render: function() {

            var rows = [];

            if(this.props.items.length===0){
                return (React.createElement("div", {className: "PrintFoodDiary"}, "Нет данных"));
            }
            for(var i=0;i<this.props.items.length;i++ ){
                rows.push(React.createElement("tr", {key: i}, 
                    React.createElement("td", null, this.props.items[i]['name']), 
                    React.createElement("td", null, this.props.items[i]['weight'], React.createElement("span", {className: "PrintFoodDiary_Item_Unit"}, this.props.items[i]['unit'])), 
                    React.createElement("td", null, this.props.items[i]['calorie']), 
                    React.createElement("td", null, this.props.items[i]['protein']), 
                    React.createElement("td", null, this.props.items[i]['fat']), 
                    React.createElement("td", null, this.props.items[i]['carb'])
                ));
            }

            return (
                React.createElement("div", {className: "PrintFoodDiary"}, 
                    React.createElement("table", null, 
                        React.createElement("col", {width: "50%"}), 
                        React.createElement("col", {width: "10%"}), 
                        React.createElement("col", {width: "10%"}), 
                        React.createElement("col", {width: "10%"}), 
                        React.createElement("col", {width: "10%"}), 
                        React.createElement("col", {width: "10%"}), 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "Наименование"), 
                            React.createElement("th", null, "Количество"), 
                            React.createElement("th", null, "Колорийность"), 
                            React.createElement("th", null, "Белки"), 
                            React.createElement("th", null, "Жиры"), 
                            React.createElement("th", null, "Углеводы")
                        ), 
                        rows
                    )



                )
            );
        }
    });

    return PrintFoodDiary;
});

