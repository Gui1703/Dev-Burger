import bag from '../../assets/bag.svg'
import box from '../../assets/box.svg'
import store from '../../assets/store.svg'
import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.order,
    icon: store
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.products,
    icon: bag
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    link: paths.newProduct,
    icon: box
  }
]

export default listLinks
