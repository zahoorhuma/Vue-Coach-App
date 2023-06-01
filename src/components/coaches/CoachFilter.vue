<template>
  <section>
    <card-base>
      <h1>Find your Coach</h1>
      <div class="filters">
        <div class="filter">
          <input
            type="checkbox"
            name="filter"
            id="frontend"
            checked
            @change="changeFilter"
          />
          <label>Frontend</label>
        </div>
        <div class="filter">
          <input
            type="checkbox"
            name="filter"
            id="backend"
            checked
            @change="changeFilter"
          />
          <label>Backend</label>
        </div>
        <div class="filter">
          <input
            type="checkbox"
            name="filter"
            id="career"
            checked
            @change="changeFilter"
          />
          <label>Career</label>
        </div>
      </div>
    </card-base>
  </section>
</template>

<script>
import CardBase from "@/UI/CardBase.vue";
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
  emits: ["change-filter"],
  components: {
    CardBase,
  },
  methods: {
    changeFilter(event) {
      const isChecked = event.target.checked;
      const id = event.target.id;

      const updatedFilters = {
        ...this.filters,
        [id]: isChecked,
      };

      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.filter {
  display: flex;
  gap: 3px;
}
</style>
