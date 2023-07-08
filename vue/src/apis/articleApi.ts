import { http } from '@/plugins/axios'

export interface Article {
  id: number
  title: string
  content: string
}

class articleApi {
  article() {
    return http.request<Article[]>({
      url: 'article',
      method: 'GET',
    })
  }
}

export default new articleApi()
