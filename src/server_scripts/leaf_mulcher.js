
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

// @TODO: Add dirt clumps as a possible output + seeds and other plant related items as output

/*
BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event
  if (block.id !== 'createskyblock:leaf_mulcher') return // Not a leaf mulcher
  if (!item.hasTag('minecraft:leaves')) return // Not holding leaves

  if (!player.isCreative) {
    item.count -= 1 // Consume one leaf
    if (item.count <= 0) player.setMainHandItem(Item.of('minecraft:air')) // Remove item if count is zero
  }

  const rand = Math.random()
  block.popItem(Item.of('minecraft:dirt', rand < 0.1 ? 2 : 1)) // 10% chance to drop 2 dirt, otherwise 1 dirt
  event.cancel() // Prevent default interaction

  // Play sound effect
  // level.playSound(player.x, player.y, player.z, 'minecraft:block.grass.break', 'block', 1.0, 1.0, false)
})
*/

ItemEvents.entityInteracted((event) => {
  const { entity, item, player, level } = event
  if (item.id !== 'createskyblock:leaf_mulcher') return // Not holding a leaf mulcher
  if (entity.type !== 'minecraft:item') return // Not an item entity

  const itemStack = entity.item
  if (!itemStack.hasTag('minecraft:leaves')) return // Item entity is not leaves

  if (!player.isCreative) {
    item.damageValue += 1 // Damage the leaf mulcher by 1
    if (item.damageValue >= item.maxDamage) {
      item.damageValue = item.maxDamage
    }
    player.setMainHandItem(item) // Update the player's main hand item
  }

  const rand = Math.random()
  entity.remove() // Remove the item entity
  level.spawnItemEntity(player.x, player.y + 1, player.z, Item.of('minecraft:dirt', rand < 0.1 ? 2 : 1)) // Spawn dirt at player's position

  event.cancel() // Prevent default interaction

  // Play sound effect
  // level.playSound(player.x, player.y, player.z, 'minecraft:block.grass.break', 'block', 1.0, 1.0, false)
})

