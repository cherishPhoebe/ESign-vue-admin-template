import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getRoles(query) {
  return request({
    url: '/role/getRoles',
    method: 'get',
    params: query
  })
}

export function editRole(id, data) {
  return request({
    url: '/role/editRole',
    method: 'post',
    data
  })
}
