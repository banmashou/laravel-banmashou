/**
 * @description 响应结果类型
 * @author 斑马兽
 * @interface ResponseResult
 * @template T
 */
interface ResponseResult<T> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}
