import request from '@/utils/request'
import Qs from 'qs'
import store from '@/store'
export function fetchVendorList(query) {
  return request({
    url: 'http://47.104.226.188:8009/api/v1/vendor?token=' + store.getters.token,
    method: 'get',
    params: query
  })
}
export function deleteVendor(id) {
  return request({
    url: 'http://47.104.226.188:8009/api/v1/vendor?token=' + store.getters.token,
    method: 'delete',
    params: { id: id }
  })
}

export function createVendor(obj) {
  return request({
    url: 'http://47.104.226.188:8009/api/v1/vendor?token=' + store.getters.token,
    method: 'post',
    data: Qs.stringify(obj)
  })
}
