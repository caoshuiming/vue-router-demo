import RouterDemo from "./components/RouterDemo"
import RouterChildDemo from "./components/RouterChildDemo";
const routes=[
    // 根目录
    { path:"/", component:RouterDemo, name:"0" },
    { path:"/foo", component:RouterDemo, name:"1" },
    { path:"/bar", component:RouterDemo, name:"2" },
    // 当 /user/:id匹配成功，RouterDemo会被渲染在APP的<router-view />中
    {
        path: "/user/:id",
        component: RouterDemo,
        name: "3",
        props: true,
        children: [
            {
                // 当/user/:id/profile匹配成功，RouterChildrenDemo会被渲染在RouterDemo的<router-view/>中
                path: 'profile',
                component: RouterChildDemo,
                name: '3-1'
            },
            {
                path: 'posts',
                component: RouterChildDemo,
                name: '3-2'
            }
        ]
    },
    { path: '/a', redirect: '/bar' },
    { path: '*', component: RouterDemo, name: '404' }
];

export default routes;