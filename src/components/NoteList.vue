<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Daftar Catatan Pengguna</h2>
    <div class="mb-4">
      <AddNote />
    </div>
    <ul>
      <li
        v-for="(note, index) in notes"
        :key="index"
        class="flex items-center justify-between border-b border-gray-300 py-2"
      >
        <span>{{ note }}</span>
        <div>
          <router-link :to="'/edit/' + index" class="mr-2">
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            >
              Edit
            </button>
          </router-link>
          <button
            @click="deleteNote(index)"
            class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
          >
            Hapus
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useUserNotesStore } from '@/stores/store'
import AddNote from './AddNote.vue'

export default {
  components: {
    AddNote: AddNote
  },
  name: 'NoteList',
  setup() {
    const userNotesStore = useUserNotesStore()
    const notes = computed(() => userNotesStore.notes)

    const deleteNote = (index) => {
      userNotesStore.deleteNote(index)
    }

    return {
      notes,
      deleteNote
    }
  }
}
</script>
