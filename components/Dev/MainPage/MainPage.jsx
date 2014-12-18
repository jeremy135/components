!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'vendor/react-router/dist/react-router.min',
            'css!components/Dev/MainPage/MainPage.css'
        ], factory);
    }
}(this, function(pRouter) {

    var Route = pRouter.Route;
    var DefaultRoute = pRouter.DefaultRoute;
    var RouteHandler = pRouter.RouteHandler;
    var Link = pRouter.Link;
    var lMainPage = React.createClass({

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                <div className="MainPage">
                    <p>Компоненты:</p>
                    <ul>

                        <li>Вес и измерения:

                            <ul>
                                <li>Desktop

                                    <ul>
                                        <li><Link to="SpecMeasuringTableDesktop">Таблица измерений</Link></li>
                                    </ul>

                                </li>
                            </ul>

                        </li>

                        <li>Дневник питания:

                            <ul>
                                <li>Desktop

                                    <ul>
                                        <li><Link to="SpecNutrientsBalanceDiagram">Диаграмма нутриентного баланса</Link></li>
                                    </ul>

                                </li>
                            </ul>

                        </li>

                        <li>Печать

                            <ul>
                                <li><Link to="SpecPrintFoodDiary">Дневник питания</Link></li>
                            </ul>

                        </li>
                    </ul>

                    <hr/>

                    <h1>Замечания к процессу разработки</h1>
                    <img src="/components/components/Dev/MainPage/images/workFlow.png"/>
                </div>

            );
        }
    });

    return lMainPage;
});

