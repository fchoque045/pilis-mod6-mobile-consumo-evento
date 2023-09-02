import Constants from 'expo-constants'

const apiUrl = Constants.manifest.extra.API_URL

export const signIn = async (email, password) => {
  try {
    const response = await fetch(`${apiUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}
export const signUp = async (data) => {
  try {
    const response = await fetch(`${apiUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}
export const getUser = async (id, token) => {
  try {
    const response = await fetch(`${apiUrl}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}