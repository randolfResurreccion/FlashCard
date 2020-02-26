
// Dom
const addBtn = document.querySelector("#add-btn");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const displayFlash = document.querySelector(".flashcard-section");

// Array of objects
let flashCards = [];

// counter variables
let index = 0;
let num = 1;

// Main Function
const addCard = (e) => {
    e.preventDefault();

    $('form textarea').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    // verify user input
    if (question.value.length < 1 || answer.value.length < 1) {
        // $(".warning-section").css("display", "block");
        toggleDisplay(".warning-section", "display", "block");
        return false;
    }

    // card object
    let card = {
        q: question.value,
        a: answer.value
    }
    flashCards.push(card);

    let q = flashCards[index].q;
    let a = flashCards[index].a;

    document.querySelector("#form").reset();

    // create New Card
    let newCard = document.createElement("div");
    newCard.classList.add("new-card");

    // create a question Div
    let questionDiv = document.createElement("p");
    questionDiv.innerHTML = q;

    // create answer div
    let answerDiv = document.createElement("p");
    answerDiv.classList.add("hide-card");
    answerDiv.id = "answer-id" + num;
    answerDiv.innerHTML = a;

    // create a btn
    let newbtn = document.createElement("button");
    newbtn.classList.add("new-btn");
    newbtn.id = "button-id" + num;
    newbtn.innerHTML = "toggle";


    // append elements
    newCard.appendChild(questionDiv);
    newCard.appendChild(answerDiv);
    newCard.appendChild(newbtn);
    // newCard.appendChild(deleteBtn);
    displayFlash.appendChild(newCard);

    // increment counter variables
    index++;
    num++


    // toggle listener
    $(".new-btn").unbind().on("click", function () {
        const target_id = this.id;

        // grab the last character of a string
        const lastChar = target_id[target_id.length - 1];
        console.log("last Char:" + lastChar);

        if ($("#answer-id" + lastChar).hasClass("hide-card")) {
            $("#answer-id" + lastChar).removeClass("hide-card");
            $("#answer-id" + lastChar).addClass("show-card");
        } 
        else {
            $("#answer-id" + lastChar).removeClass("show-card");
            $("#answer-id" + lastChar).addClass("hide-card");
        }

    });

}

// function to manipulate our display properties
const toggleDisplay = (target, prop, val) => {
    $(target).css(prop, val);
}



document.addEventListener("DOMContentLoaded", () => {
    addBtn.addEventListener("click", addCard);

    $("#close-btn").on("click", function () {
        $(this).css("display", "none");
        toggleDisplay(".form-section", "display", "none");
        toggleDisplay(".primary-btn", "display", "inline-block");
    });

    $("#start-now").on("click", function () {
        toggleDisplay(".primary-btn", "display", "none");
        toggleDisplay(".form-section", "display", "block");
        toggleDisplay("#close-btn", "display", "block");
    });

    $("#close-learn").on("click", function () {
        $(this).css("display", "none");
        toggleDisplay(".learn-section", "display", "none");
        toggleDisplay(".primary-btn", "display", "inline-block");
    });

    $("#try-again").on("click", function () {
        $(".warning-section").css("display", "none");
    });

    $("#toggle-random").on("click", function() {
        toggleDisplay("#random-bar", "display", "block");
    });

});



