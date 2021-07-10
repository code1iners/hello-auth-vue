<template>
  <div id="sign_up">
    <Toast v-if="showToast" :message="errorMessage" />
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
    submit() {
      if (!this.dataIsValid()) {
        this.triggerToast();
        return;
      }

      // note. request post to server to create new member.
      console.log(this.emailValue);
      console.log(this.usernameValue);
      console.log(this.passwordValue);
      console.log(this.passwordAgainValue);
    },
    dataIsValid() {
      if (this.emailValue.length === 0) {
        this.currentErrorPosition = "email";
        this.$refs.email.focus();
        return false;
      }
      if (this.usernameValue.length === 0) {
        this.currentErrorPosition = "username";
        this.$refs.username.focus();
        return false;
      }
      if (this.passwordValue.length === 0) {
        this.currentErrorPosition = "password";
        this.$refs.password.focus();
        return false;
      }
      if (this.passwordAgainValue.length === 0) {
        this.currentErrorPosition = "password again";
        this.$refs.passwordAgain.focus();
        return false;
      }
      return true;
    },
    ...mapMutations(["triggerToast"]),
  },
  computed: {
    errorMessage() {
      return `${this.currentErrorPosition} is required.`;
    },
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
    ...mapState({
      showToast: (state) => state.showToast,
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
