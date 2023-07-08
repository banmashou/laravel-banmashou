import uploadApi from '@/apis/uploadApi'
import Editor from '@toast-ui/editor'

export default class {
	editor: Editor
	isFullscreen: boolean = false
	constructor(el: string, initialValue: string, public height: string) {
		this.editor = new Editor({
			el: document.querySelector(el)!,
			initialEditType: 'markdown',
			previewStyle: 'vertical',
			height: height,
			initialValue: initialValue,
			toolbarItems: this.toolbar() as [],
		})
		this.ImageHook()
	}

	private toolbar() {
		return [
			['heading', 'bold', 'italic', 'strike'],
			['hr', 'quote'],
			['ul', 'ol', 'task', 'indent', 'outdent'],
			['table', 'image', 'link'],
			['code', 'codeblock'],
			[
				{
					el: this.fullscreen(),
					command: 'fullscreen',
					tooltip: '全屏',
				},
			],
		]
	}

	private fullscreen() {
		const button = document.createElement('button') as HTMLButtonElement
		button.className = 'fas fa-border-all'
		button.style.cursor = 'pointer'
		// button.innerHTML = '全屏'
		button.style.margin = '0'
		button.style.fontSize = '1rem'

		// 点击按钮进入编辑器全屏
		button.addEventListener('click', () => {
			this.toggleFullscreen()
		})

		// 按下esc键退出编辑器全屏
		document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
			if (event.key == 'Escape' && this.isFullscreen) {
				this.toggleFullscreen()
			}
		})
		return button
	}

	private toggleFullscreen() {
		const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
		ui.classList.toggle('fullscreen')
		this.isFullscreen = !this.isFullscreen
		if (this.isFullscreen == false) {
			this.editor.setHeight(this.height)
		} else {
			this.editor.setHeight('100vh')
		}
		this.editor.focus()
	}

	private ImageHook() {
		this.editor.removeHook('addImageBlobHook')
		this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
			const form = new FormData()
			form.append('file', blob, blob.name)

			const response = await uploadApi.uploadImage(form)
			callback(response.data.url, blob.name)
		})
	}
}
