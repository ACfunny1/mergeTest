<!DOCTYPE html>
<html>

<head>
	<title></title>
	<meta charset="utf-8">
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
	<div class="app">
		<div v-if="isTrue()">{{one}}</div>
		<div v-else>{{two}}</div>
		<div v-show="isShow()">{{three}}</div>
		<br>

		<input type="text" v-model="value">
		<br>
		{{value}}
		<br>

		<textarea v-model="op">okokok</textarea>
		{{op}}

		<br>
		<span>多个单选框</span>
		<br>
		1<input type="radio" value="1" name="rad" v-model="checkname">
		2<input type="radio" value="2" name="rad" v-model="checkname">
		3<input type="radio" value="3" name="rad" v-model="checkname">
		<br>
		<span>现在选中的是{{checkname}}</span>

		<br>
		<input type="checkbox" value="猫" v-model="checks">多个复选框1
		<input type="checkbox" value="狗" v-model="checks">多个复选框2
		<input type="checkbox" value="猪" v-model="checks">多个复选框3

		<br>
		{{checks}}

		<br>
		<select v-model="sels" multiple>
			<option value="猫">猫</option>
			<option value="狗">狗</option>
			<option value="猪">猪</option>
		</select>
		<br>
		{{sels}}
	</div>

	<script>
		var app = new Vue({
			el: '.app',
			data: {
				mess:5,
				one:100,
				two:200,
				three:'看到我吗',
				value:'',
				op:'',
				checkname:'2',
				check:true,
				checks:[],
				sels:[],
			},
			methods:{
				isTrue:function(){
					return true
				},
				isShow:function(){
					return false
				},
				gkd:function(){
					return true
				},
				gck:function(){
					
				}
			}

		})

		console.log(app.mess)
	</script>
</body>

</html>