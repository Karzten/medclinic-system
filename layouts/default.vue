<template>
  <div class="loader-wrapper" v-if="loading">
    <div class="loader-index"><span></span></div>
    <svg>
      <defs></defs>
      <filter id="goo">
        <fegaussianblur in="SourceGraphic" stddeviation="11" result="blur"></fegaussianblur>
        <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> </fecolormatrix>
      </filter>
    </svg>
  </div>
    <div v-else> 
      <!-- <div class="page-wrapper" id="pageWrapper" :class="{'horizontal-wrapper':sidebar=='horizontal-wrapper','compact-wrapper':sidebar=='compact-sidebar1'}"> -->
      <div class="page-wrapper" id="pageWrapper" :class="layoutobj">
        <div class="page-header" :class="{ close_icon:!togglesidebar }">
          <Header   @clicked="sidebar_toggle"  />
        </div>
        
        <div class="page-body-wrapper">
          <!-- <div class="bg-overlay" :class="{active: activeoverlay }" @click="removeoverlay()"></div> -->
          <div class="sidebar-wrapper" :class="[{ close_icon : !togglesidebar }]" :sidebar-layout="svg=='stroke-svg'?'stroke-svg':'fill-svg'">
            <Sidebar @clicked="sidebar_toggle" />
          </div>
          <div class="page-body" @click="hidesecondmenu()">
            <!-- <Transition name="fadeIn" > -->
                <slot/>
            <!-- </Transition> -->
          </div>
          <Footer123/>
        </div>
        <!-- <Customizer/> -->
        <Teleport to="body">

            <TapTop/>
        </Teleport>
      </div>
      
    </div>
   
  </template>
  
  <script>
    import { mapState } from 'pinia';
    
    import { layoutClasses } from '../constants/layout';
    import Header from '../components/header';
    import Sidebar from '../components/sidebar';
    import Footer123 from '../components/footer.vue'
import { useLayoutStore } from '~~/store/layout';
import { useMenuStore } from '~~/store/menu';
    // import Customizer from '../components/customizer';
    import TapTop from '../components/tapTop.vue';
import { useWindowScroll } from '@vueuse/core'
  
    export default {
      props:['sidebar_toggle_var'],
      components:{
        Header,
        Sidebar,
        Footer123,
        // Customizer,
        TapTop
      },
      data(){
        return{
          loading: true,
          // loader: false,
          mobileheader_toggle_var: false,
          sidebar_toggle_var: false,
          horizontal_Sidebar: true,
          resized:false,
          layoutobj:{}
        };
      },
      computed: {
        ...mapState(useMenuStore,{
          menuItems: 'data',
         
          togglesidebar: 'togglesidebar',
          activeoverlay: 'activeoverlay',
       
        }),
        ...mapState(useLayoutStore,{
            layout: 'layout',
            svg:'svg'
        }),
        // ...mapGetters({
        //       sidebar: 'layout/sidebar'
        //   }),
          sidebar(){
            return useLayoutStore().sidebar
          },
        layoutobject: {
          get: function () {
            // return 'hello'
            return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];
          },
          set: function () {
            this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
            this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];
            return this.layoutobj;
          }
        }
      },
      watch:{
        '$route' (){
         
      setTimeout(()=>{
          this.loading = !this.loading
        },3000)
        this.loading =!this.loading
    
          this.menuItems.filter(items => {
            if (items.path === this.$route.path)
            //   this.$store.dispatch('menu/setActiveRoute', items);
              useMenuStore().setActiveRoute(items)
            if (!items.children) return false;
            items.children.filter(subItems => {
              if (subItems.path === this.$route.path)
                // this.$store.dispatch('menu/setActiveRoute', subItems);
                useMenuStore().setActiveRoute(subItems)
              if (!subItems.children) return false;
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === this.$route.path)
                //   this.$store.dispatch('menu/setActiveRoute', subSubItems);
                useMenuStore().setActiveRoute(subSubItems)
              });
            });
          });
          this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
        // console.log("layobj==>",this.layoutobj)
  
          if((useWindowScroll().x < 991 && this.layout.settings.layout === 'LosAngeles') || (useWindowScroll().x < 991 && this.layout.settings.layout === 'Singapore') || (useWindowScroll().x  < 991 && this.layout.settings.layout === 'Barcelona')) {
            const newlayout = JSON.parse(JSON.stringify(this.layoutobj).replace('horizontal-wrapper', 'compact-wrapper'));
        // console.log("newlayobj==>",newlayout)
  
            this.layoutobj = JSON.parse(JSON.stringify(newlayout))[this.layout.settings.layout];
          }
           else  {
            this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout]; 
          }
        },
        sidebar_toggle_var: function (){
          this.resized = (this.width <= 991) ? !this.sidebar_toggle_var : this.sidebar_toggle_var;      
        }
      },
       created(){

        // window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.resized = this.sidebar_toggle_var;
        // this.$store.dispatch('layout/set');
        useLayoutStore().set()
        this.$router.replace({ 'query': null }).catch(err => err);
        this.layout.settings.layout = this.$route.query.layout? this.$route.query.layout : 'Dubai';
        this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);
        this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout]; 
  
      },
      methods:{
   
        sidebar_toggle(value) {
          this.sidebar_toggle_var = !value;
        },
        mobiletoggle_toggle(value) {
          this.mobileheader_toggle_var = value;
        },
        handleResize() {
        useMenuStore().resizetoggle()
        },
        removeoverlay() {
         useMenuStore().activeoverlay = false;
          if(useWindowScroll().x  < 991){  
           useMenuStore().togglesidebar = false; 
          }
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }, 
        hidesecondmenu() {
          if(this.layoutobject.split(' ').includes('compact-sidebar')) {
            this.menuItems.filter(menuItem => {
              menuItem.active = false;
            });
          }
          if(useWindowScroll().x  < 991) {
           useMenuStore().togglesidebar = false; 
          }
        }
      },
   
      mounted() {
  this.loading = false;

  }
    };
  </script>
  