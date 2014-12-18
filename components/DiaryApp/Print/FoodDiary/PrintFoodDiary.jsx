!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'css!components/DiaryApp/Print/FoodDiary/PrintFoodDiary.css'
        ], factory);
    }
}(this, function() {
    var PrintFoodDiary = React.createClass({

        propTypes: {
            optionalString: React.PropTypes.object
        },
        getDefaultProps: function(){
            return {items:[]}
        },
        render: function() {

            var rows = [];

            if(this.props.items.length===0){
                return (<div className="PrintFoodDiary">Нет данных</div>);
            }
            for(var i=0;i<this.props.items.length;i++ ){
                rows.push(<tr key={i}>
                    <td>{this.props.items[i]['name']}</td>
                    <td>{this.props.items[i]['weight']}<span className="PrintFoodDiary_Item_Unit">{this.props.items[i]['unit']}</span></td>
                    <td>{this.props.items[i]['calorie']}</td>
                    <td>{this.props.items[i]['protein']}</td>
                    <td>{this.props.items[i]['fat']}</td>
                    <td>{this.props.items[i]['carb']}</td>
                </tr>);
            }

            return (
                <div className="PrintFoodDiary">
                    <table>
                        <col width="50%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <tr>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Колорийность</th>
                            <th>Белки</th>
                            <th>Жиры</th>
                            <th>Углеводы</th>
                        </tr>
                        {rows}
                    </table>



                </div>
            );
        }
    });

    return PrintFoodDiary;
});

