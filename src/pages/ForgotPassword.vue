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
                Student Learning
              </div>
            </div>
            <div class="text-h6 q-px-lg q-pb-xs q-pt-lg">Password Recovery</div>
            <q-card-section v-if="!sent">
              <q-form class="q-px-sm q-pt-m">
                <q-input
                  square
                  clearable
                  dark
                  color="white"
                  v-model="email"
                  type="email"
                  label="Enter you email"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Email is required',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" color="white" />
                  </template>
                </q-input>
              </q-form>
              <q-btn
                dark
                :loading="loading"
                @click.prevent="onSubmit"
                unelevated
                size="lg"
                color="dark"
                class="full-width"
                style="font-size: 17px"
                label="Email me a recovery link"
              />
            </q-card-section>
            <q-card-section class="q-pa-lg" v-else>
              <div class="text-body1">
                If account exists, an email will be sent with further
                instructions. Please click the link when you get it.
              </div>
            </q-card-section>
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
import logoImage from "../assets/sdssu_logo.png";

export default defineComponent({
  name: "ForgotPassword",
  data() {
    return {
      logoImage,
      loading: false,
      email: "",
      sent: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      authService
        .resetPassword({ email: this.email })
        .then(() => {
          this.loading = false;
          this.sent = true;
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.error) {
            this.invalidCredentials = true;
          }
          this.loading = false;
        });
    },
  },
});
</script>
