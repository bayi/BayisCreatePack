
// const stones = event.get('forge:stone').getObjectIds()

// Remove all Create Sifter recipes
ServerEvents.recipes(event => {
  event.remove({ type: 'createsifter:sifting' })
})


const tier1 = [
  'createsifter:string_mesh',
  'createsifter:andesite_mesh',
]

const tier2 = [
  // @TODO: iron_mesh
  'createsifter:zinc_mesh'
]

const tier3 = [
  'createsifter:brass_mesh',
  'createsifter:sturdy_mesh'
]

const tier4 = [
  'createsifter:advanced_brass_mesh',
  'createsifter:advanced_sturdy_mesh'
]

const seeds = [
  Output.of('minecraft:wheat_seeds'),
  Output.of('minecraft:beetroot_seeds'),
  Output.of('minecraft:pumpkin_seeds'),
  Output.of('minecraft:melon_seeds'),
  Output.of('farmersdelight:cabbage_seeds'),
  Output.of('farmersdelight:tomato_seeds'),
  Output.of('supplementaries:flax_seeds'),
]

const stonePebbles = [
  'createsifter:stone_pebble',
  'createsifter:andesite_pebble',
  'createsifter:diorite_pebble',
  'createsifter:granite_pebble',
]

const stonePebbles2 = [
  'createsifter:tuff_pebble',
  'createsifter:calcite_pebble',
  'createsifter:deepslate_pebble',
]

const siftingRecipes = [
  {
    input: 'minecraft:dirt',
    time: 500,
    advancedSifter: false,
    waterlogged: false,
    tier1: Array.concat(seeds, stonePebbles),
  }
]

// Add sifting recipes
ServerEvents.recipes(event => {
  for(const recipe of siftingRecipes) {
    let { input, time, advancedSifter, waterlogged, tier1 } = recipe
    event.recipes.createsifter.sifting(
      tier1,
      'minecraft:dirt',
      'createsifter:string_mesh'
    ).processingTime(time)
    .waterlogged(waterlogged)
    .advancedSifter(advancedSifter)
  }
  event.recipes.createsifter.sifting(
    [
      Output.of('minecraft:clay',0.5),
      Output.of('minecraft:redstone')
    ]
    ,'minecraft:sand',
    'createsifter:andesite_mesh'
  ).processingTime(500)
  .waterlogged(false)
  .advancedSifter(false)
})
