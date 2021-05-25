import * as S from './styles'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import React, { useEffect, useState } from 'react'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'

import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import Link from 'next/link'
import { PaymentIntent } from '@stripe/stripe-js'
import { Session } from 'next-auth'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useCart } from 'hooks/use-cart'
import { useRouter } from 'next/router'

export type PaymentoFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentoFormProps) => {
  const { items } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const { push } = useRouter()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
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
        } else {
          // senão o paymentIntent foi valido
          // setClientSecret
          setFreeGames(false)
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault()
      setLoading(true)

      // se for freeGames
      if (freeGames) {
        // salva no banco
        // bater na API /orders
        await saveOrder()

        // rediriciona para o success
        push('/success')
      }

      const payload = await stripe!.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements!.getElement(CardElement)!
        }
      })
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`)
        setLoading(false)
      } else {
        setError(null)
        setLoading(false)

        // salvar a compra no banco do Strapi
        // bater na API /orders
        await saveOrder(payload.paymentIntent)

        // rediriciona para o pagina de Sucesso
        push('/success')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit} noValidate>
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
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continue shopping
            </Button>
          </Link>

          <Button
            type="submit"
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
