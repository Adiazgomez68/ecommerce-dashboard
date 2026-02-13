<script setup lang="ts">
defineProps<{
  title: string
  value: number | string
}>()
</script>

<template>
  <div class="stat-card">
    <p class="stat-card-title">
      {{ title }}
    </p>
    <p class="stat-card-value">
      {{ value }}
    </p>
  </div>
</template>

<style scoped>
.stat-card {
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.stat-card-title {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #666666;
}
.stat-card-value {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
