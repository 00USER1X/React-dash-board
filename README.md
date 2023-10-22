# Mega Dashboard Assignment

**Introduction:**

Welcome to your ReactJS dashboard project! This project is designed to give you a comprehensive hands-on experience with ReactJS, one of the most popular front-end libraries in today's tech industry. This project will challenge you to build your very own dashboard application filled with different types of widgets that are useful, interactive, and beautifully designed.

The goal is not only to practice your ReactJS skills but also to have a final product that you can proudly showcase in your portfolio. Employers love to see actual projects, and your effort in this project could help you stand out from other candidates.

**Assignment:**

Your assignment is to create a dashboard application that incorporates six different widgets. The widgets you can choose from include a digital clock, calculator, countdown timer, Pomodoro timer, to-do list, virtual dice roller, text editor, unit converter, memory game, and a random quote generator. You should treat each widget as an individual React component and consider what data it needs to manage and what user interactions it should have.

**Styling:**

Remember that while functionality is critical, presentation matters too! Don't hold back when it comes to styling your widgets and overall dashboard. Use this opportunity to practice your CSS skills or explore CSS-in-JS libraries like styled-components. Think about color schemes, typography, responsiveness, and user experience. Make your dashboard not just a set of functionalities, but also a delightful interface to interact with.

Try to add animations or transitions where appropriate - this could be something as simple as a hover effect on a button, or more complex like a flipping card in the memory game. Use libraries like react-transition-group if you want to go further with this.

You're encouraged to go all out and create something you're truly proud of. This is your chance to showcase both your technical skills and your creativity. Don't just aim to complete the assignment - aim to exceed expectations. You can even consider adding extra features to your widgets if you have time - like an alarm clock feature to your digital clock, or a currency converter to your unit converter. 

**Remember:** this is not just an assignment. It's a chance for you to showcase what you can do. So give it your all, think outside the box, and most importantly, have fun! Good luck!


**1. Setting up your project:**

Start by creating a new React project using Create React App (CRA). Install any necessary dependencies using npm (Node Package Manager) or yarn.

**2. Planning your App:**

Sketch out your dashboard layout on paper or using a wireframing tool. Include spaces for each widget. Keep in mind that each widget will be a separate React component.

**3. Building your components:**

For each component, start by identifying its purpose, required data (state), and user interactions (events). It's often useful to start with a static version of the component and gradually add interactivity.

**Widgets:**

1. **Digital Clock**: This component should display the current time and automatically update every second. Use the JavaScript `Date` object to get the current time, and the `setInterval` function to update it. Don't forget to clear the interval when the component unmounts to prevent memory leaks!

2. **Calculator**: Implement a simple calculator with buttons for digits 0-9, operations (+, -, *, /), and equals (=) sign. You'll need to maintain state for the current value and the operation to be performed. Handle button clicks and perform the appropriate operation.

3. **Countdown Timer**: This component should allow the user to input a time, start a countdown to that time, and display the remaining time. Use `setInterval` to decrease the remaining time each second, and clear the interval when the time reaches zero or if the component unmounts.

4. **Pomodoro Timer**: This timer should alternate between 25 minutes of "work" and 5 minutes of "break". You can use similar logic as in the Countdown Timer, but with additional state to keep track of whether the user is in "work" or "break" mode.

5. **To-Do List**: Users should be able to add tasks, mark them as complete, and remove them. You'll need to maintain state for the list of tasks, each with a description and a completed status. 

6. **Virtual Dice Roller**: This component should display an image or text representation of a dice roll and update it when the user "rolls" the dice. Use a random number generator to simulate the roll.

7. **Text Editor**: This component should accept text input and provide buttons to apply formatting (like bold, italics, and underline). Use the `contentEditable` attribute or a `textarea` element for the text input.

8. **Unit Converter**: Users should be able to input a value and choose two units to convert between (like miles and kilometers, or Celsius and Fahrenheit). Implement the conversion formulas directly in the component.

9. **Memory Game**: Implement a simple matching game where users click on face-down cards to reveal their face-up side and try to find matching pairs. You'll need to maintain state for the list of cards and their statuses (face-down, face-up, matched).

10. **Random Quote Generator**: This component should display a new random quote or joke from a predefined list each time the user presses a button. Use an array to store the quotes or jokes and a random number generator to pick a random index.

**4. Assembling your Dashboard:**

Once all your components are created, import them into your main `App` component and arrange them according to your planned layout. Each component should be clearly separated and function independently of the others.

**5. Styling your Dashboard:**

Add CSS to your components to make them look nice and to match your planned layout. Remember that you can use the `className` attribute in JSX to add classes to elements, just like you would in HTML.

**6. Testing your Dashboard:**

Test your dashboard in the browser to make sure everything works as expected. Make sure to test the functionality of each component and the layout at various screen sizes.

**7. Review and Refine:**

Review your dashboard and make any necessary refinements. This could be fixing bugs, adding additional features, or improving the user interface.

**8. Presenting your Dashboard:**

Prepare a presentation of your dashboard for your classmates. Be prepared to explain how you built each component, any challenges you faced, and how you overcame them.