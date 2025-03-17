# masterji-daily-mood-tracker

**Objective:**

- Create a daily mood tracker where users log their mood each day and visualize their emotional trends

**Requirements:**

- Users pick a mood emoji (happy, sad, neutral, excited, etc.) for the day
- Store the mood logs in LocalStorage
- Display a timeline view of past moods day/week/month wise views (Bonus: to display in calender view)

## Introduction

- The Daily Mood Tracker is a web application designed for personal use to help users log their mood each day
- This application allows users to track their complete timeline with time and date

## Scope

- The project aims to provide a basic Daily Mood Tracker with essential features
- This application will have a simple and user friendly interface to interact between users and application
- This application will store data locally to ensure persistence across sessions

## Features

- **Accessible** on both mobile devices and computers
- **Responsive** on both mobile devices and computers
- 2 sections - **Select Emoji** and **View Timeline**
- Functionality to **select among multiple emojis**
- Functionality to **view the emojis in timeline**
- Functionality to **store the timeline in localstorage**
- Each Timeline element must contain the following information:
  - **Icon** of the emoji
  - **Time** of its creation
  - **Date** of its creation

## Screenshots

**Home Page**
![Home Page](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-daily-mood-tracker/main/assets/images/01_homepage.png)

**Emoji Selector**
![Emoji Selector](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-daily-mood-tracker/main/assets/images/02_emojiselector.png)

**Timeline Calendar**
![Timeline Calendar](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-daily-mood-tracker/main/assets/images/03_timelinecalendar.png)

**Final Product**
![Final Product](https://raw.githubusercontent.com/ManjeetSingh-02/masterji-daily-mood-tracker/main/assets/images/04_final.png)

## Important Information

### Emojis

- Application uses `emojis.json` file to fetch all emojis and provide in emoji selector
- `emojis.json` file is owned by [**Gemoji GitHub**](https://github.com/github/gemoji/blob/master/db/emoji.json)
- To ensure that emoji selector always contains emojis, the `emojis.json` is copied and stored locally in `assets/json` dir

### Responsive

- Application uses certain breakpoints to provide responsiveness among multiple devices that are standerized globally
- These standerized breakpoints are avaliable at [**Tailwind CSS**](https://tailwindcss.com/docs/responsive-design)

## Deployment

- Application is deployed on GitHub Pages for accessibility across web
- View Website - [**Click Here**](https://manjeetsingh-02.github.io/masterji-daily-mood-tracker/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
