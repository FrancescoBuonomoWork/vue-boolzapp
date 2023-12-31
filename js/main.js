// console.log('funziona');


const { createApp } = Vue

const DateTime = luxon.DateTime;
// DateTime.dateFormat('dd/LL/yyyy HH:mm:ss');
// const datanow = date.now('dd/LL/yyyy HH:mm:ss');
// console.log(datanow)



createApp({
    data() {
        return {
            message: 'Hello Vue!',
            showDropdown: false,
            newMessageVal: '',
            searchBarVal: '',
            currentIndex: 0,
            currentMessageIndex: -1,
            dateFormat: 'dd/LL/yyyy HH:mm:ss',
            contacts: [
                {
                    name: 'Michele', avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Fabio', avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00', message: 'Ciao come stai?',
                            status: 'sent'
                        }, {
                            date: '20/03/2020 16:30:55', message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        }, {
                            date: '20/03/2020 16:35:00', message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                }, {
                    name: 'Samuele', avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40', message: 'La Marianna va in campagna',
                            status: 'received'
                        }, {
                            date: '28/03/2020 10:20:10', message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        }, {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Alessandro B.', avatar: './img/avatar_4.jpg',
                    visible: true, messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Alessandro L.', avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Claudia', avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        }, {
                            date: '10/01/2020 15:51:00', message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                }, {
                    name: 'Federico', avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Davide', avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Ugo', avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Gennaro', avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55', message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        }, {
                            date: '10/01/2020 15:50:00', message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        }, {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    methods: {
        chatSelector(index) {
            // console.log('hai selezionato la chat',index);
            this.currentIndex = index;
            this.currentMessageIndex = -1;
        },
        sendMessage() {
            // console.log('invia', this.newMessageVal)
            if (this.newMessageVal !== '') {

                const newMessage = {
                    date: DateTime.now().toFormat(this.dateFormat),
                    message: this.newMessageVal,
                    status: 'sent'
                }
                const activeChat = this.contacts[this.currentIndex].messages
                activeChat.push(newMessage);
                this.newMessageVal = '';
                
                // Risposta automatica 
                setTimeout(() => {
                    console.log("Delayed for 1 second.");
                    const automaticAnswer = {
                        date: DateTime.now().toFormat(this.dateFormat),
                        message: 'ok',
                        status: 'received'
                    };
                    activeChat.push(automaticAnswer);
                }, "1000");
            }
        },
        toggleDropDown(index) {
            console.log('dropdown');
            if(this.currentMessageIndex === -1){

                this.currentMessageIndex = index;
            } else {
                this.currentMessageIndex = -1;
            }
           

            // setTimeout(() => {
            //     // Your logic here

            // this.currentMessageIndex = -1;
              
            //   }, 2000);
            

        },
        // mousein(index) {
        //     console.log('mouse in')
        //     this.showDropdown = true
        // },
        deleteMessage(currentIndex) {
            console.log('messaggio cancellato')
            // console.log(this.contacts[this.currentIndex].messages +" "+ this.currentIndex)
            this.contacts[this.currentIndex].messages.splice(currentIndex, 1)
        }
    },
    computed: {
        currentContact() {
            return this.contacts[this.currentIndex];
        },
        

        searchContacts() {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.searchBarVal.toLowerCase());
            })
        }
    },
    mounted() {
        // console.log('vue funziona')
    }
}).mount('#app')