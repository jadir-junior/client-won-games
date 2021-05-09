import { getLocalStorage, setLocalStorage } from '.'

describe('getLocalStorage()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getLocalStorage('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setLocalStorage()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localStorage', () => {
    setLocalStorage('cartItems', ['1', '2'])

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
