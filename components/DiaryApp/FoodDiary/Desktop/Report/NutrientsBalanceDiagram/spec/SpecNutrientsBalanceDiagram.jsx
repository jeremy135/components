!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/Dev/Spec/Spec',
            'components/DiaryApp/FoodDiary/Desktop/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(Spec, NutrientsBalanceDiagram, DevHighlight, ViewPort) {
    'use strict';
    var specPrintFoodDiary = React.createClass({


        render: function() {

            var lDataInput = {items: [
                {id: 12, name:'Витамин С1', nameShort:'C1', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 123, name:'Витамин С2', nameShort:'C2', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},

                {id: 44, name:'Витамин С3', nameShort:'C3', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 34, name:'Витамин С4', nameShort:'C4', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]},
                {id: 22, name:'Витамин С5', nameShort:'C5', unit: 'мг', count:12, value: 5, percent: 15, barColor:'#1c1c1c', message: [{text:'Допл. информация', type:'warning'}]}
            ]};

            return (
                <div>
                    <Spec>
                    </Spec>
                    <div className="container">
                        <div>Диаграмма нутриетного баланса</div>
                        <div>Спецификация: components/DiaryApp/Report/NutrientsBalanceDiagram/spec/SpecNutrientsBalanceDiagram.jsx</div>
                        <div>Компонент:components/DiaryApp/Report/NutrientsBalanceDiagram/NutrientsBalanceDiagram.jsx</div>
                        <DevHighlight json={lDataInput.items}/>
                        <div>
                        Компонент
                        </div>
                        <div>
                            <NutrientsBalanceDiagram items={lDataInput.items}/>
                        </div>
                        <br/>
                    </div>
                </div>
            );
        }
    });

    return  specPrintFoodDiary;
});