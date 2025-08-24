
StartupEvents.registry('block', event => {
  event.create('createskyblock:leaf_mulcher')
    .requiresTool(false)
    .soundType('wood')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('createskyblock:leaf_mulchers')
    .tagBlock('minecraft:mineable/axe')
    .texture('createskyblock:block/example_block')
})

StartupEvents.modifyCreativeTab('minecraft:functional_blocks', event => {
  event.add('createskyblock:leaf_mulcher')
})
