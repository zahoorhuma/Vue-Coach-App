<template>
  <header>
    <div class="title">Coach Finder</div>
    <nav>
      <div class="app-link">
        <div>
          <router-link to="/coaches"> All Coaches </router-link>
        </div>
        <div>
          <router-link to="/requests">Requests</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #2a2a2a;
  color: white;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  font-family: cursive;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.app-link {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  background-color: var(--yellow);
  color: black;
  font-size: 20px;
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
</style>
