export default async function getIP() {
  try {
    const response = await fetch('http://api.ipify.cn?format=json')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error('Error fetching IP:', error)
    return null
  }
}
