class Child{
    constructor(){
        this.greeting = createElement('h3');
        this.greeting2 = createElement('h3');
        this.chat = createButton('Chat');
        this.order = createButton('Orders');
        this.contacts = createButton('Contacts');
        this.settings = createButton('Settings');
        this.reminders = createButton('Reminders');
        this.greeting.html("You can use the menu button");
        this.greeting2.html("to open this page");
    }
    display(){
        this.greeting.position(510,40);
        this.greeting2.position(510,60);
        this.chat.position(550, 120);
        this.chat.size(200,30);
        this.order.position(550, 200);
        this.order.size(200,30);
        this.contacts.position(550, 280);
        this.contacts.size(200,30);
        this.settings.position(550, 440);
        this.settings.size(200,30);
        this.reminders.position(550,360);
        this.reminders.size(200,30);

        this.chat.mousePressed(()=>{
            this.greeting.hide();
            this.greeting2.hide();
            this.chat.hide();
            this.order.hide();
            this.contacts.hide();
            this.settings.hide();
            this.reminders.hide();
            chat = new Chat();
            chat.display();
          });

          this.order.mousePressed(()=>{
            this.greeting.hide();
            this.greeting2.hide();
            this.chat.hide();
            this.order.hide();
            this.contacts.hide();
            this.settings.hide();
            this.reminders.hide();
            order = new Order();
            order.display();
          });

          this.contacts.mousePressed(()=>{
            this.greeting.hide();
            this.greeting2.hide();
            this.chat.hide();
            this.order.hide();
            this.contacts.hide();
            this.settings.hide();
            this.reminders.hide();
            contacts = new Contacts();
            contacts.display();
          })

          this.settings.mousePressed(()=>{
            this.greeting.hide();
            this.greeting2.hide();
            this.chat.hide();
            this.order.hide();
            this.contacts.hide();
            this.settings.hide();
            this.reminders.hide();
            settings = new Settings();
            settings.display();
          });
          
          this.reminders.mousePressed(()=>{
            this.greeting.hide();
            this.greeting2.hide();
            this.chat.hide();
            this.order.hide();
            this.contacts.hide();
            this.settings.hide();
            this.reminders.hide();
            reminder = new Reminder();
            reminder.display();
          })
    }
}