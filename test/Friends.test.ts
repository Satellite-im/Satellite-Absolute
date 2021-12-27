import * as Friends from "~/libraries/ui/Friends"

describe("Friends.getAlphaSorted", () => {
    test("0", () => {
        let param1: any = [{ publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[\"a\", \"b\", \"043\", \"holasenior\"]", pending: false, activeChat: true, account: { accountId: "Credit Card Account", from: "C:\\\\path\\to\\file.ext", status: 404, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "1.0.0", to: "." }, encryptedTextilePubkey: "v1.2.4", name: "Michael", address: "0.0.0.0", status: "done", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "07981006", mailboxId: "c466a48309794261b64a4f02cfcc3d64" }, { publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Credit Card Account", from: ".", status: 200, fromMailboxId: "bc23a9d531064583ace8f67dad60f6bb", toMailboxId: "^5.0.0", to: "." }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "Pierre Edouard", address: "192.168.1.5", status: "pending", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "07981006", mailboxId: "c466a48309794261b64a4f02cfcc3d64" }, { publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "https://croplands.org/app/a/reset?token=", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: false, activeChat: false, account: { accountId: "Investment Account", from: "./path/to/file", status: 200, fromMailboxId: "da7588892", toMailboxId: "4.0.0-beta1\t", to: "/path/to/file" }, encryptedTextilePubkey: "^5.0.0", name: "Edmond", address: "192.168.1.5", status: "processing", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "04079831", mailboxId: "12345" }, { publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "https://api.telegram.org/", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Checking Account", from: ".", status: 429, fromMailboxId: "12345", toMailboxId: "v4.0.0-rc.4", to: "./path/to/file" }, encryptedTextilePubkey: "^5.0.0", name: "Anas", address: "192.168.1.5", status: "canceled", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "30615264", mailboxId: "c466a48309794261b64a4f02cfcc3d64" }]
        let result: any = Friends.getAlphaSorted(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = [{ publicKey: "NoWiFi4you", typingState: "NOT_TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: true, activeChat: false, account: { accountId: "Checking Account", from: "./path/to/file", status: 200, fromMailboxId: "12345", toMailboxId: "^5.0.0", to: "." }, encryptedTextilePubkey: "^5.0.0", name: "Anas", address: "0.0.0.0", status: undefined, state: "idle", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "verified", userAccount: "07981006", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "http://base.com", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: true, activeChat: true, account: { accountId: "Checking Account", from: "path/to/file.ext", status: 400, fromMailboxId: "da7588892", toMailboxId: "1.0.0", to: "C:\\\\path\\to\\folder\\" }, encryptedTextilePubkey: "^5.0.0", name: "Michael", address: "0.0.0.0", status: undefined, state: "idle", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "verified", userAccount: "30615264", mailboxId: undefined }]
        let result: any = Friends.getAlphaSorted(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = [{ publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "ponicode.com", item: "[10, -45.9, 103.5, 0.955674]", pending: false, activeChat: false, account: { accountId: "Home Loan Account", from: "path/to/folder/", status: 404, fromMailboxId: "12345", toMailboxId: "4.0.0-beta1\t", to: "path/to/folder/" }, encryptedTextilePubkey: "^5.0.0", name: "Anas", address: "192.168.1.5", status: "completed", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "95430333", mailboxId: "12345" }, { publicKey: "$p3onyycat", typingState: "NOT_TYPING", textilePubkey: "https://", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: false, activeChat: false, account: { accountId: "Credit Card Account", from: "path/to/file.ext", status: 200, fromMailboxId: "bc23a9d531064583ace8f67dad60f6bb", toMailboxId: "v1.2.4", to: "path/to/file.ext" }, encryptedTextilePubkey: "v1.2.4", name: "George", address: "192.168.1.5", status: "completed", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "66167549", mailboxId: "bc23a9d531064583ace8f67dad60f6bb" }, { publicKey: "$p3onyycat", typingState: "NOT_TYPING", textilePubkey: "https://api.telegram.org/bot", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: false, activeChat: false, account: { accountId: "Checking Account", from: ".", status: 500, fromMailboxId: "bc23a9d531064583ace8f67dad60f6bb", toMailboxId: "1.0.0", to: "/path/to/file" }, encryptedTextilePubkey: "1.0.0", name: "Anas", address: "192.168.1.5", status: "draft", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "66167549", mailboxId: "9876" }, { publicKey: "YouarenotAllowed2Use", typingState: "NOT_TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[\"a\", \"b\", \"043\", \"holasenior\"]", pending: true, activeChat: true, account: { accountId: "Credit Card Account", from: "/path/to/file", status: 500, fromMailboxId: "9876", toMailboxId: "4.0.0-beta1\t", to: "C:\\\\path\\to\\file.ext" }, encryptedTextilePubkey: "1.0.0", name: "Jean-Philippe", address: "192.168.1.5", status: "completed", state: "online", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: "cameraman", userAccount: "07981006", mailboxId: "9876" }]
        let result: any = Friends.getAlphaSorted(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = [{ publicKey: "YouarenotAllowed2Use", typingState: "TYPING", textilePubkey: "https://croplands.org/app/a/reset?token=", item: "[10, -45.9, 103.5, 0.955674]", pending: false, activeChat: true, account: { accountId: "Credit Card Account", from: "C:\\\\path\\to\\file.ext", status: 500, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "v1.2.4", to: "C:\\\\path\\to\\folder\\" }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "Michael", address: "192.168.1.5", status: "draft", state: "idle", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "95430333", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: true, activeChat: true, account: { accountId: "Home Loan Account", from: "C:\\\\path\\to\\folder\\", status: 404, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "^5.0.0", to: "/path/to/file" }, encryptedTextilePubkey: "^5.0.0", name: "Pierre Edouard", address: "0.0.0.0", status: "done", state: "idle", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "04079831", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "TYPING", textilePubkey: "https://accounts.google.com/o/oauth2/revoke?token=%s", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: true, activeChat: false, account: { accountId: "Credit Card Account", from: ".", status: 500, fromMailboxId: "da7588892", toMailboxId: "4.0.0-beta1\t", to: "path/to/folder/" }, encryptedTextilePubkey: "1.0.0", name: "Edmond", address: "192.168.1.5", status: "completed", state: "idle", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "07981006", mailboxId: undefined }]
        let result: any = Friends.getAlphaSorted(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = [{ publicKey: "$p3onyycat", typingState: "NOT_TYPING", textilePubkey: "https://croplands.org/app/a/reset?token=", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Checking Account", from: "/path/to/file", status: 200, fromMailboxId: "9876", toMailboxId: "v1.2.4", to: "C:\\\\path\\to\\folder\\" }, encryptedTextilePubkey: "1.0.0", name: "Edmond", address: "0.0.0.0", status: "done", state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "66167549", mailboxId: undefined }, { publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "https://api.telegram.org/bot", item: "[\"a\", \"b\", \"043\", \"holasenior\"]", pending: false, activeChat: true, account: { accountId: "Credit Card Account", from: "path/to/folder/", status: 500, fromMailboxId: "9876", toMailboxId: "^5.0.0", to: "path/to/file.ext" }, encryptedTextilePubkey: "v4.0.0-rc.4", name: "Pierre Edouard", address: "192.168.1.5", status: "draft", state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "30615264", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "http://www.example.com/route/123?foo=bar", item: "[\"a\", \"b\", \"043\", \"holasenior\"]", pending: true, activeChat: true, account: { accountId: "Credit Card Account", from: "./path/to/file", status: 429, fromMailboxId: "12345", toMailboxId: "^5.0.0", to: "./path/to/file" }, encryptedTextilePubkey: "v4.0.0-rc.4", name: "Michael", address: "0.0.0.0", status: "pending", state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "04079831", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "https://croplands.org/app/a/confirm?t=", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: true, activeChat: false, account: { accountId: "Investment Account", from: "/path/to/file", status: 200, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "4.0.0-beta1\t", to: "/path/to/file" }, encryptedTextilePubkey: "1.0.0", name: "Jean-Philippe", address: "0.0.0.0", status: "done", state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "66167549", mailboxId: undefined }]
        let result: any = Friends.getAlphaSorted(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = Friends.getAlphaSorted([])
        expect(result).toMatchSnapshot()
    })
})


describe("Friends.getFilteredFriends", () => {
    test("0", () => {
        let param1: any = [{ publicKey: "YouarenotAllowed2Use", typingState: "TYPING", textilePubkey: "https://croplands.org/app/a/reset?token=", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Investment Account", from: "./path/to/file", status: 400, fromMailboxId: "12345", toMailboxId: "^5.0.0", to: "path/to/file.ext" }, encryptedTextilePubkey: "v4.0.0-rc.4", name: "Jean-Philippe", address: "192.168.1.5", status: undefined, state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "30615264", mailboxId: undefined }, { publicKey: "!Lov3MyPianoPony", typingState: "TYPING", textilePubkey: "https://api.telegram.org/", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: true, activeChat: false, account: { accountId: "Credit Card Account", from: "C:\\\\path\\to\\folder\\", status: 404, fromMailboxId: "9876", toMailboxId: "v1.2.4", to: "." }, encryptedTextilePubkey: "v4.0.0-rc.4", name: "Jean-Philippe", address: "0.0.0.0", status: undefined, state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "66167549", mailboxId: undefined }, { publicKey: "accessdenied4u", typingState: "TYPING", textilePubkey: "https://api.telegram.org/", item: "[\"foo bar\",  -0.353, \"**text**\", 4653]", pending: false, activeChat: true, account: { accountId: "Credit Card Account", from: "path/to/file.ext", status: 200, fromMailboxId: "12345", toMailboxId: "v1.2.4", to: "path/to/file.ext" }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "George", address: "0.0.0.0", status: undefined, state: "mobile", unreadCount: undefined, profilePicture: undefined, badge: "cameraman", userAccount: "66167549", mailboxId: undefined }]
        let result: any = Friends.getFilteredFriends(param1, "ea")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = [{ publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "Www.GooGle.com", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: true, activeChat: true, account: { accountId: "Checking Account", from: ".", status: 404, fromMailboxId: "9876", toMailboxId: "^5.0.0", to: "/path/to/file" }, encryptedTextilePubkey: "1.0.0", name: "Pierre Edouard", address: "192.168.1.5", status: "canceled", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "66167549", mailboxId: undefined }, { publicKey: "accessdenied4u", typingState: "NOT_TYPING", textilePubkey: "http://base.com", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Investment Account", from: "path/to/file.ext", status: 429, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "1.0.0", to: "./path/to/file" }, encryptedTextilePubkey: "v1.2.4", name: "Jean-Philippe", address: "0.0.0.0", status: "processing", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "66167549", mailboxId: undefined }]
        let result: any = Friends.getFilteredFriends(param1, "eveniet")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = [{ publicKey: "!Lov3MyPianoPony", typingState: "NOT_TYPING", textilePubkey: "http://base.com", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: true, activeChat: false, account: { accountId: "Home Loan Account", from: "/path/to/file", status: 500, fromMailboxId: "12345", toMailboxId: "v1.2.4", to: "/path/to/file" }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "Edmond", address: "192.168.1.5", status: undefined, state: "idle", unreadCount: undefined, profilePicture: undefined, badge: "community", userAccount: "04079831", mailboxId: undefined }]
        let result: any = Friends.getFilteredFriends(param1, "natus")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = [{ publicKey: "NoWiFi4you", typingState: "NOT_TYPING", textilePubkey: "https://api.telegram.org/bot", item: "[\"a\", \"b\", \"043\", \"holasenior\"]", pending: true, activeChat: true, account: { accountId: "Investment Account", from: "C:\\\\path\\to\\file.ext", status: 404, fromMailboxId: "9876", toMailboxId: "1.0.0", to: "/path/to/file" }, encryptedTextilePubkey: "^5.0.0", name: "Pierre Edouard", address: "0.0.0.0", status: "pending", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "04079831", mailboxId: undefined }, { publicKey: "NoWiFi4you", typingState: "NOT_TYPING", textilePubkey: "https://croplands.org/app/a/reset?token=", item: "[-1, 0.5, 1, 2, 3, 4, 5]", pending: false, activeChat: true, account: { accountId: "Checking Account", from: "/path/to/file", status: 429, fromMailboxId: "9876", toMailboxId: "^5.0.0", to: "path/to/folder/" }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "George", address: "0.0.0.0", status: "done", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "04079831", mailboxId: undefined }]
        let result: any = Friends.getFilteredFriends(param1, "ea")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = [{ publicKey: "$p3onyycat", typingState: "NOT_TYPING", textilePubkey: "http://www.croplands.org/account/confirm?t=", item: "[10, -45.9, 103.5, 0.955674]", pending: true, activeChat: false, account: { accountId: "Home Loan Account", from: "./path/to/file", status: 500, fromMailboxId: "9876", toMailboxId: "4.0.0-beta1\t", to: "path/to/folder/" }, encryptedTextilePubkey: "4.0.0-beta1\t", name: "George", address: "192.168.1.5", status: "completed", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "04079831", mailboxId: undefined }, { publicKey: "$p3onyycat", typingState: "NOT_TYPING", textilePubkey: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", item: "[10, -45.9, 103.5, 0.955674]", pending: true, activeChat: true, account: { accountId: "Checking Account", from: "./path/to/file", status: 200, fromMailboxId: "c466a48309794261b64a4f02cfcc3d64", toMailboxId: "v1.2.4", to: "C:\\\\path\\to\\folder\\" }, encryptedTextilePubkey: "^5.0.0", name: "Michael", address: "0.0.0.0", status: "pending", state: "offline", unreadCount: undefined, profilePicture: "http://placeimg.com/640/480", badge: undefined, userAccount: "66167549", mailboxId: undefined }]
        let result: any = Friends.getFilteredFriends(param1, "eveniet")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = Friends.getFilteredFriends([], "")
        expect(result).toMatchSnapshot()
    })
})
