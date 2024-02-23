<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <Logo />

    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
         
        <li>
          <language/>
        </li>

        <Notifications />

        <Profile />
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import Bookmark from '../bookmark';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
import Notifications from './notifications.vue';
import Mode from './mode';
import Cart from './cart';
import Profile from './profile';
import Logo from './logo.vue';
import SearchBar from './search';
import { useMenuStore } from '~~/store/menu';
import language from './language.vue';

export default {

  components: {
    Bookmark,
    Notifications,
    Mode,
    Cart,
    Profile,
    Logo,
    Swiper,
    SwiperSlide,
    language,
    SearchBar,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  computed: {
    ...mapState(useMenuStore, {
      menuItems: 'searchData',
      megamenuItems: 'megamenu',
      searchOpen: 'searchOpen',
    }),
  },
  methods: {
    search_open() {
      useMenuStore().searchOpen = true
    },
    bookmark_open() {
      this.bookmark = !this.bookmark;
    },
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
