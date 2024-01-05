<template>
  <div id="app">
    <h1 class="title">UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE</h1>
    <h2 class="subtitle">PROGRAMACIÓN INTEGRATIVA DE COMPONENTES</h2>
    <h3 class="members">INTEGRANTES: KEVIN TOPÓN, ROBISON ANDRADE, LUIS TAVARIS</h3>
    <TaskList :tasks="tasks" @add="addTask" @remove="removeTask" @toggle="toggleTask" />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskList
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    toggleTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #333;
  color: #59509a;
}

.title, .subtitle, .members {
  text-align: center;
  margin-bottom: 80px; /* Ajusta el margen inferior */
}

.title {
  font-size: 2em;
}

.subtitle {
  font-size: 1.5em;
}

.members {
  font-size: 1.2em;
}

/* Agregamos margen inferior a la caja de ingresar tarea */
.input-container {
  margin-bottom: 20px;
}
</style>
