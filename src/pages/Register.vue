<template>
  <q-layout view="lHh Lpr fff">
    <q-page
      class="
        window-height window-width
        row
        justify-center
        items-center
        text-white
      "
      style="background: linear-gradient(#0470D9, #1F8FFF)"
    >
      <div class="column">
        <div class="row">
          <q-card
            square
            class="bg-transparent shadow-0 full-height"
            style="width: 320px"
          >
            <div class="text-center">
              <q-avatar size="72px">
                <q-img :src="logoImage" style="width: 72px"/>
              </q-avatar>
              <div class="text-h5 text-center q-mb-md text-weight-bold">
                Lantaw
              </div>
            </div>
            <q-card-section>
              <q-form class="q-px-sm q-pt-xs">
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="first_name"
                  type="text"
                  label="Firstname"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Firstname is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="portrait" color="white" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="last_name"
                  type="text"
                  label="Lastname"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Lastname is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="portrait" color="white" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="email"
                  type="email"
                  label="Email"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Email is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" color="white" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="password"
                  type="password"
                  label="Password"
                  :rules="[
                    (val) => (val && val.length > 0) || 'Password is required',
                    (val) => (val && val.length >= 6) || 'Please use minimum 6 characters',
                    (val) => (val && String(val).match('.*([a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]).*')) || 'Password must contain alphanumeric combination',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" color="white" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="password_confirmation"
                  type="password"
                  label="Confirm Password"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0 && val === password) ||
                      'Password does not matched',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" color="white" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn
                :loading="loading"
                @click.prevent="onSubmit"
                unelevated
                size="lg"
                color="dark"
                class="full-width"
                label="Register"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <q-btn
                flat
                class="text-grey-1 text-capitalize"
                label="Back to login"
                to="/login"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import authService from "./../services/auth";
import logoImage from "../assets/lantaw-logo-white.png";

export default defineComponent({
  name: "Register",
  data() {
    return {
      logoImage,
      loading: false,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      authService
        .register({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.loading = false;
        })
        .catch((errors) => {
          console.log(errors?.data?.password);
          this.loading = false;
        });
    },
  },
});
</script>
