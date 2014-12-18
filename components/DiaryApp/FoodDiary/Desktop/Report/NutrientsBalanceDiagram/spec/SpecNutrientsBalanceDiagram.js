!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/DiaryApp/FoodDiary/Desktop/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(NutrientsBalanceDiagram, DevHighlight, ViewPort) {
    'use strict';
    var specPrintFoodDiary = React.createClass({displayName: 'specPrintFoodDiary',


        render: function() {

            var lDataInput = {items: [
                {id: 12, name:'Витамин С1', nameShort:'C1', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 123, name:'Витамин С2', nameShort:'C2', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},

                {id: 44, name:'Витамин С3', nameShort:'C3', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 34, name:'Витамин С4', nameShort:'C4', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 22, name:'Витамин С5', nameShort:'C5', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]}
            ]};

            return (
                React.createElement("div", null, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("div", null, "Диаграмма нутриетного баланса"), 
                        React.createElement("div", null, "Спецификация: components/DiaryApp/Report/NutrientsBalanceDiagram/spec/SpecNutrientsBalanceDiagram.jsx"), 
                        React.createElement("div", null, "Компонент:components/DiaryApp/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram.jsx"), 
                        React.createElement(DevHighlight, {json: lDataInput.items}), 
                        React.createElement("div", null, 
                        "Компонент"
                        ), 
                        React.createElement("div", null, 
                            React.createElement(NutrientsBalanceDiagram, {items: lDataInput.items})
                        ), 
                        React.createElement("br", null)
                    )
                )
            );
        }
    });

    return  specPrintFoodDiary;
});