
const seeds = {
  items: [
    {
      key: 'createskyblock:grass_seeds',
      color: '#668E2D',
      use_on: 'minecraft:dirt',
      result: 'minecraft:grass_block'
    },
    {
      key: 'createskyblock:mycelium_seeds',
      color: '#63575B',
      use_on: 'minecraft:dirt',
      result: 'minecraft:mycelium'
    },
    {
      key: 'createskyblock:warped_nylium_seeds',
      color: '#12656B',
      use_on: 'minecraft:netherrack',
      result: 'minecraft:warped_nylium'
    },
    {
      key: 'createskyblock:crimson_nylium_seeds',
      color: '#972627',
      use_on: 'minecraft:netherrack',
      result: 'minecraft:crimson_nylium'
    }
  ],
}

// --- Item Registration ---
StartupEvents.registry('item', event => {
  for (const item of seeds.items) {
    event.create(item.key)
      .maxStackSize(64)
      .texture('createskyblock:item/seeds')
      .color(0, item.color)
      .tag('c:seeds')
      .tag('minecraft:crops')
  }
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
  let lastItem = 'minecraft:wheat_seeds'
  for (const item of seeds.items) {
    event.addAfter(lastItem, item.key)
    lastItem = item.key
  }
})

global.Seeds = seeds
