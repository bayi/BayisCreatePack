const hammerId = 'createskyblock:hammer'
const hammerTag = 'createskyblock:hammers'
const hammerDropMap = {
  'minecraft:stone': 'minecraft:cobblestone',
  'minecraft:cobblestone': 'minecraft:gravel',
  'minecraft:gravel': 'minecraft:sand',
  // 'minecraft:sand': 'createskyblock:dust', // @TODO: custom dust
}

// --- Recipe Registration ---
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

// --- Hammer processing ---
BlockEvents.broken(event => {
  const { block, player } = event
  player.tell(`You broke ${block.id}`)
  const drop = hammerDropMap[block.id]
  if (!drop) return // Not a block that can be processed by the hammer

  const tool = player.getMainHandItem()
  if (!tool.hasTag(hammerTag)) return // Not holding a hammer (by tag)

  let maxBlocks = 64 // Max blocks to break at once
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

  // Damage the hammer by brokenCount // @TODO: Not working
  // tool.damage(brokenCount)

  event.cancel() // Prevent the default drops
})
