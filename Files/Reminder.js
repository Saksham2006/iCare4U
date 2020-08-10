class Reminder{
    constructor(){
        this.reminder1time = createInput("Type date/time");
        this.reminder2time = createInput("Type date/time");
        this.reminder3time = createInput("Type date/time");
        this.reminder4time = createInput("Type date/time");
        this.reminder5time = createInput("Type date/time");
        this.reminder1 = createElement('h4');
        this.reminder2 = createElement('h4');
        this.reminder3 = createElement('h4');
        this.reminder4 = createElement('h4');
        this.reminder5 = createElement('h4');

        this.rem1 = null;
        this.rem2 = null;
        this.rem3 = null;
        this.rem4 = null;
        this.rem5 = null;

        this.done1 = createButton('Done');
        this.done2 = createButton('Done');
        this.done3 = createButton('Done');
        this.done4 = createButton('Done');
        this.done5 = createButton('Done');

        this.menu = createButton('Menu');
    }
    display(){
        this.menu.position(520, 500);
        this.done1.position(670, 220);
        this.done2.position(670, 260);
        this.done3.position(670, 300);
        this.done4.position(670, 340);
        this.done5.position(670, 380);

        this.done1.mousePressed(()=>{
        this.rem1 = this.reminder1time.value();
        this.reminder1.html(this.rem1);
        this.reminder1.position(520,70);
        })

        this.done2.mousePressed(()=>{
        this.rem2 = this.reminder2time.value();
        this.reminder2.html(this.rem2);
        this.reminder2.position(520,90);
        })

        this.done3.mousePressed(()=>{
        this.rem3 = this.reminder3time.value();
        this.reminder3.html(this.rem3);
        this.reminder3.position(520,110);
        })

        this.done4.mousePressed(()=>{
        this.rem4 = this.reminder4time.value();
        this.reminder4.html(this.rem4);
        this.reminder4.position(520,130);
        })

        this.done5.mousePressed(()=>{
        this.rem5 = this.reminder5time.value();
        this.reminder5.html(this.rem5);
        this.reminder5.position(520,150);
        })

        this.reminder1time.position(520, 220);
        this.reminder2time.position(520, 260);
        this.reminder3time.position(520, 300);
        this.reminder4time.position(520, 340);
        this.reminder5time.position(520, 380);

        this.menu.mousePressed(()=>{
            this.reminder1.hide();
            this.reminder2.hide();
            this.reminder3.hide();
            this.reminder4.hide();
            this.reminder5.hide();
            this.done1.hide();
            this.done2.hide();
            this.done3.hide();
            this.done4.hide();
            this.done5.hide();
            this.reminder1time.hide();
            this.reminder2time.hide();
            this.reminder3time.hide();
            this.reminder4time.hide();
            this.reminder5time.hide();
            this.menu.hide();

            child = new Child();
            child.display();
        })
    }
}