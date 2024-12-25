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
  