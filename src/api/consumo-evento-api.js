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
    throw new Error('could not fetch SignIn')
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
    throw new Error('could not fetch signUp')
  }
}
export const getUser = async (id, token) => {
  try {
    const response = await fetch(`${apiUrl}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.json()
  } catch {
    throw new Error('could not fetch getUser')
  }
}
export const getWalletUser = async (id, token) => {
  try {
    const response = await fetch(`${apiUrl}/wallets/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.json()
  } catch {
    throw new Error('could not fetch getWalletUser')
  }
}
export const putWalletCode = async (id, token) => {
  try {
    const response = await fetch(`${apiUrl}/wallets/code/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.json()
  } catch {
    throw new Error('could not fetch putWalletCode')
  }
}
export const getListTransactions = async (id_wallet, token) => {
  try {
    const response = await fetch(`${apiUrl}/transactions/wallet/${id_wallet}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.json()
  } catch {
    throw new Error('could not fetch SignIn')
  }
}