import { createRouter, createWebHistory,RouteRecordRaw,RouteLocationNormalized,NavigationGuardNext,RouteRecordNormalized,RouteMeta } from 'vue-router'
import Home from '../views/Home.vue'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Vue case 1',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to: RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {
  
  if(typeof(to.meta.title) === 'string'){
    document.title = to.meta.title ? to.meta.title : "Some Default Title";
  }

  const nearestWithMeta:RouteRecordNormalized | undefined = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
  if(!nearestWithMeta){
    return next();
  }else{
    const test:({
      name: string;
      content: string;
  } | {
      property: string;
      content: string;
  })[] = nearestWithMeta.meta.metaTags;
  

    test.map((tagDef:{
      name: string;
      content: string;
  } | {
      property: string;
      content: string;
  }) => {
    const tag:HTMLMetaElement = document.createElement('meta');

    Object.keys(tagDef).forEach((key:string) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach((tag:HTMLMetaElement) => document.head.appendChild(tag));
 
  }
 })

export default router