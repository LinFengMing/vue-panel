<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="pl-5 py-3 text-left">
            <SelectAllCheckbox v-model:state="selectAllState" />
          </th>

          <th
            class="px-5 py-3 text-left text-sm text-gray-400 font-medium tracking-wider whitespace-nowrap"
            v-for="column in columns"
            :key="column.key"
          >{{ column.label }}</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(record, i) in data"
          :key="record.id"
          :class="{ 'bg-violet-50': rowSelectStatus[i] }"
        >
          <td class="pl-5 py-3">
            <SelectRowCheckbox v-model:state="rowSelectStatus[i]" />
          </td>

          <td
            class="px-5 py-3 text-left text-sm text-gray-400 font-medium tracking-wider whitespace-nowrap"
            v-for="column in columns"
            :key="column.key"
          >
            <slot
              :name="`column-${column.key}`"
              :column="column"
              :record="record"
              :value="record[column.key]"
            >{{ record[column.key] }}</slot>
          </td>

          <td class="px-5 py-3 text-gray-600 whitespace-nowrap">
            <slot name="actions" :record="record" :confirmDeleteText="confirmDeleteText"></slot>
          </td>
        </tr>

        <tr v-if="!data.length">
          <td :colspan="columnsCount" class="py-12 text-center text-gray-400">{{ emptyText }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <Paginator v-model:current-page="currentPage" :total-page="totalPage" />
</template>

<script>import { ref, computed } from 'vue'

export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    emptyText: {
      type: String,
      default: '當前沒有任何資料',
    },
    confirmDeleteText: {
      type: String,
      default: '確定要執行刪除嗎?',
    },
  },
  setup(props) {
    const columnsCount = computed(() => {
      return props.columns.length + 2
    })

    const selectAllState = ref('none')
    const rowSelectStatus = ref(props.data.map(_ => false))

    const currentPage = ref(1)
    const totalPage = ref(10)

    return { columnsCount, selectAllState, rowSelectStatus, currentPage, totalPage }
  },
}
</script>
