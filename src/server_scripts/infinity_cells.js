
ServerEvents.recipes(event => {

  const addRecipe = (output, material, extra) => {
    if (!extra) extra = material
    event.shaped(
      Item.of(output, 1),
      [ 'GEG', 'MSM', 'DDD' ],
      {
        D: 'minecraft:diamond',
        S: 'megacells:cell_component_256m',
        G: 'ae2:quartz_glass',
        M: material,
        E: extra,
      }
    )
  }

  event.remove({ id: 'extendedae:cobblestone_cell' })
  addRecipe('extendedae:infinity_cobblestone_cell', 'minecraft:water_bucket', 'minecraft:lava_bucket')

  addRecipe('createskyblock:infinity_lava_cell', 'minecraft:lava_bucket')
  addRecipe('createskyblock:infinity_milk_cell', 'minecraft:milk_bucket')

  addRecipe('createskyblock:infinity_dirt_cell', 'createskyblock:compressed_dirt4_block')
  addRecipe('createskyblock:infinity_gravel_cell', 'createskyblock:compressed_gravel4_block')
  addRecipe('createskyblock:infinity_sand_cell', 'createskyblock:compressed_sand4_block')
  addRecipe('createskyblock:infinity_red_sand_cell', 'createskyblock:compressed_sand4_block', 'minecraft:red_sand')
  addRecipe('createskyblock:infinity_netherrack_cell', 'createskyblock:compressed_netherrack4_block')
  addRecipe('createskyblock:infinity_dust_cell', 'createskyblock:compressed_sand4_block', 'createsifter:dust')

  addRecipe('createskyblock:infinity_soul_sand_cell', 'createskyblock:compressed_sand4_block', 'minecraft:soul_sand')
  addRecipe('createskyblock:infinity_soul_soil_cell', 'createskyblock:compressed_sand4_block', 'minecraft:soul_soil')
  addRecipe('createskyblock:infinity_clay_cell', 'createskyblock:compressed_gravel4_block', 'minecraft:clay')

  addRecipe('createskyblock:infinity_end_stone_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:end_stone')
  addRecipe('createskyblock:infinity_moss_cell', 'createskyblock:compressed_dirt4_block', 'minecraft:moss_block')
  addRecipe('createskyblock:infinity_sky_stone_cell', 'createskyblock:compressed_cobblestone4_block', 'ae2:sky_stone_block')
  addRecipe('createskyblock:infinity_tuff_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:tuff')
  addRecipe('createskyblock:infinity_andesite_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:andesite')
  addRecipe('createskyblock:infinity_diorite_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:diorite')
  addRecipe('createskyblock:infinity_granite_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:granite')
  addRecipe('createskyblock:infinity_blackstone_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:blackstone')
  addRecipe('createskyblock:infinity_basalt_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:basalt')
  addRecipe('createskyblock:infinity_calcite_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:calcite')
  addRecipe('createskyblock:infinity_dripstone_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:dripstone_block')
  addRecipe('createskyblock:infinity_cobbled_deepslate_cell', 'createskyblock:compressed_cobblestone4_block', 'minecraft:deepslate')

})
