ServerEvents.recipes(event => {

  event.remove({ type: 'create_mechanical_extruder:extruding' }) // Remove all existing extruding recipes

  event.recipes.create_mechanical_extruder
    .extruding(
        Item.of('minecraft:dirt'),
        [
          BlockPredicate.of('minecraft:blue_ice'),
          BlockPredicate.of('minecraft:water')
        ]
    )
    .catalyst('minecraft:gravel')
})
