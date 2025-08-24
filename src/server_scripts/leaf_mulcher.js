
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
    })
})

// @TODO: Add dirt clumps as a possible output + seeds and other plant related items as output

BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'createskyblock:leaf_mulcher') return // Not a leaf mulcher
  if (!item.hasTag('minecraft:leaves')) return // Not holding leaves

  const heldItem = player.getMainHandItem()
  if (heldItem.id !== item.id) return // Ensure the held item is the same as the interacted item

  if (!player.isCreative) {
    if (heldItem.count > 1) {
      item.count -= 1 // Consume one leaf
      player.setMainHandItem(heldItem) // Update the player's held item
    } else {
      player.setMainHandItem(Item.of('minecraft:air')) // Remove item if only one left
    }
  }

  const rand = Math.random()
  block.popItem(Item.of('minecraft:dirt', rand < 0.1 ? 2 : 1)) // 10% chance to drop 2 dirt, otherwise 1 dirt

  event.cancel() // Prevent default interaction
})
