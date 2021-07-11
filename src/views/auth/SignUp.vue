<template>
  <div id="sign_up">
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
          <label :class="{ error_message: usernameIsNotValid }">Username</label>
          <input
            type="text"
            placeholder="Enter username.."
            v-model="usernameValue"
            ref="username"
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
        <div class="input_container mt">
          <label :class="{ error_message: passwordAgainIsNotValid }"
            >Password Again</label
          >
          <input
            type="password"
            placeholder="Enter password again.."
            v-model="passwordAgainValue"
            ref="passwordAgain"
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
  name: "SignUp",
  components: {
    Toast,
  },
  data() {
    return {
      emailValue: "",
      usernameValue: "",
      passwordValue: "",
      passwordAgainValue: "",
      currentErrorPosition: "",
    };
  },
  mounted() {
    this.emailValue = "tester@email.com";
    this.usernameValue = "user1";
    this.passwordValue = "1234";
    this.passwordAgainValue = "1234";
  },
  methods: {
    async submit() {
      if (!this.dataIsValid()) {
        this.triggerToast();
        return;
      }

      const { signUp } = useAuth();
      const res = await signUp(
        JSON.stringify({
          email: this.emailValue,
          username: this.usernameValue,
          password: this.passwordValue,
        })
      );
      if (res) {
        this.updateToastMessage("Sign up success.");
        this.$router.push({ name: "SignIn" });
      } else {
        this.updateToastMessage("Sign up fail.");
      }
      this.triggerToast();
    },
    dataIsValid() {
      if (this.emailValue.length === 0) {
        this.updateToastMessage("email is required.");
        this.$refs.email.focus();
        return false;
      }
      if (this.usernameValue.length === 0) {
        this.updateToastMessage("username is required.");
        this.$refs.username.focus();
        return false;
      }
      if (this.passwordValue.length === 0) {
        this.updateToastMessage("password is required.");
        this.$refs.password.focus();
        return false;
      }
      if (this.passwordAgainValue.length === 0) {
        this.updateToastMessage("password again is required.");
        this.$refs.passwordAgain.focus();
        return false;
      }
      return true;
    },
    ...mapMutations("messages/", ["triggerToast", "updateToastMessage"]),
  },
  computed: {
    emailIsNotValid() {
      return (
        this.currentErrorPosition === "email" && this.emailValue.length === 0
      );
    },
    usernameIsNotValid() {
      return (
        this.currentErrorPosition === "username" &&
        this.usernameValue.length === 0
      );
    },
    passwordIsNotValid() {
      return (
        this.currentErrorPosition === "password" &&
        this.passwordValue.length === 0
      );
    },
    passwordAgainIsNotValid() {
      return (
        this.currentErrorPosition === "password again" &&
        this.passwordAgainValue.length === 0
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
#sign_up {
  width: 50%;
  justify-self: center;
}
</style>
