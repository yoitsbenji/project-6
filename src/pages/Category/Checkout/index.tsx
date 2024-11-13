import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { RootReducer } from '../../../store'
import { usePurchaseMutation } from '../../../services/api'
import { clear } from '../../../store/reducers/cart'

import { FList, Line1 } from './styles'
import { StandardClick } from '../../../components/Button/styles'
import { Card } from '../Products/styles'

const Checkout = () => {
  const [pay, setPay] = useState(false)
  const { cartItems } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      optional: '',
      cardFullName: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardFullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(12, 'O campo precisa ser de pelo menos 12 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ser de pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expireMonth: Yup.string()
        .min(2, 'O mês de expiração precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expireYear: Yup.string()
        .min(4, 'O ano de expiração precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipcode: values.cep,
            number: Number(values.number),
            complement: values.optional
          }
        },
        payment: {
          card: {
            name: values.cardFullName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: cartItems.map((item) => ({
          id: item.id,
          price: item.price as number
        }))
      })
      if (isSuccess) {
        console.log('Compra realizada com sucesso:', data)
      }
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (cartItems.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const hasChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (hasChanged && isInvalid) return message
    return ''
  }

  return (
    <>
      {isSuccess && data ? (
        <Card title="Obrigado pela compra!">
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            Número do pedido: {data.orderId}
          </p>
          <br />
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <br />
          </p>
        </Card>
      ) : (
        <>
          {pay ? (
            <form onSubmit={form.handleSubmit}>
              <FList>
                <h2>Pagamento</h2>
                <li>
                  <label htmlFor="text">Nome do cartão</label>
                  <input
                    value={form.values.cardFullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="cardFullName"
                    id="cardFullName"
                    type="text"
                  />
                  <small>
                    {getErrorMessage('cardFullName', form.errors.cardFullName)}
                  </small>
                </li>
                <Line1>
                  <li>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="cardNumber"
                      id="cardNumber"
                      type="number"
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </li>
                  <li>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="cvv"
                      id="cvv"
                      type="number"
                    />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                  </li>
                </Line1>
                <Line1>
                  <li>
                    <label htmlFor="expireMonth">Mês do vencimento</label>
                    <input
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="expireMonth"
                      id="expireMonth"
                      type="number"
                    />
                    <small>
                      {getErrorMessage('expireMonth', form.errors.expireMonth)}
                    </small>
                  </li>
                  <li>
                    <label htmlFor="expireYear">Ano do vencimento</label>
                    <input
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="expireYear"
                      id="expireYear"
                      type="number"
                    />
                    <small>
                      {getErrorMessage('expireYear', form.errors.expireYear)}
                    </small>
                  </li>
                </Line1>
                <StandardClick
                  type="submit"
                  onClick={form.handleSubmit}
                  title="Clique para finalizar seu pedido"
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                </StandardClick>
              </FList>
            </form>
          ) : (
            <form onSubmit={form.handleSubmit}>
              <FList>
                <h2>Entrega</h2>
                <li>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="fullName"
                    value={form.values.fullName}
                    id="fullName"
                    type="text"
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </li>
                <li>
                  <label htmlFor="address">Endereço</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="address"
                    value={form.values.address}
                    id="address"
                    type="text"
                  />
                  <small>
                    {getErrorMessage('address', form.errors.address)}
                  </small>
                </li>
                <li>
                  <label htmlFor="city">Cidade</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="city"
                    value={form.values.city}
                    id="city"
                    type="text"
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </li>
                <Line1>
                  <li>
                    <label htmlFor="cep">CEP</label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="cep"
                      value={form.values.cep}
                      id="cep"
                      type="text"
                    />
                    <small>{getErrorMessage('cep', form.errors.cep)}</small>
                  </li>
                  <li>
                    <label htmlFor="number">Número</label>
                    <input
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      name="number"
                      value={form.values.number}
                      id="number"
                      type="text"
                    />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </li>
                </Line1>
                <li>
                  <label htmlFor="optional">Complemento (opcional)</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="optional"
                    value={form.values.optional}
                    id="optional"
                    type="text"
                  />
                </li>
              </FList>
              <StandardClick
                type="submit"
                title="Clique para continuar para o pagamento"
                onClick={() => {
                  setPay(true)
                }}
              >
                Continuar com o pagamento
              </StandardClick>
            </form>
          )}
        </>
      )}
    </>
  )
}

export default Checkout
