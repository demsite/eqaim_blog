## Eqaim Blog

Built with MERN stack

Prepared by Jozbiz as sample solution to the problem statement provided by Eqaim


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:
`npm install`   

To Start Backend server, you can start from the root folder itself after installation:
`npm start`

To Start Frontend server, change to frontend folder first:
`cd frontend`

And then install the front-end npm files using:
`npm install`

And then you can start the server:
`npm start`



#### Description: 

The blogs have three screens as requested :
1. Home Screen
2. Blogpost Screen
3. Publish Blog Screen

User flow:
1. On Home screen, a user will be able to see all existing blogpost in form of cards with its title and summary in reverse chronlogical order.
2. User clicks on the card, will be redirected to the Blogpost screen.
3. User clicks on Home icon in Blogpost screen and redirects back to Home screen.
4. User clicks on the Add Blog Icon (At the botttom right of the Home screen) redirects to the Publish Blog Screen.
5. User writes the Title in the title section and fills the body with appropriate content.(Images could be added)
6. After finishing the content, user clicks on Publish Icon and the blog post would be published

Deliverables:
1. Create Data model and use MongoDB in local to save all the data - PREPARED IN backend folder.
2. Create RESTful APIs appropraiate to the above user flow in Express.js and run the server locally - PREPARED IN backend folder.
3. Create a React app for the Frontend - PREPARED IN frontend folder
4. Integrate the React app with the Node.js backend - DONE
5. Documentation in Readme about how to run the blog services (frontent, backend and db) in local. - All details provided


#### Example:   

<p align="center">

 <img alt="desktop home page" src="https://i.imgur.com/4Y2uwh8.png" width="534" />
 <br/>
 <img alt="desktop post detail" src="https://i.imgur.com/hHdJBFb.png" width="534" />
 <br/>
 <img alt="desktop post new" src="https://i.imgur.com/nfS3Rj3.png" width="534" />
 <br/>
 <img alt="mobile home page" src="https://i.imgur.com/bE4uIvX.png"  height="300" />
 <br/>
 <img alt="mobile post detail" src="https://i.imgur.com/TAoJ7YF.png" height="300" />
 <br/>
 <img alt="mobile post new" src="https://i.imgur.com/6ufDqs1.png" height="300" /> 
</p>
