<template>
  <div>
    <h1>{{ firstName + " " + lastName }}</h1>
  </div>
  <div class="rate">{{ rate }} $/hr</div>
  <div>{{ desc }}</div>
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

  <div class="actions">
    <router-link :to="contactPath">Contact</router-link>
    <router-link :to="path">View Details</router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    firstName: String,
    lastName: String,
    rate: Number,
    areas: Array,
    desc: String,
  },
  computed: {
    path() {
      return "/coaches" + "/" + this.id;
    },
    contactPath() {
      return "/coaches" + "/" + this.id + "/contact";
    },
  },
};
</script>

<style>
.area-div {
  display: flex;
  gap: 3px;
  margin-top: 1rem;
}

.area-style {
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.frontend {
  background-color: purple;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.backend {
  background-color: var(--pink);
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.rate {
  color: var(--mustard);
  font-weight: bold;
  margin-bottom: 20px;
}
.career {
  background-color: var(--mustard);
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

a {
  border: 1px solid;
  color: white;
  padding: 5px;
  background-color: #64485c;
  border-radius: 8px;
}
</style>
