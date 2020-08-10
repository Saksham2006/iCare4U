class Settings{
    constructor(){
        this.gps = createButton('Track GPS');
        this.payBills = createButton('Pay Bills');
        this.moneyTransfer = createButton('Money Transfer');
        this.menu = createButton('Menu');
    }
    display(){
        this.gps.position(540, 100);
        this.gps.size(200, 40);

        this.payBills.position(540, 200);
        this.payBills.size(200, 40);
        
        this.moneyTransfer.position(540, 300);
        this.moneyTransfer.size(200, 40);

        this.menu.position(520,500);
        this.menu.size(250);

        this.gps.mousePressed(()=>{
            this.gps.hide();
            this.payBills.hide();
            this.moneyTransfer.hide();
            this.menu.hide();

            this.on = createButton('ON');
            this.off = createButton('OFF');
            this.locationMsg = createElement('h3');
            this.gpsBack = createButton('Back');

            this.on.position(520, 100);
            this.on.size(250);
            this.off.position(520, 150);
            this.off.size(250);
            this.locationMsg.html("Please turn on location to use");
            this.locationMsg.position(520, 200);
            this.gpsBack.position(520,500);
            this.gpsBack.size(250);

            this.gpsBack.mousePressed(()=>{
                this.on.hide();
                this.off.hide();
                this.locationMsg.hide();
                this.gpsBack.hide();

                settings = new Settings();
                settings.display();
            })
        });
        this.payBills.mousePressed(()=>{
            this.gps.hide();
            this.payBills.hide();
            this.moneyTransfer.hide();
            this.menu.hide();

            this.payAll = createButton('Pay All');
            this.bill1 = createElement('h3');
            this.bill2 = createElement('h3');
            this.bill3 = createElement('h3');
            this.bill4 = createElement('h3');
            this.bill5 = createElement('h3');
            this.payBack = createButton('Back');


            this.payAll.position(520,100);
            this.bill1.size(250);
            this.bill1.html('Water Bill: $77.3');
            this.bill1.position(520,150);
            this.bill1.size(250);
            this.bill2.html('Electricity Bill: $142.8');
            this.bill2.position(520,200);
            this.bill2.size(250);
            this.bill3.html('Taxes: $9.1');
            this.bill3.position(520,250);
            this.bill3.size(250);
            this.bill4.html('Doctor Appointment Payment: $15.6');
            this.bill4.position(520,300);
            this.bill4.size(250);
            this.bill5.html('Online Delivery Payment: $49.99');
            this.bill5.position(520,350);
            this.bill5.size(250);
            this.payBack.position(520,500);
            this.payBack.size(250);
            this.payAll.mousePressed(()=>{
                this.bill1.hide();
                this.bill2.hide();
                this.bill3.hide();
                this.bill4.hide();
                this.bill5.hide();
                this.payAll.hide();
                this.payBack.hide();
                this.completed = createElement('h2');
                this.payAllBack = createButton('Back');
                this.payAllBack.position(520,500);
                this.payAllBack.size(250);
                this.completed.html('Successfully Paid');
                this.completed.position(520,200);
            this.payAllBack.mousePressed(()=>{
                this.payAllBack.hide();
                this.completed.hide();

                settings = new Settings();
                settings.display();
             })
            });
            this.payBack.mousePressed(()=>{
                this.bill1.hide();
                this.bill2.hide();
                this.bill3.hide();
                this.bill4.hide();
                this.bill5.hide();
                this.payAll.hide();

                settings = new Settings();
                settings.display();
            })
        })
        this.moneyTransfer.mousePressed(()=>{
            this.gps.hide();
            this.payBills.hide();
            this.moneyTransfer.hide();
            this.menu.hide();

            this.add1 = createButton('$1');
            this.add5 = createButton('$5');
            this.add10 = createButton('$10');
            this.add25 = createButton('$25');
            this.add100 = createButton('$100');
            this.note = createElement('h4');
            this.payBack = createButton('Back');
            this.amount = 0;
            this.amountVal = createElement('h3');
            this.send = createButton('Submit');

            this.add1.position(520, 100);
            this.add1.size(250);
            this.add5.position(520, 150);
            this.add5.size(250);
            this.add10.position(520, 200);
            this.add10.size(250);
            this.add25.position(520, 250);
            this.add25.size(250);
            this.add100.position(520, 300);
            this.add100.size(250);
            this.note.html("Request for money transfer");
            this.note.position(570, 350);
            this.payBack.position(520,500);
            this.payBack.size(250);
            this.send.position(520, 400);
            this.send.size(250);

            this.add1.mousePressed(()=>{
                this.amount+=1;
            })

            this.add5.mousePressed(()=>{
                this.amount+=5;
            })

            this.add10.mousePressed(()=>{
                this.amount+=10;
            })

            this.add25.mousePressed(()=>{
                this.amount+=25;
            })

            this.add100.mousePressed(()=>{
                this.amount+=100;
            })

            this.send.mousePressed(()=>{
                this.add1.hide();
                this.add5.hide();
                this.add10.hide();
                this.add25.hide();
                this.add100.hide();
                this.note.hide();
                this.send.hide();
                this.payBack.hide();

                this.amountVal = createElement('h3');
                this.amountVal.html("Money Requested: $"+this.amount);
                this.amountVal.position(510, 200);

                this.payBack2 = createButton('Back');
                this.payBack2.position(520,500);
                this.payBack2.size(250);

                this.payBack2.mousePressed(()=>{
                    this.amountVal.hide();
                    this.payBack2.hide();
                    
                    settings = new Settings();
                    settings.display();
                })
            })

            this.payBack.mousePressed(()=>{
                this.add1.hide();
                this.add5.hide();
                this.add10.hide();
                this.add25.hide();
                this.add100.hide();
                this.note.hide();
                this.payBack.hide();
                this.send.hide();

                settings = new Settings();
                settings.display();
        })
      })
      this.menu.mousePressed(()=>{
          this.menu.hide();
          this.payBills.hide();
          this.moneyTransfer.hide();
          this.gps.hide();

          child = new Child();
          child.display();
      })
    }
}