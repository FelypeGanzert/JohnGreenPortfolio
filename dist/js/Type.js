class TypeWriter{

    constructor(element, words, wait = 1000){
        // Initiate the variables
        this.element = element;
        this.words = words;
        this.wait = wait;
        this.currentIndex = 0;
        this.deleting = false;
        this.txt = '';
        // Call the function to start typing
        this.type();
    }

    type(){
        // Take the current word COMPLETELY
        const fullText = this.words[this.currentIndex];
        
        // Verify if is to delete the word or write it
        if(!this.deleting){
            this.txt = fullText.substring(0, this.txt.length + 1);
        } else{
            this.txt = fullText.substring(0, this.txt.length - 1);
        }

        // Define the speed of the writer
        let typeSpeed = 300;
        if(this.deleting){
            typeSpeed /= 2;
        }

        // Verify if the word is full typed
        // if is he will wait a more long time
        if(fullText === this.txt){
            this.deleting = true;
            typeSpeed = this.wait;
        }
        // Go to the next Index, if is the last then return to 0
        if(this.txt === ''){
            this.currentIndex += 1;
            if(this.words.length <= this.currentIndex){
                this.currentIndex = 0;
            }
            this.deleting = false;
        }

        this.element.innerHTML = `<span class="writer">${this.txt}</span>`;

        setTimeout(() => this.type(), typeSpeed);
    }
}


document.addEventListener('DOMContentLoaded', init);

function init(){
    const el = document.querySelector('.type-writer');
    const words = JSON.parse(el.getAttribute('data-text'));
    const timeWait = Number(el.getAttribute('time-wait'));
    new TypeWriter(el, words, timeWait);
}