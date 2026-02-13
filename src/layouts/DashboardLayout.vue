<script setup lang="ts">
import { ref } from 'vue'
import SidebarMenu from '../components/common/SidebarMenu.vue'
import BurgerIcon from '../components/common/icons/BurgerIcon.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="dashboard-layout">
    <SidebarMenu :is-open="sidebarOpen" :on-close="closeSidebar" />

    <div class="main-content">
      <header class="header">
        <div class="header-content">
          <button @click="toggleSidebar" class="hamburger-btn" aria-label="Abrir menú">
            <BurgerIcon />
          </button>

          <h1>E-commerce Dashboard</h1>
        </div>
      </header>

      <main class="content">
        <div class="content-wrapper">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

@media (min-width: 1024px) {
  .main-content {
    margin-left: 256px;
  }
}

.header {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 0.4rem;
}

.header-content {
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header h1 {
  font-size: 1rem;
  font-weight: 400;
  color: #111827;
  margin: 0;
}

.hamburger-btn {
  padding: 0.5rem;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.hamburger-btn:hover {
  background-color: #f3f4f6;
}

.content {
  flex: 1;
  padding-bottom: 2rem;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

@media (min-width: 1024px) {
  .hamburger-btn {
    display: none;
  }
}

@media (min-width: 640px) {
  .header-content {
    padding: 1rem 2rem;
  }

  .content-wrapper {
    padding: 0 2rem;
  }
}
</style>
