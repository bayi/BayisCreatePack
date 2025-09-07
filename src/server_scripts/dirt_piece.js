
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
  ).id('createskyblock:dirt_from_dirt_pieces_simple')
  event.shaped(
    Item.of('minecraft:grass_block', 1),
    [
      'SS',
      'DD'
    ],
    {
      D: 'createskyblock:dirt_piece',
      S: 'createskyblock:grass_seeds'
    }
  ).id('createskyblock:grass_block_from_dirt_pieces')
})
