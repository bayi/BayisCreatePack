
BlockEvents.rightClicked(event => {
  const { block, player, item } = event
  for (const seed of global.Seeds.items) {
    if (item.id === seed.key && block.id === seed.use_on) {
      // Replace block with result
      if (block.result) block.set(seed.result)
      else {
        // Handle sculk_core here
        if (block.id === 'minecraft:sculk_shrieker') {
          const entity = block.getEntity()
          if (entity) {
            const properties = block.getProperties()
            const newProperties = {}
            for (const prop in properties) {
              newProperties[prop] = properties[prop]
              player.tell(`${prop}: ${properties[prop]}`)
            }
            player.tell(`Properties: ${JSON.stringify(newProperties)}`)
            if (!newProperties.can_summon || newProperties.can_summon === 'false') {
              newProperties.can_summon = true
              block.set(block.id, newProperties)
              block.createExplosion().explode()
            } else return
          }
        } else return
      }

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
