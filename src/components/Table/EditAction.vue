<script>
export default {
  props: {
    to: String,
  },
}
</script>

<template>
  <RouterLink
    :to="to"
    class="inline-flex justify-center items-center w-8 h-8 text-gray-400 hover:text-violet-600 transition-colors"
  >
    <heroicons-outline-pencil-alt />
  </RouterLink>
</template>
