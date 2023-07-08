import wangEditor from 'wangEditor'
export default class {
  editor: wangEditor
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el)
    // 设置编辑区域高度
    // this.editor.config.height = config.height
    // 配置 server 接口地址
    // this.editor.config.uploadImgServer = '/upload-img'
    Object.assign(this.editor.config, config)
    // 配置 onchange 回调函数
    this.editor.config.onchange = callback
    this.editor.config.uploadImgHooks = this.uploadImage()
    this.editor.create()
    // 重新设置编辑器内容
    this.editor.txt.html(config.modelValue)
  }

  uploadImage() {
    return {
      // 图片上传并返回了结果，想要自己把图片插入到编辑器中
      // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
      customInsert: function (insertImgFn: Function, result: any) {
        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn(result.result.url)
      },
    }
  }
}
