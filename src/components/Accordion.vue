<template>
  <div ref="root" class="hs-accordion-group">
    <div class="hs-accordion active" id="hs-basic-heading-one">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
        aria-controls="hs-basic-collapse-one"
      >
        <svg
          class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        Accordion #1
      </button>
      <div
        id="hs-basic-collapse-one"
        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-one"
      >
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by
          default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>

    <div class="hs-accordion" id="hs-basic-heading-two">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
        aria-controls="hs-basic-collapse-two"
      >
        <svg
          class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        Accordion #2
      </button>
      <div
        id="hs-basic-collapse-two"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-two"
      >
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by
          default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>

    <div class="hs-accordion" id="hs-basic-heading-three">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
        aria-controls="hs-basic-collapse-three"
      >
        <svg
          class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        Accordion #3
      </button>
      <div
        id="hs-basic-collapse-three"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-three"
      >
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by
          default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// @ts-ignore
import { HSAccordion } from "../lib/preline/components/hs-accordion";
const root = ref<HTMLElement | null>(null);
watch(root, () => new HSAccordion(root?.value?.parentNode).init());
</script>

<style>
@import "../tailwind.css";
</style>
