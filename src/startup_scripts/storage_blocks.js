
const items = {
  dirt: ['#7B5A37', '#6B4C2B', '#5C3E1F', '#4D3013'],
  cobblestone: ['#7D7D7D', '#6E6E6E', '#5E5E5E', '#4F4F4F'],
  gravel: ['#9C9C9C', '#8D8D8D', '#7D7D7D', '#6E6E6E'],
  sand: ['#E5D79C', '#D6C88C', '#C6B97C', '#B7AA6C'],
  netherrack: ['#7F2A2A', '#6F2323', '#5F1C1C', '#4F1515'],
}

StartupEvents.registry('block', event => {
  Object.keys(items).forEach(key => {
    for (let i = 0; i < items[key].length; i++) {
      event.create(`createskyblock:compressed_${key}${i + 1}_block`)
        .requiresTool(true)
        .soundType('metal')
        .hardness(1.0)
        .resistance(1.0)
        .texture('createskyblock:block/storage_block')
        .color(0, items[key][i])
        .tagBlock('createskyblock:storage_blocks')
        .tagBlock('c:storage_blocks')
        .tagBlock(`c:storage_blocks/${key}`)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .item((item) => {
          item.color(0, items[key][i])
        })
    }
  })
})

global.StorageBlocks = items
