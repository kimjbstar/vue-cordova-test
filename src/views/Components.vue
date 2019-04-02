<template>
<div class="components">
      <h2>Components</h2>

      <v-dialog
        v-model="isDialogShowing"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Dialog (모달)
          </v-btn>
        </template>

        <v-card>
		ds

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="isDialogShowing = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


</div>
</template>

<script>

export default {
	name: 'App',
	components: {
	},
	methods: {
		showAlert: function(){
			alert(1111);
		}
	},
	data () {
		return {
			isDialogShowing: false
		}
	},
};
</script>

<style lang="scss">
	@import "@/styles/base/_common.scss";
	@import "@/styles/base/_layout.scss";
	@import "@/styles/base/_mixins.scss";
</style>