<template>
  <div>
    <h1>Listagem de Usuário</h1>

    <DataTable :value="users" responsiveLayout="scroll">
      <Column field="name" header="Nome"></Column>
      <Column field="Data" header="Year"></Column>
      <Column field="brand" header="Ação">
        <template #body="slotProps">
          <Button
            label="Editar"
            @click="edit(slotProps)"
            class="p-button-text"
          />
          <Button
            label="Excluir"
            @click="openDelete(slotProps)"
            class="p-button-text p-button-danger"
          />
        </template>
      </Column>
    </DataTable>
    <nuxt-link class="p-button p-button-text" to="/user/new"
      >Novo Usuário</nuxt-link
    >
  </div>
</template>

<script>
import UserService from "~/service/UserService.js";

export default {
  middleware: "auth",
  layout: "default",
  data() {
    return {
      users: [],
    };
  },
  userService: null,
  created() {
    this.userService = new UserService(this.$axios);
  },
  mounted() {
    this.userList();
  },
  methods: {
    async userList() {
      let response = await this.userService.list();
      this.users = response.content;
    },
    edit(row) {
      this.$router.push("/user/" + row.data.id);
    },
    async openDelete(row) {
      try {
        let response = await this.userService.delete(row.data.id);
        this.userList();
        this.$toast.add({
          severity: "success",
          detail: "Usuário foi deletado.",
          life: 3000,
        });
      } catch (err) {
        this.$toast.add({
          severity: "error",
          detail: "Não foi possível deletar o usuário.",
          life: 3000,
        });
      }
    },
  },
};
</script>
