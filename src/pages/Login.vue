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
            <h4 class="text-h5 text-center q-pt-lg q-my-md text-weight-bold">
              <span
                class="text-blue-2 block"
                style="font-family: Georgia, serif"
                >SDSSU</span
              >
              Student Handbook
            </h4>
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
                  clearable
                  dark
                  color="white"
                  v-model="password"
                  type="password"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Password is required',
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

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      invalidCredentials: false,
    };
  },
  methods: {
    onSubmit() {
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
