// Remove all Create Sifter recipes
ServerEvents.recipes(event => {
  event.remove({ type: 'createsifter:sifting' })
})

const meshes = {
  tier1: [ 'createsifter:string_mesh', 'createsifter:andesite_mesh', ],
  tier2: [ 'createsifter:zinc_mesh' ],
  tier3: [ 'createsifter:brass_mesh', 'createsifter:sturdy_mesh' ],
  tier4: [ 'createsifter:advanced_brass_mesh', 'createsifter:advanced_sturdy_mesh' ]
}

const siftingRecipes = [
  {
    input: 'minecraft:dirt', time: 400, waterlogged: false,
    tier1: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),

      // Seeds
      Output.of('minecraft:wheat_seeds', 0.1),
      Output.of('minecraft:beetroot_seeds', 0.1),
      Output.of('minecraft:pumpkin_seeds', 0.1),
      Output.of('minecraft:melon_seeds', 0.1),
      Output.of('farmersdelight:cabbage_seeds', 0.1),
      Output.of('farmersdelight:tomato_seeds', 0.1),
      Output.of('supplementaries:flax_seeds', 0.1),
      Output.of('createskyblock:grass_seeds', 0.1),
      Output.of('createskyblock:mycelium_seeds', 0.1),

      // Grass
      Output.of('minecraft:short_grass', 0.05),
      Output.of('minecraft:tall_grass', 0.05),
    ],
    tier2: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),

      // Seeds
      Output.of('minecraft:wheat_seeds', 0.1),
      Output.of('minecraft:beetroot_seeds', 0.1),
      Output.of('minecraft:pumpkin_seeds', 0.1),
      Output.of('minecraft:melon_seeds', 0.1),
      Output.of('farmersdelight:cabbage_seeds', 0.1),
      Output.of('farmersdelight:tomato_seeds', 0.1),
      Output.of('supplementaries:flax_seeds', 0.1),
      Output.of('createskyblock:grass_seeds', 0.1),
      Output.of('createskyblock:mycelium_seeds', 0.1),

      // Decorative
      Output.of('minecraft:fern', 0.1),
      Output.of('minecraft:large_fern', 0.1),
      Output.of('minecraft:pink_petals', 0.1),

      // Grass
      Output.of('minecraft:short_grass', 0.05),
      Output.of('minecraft:tall_grass', 0.05),
    ],
    tier3: [
      // Raw plant food / resources
      Output.of('minecraft:potato', 0.10),
      Output.of('minecraft:carrot', 0.10),
      Output.of('minecraft:sweet_berries', 0.10),
      Output.of('minecraft:sugar_cane', 0.10),
      Output.of('minecraft:bamboo', 0.10),
      Output.of('minecraft:apple', 0.05),
      Output.of('farmersdelight:onion', 0.10),
      Output.of('farmersdelight:rice', 0.10),

      // Pebbles
      Output.of('createsifter:deepslate_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
    ],
    tier4: [
      // Pebbles
      Output.of('createsifter:calcite_pebble', 0.25),
      Output.of('createsifter:tuff_pebble', 0.25),
      Output.of('createsifter:deepslate_pebble', 0.25),
      Output.of('createsifter:andesite_pebble', 0.25),
      Output.of('createsifter:diorite_pebble', 0.25),
      Output.of('createsifter:granite_pebble', 0.25),
    ]
  },
  {
    input: 'minecraft:dirt', time: 400, waterlogged: true,
    tier1: [
      // Ocean stuff
      Output.of('minecraft:kelp', 0.25),
      Output.of('minecraft:tube_coral', 0.05),
      Output.of('minecraft:brain_coral', 0.05),
      Output.of('minecraft:bubble_coral', 0.05),
      Output.of('minecraft:fire_coral', 0.05),
      Output.of('minecraft:horn_coral', 0.05),
      Output.of('minecraft:seagrass', 0.1),
      Output.of('minecraft:prismarine_shard', 0.1),
      Output.of('minecraft:prismarine_crystals', 0.1),
    ]
  },
  {
    input: 'minecraft:gravel', time: 300, waterlogged: false,
    tier1: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 3),
      Output.of('createsifter:andesite_pebble', 0.3),
      Output.of('createsifter:diorite_pebble', 0.3),
      Output.of('createsifter:granite_pebble', 0.3),
      // Resources
      Output.of('minecraft:flint', 0.5),
      Output.of('minecraft:coal', 0.25),
      Output.of('minecraft:iron_nugget', 2),
      Output.of('create:zinc_nugget', 2),
    ],
    tier2: [
      // Pebbles
      Output.of('createsifter:stone_pebble', 3),
      Output.of('createsifter:andesite_pebble', 0.5),
      Output.of('createsifter:diorite_pebble', 0.5),
      Output.of('createsifter:granite_pebble', 0.5),
      Output.of('createsifter:deepslate_pebble', 0.1),
    ],
    tier3: [
      // Resources
      Output.of('minecraft:flint', 0.25),
      Output.of('minecraft:coal', 0.5),
      Output.of('minecraft:amethyst_shard', 0.05),
      // Nuggets
      Output.of('create:copper_nugget', 0.1),
      Output.of('minecraft:iron_nugget', 0.1),
      Output.of('minecraft:gold_nugget', 0.1),
      Output.of('create:zinc_nugget', 0.1),
      Output.of('create:brass_nugget', 0.1),
    ],
    tier4: [
      // Pebbles
      Output.of('createsifter:deepslate_pebble', 0.3),
      // Resources
      Output.of('minecraft:coal', 0.5),
      Output.of('create:crushed_raw_iron', 0.25),
      Output.of('create:crushed_raw_zinc', 0.25),
      Output.of('create:crushed_raw_gold', 0.25),
      Output.of('create:crushed_raw_copper', 0.25),
      Output.of('minecraft:lapis_lazuli', 0.2),
      Output.of('minecraft:diamond', 0.1),
      Output.of('minecraft:emerald', 0.05),
      Output.of('create:experience_nugget', 0.5),
    ],
  },
  {
    input: 'minecraft:gravel', time: 300, waterlogged: true,
    tier1: [
      Output.of('minecraft:clay_ball', 0.5),
      // Large Flowers
      Output.of('minecraft:sunflower', 0.1),
      Output.of('minecraft:lilac', 0.1),
      Output.of('minecraft:rose_bush', 0.1),
      Output.of('minecraft:peony', 0.1),
    ],
    tier3: [
      Output.of('minecraft:clay_ball', 0.5),
      // Flowers
      Output.of('minecraft:dandelion', 0.1),
      Output.of('minecraft:poppy', 0.1),
      Output.of('minecraft:blue_orchid', 0.1),
      Output.of('minecraft:allium', 0.1),
      Output.of('minecraft:azure_bluet', 0.1),
      Output.of('minecraft:red_tulip', 0.1),
      Output.of('minecraft:orange_tulip', 0.1),
      Output.of('minecraft:white_tulip', 0.1),
      Output.of('minecraft:pink_tulip', 0.1),
      Output.of('minecraft:oxeye_daisy', 0.1),
      Output.of('minecraft:cornflower', 0.1),
      Output.of('minecraft:lily_of_the_valley', 0.1),
      Output.of('vanillabackport:closed_eyeblossom', 0.05),
      Output.of('minecraft:wither_rose', 0.01),
    ],
    tier4: [
      // Mushrooms
      Output.of('minecraft:brown_mushroom', 0.2),
      Output.of('minecraft:red_mushroom', 0.2),
      Output.of('minecraft:crimson_fungus', 0.2),
      Output.of('minecraft:warped_fungus', 0.2),
      Output.of('minecraft:nether_wart', 0.1),
    ]
  },
  {
    input: 'minecraft:sand', time: 200, waterlogged: false,
    tier1: [
      Output.of('ae2:certus_quartz_crystal', 0.05),
      Output.of('minecraft:clay_ball', 0.5),
      Output.of('minecraft:dead_bush', 0.1),
      Output.of('minecraft:cactus', 0.1),
    ],
    tier2: [
      Output.of('minecraft:clay_ball', 0.5),
      Output.of('minecraft:dead_bush', 0.1),
      Output.of('minecraft:cactus', 0.1),
      Output.of('minecraft:pointed_dripstone', 0.1),
      Output.of('minecraft:ender_pearl', 0.05),
    ],
    tier3: [
      Output.of('minecraft:bone', 0.05),
      Output.of('minecraft:redstone', 0.05),
      Output.of('minecraft:gunpowder', 0.05),
      Output.of('minecraft:gold_nugget', 0.05),
      Output.of('createsifter:diorite_pebble', 0.5),
      Output.of('createsifter:granite_pebble', 0.5),
      Output.of('createsifter:andesite_pebble', 0.5),
    ],
    tier4: [
      Output.of('minecraft:bone', 0.1),
      Output.of('minecraft:redstone', 0.1),
      Output.of('minecraft:gunpowder', 0.1),
      Output.of('create:crushed_raw_gold', 0.2),
      Output.of('create:crushed_raw_copper', 0.2),
      Output.of('create:crushed_raw_zinc', 0.2),
      Output.of('create:crushed_raw_iron', 0.2),
      Output.of('powah:uraninite_raw', 0.2),
      Output.of('minecraft:lapis_lazuli', 0.1),
      Output.of('minecraft:diamond', 0.1),
      Output.of('minecraft:emerald', 0.05),
      Output.of('create:experience_nugget', 0.5),
    ]
  },
  {
    input: 'minecraft:sand', time: 200, waterlogged: true,
    tier1: [
      Output.of('minecraft:kelp', 0.25),
      Output.of('minecraft:sea_pickle', 0.1),
    ],
    tier2: [
      Output.of('minecraft:angler_pottery_sherd', 0.1),
      Output.of('minecraft:archer_pottery_sherd', 0.1),
      Output.of('minecraft:arms_up_pottery_sherd', 0.1),
      Output.of('minecraft:blade_pottery_sherd', 0.1),
      Output.of('minecraft:brewer_pottery_sherd', 0.1),
      Output.of('minecraft:burn_pottery_sherd', 0.1),
      Output.of('minecraft:danger_pottery_sherd', 0.1),
      Output.of('minecraft:explorer_pottery_sherd', 0.1),
      Output.of('minecraft:friend_pottery_sherd', 0.1),
      Output.of('minecraft:heart_pottery_sherd', 0.1),
      Output.of('minecraft:heartbreak_pottery_sherd', 0.1),
      Output.of('minecraft:howl_pottery_sherd', 0.1),
      Output.of('minecraft:miner_pottery_sherd', 0.1),
      Output.of('minecraft:mourner_pottery_sherd', 0.1),
      Output.of('minecraft:plenty_pottery_sherd', 0.1),
      Output.of('minecraft:prize_pottery_sherd', 0.1),
      Output.of('minecraft:sheaf_pottery_sherd', 0.1),
      Output.of('minecraft:shelter_pottery_sherd', 0.1),
      Output.of('minecraft:skull_pottery_sherd', 0.1),
      Output.of('minecraft:snort_pottery_sherd', 0.1),
      Output.of('minecraft:flow_pottery_sherd', 0.1),
      Output.of('minecraft:guster_pottery_sherd', 0.1),
      Output.of('minecraft:scrape_pottery_sherd', 0.1),
    ],
    tier3: [
      Output.of('minecraft:prismarine_shard', 0.1),
      Output.of('minecraft:prismarine_crystals', 0.1),
      Output.of('minecraft:ink_sac', 0.1),
      Output.of('minecraft:heart_of_the_sea', 0.01),
      Output.of('create:experience_nugget', 0.5),
    ],
    tier4: [
      Output.of('minecraft:sniffer_egg', 0.05),
      Output.of('minecraft:music_disc_relic', 0.01),
      Output.of('minecraft:music_disc_pigstep', 0.01),
      Output.of('minecraft:music_disc_otherside', 0.01),
      Output.of('minecraft:music_disc_5', 0.01),
    ]
  },
  {
    input: 'minecraft:red_sand', time: 200, waterlogged: false,
    tier1: [
      Output.of('minecraft:clay_ball', 0.5),
      Output.of('minecraft:dead_bush', 0.1),
      Output.of('minecraft:cactus', 0.1),
    ],
    tier2: [
      Output.of('minecraft:clay_ball', 0.5),
      Output.of('minecraft:dead_bush', 0.1),
      Output.of('minecraft:cactus', 0.1),
      Output.of('minecraft:pointed_dripstone', 0.1),
    ],
    tier3: [
      Output.of('minecraft:bone', 0.05),
      Output.of('minecraft:redstone', 0.25),
      Output.of('minecraft:gold_nugget', 0.05),
      Output.of('createsifter:diorite_pebble', 0.5),
      Output.of('createsifter:granite_pebble', 0.5),
      Output.of('createsifter:andesite_pebble', 0.5),
    ],
    tier4: [
      Output.of('minecraft:redstone', 0.5),
      Output.of('minecraft:spider_eye', 0.1),
      Output.of('create:crushed_raw_gold', 0.2),
      Output.of('create:crushed_raw_copper', 0.2),
      Output.of('create:crushed_raw_zinc', 0.2),
      Output.of('create:crushed_raw_iron', 0.2),
      Output.of('powah:uraninite_raw', 0.2),
      Output.of('minecraft:lapis_lazuli', 0.1),
      Output.of('minecraft:diamond', 0.1),
      Output.of('minecraft:emerald', 0.05),
      Output.of('create:experience_nugget', 0.5),
    ]
  },
  {
    input: 'createsifter:dust', time: 200, waterlogged: false,
    tier1: [
      Output.of('createskyblock:certus_quartz_seeds', 0.1),
      Output.of('createskyblock:amethyst_seeds', 0.1),
      Output.of('minecraft:redstone', 0.1),
      Output.of('minecraft:glowstone_dust', 0.1),
      Output.of('vanillabackport:resin_clump', 0.1),
    ],
    tier2: [
      Output.of('ae2:sky_dust', 0.1),
      Output.of('minecraft:redstone', 0.25),
      Output.of('minecraft:glowstone_dust', 0.1),
      Output.of('minecraft:gunpowder', 0.1),
      Output.of('ae2:certus_quartz_dust', 0.1),
      Output.of('minecraft:bone_meal', 0.5),
      Output.of('vanillabackport:resin_clump', 0.1),
    ]
  },
  {
    input: 'minecraft:moss_block', time: 300, waterlogged: false,
    tier2: [
      Output.of('minecraft:big_dripleaf', 0.1),
      Output.of('minecraft:dead_bush', 0.1),
      Output.of('minecraft:small_dripleaf', 0.1),
      Output.of('minecraft:spore_blossom', 0.1),
      Output.of('minecraft:glow_lichen', 0.1),
      Output.of('minecraft:lily_pad', 0.1),
      Output.of('minecraft:vine', 0.1),
      Output.of('minecraft:cobweb', 0.05),
    ],
    tier2: [
      Output.of('minecraft:sculk', 0.2),
      Output.of('createskyblock:sculk_core', 0.1),
    ],
    tier4: [
      Output.of('minecraft:sculk', 0.2),
      Output.of('minecraft:sculk_sensor', 0.1),
      Output.of('minecraft:sculk_catalyst', 0.05),
      Output.of('minecraft:sculk_shrieker', 0.05),
      Output.of('minecraft:sculk_vein', 0.01),
    ]
  },
  {
    input: '#minecraft:leaves', time: 100, waterlogged: false, 
    tier1: [
      Output.of('minecraft:oak_sapling', 0.1),
      Output.of('minecraft:spruce_sapling', 0.1),
      Output.of('minecraft:birch_sapling', 0.1),
      Output.of('minecraft:jungle_sapling', 0.1),
      Output.of('minecraft:acacia_sapling', 0.1),
      Output.of('minecraft:dark_oak_sapling', 0.1),
      Output.of('minecraft:cherry_sapling', 0.1),
      Output.of('vanillabackport:pale_oak_sapling', 0.1),
      Output.of('minecraft:mangrove_propagule', 0.1),
      Output.of('minecraft:azalea', 0.05),
      Output.of('minecraft:flowering_azalea', 0.05),
    ]
  },
  {
    input: 'createsifter:crushed_netherrack', time: 500, waterlogged: false,
    tier1: [
      Output.of('minecraft:nether_wart', 0.1),
      Output.of('minecraft:soul_sand', 0.25),
      Output.of('minecraft:soul_soil', 0.25),
      Output.of('minecraft:quartz', 0.05),
      Output.of('createskyblock:warped_nylium_seeds', 0.1),
      Output.of('createskyblock:crimson_nylium_seeds', 0.1),
    ],
    tier3: [
      Output.of('createsifter:basalt_pebble', 0.3),
      Output.of('createsifter:blackstone_pebble', 0.3),
      Output.of('createsifter:tuff_pebble', 0.3),
      Output.of('minecraft:nether_wart', 0.1),
      Output.of('minecraft:quartz', 0.1),
    ]
  },
  {
    input: 'minecraft:soul_sand', time: 400, waterlogged: false,
    tier1: [
      Output.of('minecraft:bone', 0.1),
      Output.of('minecraft:glowstone_dust', 0.1),
      Output.of('minecraft:gunpowder', 0.1),
      Output.of('minecraft:quartz', 0.1),
      Output.of('minecraft:nether_wart', 0.1),
      Output.of('create:experience_nugget', 0.5),
    ]
  },
  {
    input: 'createsifter:crushed_basalt', time: 500, waterlogged: false,
    tier1: [
      Output.of('createsifter:blackstone_pebble', 0.2),
      Output.of('createsifter:basalt_pebble', 0.3),
      Output.of('minecraft:magma_cream', 0.05),
      Output.of('minecraft:gunpowder', 0.1),
      Output.of('minecraft:blaze_powder', 0.05),
      Output.of('minecraft:piglin_banner_pattern', 0.01),
    ],
    tier3: [
      Output.of('createsifter:blackstone_pebble', 0.5),
      Output.of('createsifter:basalt_pebble', 0.5),
      Output.of('create:crushed_raw_gold', 0.2),
      Output.of('minecraft:magma_cream', 0.1),
      Output.of('minecraft:blaze_powder', 0.1),
      Output.of('create:experience_nugget', 0.5),
    ],
    tier4: [
      Output.of('minecraft:magma_cream', 0.1),
      Output.of('minecraft:blaze_powder', 0.1),
      Output.of('minecraft:ancient_debris', 0.05),
    ]
  },
  {
    input: 'createsifter:crushed_basalt', time: 500, waterlogged: true,
    tier4: [
      Output.of('minecraft:netherite_upgrade_smithing_template', 0.1),
      Output.of('create_dragons_plus:blaze_upgrade_smithing_template', 0.1),
      // Smithing templates
      Output.of('minecraft:coast_armor_trim_smithing_template',0.05),
      Output.of('minecraft:dune_armor_trim_smithing_template',0.05),
      Output.of('minecraft:eye_armor_trim_smithing_template',0.05),
      Output.of('minecraft:flow_armor_trim_smithing_template',0.05),
      Output.of('minecraft:host_armor_trim_smithing_template',0.05),
      Output.of('minecraft:raiser_armor_trim_smithing_template',0.05),
      Output.of('minecraft:rib_armor_trim_smithing_template',0.05),
      Output.of('minecraft:sentry_armor_trim_smithing_template',0.05),
      Output.of('minecraft:shaper_armor_trim_smithing_template',0.05),
      Output.of('minecraft:silence_armor_trim_smithing_template',0.05),
      Output.of('minecraft:snout_armor_trim_smithing_template',0.05),
      Output.of('minecraft:spire_armor_trim_smithing_template',0.05),
      Output.of('minecraft:tide_armor_trim_smithing_template',0.05),
      Output.of('minecraft:vex_armor_trim_smithing_template',0.05),
      Output.of('minecraft:ward_armor_trim_smithing_template',0.05),
      Output.of('minecraft:wayfinder_armor_trim_smithing_template',0.05),
      Output.of('minecraft:wild_armor_trim_smithing_template', 0.05),
    ],
  },
  {
    input: 'createsifter:crushed_end_stone', time: 500, waterlogged: false,
    tier1: [
      Output.of('minecraft:ender_pearl', 0.1),
      Output.of('minecraft:chorus_fruit', 0.1),
      Output.of('minecraft:chorus_flower', 0.05),
    ],
    tier3: [
      Output.of('minecraft:ender_pearl', 0.2),
      Output.of('minecraft:chorus_fruit', 0.2),
      Output.of('minecraft:shulker_shell', 0.05),
    ],
    tier4: [
      Output.of('minecraft:ender_pearl', 0.3),
      Output.of('minecraft:chorus_fruit', 0.3),
      Output.of('minecraft:shulker_shell', 0.1),
      Output.of('minecraft:echo_shard', 0.05),
      Output.of('create:experience_nugget', 0.5),
    ]
  },
]

// Add sifting recipes
ServerEvents.recipes(event => {
  for(const recipe of siftingRecipes) {
    let { input, time, advancedSifter, waterlogged } = recipe
    Object.keys(meshes).forEach(tier => {
      let firstTier = null
      let prevTier = 'tier1'
      for(const mesh of meshes[tier]) {
        let tierItems = recipe[tier]
        if (!tierItems) tierItems = recipe[prevTier]
        if (!tierItems && firstTier) tierItems = firstTier
        if (!tierItems) tierItems = recipe['tier1']
        if (!tierItems) continue
        if (!firstTier) firstTier = tierItems
        if (tierItems.length === 0) continue
        event.recipes.createsifter.sifting(
          tierItems,
          input,
          mesh
        ).processingTime(time)
        .waterlogged(waterlogged)
        .advancedSifter(tier === 'tier3' || tier === 'tier4' ? true : false)
        prevTier = tier
      }
    })
  }
})
