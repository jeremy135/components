!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'vendor/react-router/dist/react-router.min',
            'components/Dev/MainPage/MainPage',
            'components/Dev/DevTopMenu/DevTopMenu',
            'components/Common/ViewPort/ViewPort',
            /**
             * Компоненты для печати
             */
            'components/DiaryApp/Print/FoodDiary/spec/SpecPrintFoodDiary',
            'components/Dev/DevHighlight/DevHighlight',
            'components/DiaryApp/FoodDiary/Desktop/Report/NutrientsBalanceDiagram/spec/SpecNutrientsBalanceDiagram',
            'components/DiaryApp/Measuring/Desktop/MeasuringTable/spec/SpecMeasuringTableDesktop'

        ], factory);
    }
}(this, function(pRouter,
                 MainPage,
                 DevTopMenu,
                 ViewPort,
                 SpecPrintFoodDiary,
                 DevHighlight,
                 SpecNutrientsBalanceDiagram,
                 SpecMeasuringTableDesktop) {



    var Route = pRouter.Route;
    var DefaultRoute = pRouter.DefaultRoute;
    var RouteHandler = pRouter.RouteHandler;
    var Link = pRouter.Link;




    var App = React.createClass({displayName: 'App',
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(DevTopMenu, null), 
                    
                    /* this is the important part */
                    React.createElement(RouteHandler, null), 
                    React.createElement(ViewPort, {elementCSS: document.body})
                )
            );
        }
    });


    var routes = (

        React.createElement(Route, {handler: App, path: "/"}, 
            React.createElement(DefaultRoute, {handler: MainPage, name: "Home"}), 
            React.createElement(Route, {path: "/SpecPrintFoodDiary/", handler: SpecPrintFoodDiary, name: "SpecPrintFoodDiary"}), 
            React.createElement(Route, {path: "/SpecNutrientsBalanceDiagram/", handler: SpecNutrientsBalanceDiagram, name: "SpecNutrientsBalanceDiagram"}), 
            React.createElement(Route, {path: "/SpecMeasuringTableDesktop/", handler: SpecMeasuringTableDesktop, name: "SpecMeasuringTableDesktop"})


        )
    );

    pRouter.run(routes, function (Handler) {
        React.render(React.createElement(Handler, null), document.getElementById('mainPlace'));
    });

    //var ar = [];
    //React.render(<PrintFoodDiary items={ar}/>, document.getElementById('mainPlace'));



    return {};
});