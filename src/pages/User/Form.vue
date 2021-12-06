<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} User</div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-xs"
      style="max-width: 800px"
    >
      <q-input filled v-model="first_name" label="Firstname" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Firstname is required']"
      />
      <q-input filled v-model="last_name" label="Lastname" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Lastname is required']"
      />
      <q-input filled v-model="email" label="Email" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Email is required']"
      />
      <q-input filled v-model="password" label="Password"/>
      <q-input filled v-model="password_confirmation" label="Confirm Password"
        lazy-rules
        :rules="[(val) => (val == password) || 'Password doesn\'t match']"
      />
      <div class="text-subtitle">Role</div>
      <div class="q-gutter-sm">
        <q-radio v-model="role" val="teacher" label="Teacher" />
        <q-radio v-model="role" val="student" label="Student" />
      </div>
      <div class="row justify-center q-gutter-md q-pa-xs q-mt-md">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Back"
          type="submit"
          to="/users"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import userService from "../../services/user";
import { mapGetters, mapMutations } from "vuex";
import store from "../../store";

export default defineComponent({
  name: "AdminUserForm",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      role: "teacher",
      password: "",
      password_confirmation: "",
    };
  },
  computed: {
    ...mapGetters({
      user: "currentUser",
      sections: "allUsers",
    }),
  },
  mounted() {
    if (this.$route.params.id) {
      this.loading = true;
      userService
        .show(this.$route.params.id)
        .then((data) => {
          store.dispatch("setCurrentUser", data);
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    }
  },
  methods: {
    onSubmit() {
      const params = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          role: this.role,
          password: this.password,
          password_confirmation: this.password_confirmation,
        };
      const resource = this.id ? userService.update(this.id, params) : userService.store(params);
      Promise.all([resource])
      .then((data) => {
          this.loading = false;
          this.$q.dialog({
            message: this.id ? `Successfully updated user ${this.user.first_name}.` : `Successfully created user!`,
          }).onOk(() => {
            this.id = null;
            this.first_name = null;
            this.last_name = null;
            this.email = null;
            this.role = 'teacher';
            this.$router.push('/users');
          });
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    setValues(user) {
      this.id = user.id;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.email = user.email;
      this.role = user.role;
    }
  },
  watch: {
    user(user) {
      if (user) {
        this.setValues(user);
      }
    },
  },
});
</script>
