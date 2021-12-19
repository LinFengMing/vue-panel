<template>
  <Layout>
    <div class="p-4 space-y-4">
      <div class="space-x-4">
        <PrimaryButton disabled>主要按鈕</PrimaryButton>
        <PrimaryButton to="/">主要按鈕</PrimaryButton>
      </div>

      <div class="space-x-4">
        <SecondaryButton disabled>次要按鈕</SecondaryButton>
        <SecondaryButton to="/setting">次要按鈕</SecondaryButton>
      </div>

      <div class="space-x-4">
        <DangerButton disabled>刪除帳號</DangerButton>
        <DangerButton to="/login">刪除帳號</DangerButton>
      </div>
    </div>
  </Layout>
</template>
