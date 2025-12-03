LootJS.lootTables(event => {
        event.getEntityTable("minecraft:shulker")
                .clear()
                .createPool()
                .addEntry("2x minecraft:shulker_shell");
})
