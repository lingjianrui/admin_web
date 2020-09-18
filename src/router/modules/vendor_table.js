/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const vendorTableRouter = {
  path: '/vendor',
  component: Layout,
  redirect: '/vendor/vendor-table',
  name: 'vendor_table',
  meta: {
    title: 'Table',
    icon: 'table',
    roles: ['admin']
  },
  children: [
    {
      path: 'vendor-table',
      component: () => import('@/views/vendor/vendor-table'),
      name: '商户',
      meta: { title: '商户' }
    }
  ]
}
export default vendorTableRouter
