// Remove all Create Sifter recipes
ServerEvents.recipes(event => {
  event.remove({ type: 'createsifter:sifting' })
})

const meshes = {
  tier1: [ 'createsifter:string_mesh', 'createsifter:andesite_mesh', ],
    // @TODO: iron_mesh
  tier2: [ 'createsifter:zinc_mesh' ],
  tier3: [ 'createsifter:brass_mesh', 'createsifter:sturdy_mesh' ],
  tier4: [ 'createsifter:advanced_brass_mesh', 'createsifter:advanced_sturdy_mesh' ]
}

const siftingRecipes = [
  {
    input: 'minecraft:dirt', time: 100, waterlogged: false,
    tier1: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),

      // Seeds
      Output.of('minecraft:wheat_seeds', 0.1),
      Output.of('minecraft:beetroot_seeds', 0.1),
      Output.of('minecraft:pumpkin_seeds', 0.1),
      Output.of('minecraft:melon_seeds', 0.1),
      Output.of('farmersdelight:cabbage_seeds', 0.1),
      Output.of('farmersdelight:tomato_seeds', 0.1),
      Output.of('supplementaries:flax_seeds', 0.1),
      Output.of('createskyblock:grass_seeds', 0.1),
      Output.of('createskyblock:mycelium_seeds', 0.1),

      // Grass
      Output.of('minecraft:short_grass', 0.05),
      Output.of('minecraft:tall_grass', 0.05),
    ],
    tier2: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),

      // Seeds
      Output.of('minecraft:wheat_seeds', 0.1),
      Output.of('minecraft:beetroot_seeds', 0.1),
      Output.of('minecraft:pumpkin_seeds', 0.1),
      Output.of('minecraft:melon_seeds', 0.1),
      Output.of('farmersdelight:cabbage_seeds', 0.1),
      Output.of('farmersdelight:tomato_seeds', 0.1),
      Output.of('supplementaries:flax_seeds', 0.1),
      Output.of('createskyblock:grass_seeds', 0.1),
      Output.of('createskyblock:mycelium_seeds', 0.1),

      // Decorative
      Output.of('minecraft:fern', 0.1),
      Output.of('minecraft:large_fern', 0.1),
      Output.of('minecraft:pink_petals', 0.1),

      // Grass
      Output.of('minecraft:short_grass', 0.05),
      Output.of('minecraft:tall_grass', 0.05),
    ],
    tier3: [
      // Raw plant food / resources
      Output.of('minecraft:potato', 0.10),
      Output.of('minecraft:carrot', 0.10),
      Output.of('minecraft:sweet_berries', 0.10),
      Output.of('minecraft:sugar_cane', 0.10),
      Output.of('minecraft:bamboo', 0.10),
      Output.of('minecraft:apple', 0.05),
      Output.of('farmersdelight:onion', 0.10),
      Output.of('farmersdelight:rice', 0.10),

      // Pebbles
      Output.of('createsifter:deepslate_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
    ],
    tier4: [
      // Pebbles
      Output.of('createsifter:calcite_pebble', 0.25),
      Output.of('createsifter:tuff_pebble', 0.25),
      Output.of('createsifter:deepslate_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),
    ]
  },
  {
    input: 'minecraft:dirt', time: 200, waterlogged: true,
    tier1: [
      Output.of('minecraft:kelp', 0.25),
      Output.of('minecraft:tube_coral', 0.05),
      Output.of('minecraft:brain_coral', 0.05),
      Output.of('minecraft:bubble_coral', 0.05),
      Output.of('minecraft:fire_coral', 0.05),
      Output.of('minecraft:horn_coral', 0.05),
      Output.of('minecraft:seagrass', 0.1),
      Output.of('minecraft:prismarine_shard', 0.1),
      Output.of('minecraft:prismarine_crystals', 0.1),
    ]
  },
]

// Add sifting recipes
ServerEvents.recipes(event => {
  for(const recipe of siftingRecipes) {
    let { input, time, advancedSifter, waterlogged } = recipe
    Object.keys(meshes).forEach(tier => {
      let prevTier = 'tier1'
      for(const mesh of meshes[tier]) {
        let tierItems = recipe[tier]
        if (!tierItems) tierItems = recipe[prevTier]
        if (!tierItems) tierItems = recipe['tier1']
        if (!tierItems) continue
        event.recipes.createsifter.sifting(
          tierItems,
          input,
          mesh
        ).processingTime(time)
        .waterlogged(waterlogged)
        .advancedSifter(tier === 'tier3' || tier === 'tier4' ? true : false)
        prevTier = tier
      }
    })
  }
})
