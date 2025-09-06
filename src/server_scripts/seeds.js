
BlockEvents.rightClicked(event => {
  const { block, player, item } = event
  for (const seed of global.Seeds.items) {
    if (item.id === seed.key && block.id === seed.use_on) {
      // Replace block with result
      block.set(seed.result)

      // Consume one seed
      const heldItem = player.getMainHandItem()
      if (heldItem.id === item.id) {
        heldItem.count -= 1
        player.setMainHandItem(heldItem)
      }

      // Play sound effect
      player.playSound('item.crop.plant')

      event.cancel() // Prevent default interaction
      return
    }
  }
})
