<script>
import { warningNotify } from '@/composables/useNotification';

export default {
  setup() {
    const open = () => {
      warningNotify('更新成功')
    }

    return { open }
  },
}
</script>

<template>
  <Layout>
    <div class="p-4">
      <PrimaryButton @click="open">顯示通知</PrimaryButton>
    </div>
  </Layout>
</template>
