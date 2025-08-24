
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('createskyblock:leaf_mulcher', 1),
    [
      'T T',
      'PSP',
      'PPP'
    ],
    {
      P: '#minecraft:planks',
      T: '#minecraft:slabs',
      S: 'woodenshears:wooden_shears',
    })
})

BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'createskyblock:leaf_mulcher') return // Not a leaf mulcher
  if (item.id !== 'minecraft:oak_leaves' &&
      item.id !== 'minecraft:spruce_leaves' &&
      item.id !== 'minecraft:birch_leaves' &&
      item.id !== 'minecraft:jungle_leaves' &&
      item.id !== 'minecraft:acacia_leaves' &&
      item.id !== 'minecraft:dark_oak_leaves' &&
      item.id !== 'minecraft:mangrove_leaves' &&
      item.id !== 'minecraft:azalea_leaves' &&
      item.id !== 'minecraft:flowering_azalea_leaves') return // Not holding leaves

  if (!player.isCreative) {
    item.count -= 1 // Consume one leaf
    if (item.count <= 0) player.setMainHandItem(Item.of('minecraft:air')) // Remove item if count is zero
  }

  // Randomly drop items based on defined probabilities
  const rand = Math.random()
  if (rand < 0.05) {
    block.popItem(Item.of('minecraft:apple', 1)) // 5% chance for apple
  } else if (rand < 0.20) {
    block.popItem(Item.of('minecraft:sapling', 1)) // Additional 15% chance for sapling (total 20%)
  } else if (rand < 0.50) {
    block.popItem(Item.of('minecraft:stick', Math.floor(Math.random() * 3) + 1)) // Additional 30% chance for sticks (1-3)
  } else {
    block.popItem(Item.of('minecraft:dirt', 1)) // Remaining 50% chance for dirt
  }

  // Play sound effect
  // level.playSound(player.x, player.y, player.z, 'minecraft:block.grass.break', 'block', 1.0, 1.0, false)
  event.cancel() // Prevent default interaction
})
