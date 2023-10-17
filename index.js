// // function submitData(name, email) {
// //     // Define the data to be sent
// //     const formData = {
// //       name: name,
// //       email: email,
// //     };
  
// //     // Define the configuration object
// //     const configurationObject = {
// //       method: "POST",
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     };
  
// //     // Perform the POST request
// //     return fetch('http://localhost:3000/users', configurationObject)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error(`Network response was not ok: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         // Access the response data, find the new id
// //         const newId = data.id;
        
// //         // Append the new id to the DOM
// //         document.body.innerHTML = newId;
        
// //         // Return the data in case you want to use it elsewhere
// //         return data;
// //       })
// //       .catch(error => {
// //         // Handle errors by appending the error message to the DOM
// //         document.body.innerHTML = error.message;
// //         // Return the error for further handling if needed
// //         return error;
// //       });
// //   }
  
// //   // Test the function by calling it with test data
// //   submitData('John Doe', 'john@example.com');
// // const fetch = require('node-fetch'); // Use 'node-fetch' for testing
// // const nock = require('nock');

// // function submitData(name, email) {
// //   const data = {
// //     name: name,
// //     email: email,
// //   };

// //   const configurationObject = {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       'Accept': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// //   };

// //   return fetch('http://localhost:3000/users', configurationObject)
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((data) => {
// //       document.body.innerHTML = data.id;
// //     })
// //     .catch((error) => {
// //       document.body.innerHTML = error.message;
// //     });
// // }

// // // Export the submitData function for testing
// // module.exports = {
// //   submitData,
// // };
// function submitData(name, email) {
//   // Create a POST request with the provided data
//   const formData = {
//     name: name,
//     email: email
//   };

//   return fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(response => {
//       // Handle a successful response by parsing the JSON and appending the id to the DOM
//       return response.json().then(data => {
//         document.body.innerHTML = data.id;
//       });
//     })
//     .catch(error => {
//       // Handle errors by appending the error message to the DOM
//       document.body.innerHTML = error.message;
//     });
// }
// function submitData(name, email) {
//   const formData = {
//     name: name,
//     email: email,
//   };

//   const config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   return fetch("http://localhost:3000/users", config)
//     .then((response) => response.json())
//     .then((data) => {
//       // Append the new ID to the DOM
//       document.body.innerHTML = data.id;
//     })
//     .catch((error) => {
//       // Append the error message to the DOM on failure
//       document.body.innerHTML = error.message;
//     });
// }
// index.js

function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    })
    .then((data) => {
      // Append the new id to the DOM
      const userId = data.id;
      document.body.innerHTML += userId;
    })
    .catch((error) => {
      // Append the error message to the DOM
      document.body.innerHTML += error.message;
    });
}

// Export the submitData function for testing
module.exports = submitData;
