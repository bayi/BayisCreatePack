
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('minecraft:dirt', 1),
    [
      'DD',
      'DD'
    ],
    {
      D: 'createskyblock:dirt_piece'
    }
  )
})

ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('minecraft:grass_block', 1),
    [
      'SS',
      'DD'
    ],
    {
      D: 'createskyblock:dirt_piece',
      S: 'minecraft:wheat_seeds'
    }
  )
})
