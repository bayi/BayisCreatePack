
// Right click furnace with create:andesite_alloy to create a melter:melter
BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'minecraft:furnace') return // Not a furnace
  if (item.id !== 'create:andesite_alloy') return // Not holding andesite alloy

  // Replace furnace with melter
  block.set('melter:melter')

  // Consume one andesite alloy
  const heldItem = player.getMainHandItem()
  if (heldItem.id === item.id) {
    heldItem.count -= 1
    player.setMainHandItem(heldItem)
  }

  // Play sound effect
  player.playSound('block.furnace.fire_crackle')

  event.cancel() // Prevent default interaction
})
