const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  return JSON.parse(window.localStorage.getItem(`${APP_KEY}_${key}`)!)
}

export function setStorageItem(key: string, data: string[]) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  return window.localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(data))
}
