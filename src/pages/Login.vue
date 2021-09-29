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
      style="background: linear-gradient(#0470d9, #1f8fff)"
    >
      <div class="column q-pa-lg">
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
                Student Handbook
              </div>
            </div>
            <q-card-section>
              <div
                class="text-body2 text-center text-red-3"
                v-if="invalidCredentials"
              >
                Invalid username or password!
              </div>
              <q-form class="q-px-sm q-pt-xs">
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
                  dark
                  color="white"
                  v-model="password" :type="isPwd ? 'password' : 'text'"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Password is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" color="white" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
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
                label="Sign In"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-lg">
              <q-btn
                flat
                class="text-grey-1 text-capitalize q-pa-sm q-mb-sm"
                label="Forgot your password?"
                to="/forgot-password"
              />
              <q-separator />
              <q-btn
                to="/register"
                flat
                class="text-grey-1 text-capitalize text-bold q-mt-sm"
                label="No Account yet? Register Now"
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
import logoImage from "../assets/sdssu_logo.png";

export default defineComponent({
  name: "Login",
  data() {
    return {
      logoImage,
      loading: false,
      isPwd: true,
      email: "",
      password: "",
      invalidCredentials: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      authService
        .login({ email: this.email, password: this.password })
        .then(() => {
          this.loading = false;
        })
        .catch((errors) => {
          this.invalidCredentials = true;
          this.loading = false;
        });
    },
  },
});
</script>
