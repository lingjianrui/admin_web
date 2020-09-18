/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const bookingTableRouter = {
  path: '/booking',
  component: Layout,
  redirect: '/booking/booking-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'vendor-table',
      component: () => import('@/views/booking/booking-table'),
      name: '预约列表',
      meta: { title: '预约列表' }
    }
  ]
}
export default bookingTableRouter
