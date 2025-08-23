
// --- Item Registration ---
StartupEvents.registry('item', event => {
  event.create('createskyblock:hammer', 'pickaxe')
    .displayName('Crushing Hammer') // @TODO: Translate
    .maxStackSize(1)
    .maxDamage(250) // durability
    .texture('createskyblock:item/wooden_hammer')
    .tag('createskyblock:hammers')
    .tag('minecraft:mineable/pickaxe') // behaves like a pickaxe for mining
    .tag('forge:tools')
    .tag('forge:tools/hammers')
})

// --- Add item to creative tab ---
StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  event.add('createskyblock:hammer')
})

