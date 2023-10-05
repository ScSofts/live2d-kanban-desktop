
class PageSwitcher{
    /**
     * 传入pages构造切页器
     * @param {string[]} pages 需要切页的ID
     */
    constructor(pages) {
        this.pages = pages.map(v => document.getElementById(v));
        this.page_name = pages;
        this.page_count = pages.length;
    }

    /**
     * 切换到某一页
     * @param {number} page
     */
    switchTo(page){
        if(typeof page !== "number"){
            console.error("错误的参数: page不是数值")
            return
        }
        
        if(page < 0 || page >= this.page_count){
            console.error("错误的参数: page越界")
            return
        }

        for (const page_element of this.pages) {
            page_element.style.display = "none"
        }
        
        this.pages[page].style.display = "block"
    }

    /**
     * 切换到某id的页面
     * @param name
     */
    switchId(name){
        let index = this.page_name.findIndex(v => v === name);
        if(index === -1){
            console.error("错误的参数: name不存在");
        }
        this.switchTo(index)
    }
}