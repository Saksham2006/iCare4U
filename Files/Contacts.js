class Contacts{
    constructor(){
        this.newContact1 = createInput('Enter Name/Number');
        this.newContact2 = createInput('Enter Name/Number');
        this.newContact3 = createInput('Enter Name/Number');
        this.newContact4 = createInput('Enter Name/Number');
        this.newContact5 = createInput('Enter Name/Number');

        this.contactSumbit1 = createButton('Done');
        this.contactSumbit2 = createButton('Done');
        this.contactSumbit3 = createButton('Done');
        this.contactSumbit4 = createButton('Done');
        this.contactSumbit5 = createButton('Done');

        this.contact1 = null;
        this.contact2 = null;
        this.contact3 = null;
        this.contact4 = null;
        this.contact5 = null;

        this.menu = createButton('Menu');
    }
    display(){
      this.newContact1.position(520,100);
      this.newContact2.position(520,140);
      this.newContact3.position(520,180);
      this.newContact4.position(520,220);
      this.newContact5.position(520,260);

      this.contactSumbit1.position(670, 100);
      this.contactSumbit2.position(670, 140);
      this.contactSumbit3.position(670, 180);
      this.contactSumbit4.position(670, 220);
      this.contactSumbit5.position(670, 260);

      this.menu.position(520, 500);
      this.menu.size(250);

      this.contactSumbit1.mousePressed(()=>{
         this.contact1 = this.newContact1.value();
         
         this.c1 = createButton(this.contact1);
         this.c1.position(520, 290);
         this.c1.size(200);

         this.c1.mousePressed(()=>{
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.newContact1.hide();
            this.newContact2.hide();
            this.newContact3.hide();
            this.newContact4.hide();
            this.newContact5.hide();
            this.contactSumbit1.hide();
            this.contactSumbit2.hide();
            this.contactSumbit3.hide();
            this.contactSumbit4.hide();
            this.contactSumbit5.hide();
            this.menu.hide();
   
            this.calling = createElement('h1');
            this.calling.html('Calling..')
            this.calling.position(510, 200);
   
            this.end = createButton('End Call');
            this.end.position(520, 500);
   
            this.end.mousePressed(()=>{
            this.calling.hide();
            this.end.hide();
            this.c1.show();
            this.c2.show();
            this.c3.show();
            this.c4.show();
            this.c5.show();
            this.newContact1.show();
            this.newContact2.show();
            this.newContact3.show();
            this.newContact4.show();
            this.newContact5.show();
            this.contactSumbit1.show();
            this.contactSumbit2.show();
            this.contactSumbit3.show();
            this.contactSumbit4.show();
            this.contactSumbit5.show();
            this.menu.show();
            })
         })
      })
      this.contactSumbit2.mousePressed(()=>{
         this.contact2 = this.newContact2.value();
         this.c2 = createButton(this.contact2);
         this.c2.position(520, 320);
         this.c2.size(200);

         this.c2.mousePressed(()=>{
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.newContact1.hide();
            this.newContact2.hide();
            this.newContact3.hide();
            this.newContact4.hide();
            this.newContact5.hide();
            this.contactSumbit1.hide();
            this.contactSumbit2.hide();
            this.contactSumbit3.hide();
            this.contactSumbit4.hide();
            this.contactSumbit5.hide();
            this.menu.hide();
   
            this.calling = createElement('h1');
            this.calling.html('Calling..')
            this.calling.position(510, 200);
   
            this.end = createButton('End Call');
            this.end.position(520, 500);
   
            this.end.mousePressed(()=>{
            this.calling.hide();
            this.end.hide();
            this.c1.show();
            this.c2.show();
            this.c3.show();
            this.c4.show();
            this.c5.show();
            this.newContact1.show();
            this.newContact2.show();
            this.newContact3.show();
            this.newContact4.show();
            this.newContact5.show();
            this.contactSumbit1.show();
            this.contactSumbit2.show();
            this.contactSumbit3.show();
            this.contactSumbit4.show();
            this.contactSumbit5.show();
            this.menu.show();
            })
         })
      })
      this.contactSumbit3.mousePressed(()=>{
         this.contact3 = this.newContact3.value();
         this.c3 = createButton(this.contact3);
         this.c3.position(520, 350);
         this.c3.size(200);

         this.c3.mousePressed(()=>{
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.newContact1.hide();
            this.newContact2.hide();
            this.newContact3.hide();
            this.newContact4.hide();
            this.newContact5.hide();
            this.contactSumbit1.hide();
            this.contactSumbit2.hide();
            this.contactSumbit3.hide();
            this.contactSumbit4.hide();
            this.contactSumbit5.hide();
            this.menu.hide();
   
            this.calling = createElement('h1');
            this.calling.html('Calling..')
            this.calling.position(510, 200);
   
            this.end = createButton('End Call');
            this.end.position(520, 500);
   
            this.end.mousePressed(()=>{
            this.calling.hide();
            this.end.hide();
            this.c1.show();
            this.c2.show();
            this.c3.show();
            this.c4.show();
            this.c5.show();
            this.newContact1.show();
            this.newContact2.show();
            this.newContact3.show();
            this.newContact4.show();
            this.newContact5.show();
            this.contactSumbit1.show();
            this.contactSumbit2.show();
            this.contactSumbit3.show();
            this.contactSumbit4.show();
            this.contactSumbit5.show();
            this.menu.show();
            })
         })
      })
      this.contactSumbit4.mousePressed(()=>{
         this.contact4 = this.newContact4.value();
         this.c4 = createButton(this.contact4);
         this.c4.position(520, 380);
         this.c4.size(200);

         this.c4.mousePressed(()=>{
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.newContact1.hide();
            this.newContact2.hide();
            this.newContact3.hide();
            this.newContact4.hide();
            this.newContact5.hide();
            this.contactSumbit1.hide();
            this.contactSumbit2.hide();
            this.contactSumbit3.hide();
            this.contactSumbit4.hide();
            this.contactSumbit5.hide();
            this.menu.hide();
   
            this.calling = createElement('h1');
            this.calling.html('Calling..')
            this.calling.position(510, 200);
   
            this.end = createButton('End Call');
            this.end.position(520, 500);
   
            this.end.mousePressed(()=>{
            this.calling.hide();
            this.end.hide();
            this.c1.show();
            this.c2.show();
            this.c3.show();
            this.c4.show();
            this.c5.show();
            this.newContact1.show();
            this.newContact2.show();
            this.newContact3.show();
            this.newContact4.show();
            this.newContact5.show();
            this.contactSumbit1.show();
            this.contactSumbit2.show();
            this.contactSumbit3.show();
            this.contactSumbit4.show();
            this.contactSumbit5.show();
            this.menu.show();
            })
         })
      })
      this.contactSumbit5.mousePressed(()=>{
         this.contact5 = this.newContact5.value();
         this.c5 = createButton(this.contact5);
         this.c5.position(520, 410);
         this.c5.size(200);

         this.c5.mousePressed(()=>{
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.newContact1.hide();
            this.newContact2.hide();
            this.newContact3.hide();
            this.newContact4.hide();
            this.newContact5.hide();
            this.contactSumbit1.hide();
            this.contactSumbit2.hide();
            this.contactSumbit3.hide();
            this.contactSumbit4.hide();
            this.contactSumbit5.hide();
            this.menu.hide();
   
            this.calling = createElement('h1');
            this.calling.html('Calling..')
            this.calling.position(510, 200);
   
            this.end = createButton('End Call');
            this.end.position(520, 500);
   
            this.end.mousePressed(()=>{
            this.calling.hide();
            this.end.hide();
            this.c1.show();
            this.c2.show();
            this.c3.show();
            this.c4.show();
            this.c5.show();
            this.newContact1.show();
            this.newContact2.show();
            this.newContact3.show();
            this.newContact4.show();
            this.newContact5.show();
            this.contactSumbit1.show();
            this.contactSumbit2.show();
            this.contactSumbit3.show();
            this.contactSumbit4.show();
            this.contactSumbit5.show();
            this.menu.show();
            })
         })
      })

      this.menu.mousePressed(()=>{
         this.c1.hide();
         this.c2.hide();
         this.c3.hide();
         this.c4.hide();
         this.c5.hide();
         this.newContact1.hide();
         this.newContact2.hide();
         this.newContact3.hide();
         this.newContact4.hide();
         this.newContact5.hide();
         this.contactSumbit1.hide();
         this.contactSumbit2.hide();
         this.contactSumbit3.hide();
         this.contactSumbit4.hide();
         this.contactSumbit5.hide();
         this.menu.hide();
         
         child = new Child();
         child.display();
      })
    }
}