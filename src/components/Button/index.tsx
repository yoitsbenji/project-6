import { ButtonLink, StandardClick } from './styles'

export type Props = {
  type: 'button' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <StandardClick type={type} title={title} onClick={onClick}>
        {children}
      </StandardClick>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
