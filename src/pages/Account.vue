<template>
  <div class="q-pa-md">
    <div class="q-pa-md" style="max-width: 400px">
      <h5 class="text-h5 text-bold q-my-md q-pb-lg">My Account</h5>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="first_name"
          label="First name *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="last_name"
          label="Last name *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          readonly
          v-model="email"
          label="Email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input filled v-model="password" label="Password" />
        <q-input
          filled
          v-model="password_confirmation"
          label="Confirm Password"
          lazy-rules
          :rules="[(val) => val === password || 'Password does not matched']"
        />

        <div class="text-center q-px-lg">
          <q-btn label="Update Account" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import store from "../store";
import accountService from "./../services/account";

export default defineComponent({
  name: "Account",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      profile: "",
    };
  },
  computed: {
    ...mapGetters({
      account: "account",
    }),
  },
  mounted() {
    if (!this.account) {
      accountService.find().then(() => {});
    }
  },
  methods: {
    onSubmit() {
      accountService
        .update({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.$q.dialog({
            title: "Success!",
            message: "Account has been successfully updated",
          });
          this.loading = false;
        })
        .catch((errors) => {
          this.$q.dialog({
            title: "Error!",
            message: "Failed to update account! Please try again later.",
          });
          this.loading = false;
        });
    },
    viewP
  },
  watch: {
    account: {
      immediate: true,
      handler(data) {
        if (!data) return;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
      },
    },
  },
});
</script>
