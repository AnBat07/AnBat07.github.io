/*
 * Starter file 
 */
(function() {
    "use strict";
  
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    console.log("Window loaded!");
    window.addEventListener("load", init);
  
    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
      var encryptButton = document.getElementById("encrypt-it");
      encryptButton.addEventListener("click", handleClick);

    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    //check if the texzt is null
    function handleClick(){
        console.log("Button clicked!");
        if(this.id === "encrypt-it"){
            var inputTextArea = document.getElementById("input-text");
            var outputText = document.getElementById("result-area");
            if(inputTextArea !== null){
                var inputText = inputTextArea.value;
                var encryptedText = shiftCipher(inputText);
                outputText.textContent = encryptedText;
            }
        }
    }
    /**
    * Returns an encrypted version of the given text, where
    * each letter is shifted alphabetically ahead by 1 letter,
    * and 'z' is shifted to 'a' (creating an alphabetical cycle).
    */
    function shiftCipher(text) {
        text = text.toLowerCase();
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] < 'a' || text[i] > 'z') {
                result += text[i];
            } else if (text[i] == 'z') {
                result += 'a';
            } else { // letter is between 'a' and 'y'
                let letter = text.charCodeAt(i);
                let resultLetter = String.fromCharCode(letter + 1);
                result += resultLetter;
            } 
        }
        return result;
    }
  })();