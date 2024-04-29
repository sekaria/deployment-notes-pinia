import { defineStore } from 'pinia'

const STORAGE_KEY = 'user_notes'

export const useUserNotesStore = defineStore({
  id: 'userNotes',
  state: () => ({
    notes: JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  }),
  actions: {
    addNote(newNote) {
      this.notes.push(newNote)
      this.saveNotesToLocalStorage()
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
      this.saveNotesToLocalStorage()
    },
    saveNotesToLocalStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes))
    }
  },
  getters: {
    totalNotes() {
      return this.notes.length
    }
  }
})
