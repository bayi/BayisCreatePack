
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

  addRecipe('createskyblock:infinite_lava_cell', 'minecraft:lava_bucket')

})
