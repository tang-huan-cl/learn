// 使用命名空间包裹我们的代码并把Page类导出出去
namespace Home {
    class Header {
        constructor() {
            let dom = document.createElement('div')
            dom.innerHTML = 'Header'
            document.body.append(dom)
        }
    }
    class Content {
        constructor() {
            let dom = document.createElement('div')
            dom.innerHTML = 'Content'
            document.body.append(dom)
        }
    }
    class Footer {
        constructor() {
            let dom = document.createElement('div')
            dom.innerHTML = 'Footer'
            document.body.append(dom)
        }
    }
    export class Page {
        constructor() {
            new Header()
            new Content()
            new Footer()
        }
    }
}