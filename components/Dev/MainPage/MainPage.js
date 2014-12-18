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
    var lMainPage = React.createClass({displayName: 'lMainPage',

        propTypes: {

        },
        getDefaultProps: function(){
            return {}
        },
        render: function() {
            return (
                React.createElement("div", {className: "MainPage"}, 
                    React.createElement("p", null, "Компоненты:"), 
                    React.createElement("ul", null, 

                        React.createElement("li", null, "Вес и измерения:", 

                            React.createElement("ul", null, 
                                React.createElement("li", null, "Desktop", 

                                    React.createElement("ul", null, 
                                        React.createElement("li", null, React.createElement(Link, {to: "SpecMeasuringTableDesktop"}, "Таблица измерений"))
                                    )

                                )
                            )

                        ), 

                        React.createElement("li", null, "Дневник питания:", 

                            React.createElement("ul", null, 
                                React.createElement("li", null, "Desktop", 

                                    React.createElement("ul", null, 
                                        React.createElement("li", null, React.createElement(Link, {to: "SpecNutrientsBalanceDiagram"}, "Диаграмма нутриентного баланса"))
                                    )

                                )
                            )

                        ), 

                        React.createElement("li", null, "Печать", 

                            React.createElement("ul", null, 
                                React.createElement("li", null, React.createElement(Link, {to: "SpecPrintFoodDiary"}, "Дневник питания"))
                            )

                        )
                    ), 

                    React.createElement("hr", null), 

                    React.createElement("h1", null, "Замечания к процессу разработки"), 
                    React.createElement("img", {src: "/components/components/Dev/MainPage/images/workFlow.png"})
                )

            );
        }
    });

    return lMainPage;
});

