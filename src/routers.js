
const views = [
  {
    path: 'star',
    title: '星星页面'
  },
  {
    path: 'save',
    title: '保存页面'
  },
  {
    path: 'changeColor',
    title: '变换颜色'
  }
]

const routers = views.map((item) => {
  const obj = {
    path: `/${item.path}`,
    name: `${item.path}`,
    component: () => import(`./views/${item.path}.vue`),
    meta: {
      title: `${item.title}`
    }
  }
  return obj
})

console.log(routers)

export default routers