!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(MeasuringTable, DevHighlight) {
    'use strict';
    var specMeasuringTableDesktop = React.createClass({displayName: 'specMeasuringTableDesktop',


        render: function() {

            var lDataInput1 = {

                showMore: true,
                items: [
                    {
                        measuring: '1'
                    }
                ]

            };

            return (
                React.createElement("div", {className: "container"}, 
                    React.createElement("h1", null, "Вес и измерения: таблица ввода/отображения"), 
                    React.createElement("p", null, "Компонент: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.jsx"), 
                    React.createElement("p", null, "CSS писать в less файле: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.less"), 



                    React.createElement(DevHighlight, {json: lDataInput1}), 
                   React.createElement("hr", null), 
                    React.createElement("div", null, 
                        React.createElement(MeasuringTable, React.__spread({},  lDataInput1))
                    ), 
                    React.createElement("br", null)
                )
            );
        }
    });

    return  specMeasuringTableDesktop;
});