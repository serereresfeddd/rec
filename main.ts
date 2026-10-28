player.onChat("/rec", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
    mobs.applyEffect(SLOWNESS, mobs.target(NEAREST_PLAYER), 7, 95)
    mobs.applyEffect(BLINDNESS, mobs.target(NEAREST_PLAYER), 7, 95)
    mobs.applyEffect(WEAKNESS, mobs.target(NEAREST_PLAYER), 7, 95)
    mobs.applyEffect(POISON, mobs.target(NEAREST_PLAYER), 7, 2566666666)
    mobs.applyEffect(ABSORPTION, mobs.target(NEAREST_PLAYER), 7, 6.555655656565666e+43)
    gameplay.setWeather(RAIN)
})
