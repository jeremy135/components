!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/DiaryApp/Measuring/Desktop/MeasuringTable/MeasuringTable.css'
        ], factory);
    }
}(this, function() {
    var lMeasuringTable = React.createClass({displayName: 'lMeasuringTable',

        propTypes: {

            /*****************************************************
             * Колонка "ЕЩЕ"
             *****************************************************/
            /* Наличие колонки еще */
            showMore: React.PropTypes.bool.isRequired,
            /*Событие: при нажатии по надписи "ЕЩЕ"  optional*/
            onShowMore: React.PropTypes.func,


            /*****************************************************
             *ШАПКА ТАБЛИЦЫ - ДАТЫ
             *****************************************************/

            /**
             * Содержит массив всех дат для отображения
             */
            header: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    /*Строка отображаемая в шапке колонки*/
                    label: React.PropTypes.string.isRequired,

                    /**
                     * Дата в формате 'YYYY-MM-DD', Например: '2014-15-01'
                     * Используется для свзяи с items:result см ниже
                     */
                    date: React.PropTypes.string.isRequired

                })

            ).isRequired,

            /*****************************************************
             *СТРОКИ ТАБЛИЦЫ
             *****************************************************/

            /*Описание строки таблицы*/
            items: React.PropTypes.arrayOf(
                React.PropTypes.shape({

                    /*Колонка "ИЗМЕРЕНИЕ"*/
                    measuring: React.PropTypes.shape(
                        {
                            name: React.PropTypes.string.isRequired,
                            id: React.PropTypes.number.isRequired
                        }
                    ).isRequired,

                    /*колонки ИЗМЕРЕНИЕ НА ДАТУ
                    Все представленные даты отображены в header,
                    в result могут быть переданы не все даты, т.е. на эти даты просте нет значения
                    Например, даты :     2014-12-14, 2014-12-15, 2014-12-16
                     вес на дату             50       51          нет данных - отображаем пустой ячейкой
                    * */
                    result: React.PropTypes.arrayOf(
                        React.PropTypes.shape({

                            /**
                             * Дата в формате 'YYYY-MM-DD', Например: '2014-15-01'
                             */
                            date: React.PropTypes.string.isRequired,//todo проверка формата
                            /**
                             * Значение на эту дату. Если передано 0, то тображает пустой строкой
                             */
                            value: React.PropTypes.number.isRequired,

                            /*Подсказка tooltip при наведении по данной ячейке. Не обязательный*/
                            tip:React.PropTypes.string

                        })).isRequired,

                    purpose: React.PropTypes.shape({

                        /*Цель для данного измерения*/
                        value: React.PropTypes.number.isRequired,
                        /*Сколько осталось до цели*/
                        toPurpose: React.PropTypes.number.isRequired,
                        /*Достигнутый результат человоком:  Разница между целью и начальным значением*/
                        result: React.PropTypes.number,
                        /*Подсказка при навадении на ячейку*/
                        tip:React.PropTypes.string

                    }).isRequired

                })
            ).isRequired,

            /*****************************************************
             *ШИРИНА ТАБЛИЦЫ (ИСКЛЮЧАЯ КОЛОНКУ ИЗМЕРЕНИЕ)
             *****************************************************/
            widthTable: React.PropTypes.number.isRequired,

            /*****************************************************
             *СОБЫТИЯ РЕДАКТИРОВАНИЯ СТРОК
             *****************************************************/

            /*
             Событие: при изменении значения ячейки со значением измерения
             Передается объект со следующими параметрами:
             {
             id: id_измерения    // см  measuring: React.PropTypes.shape
             date: 'дата ячейки'  //см result: React.PropTypes.shape
             oldValue: Предыдущее_значение
             newValue: Новое_значение
             }
             * */
            onMeasuringChange: React.PropTypes.func.isRequired,

            /*
             Событие: при изменении значения цели
             Передается объект со следующими параметрами:
             {
             id: id_измерения    // см  measuring: React.PropTypes.shape
             oldValue: Предыдущее_значение
             newValue: Новое_значение
             }
             * */
            onPurposeChange: React.PropTypes.func.isRequired,

            /*****************************************************
             *ПРОЧИЕ СОБЫТИЯ
             *****************************************************/
            /*Событие: Нажата ячейка "Добавить измерение"*/
            onAddMeasuring: React.PropTypes.func.isRequired,
            labelAddMeasuring: React.PropTypes.string.isRequired,
            /*
             Событие: При выборе измерений
             Передается массив с id выбранных измерений: [15,16]
             */
            onSelectedMeasuring: React.PropTypes.func.isRequired

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {


            return (
                React.createElement("div", {className: "MeasuringTable"}, 
                "реализовать компонет:", 
                React.createElement("pre", null, JSON.stringify(this.props, undefined, 4))
                )
            );
        }
    });

    return lMeasuringTable;
});

