<template>
	<v-form v-model="valid">

		<v-container >
			<v-layout row wrap>

				<v-flex xs12>
					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						required
					></v-text-field>
				</v-flex>

				<v-flex xs12>
					<v-text-field
						password
						v-model="password"
						:rules="passwordRules"
						label="Password"
						required
					></v-text-field>
				</v-flex>

				<v-flex>
					<v-btn>로그인</v-btn>
				</v-flex>

			</v-layout>
		</v-container>
	</v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters'
      ],
    })
  }
</script>