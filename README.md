## Creator Forum

This full-stack app is a feedback forum where creators can link their work as “uploads”. Fellow users can then give “feedback” on work through comments on the forum page. Currently, usernames are never displayed, so everyone can remain anonymous while uploading and giving feedback. This allows users in the forum to feel more open to be constructive with their critique, and for uploaders to get unbiased feedback on work they find subjective. Creators can vary from artists, photographers, designers and or full-stack engineers. Anyone who has a link to their work and craves honest feedback is encouraged to join.

<a href="https://drive.google.com/file/d/1BjXUKijvrYSfrI6SST4d1joGpbl8LB_B/view?usp=sharing">Creator Forum Demo Video<a/>
   
## Images

<a href="https://user-images.githubusercontent.com/58093608/116963961-1b9bd480-ac5f-11eb-9560-a138ae87a1ec.png">Creator Forum Landing<a/>
   
![Creator Forum Landing](https://user-images.githubusercontent.com/58093608/116963961-1b9bd480-ac5f-11eb-9560-a138ae87a1ec.png)


<a href="https://user-images.githubusercontent.com/58093608/116964126-9c5ad080-ac5f-11eb-8c31-0b3ea49d34ee.png">Profile View<a/>
   
![Profile View](https://user-images.githubusercontent.com/58093608/116964126-9c5ad080-ac5f-11eb-8c31-0b3ea49d34ee.png)


<a href="https://user-images.githubusercontent.com/58093608/116964213-d330e680-ac5f-11eb-8703-ab68d9f0b9a9.png">Forum View<a/>
   
![Forum View](https://user-images.githubusercontent.com/58093608/116964213-d330e680-ac5f-11eb-8703-ab68d9f0b9a9.png)

## Technologies Used

**MERN stack**
* MongoDB
* Express
* React
* Node.js
* <a href="https://github.com/kuricarino/creator-forum-front-end/tree/kris">Frontend repo<a/>

**Necessary Dependencies**
* bcryptjs
* mongoose
* jsownwebtoken
* axios
* bulma

**Front-end Framework**
* Bulma CSS

### <a href="https://user-images.githubusercontent.com/58093608/116964472-78e45580-ac60-11eb-95ee-aef7a9bb3afe.jpg">Wireframe: Paper Prototype</a>

### <a href="https://user-images.githubusercontent.com/58093608/116964865-60c10600-ac61-11eb-9736-6638c4e579e7.jpeg">ERD</a>

### User Story
1. On the landing page, if they have not already, a user can sign-up for the Creator Forum through navigating to the Sign Up page. After signing-up or logging in, they are redirected to their Profile page.
2. On a user’s Profile page, they can:
    * View and edit their first and last name, see their username, email and a default photo. (Photo uploads would be another iteration).
    * See the “uploads” they have posted to the forum
        * Uploads include the title of their work, category, external link and a short description.
    * Add more uploads to the Forum from their Profile page, edit and delete them
    * See the feedback from other users for each of their uploads.
3. Users can navigate to the Forum page through the nav
    * The Forum page contains one column or “feed” or all the uploads from different users. 
    * Users can write, edit and delete their feedback on any upload they had the chance to see

## Further Iterations
* User can toggle to hide or show their posts on the forum instead of completely deleting them
* User can toggle to hide or show their username on each of their uploads
* User can toggle to hide or show their username on their feedback posts
* Pagination of the feedback on an upload on the Forum page
* Use of FaceBook or Google to login
* Style edits to improve user interface design:
    * Better field validation: show help text to users (i.e. if a password is wrong, if a username is already taken)
        * Regex
    * Better toggle style of buttons already clicked (i.e. when a user submits edits to their profile)
    * Better toggle of forms (i.e. the edit form closes if the delete button and message is displayed)

## Known Issues / Things to Consider
* User login, sign up, and profile forms outline missing fields in red, but does not undo red outline once a user starts typing
* Feedback form for an edit does not close on submit - what if user wants to edit their feedback more than once?
    * Currently similar to IG, where users can post multiple comments
        * May lead to issues with spamming

### Thank you
To everyone who was part of this adventure - for your understanding, support, positivity, inspiration and motivation. 
