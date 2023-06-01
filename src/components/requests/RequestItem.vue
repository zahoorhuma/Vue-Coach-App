<template>
  <div class="center">
    <card-base>
      <h3>{{ email }}</h3>
      <div>
        {{ description }}
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
  props: ["id", "email", "description"],
};
</script>
