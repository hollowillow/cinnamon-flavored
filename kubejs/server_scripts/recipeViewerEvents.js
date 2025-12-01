// remove duplicate xp buckets from sophisticated core and enchantment industries
RecipeViewerEvents.removeEntries('item', event => {
	event.remove('sophisticatedcore:xp_bucket')
})
