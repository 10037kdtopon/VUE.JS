// src/components/TaskList.vue
<template>
  <div class="task-list">
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <TaskItem :task="task" @remove="removeTask" @toggle="toggleTask" />
    </div>
    <input v-model="newTask" type="text" placeholder="Escribe tu tarea aquí" class="input-task">
    <button @click="addTask" class="add-button">Agregar Tarea</button>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: {
    tasks: Array
  },
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('add', { id: Date.now(), title: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(taskId) {
      this.$emit('remove', taskId);
    },
    toggleTask(taskId) {
      this.$emit('toggle', taskId);
    }
  }
}
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input-task {
  font-size: 1.5em;
  width: 100%;
  padding: 10px;
}

.add-button {
  font-size: 1.5em;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
</style>