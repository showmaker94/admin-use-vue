/**
 * example:
 * 
 * console.log(param2Obj(url))
 */

function param2Obj(url) {
  if (!url) {
    return null
  }
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export {
    param2Obj  
}

