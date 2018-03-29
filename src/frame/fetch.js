/**
 *  Created by daiwenjuan on 2018/1/3 下午7:19.
 */
export function request() {
  return fetch(' http://192.168.1.53:8081/listUsers').then(response => {
    return response.json()
  }).then(json => {
    return json
  })
}