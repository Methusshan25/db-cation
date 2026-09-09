<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
.app-navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
}

.app-navigation a {
  color: var(--text);
  text-decoration: none;
}

.app-navigation a.router-link-active {
  color: var(--accent);
  font-weight: 600;
}
</style>
