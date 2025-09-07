
// --- Recipe Registration ---
for (const item  of global.CrushingHammers.items) {
  ServerEvents.recipes(event => {
    event.shaped(
      Item.of(item[0], 1),
      [
        'AAA',
        'ASA',
        ' S '
      ],
      {
        A: item[1],
        S: 'minecraft:stick'
      }).id(`createskyblock:crushing_hammers/${item[0].split(':')[1]}_from_${item[1].split(':')[1]}`)
  })
}

// --- Hammer processing ---
BlockEvents.broken(event => {
  const { block, player } = event
  const drop = global.CrushingHammers.processingMap[block.id]
  if (!drop) return // Not a block that can be processed by the hammer

  const tool = player.getMainHandItem().copy()
  if (!tool.hasTag(global.CrushingHammers.tag)) return // Not holding a hammer (by tag)

  let maxBlocks = global.CrushingHammers.maxProcessBlocks
  let brokenCount = 0 // Counter for broken blocks
  if (player.crouching) maxBlocks = 1 // If crouching, only break one block

  function breakConnectedBlocks(pos, targetBlock) {
    if (brokenCount >= maxBlocks) return
    const targetBlockId = targetBlock.id
    brokenCount++
    targetBlock.set('minecraft:air')

    const directions = [
      {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0},
      {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0},
      {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}
    ]

    for (const dir of directions) {
      if (brokenCount >= maxBlocks) break
      let newPos = pos.offset(dir.x, dir.y, dir.z)

      let adjacentBlock = event.level.getBlock(newPos)
      if (adjacentBlock && adjacentBlock.id === targetBlockId) { // Check if adjacent block matches the target block type
        breakConnectedBlocks(newPos, adjacentBlock) // Recursively break connected blocks of the same type
      }
    }
  }

  breakConnectedBlocks(block.pos, block)
  block.popItem(Item.of(drop, brokenCount)) // Drop the processed item(s)

  tool.damageValue += brokenCount // Damage the hammer by brokenCount
  if (tool.damageValue >= tool.maxDamage) {
    tool.damageValue = tool.maxDamage
  }
  player.setMainHandItem(tool) // Update the player's main hand item
})
