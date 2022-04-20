import { Config } from '~/config'

const astrobunnyHash = 'QmRwZDz8qavwCcmq6DSDTDLrt1qzzw2nMcz1pcGuNxdhcW'
const grimReaperHash = 'QmWzGaV5zKn1MowCF9FXHT53WoPh5GjHrfpw6danzucUqT'
const marshmelloHash = 'QmRdEKurqzzVd6ZAozkGt3jf4mPpKioq9hCinFJr1s2BmS'
const lyaHash = 'QmdNKnfZSc6yU8aixKrcK2ghiHZi2kzMwP47sWCB6dh3bN'
const blackCatHash = 'QmQ3VroPczEHcUyLg9QzR5KAXwhAJtu3pveb5VwstevZZr'
const genshin1Hash = 'QmToeYqY4KxNto6Zz412vnC5cSX9tbeq473oACDemp3gNe'
const genshin2Hash = 'QmTNyCC9QLTXzC99wf7YGh6rBQs8L3tjgpbg3dVPebHnB6'
const lamHash = 'QmeRqtgfCmhHZoV924hjTTwqakEQtydjwgryaAmCz3Z4C7'
const starWarsHash = 'QmVdkZL4Ez9tvkdP8bcMycKpkeTRg5MUXxqnZGsNLeYsmj'
const birdsHash = 'QmNXed4zJNBn8Ja9aXpVQ66DZ9bVGYcwpd8TbPnfif6cKD'

export const Glyphs = {
  astrobunny: {
    name: 'Astrobunny',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'John Treanor',
    id: '0123',
    stickerURLs: [
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/AHH.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/AHHcloseup.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Coy_02.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Cry.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Cry2.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Laugh.png`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Luv.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Luv_02.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/Sad3.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/ThumbsDownNew.48.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/ThumbsUP.gif`,
      `${Config.ipfs.gateway}${astrobunnyHash}/$1/ThumbsUPNew.gif`,
    ],
  },
  grimreaper: {
    name: 'Grim Reaper',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'LAM',
    id: '012312',
    stickerURLs: [
      `${Config.ipfs.gateway}${grimReaperHash}/$1/1.png`,
      `${Config.ipfs.gateway}${grimReaperHash}/$1/2.png`,
      `${Config.ipfs.gateway}${grimReaperHash}/$1/3.png`,
      `${Config.ipfs.gateway}${grimReaperHash}/$1/4.png`,
      `${Config.ipfs.gateway}${grimReaperHash}/$1/5.png`,
      `${Config.ipfs.gateway}${grimReaperHash}/$1/6.png`,
    ],
  },
  marshmellow: {
    name: 'Marshmello',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'John Treanor',
    id: '012312c',
    stickerURLs: [
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Ahhhhh.gif`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_01.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_02.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_03.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_04.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_05.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_06.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_07.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_08.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_09.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_10.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_11.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_12.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Emoji_13.png`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/HellYea.gif`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/Luv.gif`,
      `${Config.ipfs.gateway}${marshmelloHash}/$1/spark.gif`,
    ],
  },
  food: {
    name: 'Food',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'Lya',
    id: 'jdsoer',
    stickerURLs: [
      `${Config.ipfs.gateway}${lyaHash}/$1/Beer.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/Toast.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/chocolate_angry.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/chocolate_cute.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/coconut_cute.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/coconut_rude.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/coffee_cute.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/coffee_rude.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/croissant2.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/croissant1.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/fries.gif`,
      `${Config.ipfs.gateway}${lyaHash}/$1/onigiri.gif`,
    ],
  },
  blackcat: {
    name: 'Black Cat',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'Dan Tavis',
    id: 'k321r',
    stickerURLs: [
      `${Config.ipfs.gateway}${blackCatHash}/$1/Black-Cat-Attention-2.png`,
      `${Config.ipfs.gateway}${blackCatHash}/$1/Cat-+-Flowers.png`,
      `${Config.ipfs.gateway}${blackCatHash}/$1/Cat-Vs-Yarn-%28cover%29.png`,
      `${Config.ipfs.gateway}${blackCatHash}/$1/Fluff.png`,
      `${Config.ipfs.gateway}${blackCatHash}/$1/Sleep-Day%20%284%29.png`,
      `${Config.ipfs.gateway}${blackCatHash}/$1/Thumbs-Up-Cat.png`,
    ],
  },
  genshin: {
    name: 'Genshin Impact 1',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'John Treanor',
    id: '001',
    stickerURLs: [
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_01.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_02.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_03.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_04.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_05.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_06.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_07.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_08.png`,
      `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_09.png`,
      // `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_22.png`,
      // `${Config.ipfs.gateway}${genshin1Hash}/$1/JohnTreanor_GenshinImpactFood_23.png`,
    ],
  },
  genshinTwo: {
    name: 'Genshin Impact 2',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'John Treanor',
    id: '002',
    stickerURLs: [
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_10.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_11.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_12.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_13.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_14.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_15.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_16.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_17.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_18.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_19.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_20.png`,
      `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_21.png`,
      // `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_22.png`,
      // `${Config.ipfs.gateway}${genshin2Hash}/$1/JohnTreanor_GenshinImpactFood_23.png`,
    ],
  },
  lamsEmoji: {
    name: 'LAM Collection',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'LAM',
    id: '0103',
    stickerURLs: [
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-1.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-3.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-4.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-5.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-6.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-7.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-8.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-9.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-10.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-11.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-13.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-14.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-15.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-16.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-17.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-18.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-19.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-20.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-21.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-22.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-23.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-122.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-612.png`,
      `${Config.ipfs.gateway}${lamHash}/$1/Untitled-6123.png`,
    ],
  },
  starWars: {
    name: 'Star Wars',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'John Treanor',
    id: '0053',
    stickerURLs: [
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_01.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_02.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_03.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_04.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_05.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_06.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_07.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_08.png`,
      `${Config.ipfs.gateway}${starWarsHash}/$1/JohnTreanor_StarWarsPack_09.png`,
    ],
  },
  birds: {
    name: 'Birds',
    description: 'Short description can go here. Lorem ipsum.',
    artist: 'Dina Brodsky',
    id: '0903',
    stickerURLs: [
      `${Config.ipfs.gateway}${birdsHash}/$1/hawk.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/ducklings.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/owl.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/penguins.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/robin.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/stork.png`,
      `${Config.ipfs.gateway}${birdsHash}/$1/yellow_bird.png`,
    ],
  },
}
