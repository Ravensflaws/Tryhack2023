const WPrompts = document.querySelector("div.prompt"),
    promptBtn = document.querySelector(".content button"),
    submitBtn = document.querySelector(".submit"),
    storyBtn = document.querySelector('.showStories');

//placeholder for prompts database
class Database {
    constructor(content, title) {
        this.Prompt = content;
        this.title = title;
    }
}
class Stories {
    constructor(Uname, new_story) {
        this.username = Uname;
        this.story = new_story;
    }
}
// prompts are taken from (https://writing-prompt-s.tumblr.com/)
var prompt1 = new Database("There was once a daughter of peasants cursed to have tears that hardened into diamonds. Her loving family took pride in their poverty as it meant they had never made their daughter shed a drop. But…", ['crying_girl']),
    prompt2 = new Database("A private investigator, was hired to spy on you. You know this because he is comically bad at his job", ['investigator']),
    prompt3 = new Database("The anti-technology spell stops technology from working. What's so confusing about this?", ['spell']),
    prompt4 = new Database("You're a deity of something small and seemingly unimportant. You're the first one the people stop praying and sacrificing to when things get dire. Oh, what fools they are.", ['deity']),
    prompt5 = new Database("You're an alien spy that has replaced someone in order to blend in on Earth. Turns out the guy you replaced had a very unhappy wife who immediately realised you aren’t him when you treat her like a normal husband should.", ['alien_spy']);
var promptList = [prompt1, prompt2, prompt3, prompt4, prompt5];
var storiesDatabase = [];

// random prompt function
function randomPrompt() {
    console.log("clicked"); //delete
    //usually use fetch but no backend exp
    //placeholder code
    const randomIndex = Math.floor(Math.random() * promptList.length);
    const randomPrompt = promptList[randomIndex].Prompt;
    console.log(randomIndex);
    WPrompts.innerText = randomPrompt;
}

//show hidden form
function showForm() {
    var x = document.querySelector("#comment-form");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block"; // Show the form
    }
}

//prompt button
promptBtn.addEventListener("click", function () {
    showForm();
    randomPrompt();
});

const storyblock = document.querySelector("div.stories");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const text = document.getElementById("comment").value;
    storiesDatabase.push(new Stories(username, text));
    document.getElementById("name").value = "Anonymous";
    document.getElementById("comment").value = "";
    alert("Comment submitted!");
    storyblock.style.display = "block";
        console.log("Appear"); //delete
        console.log(storiesDatabase); //delete
        let list = document.getElementById("storyList");
        list.innerHTML = "";
        const nostorymsg = document.querySelector("div.writepls");
        if (storiesDatabase.length === 0){
            nostorymsg.style.display = "block";
        } else {
            nostorymsg.style.display = "none";
            storyblock.style.display = "block";
        }
        for (let i = 0; i < storiesDatabase.length; ++i) {
            let li = document.createElement('li');
            li.innerText = `Username: ${storiesDatabase[i].username}\n Story:\n ${storiesDatabase[i].story}\n`;
            list.appendChild(li);
        }
        storyBtn.innerText = "Hide Stories";
    return false;
});

function showStories() {
    if (storyblock.style.display === "none" || storyblock.style.display === "") {
        storyblock.style.display = "block";
        console.log("Appear"); //delete
        console.log(storiesDatabase); //delete
        let list = document.getElementById("storyList");
        list.innerHTML = "";
        const nostorymsg = document.querySelector("div.writepls");
        if (storiesDatabase.length === 0){
            nostorymsg.style.display = "block";
        } else {
            nostorymsg.style.display = "none";
            storyblock.style.display = "block";
        }
        for (let i = 0; i < storiesDatabase.length; ++i) {
            let li = document.createElement('li');
            li.innerText = `Username: ${storiesDatabase[i].username}\n Story:\n ${storiesDatabase[i].story}`;
            list.appendChild(li);
        }
        storyBtn.innerText = "Hide Stories";
    } else {
        storyblock.style.display = "none";
        storyBtn.innerText = "Show Stories";
    }
}

storyBtn.addEventListener("click", function () {
    console.log("Button clicked.");
    showStories();
})


