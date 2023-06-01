<template>
  <div class="center">
    <card-base>
      <h1>{{ fullName }}</h1>
      <h3 class="rate">{{ rate }}$/hr</h3>
    </card-base>
    <card-base>
      <div class="contact">
        <h2>Intrested? React out now!</h2>
      </div>

      <router-link to="/coaches/c1/contact">Contact</router-link>
      <div class="contact-div">
        <router-view></router-view>
      </div>
    </card-base>
    <card-base>
      <div>
        {{ description }}
      </div>
      <div class="area-div">
        <div
          :class="{
            frontend: area === 'frontend',
            backend: area === 'backend',
            career: area === 'career',
          }"
          v-for="(area, index) in areas"
          :key="index"
        >
          {{ area }}
        </div>
      </div>
    </card-base>
  </div>
</template>

<script>
import CardBase from "../../UI/CardBase.vue";
export default {
  components: {
    CardBase,
  },
  data() {
    return {
      selectedUser: null,
    };
  },

  props: ["id"],
  created() {
    this.selectedUser = this.$store.getters["coaches/getCoaches"].find(
      (cid) => cid.id === this.id
    );

    console.log(this.id);
    console.log(this.selectedUser);
  },

  computed: {
    fullName() {
      return this.selectedUser.firstName + " " + this.selectedUser.lastName;
    },

    rate() {
      return this.selectedUser.hourlyRate;
    },

    areas() {
      return this.selectedUser.areas;
    },
    description() {
      return this.selectedUser.description;
    },
  },
};
</script>

<style scoped>
.contact {
  margin-bottom: 15px;
}
.contact-div {
  margin-top: 20px;
}
</style>
