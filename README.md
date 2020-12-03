# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `Brief Summary`

### `Process and Design Choices`

I began by planning the layout and component tree and state of the application. This involved mapping out where each component would appear on the page; assigning if the component would be stateless or stateful; and then assigning different states that I predicted would be needed for the stateful components.

To build the application, I first laid out the folder structure I would use placing stateless components in the 'Components' folder and stateful components in the 'Containers' folder.

Each stateless component would then have a module.css file and a test.js file associated with it. 

Once the structure of the folders and the components was in place, I created a toggle button to enable users to navigate between the two data charts easily. Here I used the button component within the Charts container as state was used to toggle between charts.

Finally, I integrated the apollo graphql API into the application by using it within the Charts container component. 

### `Challenges faced`

I have not worked with visx before and so to begin with had to read up on documents and how to implement the technology. For the majority of the time building the application, I used the mock data provided by visx so that it was easy to visualise how the application was progressing. When using some of the frameworks provided by visx for different graphs, I did notice multiple errors being seen in the console when a chart loaded which I did not get time to investigate. The height of the graphs would also continuously increase causing the graphs to get bigger and bigger when the page was loaded. To prevent this I had to hardcode the height of the graph. Again, with more time, I could have investigated further why this was happening.

A further challenge I faced before running out of time to submit, was that not all of my unit test have passed in the test suite. I believe this relates to me using module.css and my tests not being able to always find the node or component that they are looking for. I would implement the moduleNameWrapper more effectively to fix this issue in future.

Finally, I couldn't get the API data to fully integrate with the visx graphs which is why, if you run the application, you will receive an error on the page. I believe my Charts container component is setup correctly to handle the API data and the visx graph components are setup correctly to show data which is why they worked with mock data, however I did not manage to get the two to marry up.

On a last note, if you checkout my last branch 'button_onclick_function' you will be able to see the graphs working with mock data and the toggle button functioning by switching between the two. However, this does not use the API that you provided.