
// --- Item Registration ---
StartupEvents.registry('item', event => {
    event.create('createskyblock:hammer', 'pickaxe')
        .displayName('Crushing Hammer')
        .maxStackSize(1)
        .maxDamage(250) // durability
        .texture('createskyblock:item/wooden_hammer') // put a texture in kubejs/assets/kubejs/textures/item/
        // .group('tools') // shows in tools tab
        .tag('minecraft:mineable/pickaxe') // behaves like a pickaxe for mining
        .tag('forge:tools')
        .tag('forge:tools/hammers')
        ; 
});

