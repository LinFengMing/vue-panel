<template>
  <notifications>
    <template #body="{ item, close }">
      <div
        class="notification relative mx-4 mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
        :class="`notification-${item.type || 'default'}`"
      >
        <div class="notification-inner flex p-3 border-l-4">
          <div>
            <heroicons-outline-check-circle
              class="notification-icon"
              v-if="item.type === 'success'"
            />
            <heroicons-outline-information-circle
              class="notification-icon"
              v-else-if="item.type === 'warn'"
            />
            <heroicons-outline-x-circle
              class="notification-icon"
              v-else-if="item.type === 'error'"
            />
            <heroicons-outline-information-circle class="notification-icon" v-else />
          </div>

          <div class="ml-2">
            <div class="mt-0.5 text-gray-600 font-normal tracking-wide">{{ item.title }}</div>

            <div class="mt-0.5 text-gray-400 text-sm" v-if="item.text">{{ item.text }}</div>

            <button
              type="button"
              class="absolute right-2 top-2 flex justify-center items-center w-6 h-6 text-gray-400 hover:text-gray-500 transition-colors duration-100"
              :class="item.text ? 'top-2' : 'top-4'"
              @click="close"
            >
              <heroicons-outline-x class="notification-icon w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>
