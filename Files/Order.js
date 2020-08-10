class Order{
    constructor(){
        this.submit = createButton('Submit order');
        this.groceries = createButton('Groceries');
        this.medicenes = createButton('Medicine');
        this.rice = createButton('Rice');
        this.bread = createButton('Bread');
        this.fruits = createButton('Fruits');
        this.textOrder = createInput("Note/Anything else to order?");
        this.menu = createButton('Menu');

        this.gValue = 0;
        this.mValue = 0;
        this.rValue = 0;
        this.bValue = 0;
        this.fValue = 0;
    }
    display(){
        this.submit.position(550,450);
        this.textOrder.position(550, 300);
        this.rice.position(550,100);
        this.rice.mousePressed(()=>{
            this.rValue+=1;
        })
        this.bread.position(550,130);
        this.bread.mousePressed(()=>{
            this.bValue = this.bValue+1;
        })
        this.fruits.position(550,160);
        this.fruits.mousePressed(()=>{
            this.fValue = this.fValue+1;
        })
        this.groceries.position(550,190);
        this.groceries.mousePressed(()=>{
            this.gValue = this.gValue+1;
        })
        this.medicenes.position(550,220);
        this.medicenes.mousePressed(()=>{
            this.mValue = this.mValue+1;
        })

        this.menu.position(520,500);
        this.menu.size(250);
        this.menu.mousePressed(()=>{

            this.medicenes.hide();
            this.groceries.hide();
            this.fruits.hide();
            this.bread.hide();
            this.rice.hide();
            this.submit.hide();
            this.textOrder.hide();
            this.menu.hide();

            child = new Child();
            child.display();
        });

        this.submit.mousePressed(()=>{
            this.medicenes.hide();
            this.groceries.hide();
            this.fruits.hide();
            this.bread.hide();
            this.rice.hide();
            this.submit.hide();
            this.textOrder.hide();

            this.complete = createElement('h2');
            this.complete.html("Order Complete");
            this.complete.position(550, 100);

            this.gText = createElement('h4');
            this.mText = createElement('h4');
            this.rText = createElement('h4');
            this.bText = createElement('h4');
            this.fText = createElement('h4');

        this.textOrder.position(550,300);
        this.rText.html("Rice: "+this.rValue);
        this.rText.position(550,320);
        this.bText.html("Bread: "+this.bValue);
        this.bText.position(550,340);
        this.fText.html("Fruits: "+this.fValue);
        this.fText.position(550,360);
        this.gText.html("Groceries: "+this.gValue);
        this.gText.position(550,380);
        this.mText.html("Medicine: "+this.mValue);
        this.mText.position(550,400);

            this.goBack = createButton('Go Back');
            this.goBack.position(520, 500);
            this.goBack.size(250);

            this.goBack.mousePressed(()=>{
                this.menu.hide();
                this.goBack.hide();
                this.rText.hide();
                this.bText.hide();
                this.gText.hide();
                this.mText.hide();
                this.fText.hide();
                this.complete.hide();

                child = new Child();
                child.display();
            })
        });
    }
}