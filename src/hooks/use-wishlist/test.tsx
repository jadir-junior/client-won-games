import { WishlistProvider, useWishlist } from '.'
import { wishlistItems, wishlistMock } from './mock'

import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'token', user: { email: 'email@email.com' } }
useSession.mockImplementation(() => [session])

describe('useWishList', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    // it start loading data
    expect(result.current.loading).toBe(true)

    // wait until get the data
    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1]
    ])
  })
})
