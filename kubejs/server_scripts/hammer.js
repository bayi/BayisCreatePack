
const hammerId = 'createskyblock:hammer'
const hammerTag = 'createskyblock:hammers'
const hammerDropMap = {
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
    event.add(hammerTag, hammerId)
})

// --- Custom Break Behaviour ---
BlockEvents.broken(event => {
    const { block, player } = event
    player.tell(`You broke a ${block.id}`)
    const drop = hammerDropMap[block.id]
    if (!drop) return // Not a block that can be processed by the hammer

    const tool = player.getMainHandItem()
    if (!tool.hasTag(hammerTag)) return // Not holding a hammer (by tag)

    if (player.crouching) return // Allow normal drops when sneaking

    player.tell(`Hammering...`)

    const maxBlocks = 8 // Max blocks to break at once
    const breakingBlocks = new Set()
    breakingBlocks.add(JSON.stringify(block.pos))

    function breakConnectedBlocks(pos, targetBlock) {
      if (breakingBlocks.size >= maxBlocks) return

      const directions = [
          {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0},
          {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0},
          {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}
      ]

      for (const dir of directions) {
        if (breakingBlocks.size >= maxBlocks) break
        let newPos = pos.offset(dir.x, dir.y, dir.z)
        if (breakingBlocks.has(JSON.stringify(newPos))) continue // Already broken in this chain

        let adjacentBlock = event.level.getBlock(newPos)
          // Check if adjacent block matches the target block type
        if (adjacentBlock && (
            adjacentBlock.id === targetBlock.id ||
            (targetBlock.tags && targetBlock.tags.some(tag => adjacentBlock.hasTag(tag)))
        )) {
            breakingBlocks.add(JSON.stringify(newPos))
            adjacentBlock.set('minecraft:air')
            // Recursively break connected blocks of the same type
            breakConnectedBlocks(newPos, targetBlock)
        }
        
      }
    }

    player.tell(`Starting to break connected blocks...`)

    breakConnectedBlocks(block.pos, block)

    player.tell(`Number of broken blocks: ${breakingBlocks.size}`)


    // Break the block and drop gravel manually
    // block.set('minecraft:air') // Break the block
    block.popItem(drop)

    // Damage the hammer by 1
    // tool.damage(1)

    // Prevent the default drops
    event.cancel()
})
