StartupEvents.registry("item", (event) => {
  event
    .create("createskyblock:infinite_lava_cell", "custom_infinity_cell")
    .texture("extendedae:item/infinity_cell")
    .color(0, "#FF4500")
    .fluidType("minecraft:lava")
    .cellModel("createskyblock:block/infinity_cell")

})
