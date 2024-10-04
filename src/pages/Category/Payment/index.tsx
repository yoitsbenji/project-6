import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FList, Line1 } from '../Checkout/styles'
import { usePaymentMutation } from '../../../services/api'

export const Pay = () => {
  const [payment, { isError, isLoading, isSuccess, data }] =
    usePaymentMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo é obrigatório'),
      cardNumber: Yup.string()
        .min(12, 'O número precisa ser de pelo menos 12 caracteres')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'O número precisa ser de pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      expireMonth: Yup.string()
        .min(4, 'A data de expiração precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório'),
      expireYear: Yup.string()
        .min(4, 'O ano de expiração precisa ter pelo menos 4 caracteres')
        .required('Campo é obrigatório')
    }),
    onSubmit: (values) => {
      payment({
        payment: {
          card: {
            name: values.fullName,
            number: Number(values.cardNumber),
            code: Number(values.cvv),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const hasChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (hasChanged && isInvalid) return message
    return ''
  }

  return (
    <FList>
      <h2>Pagamento</h2>
      <li>
        <label htmlFor="text">Nome do cartão</label>
        <input
          value={form.values.fullName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          name="fullName"
          id="fullName"
          type="text"
        />
        <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
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
          <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
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
          <small>{getErrorMessage('expireYear', form.errors.expireYear)}</small>
        </li>
      </Line1>
    </FList>
  )
}
