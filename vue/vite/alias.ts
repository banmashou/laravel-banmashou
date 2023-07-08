/**
 * @description 配置路径别名
 * @author: 斑马兽
 */
import path from 'path'
import { AliasOptions } from 'vite'
const alias = {
	'@': path.resolve(__dirname, '../src'),
	'#': path.resolve(__dirname, '../types'),
} as AliasOptions

export default alias
