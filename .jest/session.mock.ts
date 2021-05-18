// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'token', user: { email: 'email@email.com' } }
useSession.mockImplementation(() => [session])
