ClientEvents.lang('en_us', (event) => {
  event.add('block.createskyblock.leaf_mulcher', 'Leaf Mulcher')
  event.add('item.createskyblock.leaf_mulcher', 'Leaf Mulcher')
})

ClientEvents.lang('hu_hu', (event) => {
  event.add('block.createskyblock.leaf_mulcher', 'Levélmulcsozó')
  event.add('item.createskyblock.leaf_mulcher', 'Levélmulcsozó')
})


BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'createskyblock:leaf_mulcher') return // Not a leaf mulcher
  if (!item.hasTag('minecraft:leaves')) return // Not holding leaves
  const heldItem = player.getMainHandItem()
  if (heldItem.id !== item.id) return // Ensure the held item is the same as the interacted item

  // We do processing on the server

  // Play sound effect
  player.playSound('block.composter.fill_success')

  event.cancel() // Prevent default interaction
})
