class Chat{
    constructor(){
        this.msgBox= createInput("Message");
        this.send= createButton('Send');
        this.msgText = createElement('h4');
        this.videoCall = createButton('Video Call');
        this.voiceCall = createButton('Voice Call');
        this.menu = createButton('Menu');
        this.value = null;
    }
    display(){
        this.msgBox.position(550,450);
        this.send.position(720,450);
        this.send.mousePressed(()=>{
            this.value = this.msgBox.value();
            this.msgText.html(this.value);
            this.msgText.position(550,200);
        });
        this.videoCall.position(650,100);
        this.videoCall.size(120);
        this.voiceCall.position(550,100);
        this.videoCall.size(120);
        this.menu.position(520,500);
        this.menu.size(250);

        this.voiceCall.mousePressed(()=>{
            this.msgBox.hide();
            this.msgText.hide();
            this.send.hide();
            this.videoCall.hide();
            this.voiceCall.hide();
            this.menu.hide();
            this.callingVoice = createElement('h1');
            this.callingVoice.html("Calling...");
            this.callingVoice.position(510, 200);

            this.endVoiceCall = createButton('End Call');
            this.endVoiceCall.position(520, 500);
            this.endVoiceCall.mousePressed(()=>{
                this.endVoiceCall.hide();
                this.callingVoice.hide();

                this.msgBox.show();
                this.msgText.show();
                this.send.show();
                this.videoCall.show();
                this.voiceCall.show();
                this.menu.show();
            })
        })

        this.videoCall.mousePressed(()=>{
            this.msgBox.hide();
            this.msgText.hide();
            this.send.hide();
            this.videoCall.hide();
            this.voiceCall.hide();
            this.menu.hide();
            this.callingVideo = createElement('h1');
            this.callingVideo.html("Calling...");
            this.callingVideo.position(510, 200);

            this.endVideoCall = createButton('End Call');
            this.endVideoCall.position(520, 500);
            this.endVideoCall.mousePressed(()=>{
                this.endVideoCall.hide();
                this.callingVideo.hide();
                this.msgBox.show();
                this.msgText.show();
                this.send.show();
                this.videoCall.show();
                this.voiceCall.show();
                this.menu.show();
            })
        })

        this.menu.mousePressed(()=>{
            this.msgBox.hide();
            this.msgText.hide();
            this.send.hide();
            this.videoCall.hide();
            this.voiceCall.hide();
            this.menu.hide();   
            child = new Child();
            child.display();
        })
    }
}