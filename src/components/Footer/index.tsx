import { Title, Footer, Social, Copyright } from './styles'
import instagram from '../../assets/images/social/ig.png'
import tiktok from '../../assets/images/social/tiktok.png'
import facebook from '../../assets/images/social/facebook.png'
import youtube from '../../assets/images/social/youtube.png'

const Bottom = () => (
  <Footer>
    <Title href="#">eShop</Title>
    <Social>
      <img src={instagram} />
      <img src={tiktok} />
      <img src={facebook} />
      <img src={youtube} />
    </Social>
    <Copyright>
      {' '}
      &copy; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
      eligendi voluptates cupiditate totam non sunt, quaerat nisi vel!
    </Copyright>
  </Footer>
)

export default Bottom
