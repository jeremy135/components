!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/Dev/Spec/Spec',
            'components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable',
            'components/Dev/DevHighlight/DevHighlight'
        ], factory);
    }
}(this, function(Spec, MeasuringTable, DevHighlight) {
    'use strict';
    var specMeasuringTableDesktop = React.createClass({displayName: 'specMeasuringTableDesktop',

        sendDataToComponent: function(pData){
            this.setState( { dataForComponent: pData});
        },

        getInitialState: function(){
            return { dataForComponent: {}}
        },
        onShowMore: function(){
          alert('onShowMore');
        },

        /**
         *  {
             id: id_измерения    // см  measuring: React.PropTypes.shape
             date: 'дата ячейки'  //см result: React.PropTypes.shape
             oldValue: Предыдущее_значение
             newValue: Новое_значение
             }
         */
        onMeasuringChange: function(pParams){
            var lCurrentDataForComponent = this.state.dataForComponent;

            for(var i=0; i<lCurrentDataForComponent.items; i++){
                var lItem = lCurrentDataForComponent.items[i];
                if(lItem['id'] === pParams.id){
                    for(var j=0;j<lItem.result; j++ ){
                        if(lItem.result[j]['date'] === pParams.date){
                            lItem.result[j]['value'] = pParams.newValue;
                        }
                    }
                }
            }

            this.setState( { dataForComponent: lCurrentDataForComponent});

            console.log('==========onMeasuringChange===============');
            console.log(pParams);
            console.log('==========onMeasuringChange===END=========');
        },

        /*
         {
         id: id_измерения    // см  measuring: React.PropTypes.shape
         oldValue: Предыдущее_значение
         newValue: Новое_значение
         }
         */
        onPurposeChange: function(pParams){


            var lCurrentDataForComponent = this.state.dataForComponent;

            for(var i=0; i<lCurrentDataForComponent.items; i++){
                var lItem = lCurrentDataForComponent.items[i];
                if(lItem['id'] === pParams.id){
                    lItem.purpose.value = pParams.newValue;
                }
            }

            this.setState( { dataForComponent: lCurrentDataForComponent});

            console.log('==========onPurposeChange===============');
            console.log(pParams);
            console.log('==========onPurposeChange===END=========');

        },

        onAddMeasuring: function(){
            alert('onAddMeasuring');
        },

        onSelectedMeasuring: function(pSelectedMeasuring){
            console.log('==========onSelectedMeasuring===============');
            console.log(pSelectedMeasuring);
            console.log('==========onSelectedMeasuring===END=========');
        },

        render: function() {


            var lDataInput1 = {

                showMore: true,

                onShowMore: this.onShowMore,
                header: [
                    {label:'01.11', date:'2014-11-01'},
                    {label:'02.11', date:'2014-11-02'},
                    {label:'03.11', date:'2014-11-03'},
                    {label:'05.11', date:'2014-11-05'},
                    {label:'06.11', date:'2014-11-06'},
                    {label:'10.11', date:'2014-11-10'},
                    {label:'11.11', date:'2014-11-11'},
                    {label:'12.11', date:'2014-11-12'},
                    {label:'15.11', date:'2014-11-15'},
                    {label:'18.11', date:'2014-11-18'},
                    {label:'01.12', date:'2014-12-01'},
                    {label:'05.12', date:'2014-12-05'},
                    {label:'06.12', date:'2014-12-06'},
                    {label:'31.12', date:'2014-12-31'}
                ],
                items: [
                    {
                        measuring: {name:'Вес', id: 0},
                        result: [
                            {date: '2014-11-01', value: 56},
                            {date: '2014-11-12', value: 75.1, tip: 'Большой привес'},
                            {date: '2014-11-03', value: 56.3},
                            {date: '2014-12-06', value: 85, tip: ''}

                        ],
                        purpose: {value: 65,toPurpose:7, result: 10, tip:'Подсказка'}
                    },
                    {
                        measuring: {name:'Обхват живота (на уровне пупка)', id: 4},
                        result: [
                            {date: '2014-11-12', value: 125},
                            {date: '2014-11-03', value: 170.1, tip: ' подсказка 2'},
                            {date: '2014-11-01', value: 190.3},
                            {date: '2014-12-06', value: 156, tip: ''}

                        ],
                        purpose: {value: 120,toPurpose:50, result: 60}
                    }
                ],
                widthTable: 490,

                onMeasuringChange: this.onMeasuringChange,
                onPurposeChange: this.onPurposeChange,
                onAddMeasuring: this.onAddMeasuring,
                labelAddMeasuring: 'Добавить измерение',
                onSelectedMeasuring: this.onSelectedMeasuring


            };

            return (
                React.createElement("div", null, 

                    React.createElement("div", {className: "container"}, 
                        React.createElement("h1", null, "Вес и измерения: таблица ввода/отображения"), 
                        React.createElement(Spec, null, 

                            React.createElement("p", null, "Компонент: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.jsx"), 

                            React.createElement("p", null, "CSS писать в less файле: components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.less"), 

                            React.createElement("h4", null, "Описание"), 
                            React.createElement("p", null, "Данный компонент предназначен ведения дневника веса и других измерений. "), 
                            React.createElement("p", null, "Есть возможность редактирования этих значений и установка новых. Также установка цели по конкретному измерению."), 
                            React.createElement("img", {src: "/components/components/DiaryApp/Measuring/Desktop/MeasuringTable/spec/images/table.png"}), 

                            React.createElement("p", null, "Ниже приведенные PropTypes описаны в файле компонента."), 
                            React.createElement("img", {src: "/components/components/DiaryApp/Measuring/Desktop/MeasuringTable/spec/images/Спецификация.png"})


                        ), 


                        React.createElement("p", null, "Пример данных 1 ", React.createElement("br", null), 
                            React.createElement(DevHighlight, {json: lDataInput1}), 
                            React.createElement("button", {onClick: this.sendDataToComponent.bind(this,lDataInput1)}, "Применить")
                        )
                    ), 
                    React.createElement("hr", null), " ", React.createElement("br", null), React.createElement("br", null), 


                    React.createElement("div", null, 
                        React.createElement(MeasuringTable, React.__spread({},  this.state.dataForComponent))
                    ), 

                    React.createElement("br", null), React.createElement("br", null), React.createElement("hr", null)

                )
            );
        }
    });

    return  specMeasuringTableDesktop;
});