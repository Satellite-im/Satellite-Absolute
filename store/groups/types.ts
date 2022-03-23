export interface GroupMemberInfo {
  name: string
  photoHash: string
  status: string
  address: string
}

export interface Group {
  id: string
  name?: string
  admin: string
  creator: string
  members: number
  openInvites: boolean
  encryptionKey: string
  membersInfo?: GroupMemberInfo[]
}

export interface GroupsState {
  all: Group[]
  subscriptionId: number | null
}

export enum GroupsError {
  INVITE_ALREADY_SENT = 'errors.groups.request_already_sent',
  RECIPIENT_NOT_FOUND = 'errors.groups.recipient_not_found',
  TEXTILE_NOT_INITIALIZED = 'errors.groups.textile_not_initialized',
  USER_NOT_INITIALIZED = 'errors.groups.user_not_initialized',
}
