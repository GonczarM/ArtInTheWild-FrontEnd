import sendRequest from './send-request';
const BASE_URL = '/api/murals';

export function createMural(muralData) {
  return sendRequest(BASE_URL, 'POST', muralData);
}

export function editMural(muralData, muralId){
  return sendRequest(`${BASE_URL}/${muralId}`, 'PUT', muralData)
}

export function searchMurals(searchData){
  return sendRequest(`${BASE_URL}/search/${searchData}`)
}

export function deleteMural(muralId){
  return sendRequest(`${BASE_URL}/${muralId}`, 'DELETE')
}

export function getMural(muralId){
  return sendRequest(`${BASE_URL}/${muralId}`)
}

export function addPhoto(photoData, muralId){
  return sendRequest(`${BASE_URL}/photo/${muralId}`, 'PUT', photoData)
}

export function addAPIMural(photoData, muralId){
  return sendRequest(`${BASE_URL}/${muralId}`, 'POST', photoData)
}
