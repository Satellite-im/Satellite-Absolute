import { WebRTCState } from './types'
import { RootState } from '~/types/store/store'

const getters = {
  isActiveCall: (state: WebRTCState, getters: any, rootState: RootState) => {
    return (
      state.activeCall &&
      state.activeCall.callId &&
      state.activeCall.callId === rootState.conversation.id
    )
  },
  isBackgroundCall: (
    state: WebRTCState,
    getters: any,
    rootState: RootState,
  ) => {
    return (
      state.activeCall &&
      state.activeCall.callId &&
      state.activeCall.callId !== rootState.conversation.id
    )
  },
}

export default getters
