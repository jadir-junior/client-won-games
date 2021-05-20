import * as S from './styles'

import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { ExitToApp } from '@styled-icons/material-outlined/ExitToApp'
import { FormatListBulleted } from '@styled-icons/material-outlined/FormatListBulleted'
import Link from 'next/link'
import { signOut } from 'next-auth/client'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'}>
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'}>
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <S.Link role="button" onClick={() => signOut()}>
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
