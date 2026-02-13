<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  padding-top: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  animation: slideLeft 0.5s ease-out;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0.5rem;
    padding-top: 1.2rem;
  }
}
</style>
