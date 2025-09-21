ServerEvents.recipes(event => {

  event.remove({ type: 'create_mechanical_extruder:extruding' }) // Remove all existing extruding recipes

  // Cobblestone from Water and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:cobblestone'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    )

  // Dirt from Blue Ice and Water with Gravel catalyst
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:dirt'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:water') ]
    )
    .catalyst('minecraft:gravel')

  // Sandstone from Water and Sand
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:sandstone'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:sand') ]
    )

  // ae2:sky_stone_block from Lava and Water above Y 128
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('ae2:sky_stone_block'), [ BlockPredicate.of('minecraft:lava'), BlockPredicate.of('minecraft:water') ]
    ).requirements([
      RecipeRequirement.minY(128)
    ])

  // Snowblock above Y 128 from Water and Water
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:snow_block'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:water') ]
    ).requirements([
      RecipeRequirement.minY(128)
    ])

  // Andesite from Water and Lava Beteween Y 48 and 64
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:andesite'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.minY(48),
      RecipeRequirement.maxY(64)
    ])

  // Granite from Water and Lava Beteween Y 32 and 48
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:granite'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.minY(32),
      RecipeRequirement.maxY(48)
    ])

  // Diorite from Water and Lava Beteween Y 16 and 32
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:diorite'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.minY(16),
      RecipeRequirement.maxY(32)
    ])

  // Tuff from Water and Lava Beteween Y 0 and 16
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:tuff'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.minY(0),
      RecipeRequirement.maxY(16)
    ])

  // Calcite from Water and Lava Beteween Y -16 and 0
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:calcite'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.minY(-16),
      RecipeRequirement.maxY(0)
    ])

  // Deepslate from Water and Lava Beteween below Y -16
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:deepslate'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.maxY(-16),
    ])

  // Obisdian from Water and Lava below at Y -64 to -48 Max RPM 16
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:obsidian'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
      RecipeRequirement.maxY(-48),
      RecipeRequirement.minY(-64),
      RecipeRequirement.minSpeed(1.0),
      RecipeRequirement.maxSpeed(16.0),
    ])

  // Obsidian from Water and Lava with Obsidian catalyst (Advanced: consumes lava)
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:obsidian'), [ BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava') ]
    ).catalyst('minecraft:obsidian')
    .advanced(true)
    .consumeBlocks([false, true])

  // create:ochrum from Gold Block and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:ochrum'), [ BlockPredicate.of('minecraft:gold_block'), BlockPredicate.of('minecraft:lava') ]
    )

  // create:asurine from Lapis Block and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:asurine'), [ BlockPredicate.of('minecraft:lapis_block'), BlockPredicate.of('minecraft:lava') ]
    )

  // create:limestone from create:honey and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:limestone'), [ BlockPredicate.of('create:honey'), BlockPredicate.of('minecraft:lava') ]
    )

  // crete:veridium from Prismarine and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:veridium'), [ BlockPredicate.of('minecraft:dark_prismarine'), BlockPredicate.of('minecraft:lava') ]
    )

  // create:scoria from create:chocolate and Lava
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:scoria'), [ BlockPredicate.of('create:chocolate'), BlockPredicate.of('minecraft:lava') ]
    )

  // create:crimsite from Iron Block Lava with Soul Soil catalyst
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('create:crimsite'), [ BlockPredicate.of('minecraft:iron_block'), BlockPredicate.of('minecraft:lava') ]
    ).catalyst('minecraft:soul_soil')

  // Netherrack from Blue Ice and Lava (In the Nether only)
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:netherrack'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
        RecipeRequirement.biomeTag("minecraft:is_nether")
    ])

  // Netherrack from Blue Ice and Lava with Netherrack catalys (Advanced: consumes lava)
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:netherrack'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:lava') ]
    ).catalyst('minecraft:netherrack')
    .advanced(true)
    .consumeBlocks([false, true])

  // Basalt from Blue Ice and Lava with Soul Soil catalyst
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:basalt'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:lava') ]
    ).catalyst('minecraft:soul_soil')

  // End Stone from Blue Ice and Lava in The End
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:end_stone'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:lava') ]
    ).requirements([
        RecipeRequirement.biomeTag("minecraft:is_end")
    ])

  // End Stone from Blue Ice and Lava with End Stone catalyst (Advanced: consumes lava)
  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:end_stone'), [ BlockPredicate.of('minecraft:blue_ice'), BlockPredicate.of('minecraft:lava') ]
    ).catalyst('minecraft:end_stone')
    .advanced(true)
    .consumeBlocks([false, true])


  // Concrete from dyes
  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:white_concrete'), [ BlockPredicate.of('create_dragons_plus:white_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:orange_concrete'), [ BlockPredicate.of('create_dragons_plus:orange_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:magenta_concrete'), [ BlockPredicate.of('create_dragons_plus:magenta_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:light_blue_concrete'), [ BlockPredicate.of('create_dragons_plus:light_blue_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:yellow_concrete'), [ BlockPredicate.of('create_dragons_plus:yellow_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:lime_concrete'), [ BlockPredicate.of('create_dragons_plus:lime_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:pink_concrete'), [ BlockPredicate.of('create_dragons_plus:pink_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:gray_concrete'), [ BlockPredicate.of('create_dragons_plus:gray_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:light_gray_concrete'), [ BlockPredicate.of('create_dragons_plus:light_gray_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:cyan_concrete'), [ BlockPredicate.of('create_dragons_plus:cyan_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:purple_concrete'), [ BlockPredicate.of('create_dragons_plus:purple_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:blue_concrete'), [ BlockPredicate.of('create_dragons_plus:blue_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:brown_concrete'), [ BlockPredicate.of('create_dragons_plus:brown_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:green_concrete'), [ BlockPredicate.of('create_dragons_plus:green_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:red_concrete'), [ BlockPredicate.of('create_dragons_plus:red_dye'), BlockPredicate.of('minecraft:lava')])

  event.recipes.create_mechanical_extruder
    .extruding(Item.of('minecraft:black_concrete'), [ BlockPredicate.of('create_dragons_plus:black_dye'), BlockPredicate.of('minecraft:lava')])

})
