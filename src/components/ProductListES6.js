"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ProductList = function(_Component) {
    _inherits(ProductList, _Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        console.log("new ProductList()");

        var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this));

        console.log("this:", _this); //es el objeto ProductList        
        //this.addToCart.bind(this) hace que se remplace el "this" por el objeto vinculado
        //en este caso otro "this"
        //creo que se hace este bind para que se pueda renderizar sino en el render no se contaria con 
        //addToCart
        //this.addToCart = this.addToCart.bind(this) ?? con esto comentado sigue funcionando

        _this.oState = {
            arProducts: [{
                id: 1,
                name: "Hipster Ultimate",
                price: 299,
                image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg"
            }, {
                id: 2,
                name: "On Motion Live",
                price: 99,
                image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg"
            }, {
                id: 3,
                name: "Underground Max",
                price: 149,
                image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg"
            }] //this.oState
        };
        return _this;
    } //constructor

    _createClass(ProductList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("ProductList.render()");
            return React.createElement(
                "div", {
                    style: oStyles.products
                },
                this.oState.arProducts.map(function(oProduct) {
                    return React.createElement(
                        "div", {
                            className: "thumbnail",
                            style: oStyles.product,
                            key: oProduct.id
                        },
                        React.createElement("img", {
                            src: oProduct.image,
                            alt: oProduct.name
                        }),
                        React.createElement(
                            "div", {
                                className: "caption"
                            },
                            React.createElement(
                                "h4",
                                null,
                                oProduct.name
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    Button, {
                                        bsStyle: "primary",
                                        onClick: function onClick() {
                                            return _this2.addToCart(oProduct);
                                        },
                                        role: "button",
                                        disabled: oProduct.inventory <= 0
                                    },
                                    "$",
                                    oProduct.price,
                                    " ",
                                    React.createElement(Glyphicon, {
                                        glyph: "shopping-cart"
                                    })
                                )
                            )
                        )
                    );
                })
            ); //return
        } //render

    }, {
        key: "addToCart",
        value: function addToCart(oProduct) {
            console.log("ProductList.addToCart launched", "oProduct", oProduct);
            var oAction = fnAcAddToCart(oProduct);

            oStore.dispatch(oAction);
        } //addToCart

    }]);

    return ProductList;
}(Component); //ProductList