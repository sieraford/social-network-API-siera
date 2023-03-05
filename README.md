# Social Network API

## Description

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I also used the dayjs package to format timestamps.

## Installation

Clone the repo, `npm install` to download dependencies, and then run the program with the `node index.js` command.

## Usage

WHEN I enter the command to invoke the application,  
THEN my server is started and the Mongoose models are synced to the MongoDB database.  
WHEN I open API GET routes in Insomnia for users and thoughts,  
THEN the data for each of these routes is displayed in a formatted JSON.  
WHEN I test API POST, PUT, and DELETE routes in Insomnia,  
THEN I am able to successfully create, update, and delete users and thoughts in my database.  
WHEN I test API POST and DELETE routes in Insomnia,  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

[DEMO VIDEO HERE](https://drive.google.com/file/d/1u4D8v4uf27Nt4ucIcjjouPnSx6UfTHrt/view?usp=sharing)

## License

N/A
