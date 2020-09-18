/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const customerTableRouter = {
  path: '/customer',
  component: Layout,
  redirect: '/customer/customer-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'customer-table',
      component: () => import('@/views/booking/customer-table'),
      name: '客户管理',
      meta: { title: '客户管理' }
    }
  ]
}
export default customerTableRouter
