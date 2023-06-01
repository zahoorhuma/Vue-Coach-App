<template>
  <div v-if="hasRequests">
    <div v-for="request in Requests" :key="request.id">
      <request-item
        :id="request.id"
        :description="request.description"
        :email="request.email"
      ></request-item>
    </div>
  </div>
  <div v-else>No requests yet</div>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  computed: {
    Requests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>
