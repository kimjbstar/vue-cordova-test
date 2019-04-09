<template>
	<div class="glto-dropdown-select" v-on:click="toggleOpen">
		<div class="glto-dropdown-label">{{ upperLabel }}</div>
		<div class="glto-dropdown-icon"></div>
		<div class="glto-dropdown-items"
		v-bind:class="{ 'is-opened': isOpened}"
		>
			<ul>
				<li v-for="item in items"
				v-bind:key="item.id"
				v-on:click.stop="selectItem(item)">
					{{ item.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DropdownSelect',
	props: [ 'items', 'placeholder', 'onChange' ],
	data: function() {
		return {
			isOpened: false,
			selectedItem: '',
		}
	},
	computed: {
		upperLabel: function(){
			var placeholder = this.placeholder ? this.placeholder : '선택해'
			return this.selectedItem != '' ? this.selectedItem.name : placeholder;
		}
	},
	methods: {
		toggleOpen: function(){
			this.isOpened = !this.isOpened;
		},
		selectItem: function(item){
			this.selectedItem = item;
			this.isOpened = false;
			this.onChange(item);
		}
	}
}
</script>

<style lang="scss">
	@import "../styles/components/dropdown-select.scss";
</style>
