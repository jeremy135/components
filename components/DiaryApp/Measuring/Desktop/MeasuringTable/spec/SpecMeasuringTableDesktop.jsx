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
    var specMeasuringTableDesktop = React.createClass({


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
                <div className="container">
                    <h1>Вес и измерения: таблица ввода/отображения</h1>
                    <p>Компонент: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.jsx</p>
                    <p>CSS писать в less файле: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.less</p>



                    <DevHighlight json={lDataInput1}/>
                   <hr/>
                    <div>
                        <MeasuringTable {...lDataInput1}/>
                    </div>
                    <br/>
                </div>
            );
        }
    });

    return  specMeasuringTableDesktop;
});