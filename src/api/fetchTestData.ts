import jsonData from '../../mock/data.json'

export const fetchTestData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return jsonData
}