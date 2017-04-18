<template>
	<div>
		<hr />
		<p>This is hardcoded...</p>
		<p>This is a computed field.... <b>{{theTranslatedText}}</b></p>
		<hr />
	</div>
</template>

<script>
export default{
	name: 'myfooter',

	computed: {
		theTranslatedText() {
			// This line is working (logically) :)
			return "here should come the translated text"
			// Leonardo ... I can't make this one making work...
			// the idea is to show the text...
			// 'hello Johnny, you have visited this page 57 times'

			// But I don't understand what I have to give for 'path.to.msg'
			// And where / how should I give the parameters 'johnny' and '57'

			// I guess it has smt to be like
			// return this.translate(this.$language, 'path.to.msg', objectWithParams)
		},
	}
}
</script>
