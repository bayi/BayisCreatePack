
const hammerId = 'createskyblock:hammer'
const hammerLoot = {
  'minecraft:stone': 'minecraft:cobblestone',
  'minecraft:cobblestone': 'minecraft:gravel',
  'minecraft:gravel': 'minecraft:sand',
  // 'minecraft:sand': 'createskyblock:dust', // your custom dust
}

// --- Recipe Registration --- @TODO: Not working
ServerEvents.recipes(event => {
  event.shaped(
    Item.of(hammerId, 1),
    [
      'AAA',
      'ASA',
      ' S '
    ],
    {
      A: 'minecraft:oak_planks',
      S: 'minecraft:stick'
    })
})

// --- Tag the item ---
ServerEvents.tags('item', event => {
    event.add(hammerId, 'createskyblock:hammers')
})

// --- Custom Break Behaviour ---
BlockEvents.broken(event => {
    const { block, player, item } = event
    const mainHandItem = player.mainHandItem?.id
    const offHandItem = player.offHandItem?.id
    const mainHandItem2 = player.getMainHandItem()

    player.tell(`You broke a ${block.id} using ${mainHandItem} in main hand and ${offHandItem} in off hand. Item used: ${mainHandItem2?.id}`)

    if (mainHandItem != hammerId && offHandItem != hammerId) return
    let drop = hammerLoot[block.id]

    // @TODO: Fix veinminer (Liteminer) compatibility
    if (drop) {

        // Break the block and drop gravel manually
        block.set('minecraft:air') // Break the block
        block.popItem(drop)

        // Damage the hammer by 1
        tool.damage(1)

        // Prevent the default drops
        event.cancel()
    }
})
