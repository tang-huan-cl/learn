"use strict";
// 使用命名空间包裹我们的代码并把Page类导出出去
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var dom = document.createElement('div');
            dom.innerHTML = 'Header';
            document.body.append(dom);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var dom = document.createElement('div');
            dom.innerHTML = 'Content';
            document.body.append(dom);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var dom = document.createElement('div');
            dom.innerHTML = 'Footer';
            document.body.append(dom);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
