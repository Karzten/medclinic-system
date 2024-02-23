<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        src="@/assets/images/dashboard/profile.png"
        alt=""
      />
      <div class="media-body">
        <span>Emay Walter</span>
        <p class="mb-0 font-roboto">
          Rol <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <a href="#"><vue-feather type="user"></vue-feather><span>Cuenta </span></a>
      </li>
      <li>
        <a href="#"><vue-feather type="settings"></vue-feather><span>Configuración</span></a>
      </li>
      <li>
        <a href="#"
          ><vue-feather type="log-in"></vue-feather><span>Cerrar Sesión</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>
  // import firebase from 'firebase';
  // import UserAuth from '../../auth/js/index';

  export default {
    name: 'Profile',
    methods: {
      logout: function() {
        // firebase
        //   .auth()
        //   .signOut()
        //   .then(() => {
        //     UserAuth.Logout();
            this.$router.replace('/auth/login');
            // localStorage.removeItem('User')
            useCookie('User').value = undefined
          }
      // },
    },
  };
</script>
