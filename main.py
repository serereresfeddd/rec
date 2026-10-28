hj = 0

def on_on_chat():
    global hj
    gameplay.time_set(gameplay.time(NIGHT))
    gameplay.set_weather(RAIN)
    mobs.kill(mobs.target(RANDOM_PLAYER))
    hj += 1
player.on_chat("/rec", on_on_chat)
