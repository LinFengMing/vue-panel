<script>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
import HeroiconsOutlineDocumentText from '~icons/heroicons-outline/document-text'
import HeroiconsOutlineUser from '~icons/heroicons-outline/user'

export default {
  components: {
    HeroiconsOutlineHome,
    HeroiconsOutlineDocumentText,
    HeroiconsOutlineUser,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const showMenu = ref(false)

    const toggleMenu = () => {
      showMenu.value = !showMenu.value
    }

    const menuItems = [
      { to: '/', text: '首頁', icon: 'heroicons-outline-home' },
      { to: '/posts', text: '文章', icon: 'heroicons-outline-document-text' },
      { to: '/setting', text: '個人資料', icon: 'heroicons-outline-user' },
    ]

    const userMenuItems = [
      { tag: 'RouterLink', to: '/setting', text: '個人資料' },
      {
        tag: 'button',
        text: '登出',
        mobile: true,
        onclick: () => {
          router.push('/login')
        }
      },
    ]

    const activeItem = computed(() =>
      [...menuItems]
        .reverse()
        .find(item => route.path.startsWith(item.to))
    )

    const isActive = (to) => to === activeItem.value.to

    return { showMenu, toggleMenu, menuItems, userMenuItems, isActive }
  }
}
</script>

<template>
  <div class="flex flex-col sm:flex-row min-h-screen">
    <!-- 左側選單欄 -->
    <div
      class="flex flex-col flex-shrink-0 justify-between w-full bg-violet-600 text-white sm:w-64"
    >
      <!-- Logo -->
      <div class="flex justify-between items-center h-16 px-4 sm:justify-center">
        <div class="flex justify-center items-center">
          <heroicons-outline-book-open class="w-10 h-10 mr-2" />
          <span class="text-xl font-medium">Press</span>
        </div>

        <button class="sm:hidden flex justify-center items-center w-8 h-8" @click="toggleMenu">
          <heroicons-outline-menu class="w-5 h-5" />
        </button>
      </div>

      <div class="sm:flex flex-grow flex-col justify-between" :class="showMenu ? '' : 'hidden'">
        <!-- 主要選單 -->
        <ul>
          <li v-for="item in menuItems" :key="item.to">
            <RouterLink
              :to="item.to"
              class="flex items-center px-4 py-3 sm:px-5"
              :class="isActive(item.to) ? 'text-white' : 'text-violet-400 hover:text-white'"
            >
              <component :is="item.icon" class="w-5 h-5 mr-2" />
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
        <!-- 用戶名稱 手機版 -->
        <div class="sm:hidden mt-2 py-1 border-t border-violet-400">
          <div class="flex items-center px-4 py-3">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="https://cdn.jsdelivr.net/npm/slidev-theme-ycs77/public/images/lucas_v_avatar.jpg"
            />
            <div class="font-medium tracking-wide">Jiro</div>
          </div>

          <ul>
            <template v-for="item in userMenuItems" :key="item.text">
              <li v-if="item.mobile">
                <component
                  :is="item.tag"
                  :to="item.to"
                  class="flex items-center w-full px-4 py-3 text-violet-400 hover:text-white"
                  @click="item.onclick"
                >{{ item.text }}</component>
              </li>
            </template>
          </ul>
        </div>
        <!-- 用戶名稱 電腦版 -->
        <div
          class="hidden sm:flex sm:justify-between sm:items-center px-5 py-4 border-t border-violet-400"
        >
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="https://cdn.jsdelivr.net/npm/slidev-theme-ycs77/public/images/lucas_v_avatar.jpg"
            />
            <div class="font-medium tracking-wide">Jiro</div>
          </div>

          <Menu as="div" class="relative">
            <MenuButton
              class="flex justify-center items-center w-7 h-7 hover:bg-violet-400 rounded transition-colors duration-100"
              type="button"
            >
              <heroicons-outline-dots-vertical class="w-4 h-4" />
            </MenuButton>

            <TransitionZoom>
              <MenuItems
                class="absolute flex flex-col left-full bottom-0 ml-2 w-32 bg-white rounded-md shadow-lg overflow-hidden origin-bottom-left"
              >
                <MenuItem v-slot="{ active }" v-for="item in userMenuItems" :key="item.text">
                  <component
                    :is="item.tag"
                    :to="item.to"
                    class="px-3 py-2 text-gray-700 text-left text-base font-normal"
                    :class="active ? 'bg-gray-100' : ''"
                    @click="item.onclick"
                  >{{ item.text }}</component>
                </MenuItem>
              </MenuItems>
            </TransitionZoom>
          </Menu>
        </div>
      </div>
    </div>
    <!-- 右側內容區 -->
    <div class="flex-grow min-w-0 bg-gray-50 p-6 sm:px-10 sm:py-8">
      <slot></slot>
    </div>
  </div>
</template>
