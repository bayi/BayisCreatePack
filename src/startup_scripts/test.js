StartupEvents.registry('block', (event) => {
  event.create('createskyblock:test_block')
    .displayName('Test Block')
    .mapColor('stone')
    .soundType('stone')
    .hardness(1.5)
    .resistance(10.0)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:stone')
    .requiresTool(false)
})

StartupEvents.registry('item', (event) => {
  // Add wooden shears
  event.create('createskyblock:wooden_shears', 'shears')
    .displayName('Wooden Shears')
    .unstackable()

})

