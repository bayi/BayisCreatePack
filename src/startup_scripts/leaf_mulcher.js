
StartupEvents.registry('block', event => {
  event.create('createskyblock:leaf_mulcher')
    .requiresTool(false)
    .soundType('wood')
    .hardness(1.0)
    .resistance(1.0)
    .fullBlock(false)
    .defaultCutout()
    .box(2, 0, 2, 14, 12, 14) // Make it slightly smaller than a full block
    .texture('bottom', 'minecraft:block/oak_planks')
    .texture('side', 'minecraft:block/composter_side')
    .texture('top', 'createskyblock:block/example_block')
    .tagBlock('createskyblock:leaf_mulchers')
    .tagBlock('minecraft:mineable/axe')
})

StartupEvents.modifyCreativeTab('minecraft:functional_blocks', event => {
  event.add('createskyblock:leaf_mulcher')
})
