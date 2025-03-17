// get all the elements by their id's
const openEmojiContainer = document.getElementById("openEmojiContainer");
const closeEmojiContainer = document.getElementById("closeEmojiContainer");
const emojiDiv = document.getElementById("emojiDiv");
const emojiName = document.getElementById("emojiName");
const emojiContainer = document.getElementById("emojiContainer");
const openTimelineContainer = document.getElementById("openTimelineContainer");
const closeTimelineContainer = document.getElementById("closeTimelineContainer");
const timelineDiv = document.getElementById("timelineDiv");
const timelineContainer = document.getElementById("timelineContainer");

// event listener to show the emoji container
openEmojiContainer.addEventListener("click", () => toggle(emojiDiv, true));

// event listener to hide the emoji container
closeEmojiContainer.addEventListener("click", () => toggle(emojiDiv, false));

// event listener to close the timeline containers
openTimelineContainer.addEventListener("click", () => toggle(timelineDiv, true));

// event listener to close the timeline containers
closeTimelineContainer.addEventListener("click", () => toggle(timelineDiv, false));

// mouseleave event listener to reset the name of emoji in container when not hovering on it
emojiContainer.addEventListener("mouseleave", () => (emojiName.style.display = "none"));

// array to store the emojis
const emojiTimelineArr = [];

// toggle function to open and close the containers
function toggle(name, value) {
  if (value) {
    name.style.borderWidth = "2px";
    name.style.height = "70%";
  } else {
    name.style.height = 0;
    name.style.borderWidth = 0;
  }
}

// function to get current time and date
function getTimeDate() {
  // create date object
  const date = new Date();

  // get current date
  const currDate = date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  // return date
  return currDate;
}

// function to load the timeline array from localstorage
function loadTimeline() {
  // set timeline key in localstorage if not present
  if (!localStorage.getItem("timeline")) localStorage.setItem("timeline", JSON.stringify([]));
  else {
    // load all key:value pairs from localstorage
    const timelineEmjs = JSON.parse(localStorage.getItem("timeline"));

    timelineEmjs.forEach((timeLineObj) => {
      // push to timeline array
      emojiTimelineArr.push(timeLineObj);

      // update timeline container
      updateTimeline(timeLineObj);
    });
  }
}

// function to update timeline container
function updateTimeline(timeLineObj) {
  // create timeline div
  const div = document.createElement("div");

  // create emoji element and add text inside it
  const emojiSpan = document.createElement("span");
  emojiSpan.textContent = timeLineObj.icon;

  // create date element and add text inside it
  const dateSpan = document.createElement("span");
  dateSpan.textContent = timeLineObj.createdAt;

  // append the elements in main element
  div.appendChild(emojiSpan);
  div.appendChild(dateSpan);

  // append the main element in timeline container
  timelineContainer.appendChild(div);
}

// function to fetch all emojis
function loadEmojis() {
  // fetch emojis from json file
  fetch("https://raw.githubusercontent.com/ManjeetSingh-02/masterji-daily-mood-tracker/refs/heads/main/assets/json/emojis.json")
    .then((res) => res.json())
    .then((emojiArr) => {
      // traverse through array for each emoji
      emojiArr.forEach((emoji) => {
        // create emoji button
        const btn = document.createElement("button");
        btn.textContent = emoji.emoji;

        // append it in container
        emojiContainer.appendChild(btn);

        // mouseover event listener to display emoji name when hovering it
        btn.addEventListener("mouseover", () => {
          emojiName.style.display = "block";
          emojiName.textContent = emoji.description;
        });

        // click event listener to save in localstorage
        btn.addEventListener("click", () => {
          // create new obj with emoji data
          const obj = {
            icon: emoji.emoji,
            createdAt: getTimeDate(),
          };

          // push the data to array
          emojiTimelineArr.push(obj);

          // update localstorage
          localStorage.setItem("timeline", JSON.stringify(emojiTimelineArr));

          // update timeline container
          updateTimeline(obj);

          // close the container
          toggle(emojiDiv, false);
        });
      });
    });
}

// loading all emojis
loadEmojis();

// loading all timelines
loadTimeline();
