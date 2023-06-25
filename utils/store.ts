/* eslint-disable no-unused-vars */
import { create } from 'zustand'

interface GeneralState {
  triggerTransition: string
  setTriggerTransition: (triggerTransition: string) => void
}

export const useStore = create<GeneralState>(set => ({
  triggerTransition: '',
  setTriggerTransition: (triggerTransition: string) => set({ triggerTransition }),
}))
