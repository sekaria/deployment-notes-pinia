<template>
  <div>
    <input
      type="text"
      v-model="newNote"
      placeholder="Tambah catatan baru"
      class="border border-gray-300 px-3 py-2 rounded-md mb-4 mr-5"
    />
    <button
      @click="addNote"
      class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
    >
      Tambah
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserNotesStore } from '@/stores/store'

export default {
  name: 'AddNote',
  setup() {
    const userNotesStore = useUserNotesStore()
    const newNote = ref('')

    const addNote = () => {
      if (newNote.value.trim() !== '') {
        userNotesStore.addNote(newNote.value)
        newNote.value = ''
      }
    }

    return {
      newNote,
      addNote
    }
  }
}
</script>
