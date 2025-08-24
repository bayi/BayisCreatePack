
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('createskyblock:leaf_mulcher', 1),
    [
      'T T',
      'PSP',
      'PPP'
    ],
    {
      P: '#minecraft:planks',
      T: '#minecraft:slabs',
      S: 'woodenshears:wooden_shears',
    })
})
