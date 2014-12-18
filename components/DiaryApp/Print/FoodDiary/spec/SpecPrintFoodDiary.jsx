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
    var specPrintFoodDiary = React.createClass({


        render: function() {

            var lDataInput = {items: [
                {name:'Борщ', unit: 'г', weight:12, calorie:25, protein:26, fat:9, carb: 1.1},
                {name:'Вареники', unit: 'шт',weight:155,  calorie:250, protein:23, fat:49, carb: 21.1}
            ]};

            return (
                <div className="container">
                    <div>Представление дневника питания для печати</div>
                    <div>Спецификация: components/DiaryApp/Print/FoodDiary/spec/SpecPrintFoodDiary.jsx</div>
                    <div>Компонент:components/DiaryApp/Print/FoodDiary/PrintFoodDiary.jsx</div>
                    <DevHighlight json={lDataInput.items}/>
                    <div>
                    Компонент
                    </div>
                    <div>
                        <PrintFoodDiary items={lDataInput.items}/>
                    </div>
                    <br/>
                </div>
            );
        }
    });

    return  specPrintFoodDiary;
});