/**
 * Компонент, кторый определяет ширину ViewPort
 * ViewPort - это область, куда помещено приложение.
 * Т.е. например
 *      - в iFrame в Вконтакте, FaceBook, на партнерсокм сайте
 *      - в сетку сайта, т.е. приложение не занисает всю ширину
 *      - приложение занимает всю ширину
 *
 *      Для мобильный устаройствах долэжен стоять тег <meta name="viewport" content="width=device-width, initial-scale=1">
 *       иначе ширина ViewPort не будет меньше 980, хотя фактически меньше
 *              https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
 *              http://www.quirksmode.org/mobile/metaviewport/notes.html#t00
 *
 *  Поддерживаемые разрешения экранов
 *
 *  Ширина устройства     Название              Ширина приложения      Пример
 *  1. 1000 px и болеее      ViewPortDesktop       1000px                 desktop, iPad (Tablet), VK
 *  2. от 760 до 999 px      ViewPortTablet        760px  (тянется?)      facebook, OK, Mail.ru, Tablet
 *  3. от 480 до 759         ViewPortPhone         тянется                phone
 *  4. от 320 до 479         ViewPortPhoneSmall    тянется                phone
 *
 *  todo Также данный компонент должен определять устройство
 *  Desktop
 *  Mobile
 *  Tablet
 *
 *  todo Определить ретину
 */

!function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([
            'components/Common/ViewPort/ResizeElementHelper'
        ], factory);
    }
}(this, function() {
    var ViewPortConst = {
        ViewPortDesktop: 'ViewPortDesktop',
        ViewPortTablet: 'ViewPortTablet',
        ViewPortPhone: 'ViewPortPhone',
        ViewPortPhoneSmall: 'ViewPortPhoneSmall'
    };

    window._ViewPortConst = ViewPortConst;
    var lViewPort = React.createClass({displayName: 'lViewPort',

        componentDidMount: function () {
            window._addResizeListener(this.refs.ViewPortRef.getDOMNode(), this._onResize);
        },
        componentWillUnmount: function(){
            window._removeResizeListener (this.refs.ViewPortRef.getDOMNode(), this._onResize);
        },
        getInitialState: function(){
          return {/*width: 0, count:0,*/ viewPort: ''};
        },
        getDefaultProps: function(){
            return {
                //name: 'Default',
                elementCSS: null
            }
        },
        _onResize: function(){
            var lWidthNew = this.refs.ViewPortRef.getDOMNode().offsetWidth;
            var lNewViewPort = this._getViewPortName(lWidthNew);
            if(this.state.viewPort !== lNewViewPort ){
                this.setState({viewPort:lNewViewPort});
                if(this.props.elementCSS !==null){
                    this.props.elementCSS.className = "viewPort_"+lNewViewPort;
                }
            }

        },
        _getViewPortName:function(pWidth){
            if(pWidth>=1000){
                return ViewPortConst.ViewPortDesktop;
            }else if(pWidth>=760){
                return ViewPortConst.ViewPortTablet;
            }else if(pWidth>=480){
                return ViewPortConst.ViewPortPhone;
            }else{
                return ViewPortConst.ViewPortPhoneSmall;
            }
        },

        render: function() {

            var lDevStyle = {
                borderWidth: 1,
                borderColor: 'black',
                borderStyle: 'solid',
                marginTop: 100
            };
            return (
                React.createElement("div", {ref: "ViewPortRef", style: lDevStyle}, 
                    "viewPort: ", this.state.viewPort
                )
            );
        }

        //_getIdOfElement: function(){
        //  return 'ViewPortRef_'+this.props.name;
        //}
    });

    return lViewPort;
});

