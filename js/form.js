class Form{
    constructor(){
      this.title = createElement('h1');
      this.title2 = createElement('h1');
      this.startButton = createButton('Start');
      this.helper = null;
      }
      display(){
      this.title.html("Welcome to");
      this.title2.html("iCare4U");
      this.title.position(560, 70);
      this.title2.position(580, 100);

      this.startButton.position(550,350);
      this.startButton.size(200,40);

      this.startButton.mousePressed(()=>{
      this.title.hide();
      this.title2.hide();
      this.startButton.hide();

      this.input = createInput("Name"); 
      this.input.position(520, 120);
      this.input.size(200);
      this.input.Visibility=255;

      this.submit = createButton('Submit');
      this.submit.position(520,150);

      this.submit.mousePressed(()=>{
      this.submit.hide();
      this.input.hide();

      this.msg = createElement('h2');
      this.msg.html("Please choose");
      this.msg.position(550,100);

      this.helperButton = createButton('I am caring');
      this.parentButton = createButton('I need care');
      this.helperButton.position(550, 200);
      this.helperButton.size(200,40);
      this.parentButton.position(550, 350);
      this.parentButton.size(200,40);
      this.parentButton.Visibility=255;
      this.helperButton.Visibility=255;
      this.helperButton.mousePressed(()=>{
        this.helperButton.hide();
        this.parentButton.hide();
        this.msg.hide();

        child = new Child();
        child.display();
        });
      this.parentButton.mousePressed(()=>{
      this.helperButton.hide();
      this.parentButton.hide();
      this.msg.hide();

      child = new Child();
      child.display();
        });
      this.helper = this.input.value();
       });
      });
    }
}