<script>
import { ref } from 'vue'

export default {
  setup() {
    const showModal = ref(false)

    return { showModal }
  },
}
</script>

<template>
  <Layout>
    <div class="p-4">
      <PrimaryButton @click="showModal = true">開啟視窗</PrimaryButton>

      <Modal v-model="showModal">
        <template #title>我是標題</template>

        <template #content>
          <div
            class="mt6"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, suscipit.</div>
        </template>
      </Modal>
    </div>
  </Layout>
</template>
