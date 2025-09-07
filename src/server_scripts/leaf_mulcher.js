
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('createskyblock:leaf_mulcher', 1),
    [
      'TST',
      'PSP',
      'PPP'
    ],
    {
      P: '#minecraft:planks',
      T: '#minecraft:slabs',
      S: 'woodenshears:wooden_shears',
    }).id('createskyblock:leaf_mulcher')
})

BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'createskyblock:leaf_mulcher') return // Not a leaf mulcher
  if (!item.hasTag('minecraft:leaves')) return // Not holding leaves

  item.count -= 1 // Consume one

  const rand = Math.random()
  const count = Math.floor(Math.random() * 6) + 1
  block.popItem(Item.of('createskyblock:dirt_piece', count))

  if (rand < 0.1) { // 10% chance to drop random seed
    const seeds = [
      'minecraft:wheat_seeds', 'minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 'minecraft:beetroot_seeds',
      'supplementaries:flax_seeds', 'supplementaries:flax_seeds',
      'farmersdelight:cabbage_seeds', 'farmersdelight:tomato_seeds',
    ]
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)]
    block.popItem(Item.of(randomSeed, 1))
  }

  event.cancel() // Prevent default interaction
})
