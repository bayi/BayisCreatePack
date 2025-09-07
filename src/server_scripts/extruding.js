ServerEvents.recipes(event => {
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
