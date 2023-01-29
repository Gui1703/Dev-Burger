import bag from '../../assets/bag.svg'
import box from '../../assets/box.svg'
import store from '../../assets/store.svg'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: '/admin',
    icon: store
  },
  {
    id: 2,
    label: 'Produtos',
    link: '/products',
    icon: bag
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    link: '/admin',
    icon: box
  }
]

export default listLinks
