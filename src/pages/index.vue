<script>
import { notify } from '@kyvg/vue3-notification';

export default {
  setup() {
    const open = () => {
      notify({
        // type: 'success',
        title: '更新成功',
        // text: '已經更新成功了',
        duration: 1000000000,
      });
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
