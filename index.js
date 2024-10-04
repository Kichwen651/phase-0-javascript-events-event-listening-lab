function addingEventListener() {
    const element = document.getElementById('button');
    element.addEventListener('click',() => {
        console.log('button clicked!');
    });

    }

// test('should add click event listener', () => {
//     document.body.innerHTML = '<button id="myButton">Click Me!</button>';
    
//     // Import or execute the code that adds the event listener
//     require('./index.js');

//     const button = document.getElementById('myButton');
//     const clickHandler = jest.fn();

//     // Add the event listener
//     button.addEventListener('click', clickHandler);

//     // Simulate a click
//     button.click();

//     // Check if the handler was called
//     expect(clickHandler).toHaveBeenCalled();
// });
