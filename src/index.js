var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var EasyLoading = (function () {
    function EasyLoading(config) {
        if (config === void 0) { config = null; }
        this._config = {
            text: 'Loading',
            id: '_easy-loading',
            textId: '_easy-loading-text',
            extraClass: '_easyLoadingCustomClass',
            loadingType: 'facebook',
            styleId: '_easy-loading-style'
        };
        this._generalStyles = "\n._easy-loading {\n        width: 100vw;\n        height: 100vh;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        flex-direction: column;\n        background-color: rgba(0, 0, 0, 0.7);\n        position: fixed;\n        z-index: 9999;\n        top: 0;\n        left: 0;\n        display: none;\n}\n._easy-loading.active {\n    display: flex;\n}\n\n._easy-loading p {\n    font-family: Arial, sans-serif;\n    color: white;\n}\n    ";
        this._loadingOptions = {
            facebook: {
                style: "\n.lds-facebook {\n  /* change color here */\n  color: white\n}\n.lds-facebook,\n.lds-facebook div {\n  box-sizing: border-box;\n}\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: currentColor;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0s;\n}\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n            ",
                html: "<div class=\"lds-facebook\"><div></div><div></div><div></div></div>"
            },
            heart: {
                style: "\n.lds-heart {\n  color: white\n}\n.lds-heart,\n.lds-heart div,\n.lds-heart div:after,\n.lds-heart div:before {\n  box-sizing: border-box;\n}\n.lds-heart {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  transform: rotate(45deg);\n  transform-origin: 40px 40px;\n}\n.lds-heart div {\n  top: 28px;\n  left: 28px;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  background: currentColor;\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.lds-heart div:after,\n.lds-heart div:before {\n  content: \" \";\n  position: absolute;\n  display: block;\n  width: 32px;\n  height: 32px;\n  background: currentColor;\n}\n.lds-heart div:before {\n  left: -24px;\n  border-radius: 50% 0 0 50%;\n}\n.lds-heart div:after {\n  top: -24px;\n  border-radius: 50% 50% 0 0;\n}\n@keyframes lds-heart {\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}",
                html: "<div class=\"lds-heart\"><div></div></div>"
            },
            spinner: {
                style: "\n.lds-spinner {\n  /* change color here */\n  color: white\n}\n.lds-spinner,\n.lds-spinner div,\n.lds-spinner div:after {\n  box-sizing: border-box;\n}\n.lds-spinner {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3.2px;\n  left: 36.8px;\n  width: 6.4px;\n  height: 17.6px;\n  border-radius: 20%;\n  background: currentColor;\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}",
                html: "<div class=\"lds-spinner\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>"
            }
        };
        if (config === null || config === undefined) {
            this._config = __assign(__assign({}, this._config), config);
        }
        this.createElement();
    }
    EasyLoading.prototype.setConfig = function (config) {
        this._config = __assign(__assign({}, this._config), config);
        this.deletesElement();
        this.createElement();
    };
    EasyLoading.prototype.deletesElement = function () {
        var el = document.getElementById(this._config.id);
        if (el !== null) {
            el.remove();
        }
        var style = document.getElementById(this._config.styleId);
        if (style !== null) {
            style.remove();
        }
    };
    EasyLoading.prototype.createElement = function () {
        var el = document.getElementById(this._config.id);
        if (el === null) {
            var div = document.createElement('div');
            div.id = this._config.id;
            div.classList.add('_easy-loading');
            div.classList.add(this._config.extraClass);
            div.innerHTML = this._loadingOptions[this._config.loadingType].html + "<p id=\"".concat(this._config.textId, "\">").concat(this._config.text, "</p>");
            document.body.insertAdjacentHTML("afterend", div.outerHTML);
            document.body.insertAdjacentHTML("afterend", "<style id=\"".concat(this._config.styleId, "\">").concat(this._generalStyles, " ").concat(this._loadingOptions[this._config.loadingType].style, "</style>"));
        }
    };
    EasyLoading.prototype.show = function (text) {
        if (text === void 0) { text = null; }
        if (text !== null) {
            document.getElementById(this._config.textId).innerText = text;
        }
        var el = document.getElementById(this._config.id);
        if (el !== null) {
            el.classList.add('active');
        }
    };
    EasyLoading.prototype.hide = function () {
        var el = document.getElementById(this._config.id);
        if (el !== null) {
            el.classList.remove('active');
        }
    };
    return EasyLoading;
}());
try {
    if (module !== undefined && module !== null) {
        module.exports = new EasyLoading();
    }
}
catch (e) {
}
//# sourceMappingURL=index.js.map