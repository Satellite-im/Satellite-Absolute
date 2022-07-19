export type User = {
  did: string
  peerId?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
  seen?: number
  name?: string
  photoHash?: string
}

export type Friend = User & {}

export type FriendRequestStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'removed'

export type FriendRequest = {
  user: User
  incoming: boolean
  status: FriendRequestStatus
  at: number
}

export const FriendsError = {
  NETWORK_ERROR: 'error.friends.network',
  FRIEND_EXISTS: 'error.friends.exists',
  FRIEND_NOT_FOUND: 'error.friends.not_found',
  REQUEST_NOT_FOUND: 'error.friends.request_not_found',
  REQUEST_NOT_SENT: 'error.friends.request_not_sent',
  REQUEST_ALREADY_SENT: 'error.friends.request_already_sent',
}
