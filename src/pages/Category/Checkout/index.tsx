import { useFormik } from 'formik'
import { FList, Line1 } from './styles'
import * as Yup from 'yup'
import { useDeliverMutation } from '../../../services/api'

const Checkout = () => {
  const [purchase, { isError, isLoading, isSuccess, data }] =
    useDeliverMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      description: '',
      city: '',
      cep: '',
      number: '',
      optional: ''
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo é obrigatório'),
      address: Yup.string().min(5).required('Campo obrigatório'),
      city: Yup.string().min(5).required('Campo obrigatório'),
      cep: Yup.string()
        .min(5, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string()
        .min(5, 'Inclua o número do local')
        .required('Campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.description,
            city: values.city,
            zipcode: values.cep,
            number: Number(values.number),
            complement: values.optional
          }
        },
        products: []
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
          <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
        </li>
        <li>
          <label htmlFor="address">Endereço</label>
          <input
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            name="address"
            value={form.values.description}
            id="address"
            type="text"
          />
          <small>{getErrorMessage('address', form.errors.description)}</small>
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
            <small>{getErrorMessage('number', form.errors.number)}</small>
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
    </form>
  )
}

export default Checkout
