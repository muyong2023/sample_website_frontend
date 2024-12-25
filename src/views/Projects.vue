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
  
  <style>
  /* Add your specific styles here */
  </style>
  