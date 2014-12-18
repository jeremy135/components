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




    var App = React.createClass({
        render: function () {
            return (
                <div>
                    <DevTopMenu />
                    
                    {/* this is the important part */}
                    <RouteHandler/>
                    <ViewPort elementCSS={document.body}/>
                </div>
            );
        }
    });


    var routes = (

        <Route handler={App} path="/">
            <DefaultRoute handler={MainPage} name="Home"/>
            <Route path="/SpecPrintFoodDiary/" handler={SpecPrintFoodDiary} name="SpecPrintFoodDiary"></Route>
            <Route path="/SpecNutrientsBalanceDiagram/" handler={SpecNutrientsBalanceDiagram} name="SpecNutrientsBalanceDiagram"></Route>
            <Route path="/SpecMeasuringTableDesktop/" handler={SpecMeasuringTableDesktop} name="SpecMeasuringTableDesktop"></Route>


        </Route>
    );

    pRouter.run(routes, function (Handler) {
        React.render(<Handler/>, document.getElementById('mainPlace'));
    });

    //var ar = [];
    //React.render(<PrintFoodDiary items={ar}/>, document.getElementById('mainPlace'));



    return {};
});