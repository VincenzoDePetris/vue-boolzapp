const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      current: 0,
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
      newResent: {
        date: "",
        message: "Ok",
        status: "received",
      },
      filterText: "",
    };
  },
  methods: {
    setContact(index) {
      this.current = index;
    },
    newCopyMessage() {
      const newMessage2 = { ...this.newMessage };
      if (newMessage2.message.length == 0) {
      } else {
        this.contacts[this.current].messages.push(newMessage2);
        setTimeout(() => {
          this.contacts[this.current].messages.push(this.newResent);
        }, 1000);
      }
      this.newMessage.message = "";
    },

    compare() {
      this.contacts.forEach((contact) => {
        if (
          contact.name.toLowerCase().includes(this.filterText.toLowerCase())
        ) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      });
    },
  },
}).mount("#app");
