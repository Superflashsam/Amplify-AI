const TOKEN_KEY = 'csrf_token'

export const ensureCsrfToken = () => {
  const existing = getCookie(TOKEN_KEY)
  if (existing) return existing
  const token = crypto.getRandomValues(new Uint32Array(4)).join('-')
  setCookie(TOKEN_KEY, token)
  return token
}

export const validateCsrf = (token: string | null) => {
  const current = getCookie(TOKEN_KEY)
  return Boolean(token && current && token === current)
}

const setCookie = (name: string, value: string) => {
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${name}=${value}; Path=/; SameSite=Strict${secure}`
}

const getCookie = (name: string) => {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return m ? m[2] : null
}

