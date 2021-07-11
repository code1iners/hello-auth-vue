<template>
  <div id="sign_in">
    <Toast v-if="showToast" />
    <transition name="fade" appear>
      <form @submit.prevent="submit" class="mt-2">
        <div class="input_container">
          <label :class="{ error_message: emailIsNotValid }">Email</label>
          <input
            type="email"
            placeholder="Enter email.."
            v-model="emailValue"
            ref="email"
          />
        </div>
        <div class="input_container mt">
          <label :class="{ error_message: passwordIsNotValid }">Password</label>
          <input
            type="password"
            placeholder="Enter password.."
            v-model="passwordValue"
            ref="password"
          />
        </div>
        <button class="submit mt-2">submit</button>
      </form>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import useAuth from "@/composables/useAuth.js";
import Toast from "@/components/Toast.vue";

export default {
  name: "SignIn",
  components: {
    Toast,
  },
  data() {
    return {
      emailValue: "",
      passwordValue: "",
      currentErrorPosition: "",
    };
  },
  mounted() {
    this.emailValue = "tester@email.com";
    this.passwordValue = "1234";
  },
  methods: {
    async submit() {
      if (!this.dataIsValid()) {
        this.triggerToast();
        return;
      }

      const { signIn } = useAuth();
      const res = await signIn(
        JSON.stringify({
          email: this.emailValue,
          password: this.passwordValue,
        })
      );
      if (res) {
        this.updateMe(res);

        this.updateToastMessage("Sign in success.");
        this.$router.push({ name: "Me" });
      } else {
        this.updateToastMessage("Sign in fail.");
      }
      this.triggerToast();
    },
    dataIsValid() {
      if (this.emailValue.length === 0) {
        this.currentErrorPosition = "email";
        this.$refs.email.focus();
        return false;
      }
      if (this.passwordValue.length === 0) {
        this.currentErrorPosition = "password";
        this.$refs.password.focus();
        return false;
      }
      return true;
    },
    ...mapMutations("messages/", ["triggerToast", "updateToastMessage"]),
    ...mapMutations("members/", ["updateMe"]),
  },
  computed: {
    emailIsNotValid() {
      return (
        this.currentErrorPosition === "email" && this.emailValue.length === 0
      );
    },
    passwordIsNotValid() {
      return (
        this.currentErrorPosition === "password" &&
        this.passwordValue.length === 0
      );
    },
    ...mapState("messages/", {
      showToast: (state) => state.showToast,
    }),
    ...mapState("members/", {
      me: (state) => state.me,
    }),
  },
};
</script>

<style>
#sign_in {
  width: 50%;
  justify-self: center;
}
</style>
