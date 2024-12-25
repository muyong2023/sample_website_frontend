<template>
    <div>
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label><br />
        <input type="text" id="name" v-model="name" /><br /><br />
        <label for="email">Email:</label><br />
        <input type="email" id="email" v-model="email" /><br /><br />
        <label for="message">Message:</label><br />
        <textarea id="message" v-model="message" rows="5"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.name, email: this.email, message: this.message }),
          });
          alert('Message sent!');
        } catch (err) {
          console.error(err);
          alert('Failed to send message.');
        }
      },
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
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 1rem;
  font-weight: bold;
}
input, textarea {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}
button {
  margin-top: 1rem;
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
</style>
  