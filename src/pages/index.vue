<script>
import { ref } from 'vue'
import { useConfirm } from '@/composables/useConfirmModal'

export default {
  setup() {
    const deletePost = () => {
      useConfirm('確定要刪除嗎?').then(result => {
        if (result) {
          console.log('刪除成功');
        }
      })
    }

    return { deletePost }
  },
}
</script>

<template>
  <Layout>
    <div class="p-4">
      <DangerButton @click="deletePost">刪除</DangerButton>
    </div>
  </Layout>
</template>
