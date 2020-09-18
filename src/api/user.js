import request from '@/utils/request'
import Qs from 'qs'
export function login(data) {
  return request({
    url: 'http://47.104.226.188:8009/login',
    method: 'post',
    data: Qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: 'http://47.104.226.188:8009/api/v1/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
