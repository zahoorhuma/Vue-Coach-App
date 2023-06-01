<template>
  <div class="center">
    <coach-filter @change-filter="changeFilter"></coach-filter>
    <card-base>
      <div class="button-div">
        <button class="addCoach" @click="addCoach">Add Coach</button>
      </div>

      <section>
        <card-base v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            :desc="coach.description"
          ></coach-item
        ></card-base>
      </section>
    </card-base>
  </div>
</template>

<script>
import CardBase from "@/UI/CardBase.vue";
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";

export default {
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CardBase,
    CoachItem,
    CoachFilter,
  },

  computed: {
    filteredCoaches() {
      const coachList = this.$store.getters["coaches/getCoaches"];
      const trueKeys = Object.keys(this.filters).filter(
        (key) => this.filters[key] === true
      );
      console.log(trueKeys);
      if (trueKeys.length > 0) {
        const filteredCoaches = coachList.filter((coach) => {
          return trueKeys.some((area) => coach.areas.includes(area));
        });
        console.log("Filtered ", filteredCoaches);
        return filteredCoaches;
      }
      return [];
    },
  },

  methods: {
    changeFilter(obj) {
      console.log(obj);
      this.filters = obj;
    },
    addCoach() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.center {
  width: 70%;
  margin: 2rem auto;
}

.addCoach {
  padding: 5px;
  background: var(--yellow);
  border-radius: 8px;
}

.button-div {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
</style>
