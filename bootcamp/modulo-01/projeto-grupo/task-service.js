const tasksDb = require('./tasks-db')

const list = () => {
	return tasksDb
}

const findById = (id) => {
	const task = tasksDb.find((task) => task.id == id)
	return task
}

const save = ({ description, deadline }) => {
	const lastId = tasksDb.length > 0 ? tasksDb[tasksDb.length - 1].id : 0
	const task = {
		id: lastId + 1,
		description: description,
		deadline: deadline,
	}
	tasksDb.push(task)
	return tasksDb
}

const edit = ({ editOption, id, description, deadline }) => {
	const task = tasksDb.find((task) => task.id == id)

	if (editOption === 1) {
		task.description = description
	} else if (editOption === 2) {
		task.deadline = deadline
	} else if (editOption === 3) {
		task.description = description
		task.deadline = deadline
	}
	return tasksDb
}

const remove = (id) => {
	const index = tasksDb.findIndex((task) => task.id === id)
	tasksDb.splice(index, 1)
}

module.exports = {
	list,
	findById,
	save,
	edit,
	remove,
}
