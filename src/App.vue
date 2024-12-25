<template>
  <div id="app">
    <header>
      <h1>Student Portfolio</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 1rem 2rem;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        nav {
            display: flex;
            justify-content: center;
            background: #f8f9fa;
            padding: 0.5rem 0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        nav a {
            margin: 0 1rem;
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
            transition: color 0.3s;
        }
        nav a:hover {
            color: #0056b3;
        }
        .container {
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }
        h2 {
            color: #007bff;
        }
        footer {
            text-align: center;
            padding: 1rem;
            background-color: #007bff;
            color: white;
            position: fixed;
            bottom: 0;
            width: 100%;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
        input, textarea {
            width: calc(100% - 2rem);
            padding: 0.5rem;
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
    </style>