<template>
  <div class="flex-col justify-center border p-4 rounded-lg mb-4 bg-slate-50">
    <slot v-if="slots.default"></slot>

    <div v-else class="flex animate-pulse">
      <div class="flex-shrink-0">
        <span
          class="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"
        ></span>
      </div>

      <div class="ml-4 mt-2 w-full">
        <h3
          class="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
          style="width: 40%"
        ></h3>

        <ul class="mt-5 space-y-3">
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();
</script>

<style>
@import "../tailwind.css";
</style>
