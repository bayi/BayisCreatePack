ServerEvents.recipes((event) => {
  function addRecipe(from, to) {
    console.log(`Adding storage block recipe: ${from} -> ${to}`)
    event.shaped(
      Item.of(to, 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: from,
      }
    ).id(`createskyblock:storage_blocks/${to.split(':')[1]}_from_${from.split(':')[1]}`)
    event.shapeless(
      Item.of(from, 9),
      to
    ).id(`createskyblock:storage_blocks/${from.split(':')[1]}_from_${to.split(':')[1]}`)
  }

  Object.keys(global.StorageBlocks).forEach(key => {
    for (let i = 0; i < global.StorageBlocks[key].length; i++) {
      let from = i == 0 ? `minecraft:${key}` : `createskyblock:compressed_${key}${i}_block`
      let to =  `createskyblock:compressed_${key}${i + 1}_block`
      addRecipe(from, to)
    }
  })

})
