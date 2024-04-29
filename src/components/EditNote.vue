<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Edit Catatan</h2>
    <input
      class="border border-gray-300 px-3 py-2 rounded-md mb-4 mr-5"
      type="text"
      v-model="editedNote"
    />
    <router-link :to="'/'"
      ><button
        @click="saveNote"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Simpan
      </button>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserNotesStore } from '@/stores/store'

export default {
  setup() {
    const userNotesStore = useUserNotesStore()
    const route = useRoute()

    const index = ref(route.params.index)
    const editedNote = ref(userNotesStore.notes[index.value])

    const saveNote = () => {
      userNotesStore.notes[index.value] = editedNote.value
    }

    return {
      editedNote,
      saveNote
    }
  }
}
</script>
