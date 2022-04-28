<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #6959CD !important">
      <a class="navbar-brand" href="#">Login com JWT e CRUD</a>
      <a style="margin-left: 80%" href="https://github.com/castellogui/umReal-vue">
          <button type="button" class="btn btn-dark">Repositorio no
            <svg style="margin-left: 2px; margin-bottom: 3px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg></button></a>
    </nav>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path class="wave-1" fill="#483D8B" fill-opacity="1" d="M0,64L26.7,74.7C53.3,85,107,107,160,96C213.3,85,267,43,320,58.7C373.3,75,427,149,480,165.3C533.3,181,587,139,640,106.7C693.3,75,747,53,800,58.7C853.3,64,907,96,960,101.3C1013.3,107,1067,85,1120,96C1173.3,107,1227,149,1280,144C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      <path class="wave-2" fill="#6959CD" fill-opacity="1" d="M0,32L26.7,42.7C53.3,53,107,75,160,96C213.3,117,267,139,320,138.7C373.3,139,427,117,480,96C533.3,75,587,53,640,74.7C693.3,96,747,160,800,160C853.3,160,907,96,960,90.7C1013.3,85,1067,139,1120,133.3C1173.3,128,1227,64,1280,42.7C1333.3,21,1387,43,1413,53.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      <path class="wave-3" fill="#836FFF" fill-opacity="1" d="M0,160L26.7,154.7C53.3,149,107,139,160,133.3C213.3,128,267,128,320,154.7C373.3,181,427,235,480,229.3C533.3,224,587,160,640,160C693.3,160,747,224,800,218.7C853.3,213,907,139,960,112C1013.3,85,1067,107,1120,133.3C1173.3,160,1227,192,1280,197.3C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
    </svg>
    <div class="area-login">
      <Toast/>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(entrar)">
          <Card>
            <template slot="header">
              <div class="area-header">
                <h1>Login</h1>
              </div>
            </template>
            <template slot="content">
              <div class="p-fluid">
                <div class="p-field">
                  <ValidationProvider
                    name="Usuário"
                    rules="required"
                    v-slot="{ errors }"
                  >
                  <span class="p-input-icon-left">
                    <i class="pi pi-user"/>
                    <InputText
                      v-model="login.login"
                      type="text"
                      autofocus
                      placeholder="Login"
                    />
                  </span>
                    <span v-show="errors.length > 0" class="p-invalid">{{
                        errors[0]
                      }}</span>
                  </ValidationProvider>
                </div>
                <div class="p-field">
                  <ValidationProvider
                    name="Senha"
                    rules="required"
                    v-slot="{ errors }"
                  >
                  <span class="p-input-icon-left">
                    <i class="pi pi-lock"/>
                    <InputText
                      v-model="login.password"
                      type="password"
                      placeholder="Senha"
                    />
                  </span>
                    <span v-show="errors.length > 0" class="p-invalid">{{
                        errors[0]
                      }}</span>
                  </ValidationProvider>
                </div>
                <div class="p-field div-btn">
                  <Button type="submit" class="btn-login" label="Entrar"/>
                </div>
              </div>
            </template>
          </Card>
        </form>
      </ValidationObserver>
    </div>
  </header>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script>

export default {
  middleware: "guest",
  layout: "branco",
  data() {
    return {
      login: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    async entrar() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });

        if (response.status == 200) {
          window.location.href = "/user";
        } else {
          this.$toast.add({
            severity: "error",
            detail: "Dados incorretos. Tente novamente.",
            life: 3000,
          });
        }
      } catch (err) {
        this.$toast.add({
          severity: "error",
          detail: "Dados incorretos. Tente novamente.",
          life: 3000,
        });
      }
    },
  },
};
</script>


<style @scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
header,

body {
  background-color: #2b2453;
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(1.4);
}

.wave-1 {
  animation: moveWave1 3s ease-in-out infinite alternate;
}

.wave-2 {
  animation: moveWave1 3s 1.9s ease-in-out infinite alternate;
}

.wave-3 {
  animation: moveWave1 3s 1.0s ease-in-out infinite alternate;
  left: 100px;
}

@keyframes moveWave1 {
  from {
    transform: translateX(-200px);
  }
}

@keyframes moveWave2 {
  from {
    transform: translateX(-180px);
  }
}

@keyframes moveWave3 {
  from {
    transform: translateX(-160px);
  }
}

.area-login .p-fluid {
  background-color: #f2f2f2;
  padding: 15px 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  position: absolute;
  top: 90px;
  width: 325px;
}

.area-login .p-card {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  height: 370px;
}

.div-btn {
  margin: 0 auto;
  width: 122px !important;
}

.area-header {
  margin: 0 auto;
  width: 201px;
  padding-top: 15px;
}

.area-login img {
  width: 60px !important;
  margin-right: 10px;
  float: left;
}

.area-login h1 {
  float: left;
  color: #fff;
  font-size: 20px;
}

.area-login .p-card-header {
  background-color: #5b5784 !important;
  width: 100%;
  height: 120px !important;
  -webkit-border-radius: 10px 10px 0px 0px;
  -moz-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
}

.area-login {
  width: 351px;
  height: 383px;
  margin: 150px auto;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

.login-form-forgot {
  float: right;
}

.area-login .btn-login {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #004888;
  border-color: #004888;
  margin: 20px auto;
  width: 122px !important;
}

.area-login .btn-login:hover {
  background-color: #004888;
  border-color: #004888;
}

.area-login .p-inputtext {
  background-color: #f2f2f2;
  border: none;
  border-bottom: 1px solid #b5b2b2;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;
  opacity: 0.5;
}

.area-login .p-field {
  margin-top: 20px !important;
}
</style>
