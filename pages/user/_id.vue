<template>
  <div>
    <h1>Cadastro de Uusário</h1>

    <ValidationObserver ref="form">
      <form @submit.prevent="save()">
        <div class="p-fluid">
          <div class="p-field">
            <ValidationProvider
              name="login"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="login">Login</label>
              <InputText id="login" v-model="user.login" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="senha"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="password">Senha</label>
              <InputText
                id="password"
                v-model="user.password"
                type="password"
              />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="nome"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="name">Nome</label>
              <InputText id="name" v-model="user.name" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="sobrenome"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="last_name">Sobrenome</label>
              <InputText id="last_name" v-model="user.last_name" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="email"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="email">E-mail</label>
              <InputText id="email" v-model="user.email" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="datanascimento"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="date_birth">Data de Nascimento</label>
              <InputText
                id="date_birth"
                v-model="user.date_birth"
                type="text"
              />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="genero"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="gender">Gênero</label>
              <InputText id="gender" v-model="user.gender" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider name="cep" rules="required" v-slot="{ errors }">
              <label for="zip_code">CEP</label>
              <InputText id="zip_code" v-model="user.zip_code" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="endereco"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="adress">Endereço</label>
              <InputText id="adress" v-model="user.adress" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="cidade"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="city">Cidade</label>
              <InputText id="city" v-model="user.city" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="estado"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="state">Estado</label>
              <InputText id="state" v-model="user.state" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="pais"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="country">País</label>
              <InputText id="country" v-model="user.country" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="p-field">
            <ValidationProvider
              name="tipo"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="type">Tipo</label>
              <InputText id="type" v-model="user.type" type="text" />
              <span v-show="errors.length > 0">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <Button
          type="submit"
          class="p-button-secondary"
          label="Salvar"
        ></Button>
      </form>
    </ValidationObserver>
  </div>
</template>



<script>
import UserService from "~/service/UserService";

export default {
  middleware: "auth",
  layout: "default",
  async asyncData({ params, error }) {
    return {
      id: params.id,
      user: {
        id: null,
        login: "",
        password: "",
        name: "",
        last_name: "",
        email: "",
        date_birth: "",
        gender: "",
        zip_code: "",
        adress: "",
        city: "",
        state: "",
        country: "",
        type: "",
      },
    };
  },
  UserService: null,
  created() {
    this.userService = new UserService(this.$axios);
  },
  mounted() {
    if (this.id != "new") {
      this.getUser(this.id);
    }
  },
  methods: {
    async getUser(id) {
      let response = await this.userService.byId(id);
      if (response.id) {
        this.user = response;
      }
    },
    async save() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        let values = this.user;

        this.userService
          .save(values)
          .then((response) => {
            this.$toast.add({
              severity: "success",
              detail: "Usuário foi salvo",
              life: 5000,
            });
            this.$router.push("/user");
          })
          .catch((error) => {
            this.$toast.add({
              severity: "error",
              detail: "Ocorreu um erro ao salvar o usuário.",
              life: 5000,
            });
          });
      });
    },
  },
};
</script>
