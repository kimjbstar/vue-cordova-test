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
	props: [ 'items', 'item',  'placeholder', 'onChange', ],
	mounted() {
		if ( this.item ) {
			console.log('select item in mounted', this.item);
			this.selectItem(this.item);
		}
	},
	updated () {
		// console.log('updated');
	},
	created () {
		// console.log('created1');
	},
	data: function() {
		return {
			isOpened: false,
			// upperLabel: '',
			selected: {},
		}
	},
	computed: {
		upperLabel () {
			var placeholder = this.placeholder ? this.placeholder : '선택해'
			return this.selected.name ? this.selected.name : placeholder
		}
	},
	watch: {
		item: {
			immediate: true,
			deep: false,
			handler: function(newVal, oldVal){
				if ( !newVal ) {
					return;
				}
				if ( newVal.id == oldVal ) {
					return;
				}
				this.selectItem(newVal);
			}
		},
		// selected: {
		// 	immediate: true,
		// 	deep: true,
		// 	handler: function(val) {
		// 		if ( !val ) {
		// 			return;
		// 		}
		// 		var placeholder = this.placeholder ? this.placeholder : '선택해'
		// 		var res = val != '' ? val.name : placeholder
		// 	}
		// }
	},
	methods: {
		toggleOpen: function(){
			this.isOpened = !this.isOpened;
		},
		selectItem: function(item) {
			if ( !item.id ) {
				return;
			}
			if( this.selected && this.selected.id == item.id ) {
				return;
			}
			this.selected = item;
			this.isOpened = false;
			this.onChange(item);
		}
	}
}
</script>

<style lang="scss">
	@import "../styles/components/dropdown-select.scss";
</style>
