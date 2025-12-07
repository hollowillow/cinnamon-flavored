LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:shulker")
        .removeLoot("minecraft:shulker_shell")
        .addLoot("2x minecraft:shulker_shell");
});
