const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      current: 0,
    };
  },
  methods: {
    setContact(index) {
      this.current = index;
    },
  },
}).mount("#app");
