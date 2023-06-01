<template>
  <div class="center">
    <card-base>
      <div class="form-div">
        <form @submit.prevent="submitCoach">
          <div class="form-item">
            <input
              class="input-div"
              type="text"
              placeholder="Enter First Name"
              v-model="firstName"
            />
          </div>
          <div class="form-item">
            <input
              class="input-div"
              type="text"
              placeholder="Enter Last Name"
              v-model="lastName"
            />
          </div>
          <div class="form-item">
            <input
              type="text"
              class="input-div"
              placeholder="Enter Some Description"
              v-model="description"
            />
          </div>
          <div class="form-item">
            <input
              type="number"
              class="input-div"
              placeholder="Enter Your Rate per Hour"
              v-model="hourlyRate"
            />
          </div>
          <div class="filter">
            <input
              type="checkbox"
              name="filter"
              id="frontend"
              @change="changeFilter"
            />
            <label>Frontend</label>
          </div>
          <div class="filter">
            <input
              type="checkbox"
              name="filter"
              id="backend"
              @change="changeFilter"
            />
            <label>Backend</label>
          </div>
          <div class="filter">
            <input
              type="checkbox"
              name="filter"
              id="career"
              @change="changeFilter"
            />
            <label>Career</label>
          </div>
          <div class="buttonDiv">
            <button class="addCoach">Add</button>
          </div>
        </form>
      </div>
    </card-base>
  </div>
</template>

<script>
import CardBase from "@/UI/CardBase.vue";
export default {
  components: { CardBase },
  data() {
    return {
      coachDetail: {
        firstName: "",
        lastName: "",
        description: "",
        hourlyRate: "",
        areas: "",
      },
      checkboxDetails: {
        frontend: false,
        backend: false,
        career: false,
      },
    };
  },
  methods: {
    changeFilter(event) {
      const isChecked = event.target.checked;
      const checkedID = event.target.id;
      const newDetails = {
        ...this.checkboxDetails,
        [checkedID]: isChecked,
      };
      this.checkboxDetails = newDetails;
    },

    submitCoach() {
      console.log("submitted");
      var areasAdded = [];
      if (this.checkboxDetails.frontend) {
        areasAdded.push("frontend");
      }
      if (this.checkboxDetails.backend) {
        areasAdded.push("backend");
      }
      if (this.checkboxDetails.career) {
        areasAdded.push("career");
      }

      this.$store.commit("coaches/addCoach", {
        data: {
          id: "c" + this.$store.getters["coaches/getCoachesCount"] + 1,
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.description,
          hourlyRate: this.hourlyRate,
          areas: areasAdded,
        },
      });

      this.$router.push("/coaches");
    },
  },
};
</script>

<style scoped>
.form-div {
  display: flex;
  justify-content: center;
}

.input-div {
  width: 350px;
  padding: 15px;
  border-radius: 8px;
}

.form-item {
  margin-bottom: 15px;
}

.buttonDiv {
  display: flex;
  justify-content: center;
}
</style>
