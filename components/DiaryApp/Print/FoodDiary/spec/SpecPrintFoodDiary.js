!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/DiaryApp/Print/FoodDiary/PrintFoodDiary',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(PrintFoodDiary, DevHighlight) {
    'use strict';
    var specPrintFoodDiary = React.createClass({displayName: 'specPrintFoodDiary',


        render: function() {

            var lDataInput = {items: [
                {name:'Борщ', unit: 'г', weight:12, calorie:25, protein:26, fat:9, carb: 1.1},
                {name:'Вареники', unit: 'шт',weight:155,  calorie:250, protein:23, fat:49, carb: 21.1}
            ]};

            return (
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", null, "Представление дневника питания для печати"), 
                    React.createElement("div", null, "Спецификация: components/DiaryApp/Print/FoodDiary/spec/SpecPrintFoodDiary.jsx"), 
                    React.createElement("div", null, "Компонент:components/DiaryApp/Print/FoodDiary/PrintFoodDiary.jsx"), 
                    React.createElement(DevHighlight, {json: lDataInput.items}), 
                    React.createElement("div", null, 
                    "Компонент"
                    ), 
                    React.createElement("div", null, 
                        React.createElement(PrintFoodDiary, {items: lDataInput.items})
                    ), 
                    React.createElement("br", null)
                )
            );
        }
    });

    return  specPrintFoodDiary;
});