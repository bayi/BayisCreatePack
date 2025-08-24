
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
