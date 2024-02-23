<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-5 b-center bg-size" :style="{ backgroundImage: 'url(' + ('/images/login/3.jpg') + ')' }"
        style="background-size: cover; background-position: center center; display: block;">
        <img class="bg-img-cover bg-center" src="/images/login/3.jpg" alt="looginpage" style="display: none;" />
      </div>
      <div class="col-xl-7 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-start">
                <img class="img-fluid" src="/images/logo/logo.png" alt="looginpage" />
              </a>
            </div>
            <div class="login-main ">
              <form class="theme-form">
                <h4>Bienvenido</h4>
                <p>Ingresa tus credenciales para acceder</p>
                <div class="form-group">
                  <label class="col-form-label">Usuario</label>
                  <input class="form-control" type="email" required="" placeholder="Ingresa tu contraseña" />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Contraseña</label>
                  <div class="form-input position-relative">

                    <input class="form-control" :type="active ? 'password' : 'text'" name="login[password]" required=""
                      placeholder="*********" />
                    <div class="show-hide"><span :class="active ? 'show' : 'hide'" @click.prevent="show"> </span></div>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1">Recordar credenciales</label>
                  </div>
                  <router-link to="/">
                    <button class="btn btn-primary btn-block w-100">
                      Iniciar Sesión
                    </button>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: 'custom'
})
export default {
  data() {
    return {
      active: true
    }
  },
  methods: {
    show() {
      this.active = !this.active
    }
  }
}

</script>