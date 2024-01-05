// src/components/TaskItem.vue
<template>
  <div class="task" :class="{ completed: task.completed }">
    <input type="checkbox" v-model="task.completed" @change="toggleTask" class="checkbox-task">
    {{ task.title }}
    <button @click="removeTask" class="remove-button">Eliminar Tarea</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  methods: {
    removeTask() {
      this.$emit('remove', this.task.id);
    },
    toggleTask() {
      this.$emit('toggle', this.task.id);
    }
  }
}
</script>

<style scoped>
.task {
  font-size: 2em;
  transition: all 0.3s ease;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.task.completed {
  text-decoration: line-through;
}

.task:hover {
  background-color: #f9f9f9;
}

.checkbox-task {
  transform: scale(1.5);
  margin-right: 10px;
}

.remove-button {
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 10px 0;
  transition-duration: 0.4s;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c82333;
  color: white;
}
</style>