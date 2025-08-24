
ItemEvents.modification(event => {
  event.modify('createsifter:string_mesh', item => {
    item.maxDamage = 32
  })
  event.modify('createsifter:andesite_mesh', item => {
    item.maxDamage = 64
  })
  event.modify('createsifter:brass_mesh', item => {
    item.maxDamage = 128
  })
})
