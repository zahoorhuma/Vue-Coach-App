<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-shadow: #83677b 0px 5px 15px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid var(--pink);
}
</style>
