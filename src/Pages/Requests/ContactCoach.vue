<template>
  <p></p>
  <div>
    <card-base>
      <div class="form-div">
        <form @submit.prevent="submitForm">
          <div class="form-items">
            <input
              type="email"
              placeholder="enter your email"
              v-model="email"
            />
          </div>
          <div class="form-items">
            <textarea
              rows="5"
              placeholder="Enter Description"
              v-model="description"
            ></textarea>
          </div>
          <div>
            <button class="addCoach">Send Request</button>
          </div>
        </form>
      </div>
    </card-base>
  </div>
</template>

<script>
import CardBase from "@/UI/CardBase.vue";

export default {
  components: {
    CardBase,
  },
  data() {
    return {
      contactData: {
        id: "",
        email: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.email, this.description);
      const object = {
        id: "i" + this.$store.getters["requests/getRequestsCount"] + 1,
        email: this.email,
        description: this.description,
      };
      this.$store.commit("requests/addRequest", { data: object });
    },
  },
};
</script>

<style scoped>
.form-div {
  display: flex;
  justify-content: center;
}
.form-items {
  margin-top: 3px;
  margin-bottom: 10px;
}

input,
textarea {
  width: 350px;
  padding: 10px;
  border-radius: 8px;
}
</style>
