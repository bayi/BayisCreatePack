
ClientEvents.lang('en_us', (event) => {

  Object.keys(global.StorageBlocks).forEach(key => {
    for (let i = 0; i < global.StorageBlocks[key].length; i++) {
      const blockName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')
      event.add(`block.createskyblock.compressed_${key}${i + 1}_block`, `Compressed ${blockName} x${i+1} Block`)
    }
  })

})

ClientEvents.lang('hu_hu', (event) => {

  const hungarianNames = {
    dirt: 'föld',
    cobblestone: 'zúzottkő',
    gravel: 'sóder',
    sand: 'homok',
    netherrack: 'netherrack'
  }

  Object.keys(global.StorageBlocks).forEach(key => {
    for (let i = 0; i < global.StorageBlocks[key].length; i++) {
      const blockName = hungarianNames[key] || key
      event.add(`block.createskyblock.compressed_${key}${i + 1}_block`, `Tömörített ${blockName} x${i+1} blokk`)
    }
  })

})
