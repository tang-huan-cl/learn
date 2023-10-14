


## css加载会阻塞DOM树的解析和渲染吗




css加载会直接影响网页的渲染，因为只有css加载完毕，构建完 CSSOM 后，渲染树(Render Tree)才会构建，然后渲染成位图

如果html中有加载script的话，还会间接影响DOM树的解析，因为javascript的下载、解析和执行和阻塞DOM树的解析，而javascript中有可能访问CSSOM，比如 Element.getBoundingClientRect，因此CSSOM构建完毕以后才会开始javascript的执行，间接阻塞dom树的解析