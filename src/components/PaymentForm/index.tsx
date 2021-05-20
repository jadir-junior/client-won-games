import * as S from './styles'

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import { useEffect, useState } from 'react'

import Button from 'components/Button'
import { CardElement } from '@stripe/react-stripe-js'
import Heading from 'components/Heading'
import { Session } from 'next-auth'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { createPaymentIntent } from 'utils/stripe/methods'
import { useCart } from 'hooks/use-cart'

export type PaymentoFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentoFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        // enviar os items do carrinho
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })
        // se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          return
        }
        // se eu receber um erro
        // setError
        if (data.error) {
          setError(error)
          return
        }
        // senão o paymentIntent foi valido
        // setClientSecret
        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        {freeGames ? (
          <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
        ) : (
          <CardElement
            options={{
              hidePostalCode: true,
              style: { base: { fontSize: '16px' } }
            }}
            onChange={handleChange}
          />
        )}

        {error && (
          <S.Error>
            <ErrorOutline size={20} /> {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={!freeGames && (disabled || !!error)}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
