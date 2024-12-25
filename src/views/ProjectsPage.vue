<template>
    <div>
      <h2>My Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.title">
          <strong>{{ project.title }}:</strong> {{ project.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        projects: [],
      };
    },
    async created() {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        this.projects = response.data;
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
    max-width: 800px;
    margin: 2rem auto;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  h1 {
    color: #007bff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: #f8f9fa;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  li strong {
    color: #007bff;
  }
  </style>
  