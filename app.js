new Vue({
	el: '#todolist',
	data: {
		todos: [
			{ task: 'Ir a comprar', completed: false },
			{ task: 'Llamar al cliente', completed: false },
			{ task: 'Escribir el post', completed: true }
		],
		newTask: ''
	},
	methods: {
		addTask: function() {
			this.todos.push({ task: this.newTask, completed: false});
			this.newTask = '';
		}
	}
})