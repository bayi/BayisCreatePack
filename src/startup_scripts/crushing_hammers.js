
const crushingHammers = {
  tag: 'createskyblock:crushing_hammers',
  maxProcessBlocks: 64,
  processingMap: {
    'minecraft:stone': 'minecraft:cobblestone',
    'minecraft:cobblestone': 'minecraft:gravel',
    'minecraft:gravel': 'minecraft:sand',
    'minecraft:sand': 'createsifter:dust',
  },
  items: [],
}


// --- Item Registration ---
StartupEvents.registry('item', event => {
  crushingHammers.items.push(['createskyblock:crushing_hammer', 'minecraft:oak_planks'])
  event.create('createskyblock:crushing_hammer', 'pickaxe')
    .maxStackSize(1)
    .texture('createskyblock:item/crushing_hammer')
    .tier(event => {
      return {
        level: 1, // stone level
        uses: 250,
        speed: 4.0,
        attackDamageBonus: 1.0,
        enchantmentValue: 5,
        tag: crushingHammers.tag
      }
    })
    .tag(crushingHammers.tag) // custom tag for all crushing hammers
    .tag('minecraft:mineable/pickaxe') // behaves like a pickaxe for mining
    .tag('forge:tools')
    .tag('forge:tools/hammers')
})

// --- Add item to creative tab ---
StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  let lastItem = 'minecraft:stone_hoe'
  for (const item of crushingHammers.items) {
    event.addAfter(lastItem, item[0])
    lastItem = item[0]
  }
})

global.CrushingHammers = crushingHammers
