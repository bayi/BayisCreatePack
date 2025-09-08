
const baseLoot = [
  { item: 'createskyblock:dirt_piece', weight: 20 },
  { item: 'minecraft:stick', weight: 15 },
  { item: 'createsifter:stone_pebble', weight: 10 },
  { item: 'createsifter:andesite_pebble', weight: 7 },
  { item: 'createsifter:diorite_pebble', weight: 6 },
  { item: 'createsifter:granite_pebble', weight: 6 },
]

const organicLoot = [
  { item: 'createskyblock:grass_seeds', weight: 20 },
  { item: 'minecraft:wheat_seeds', weight: 10 },
  { item: 'minecraft:string', weight: 8 },
  { item: 'supplementaries:flax_seeds', weight: 5 },
  { item: 'minecraft:sweet_berries', weight: 3 },
]

// Right click with empty hand while crouching on dirt tagged blocks
BlockEvents.rightClicked((event) => {
  const { block, player, item, level } = event

  if (!block.hasTag('minecraft:dirt')) return // Not clicking dirt

  const heldItem = player.getMainHandItem()
  if (!heldItem.isEmpty()) return // Not empty hand
  if (!player.crouching) return // Not crouching

  // There is a 50% chance that we get nothing
  if (Math.random() < 0.5) return

  // Determine loot table based on block type
  const lootTable = block.id === 'minecraft:grass_block' ? baseLoot.concat(organicLoot) : baseLoot
  const totalWeight = lootTable.reduce((sum, entry) => sum + entry.weight, 0)
  let rand = Math.random() * totalWeight
  let selectedItem = null
  for (const entry of lootTable) {
    if (rand < entry.weight) {
      selectedItem = entry.item
      break
    }
    rand -= entry.weight
  }
  if (!selectedItem) return // Fallback, should not happen
  const count = Math.floor(Math.random() * 3) + 1 // 1 to 3 items
  block.popItem(Item.of(selectedItem, count))
  event.cancel() // Prevent default interaction

})
