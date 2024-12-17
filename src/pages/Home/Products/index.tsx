import { Link } from 'react-router-dom'

import Tag from '../../../components/Tags'
import Star from '../../../assets/images/star.png'
import * as S from './styles'

export type Props = {
  item: Food[]
  titulo: string
  tipo: string
  avaliacao: string
  foto: string
  descricao: string
  preco?: number
  porcao?: string
  id: number
}

const Product = ({ avaliacao, descricao, titulo, tipo, foto, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.Image src={foto} alt={titulo} />
      <S.TagPosition>
        <Tag key={tipo}>{tipo}</Tag>
      </S.TagPosition>
      <S.Title>
        {titulo}
        <div>
          <S.Rating src={Star} alt="Avaliação" />
          <h3>{avaliacao}</h3>
        </div>
      </S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <Link to={`/categories/${id}`}>
        <S.Click title={`Clique para ver mais detalhes`} type="button">
          Saiba mais
        </S.Click>
      </Link>
    </S.Card>
  )
}

export default Product
