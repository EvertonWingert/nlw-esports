<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import CreateAdModal from "@/components/CreateAdModal.vue";
import CreateAdBanner from "@/components/CreateAdBanner.vue";
import { useGameStore } from "@/store/game";

const showCreateAdModal = ref(false);

const store = useGameStore();
await store.fetchGames();
</script>
<template>
  <div class="bg-[#121214] bg-galaxy bg-cover bg-no-repeat min-h-screen">
    <div class="pt-20">
      <main class="flex flex-col items-center mx-auto max-w-7xl">
        <div class="min-h-[600px] w-full pt-20">
          <RouterView />
        </div>
        <CreateAdBanner @create-ad="showCreateAdModal = true" />
      </main>
      <CreateAdModal
        :isOpen="showCreateAdModal"
        @close="showCreateAdModal = false"
      />
    </div>
  </div>
</template>
