Newfie Nook 
(Mock E-Commerce Website)
Website to order your favorite Newfoundland products right to your door!

Group Project:
Malerie Earle (Home Page, Nav, Banner, Categories, Product List, Product Filter/Sorting)
Ryan Guinchard (Shopping Cart, Add to Cart, Shopping Cart Context, Tests for 3 components)
Justin Whelan (Shopping Cart, Checkout, Checkout Form, Checkout Page, Set Quantities, Go to Checkout)
Christopher Cormier (Product Details)

Assignment Instructions:

  Project Requirements:
    1.	Have a Figma design done up for your project following the design principles that Levin taught you in UI/UX. (Generally speaking – a reasonable user experience, with some thought given to the aesthetics of the page)
    2.	Implement the project in React
    3.	Use proper Semantic HTML tags where applicable
    4.	Comment your code for clear representation of its purpose
    5.	CSS and React code that approximates the design in the Figma mockup.
    6.	Must use:
      a.	React Router (A minimum of 4 pages/components)
      b.	Units test for minimum of 3 components
      c.	Either use a free API for testing (like reqres.in, api.github.com/users etc.) OR set up your own Json server and try to show basic CRUD operations. (as we did in our class codes).
      d.	Create a custom hook for fetching data from Json server or any API endpoint.
    7.	Upload the finished project to GitHub (https://github.com/RyanGuinchard/Semester2-Final-Sprint/assets/141525464/5b3287f6-ff36-446e-9af0-952a179d8b87)
    
  The following should serve as a reference for minimum requirements:

  For this project, we're going to make a simple e-commerce website with features like product listing, product details, shopping cart, and checkout. Also, implement a fake API or use a mock server to simulate data interactions. Moreover, write tests to ensure the proper functioning of the shopping cart, product list, and product details components.
  The design can follow inspiration from any ecommerce app/website of your choosing as many of them follow the same philosophies (you may find inspiration looking at amazon, eBay, Alibaba etc.). The canonical version of this app has at least four screens/pages/components, described below:
  
    1.	ProductList.jsx
      o	This component will display a list of products after getting it from the mock API or Json Server (your choice)
    2.	ProductDetails.jsx
      o	This component will display the details of a selected product again after getting it from mock API.
    3.	ShoppingCart.jsx
      o	This component will display the items added to the shopping cart by getting it from the context file “ShoppingCartContext”
    4.	Checkout.jsx
      o	This component will handle the checkout process by using the context file.

  The following are the supportive files required to make it work properly:
    A.	api.js or JSON server
    B.	ShoppingCartContext
      a.	Create a context to manage the shopping cart state and actions. This might include returning of “cartItems, addToCart(), and removeFromCart()”.
    C.  Have a __test__ folder somewhere in your submission that has at least 3 unit tests for any of the given components.

  Submission:
    Submit only the github link to your project, with following two extra objects:
      a.	Video: include a “ONE MINUTE” video, just showing the demo run of your project – no need show or explain the code. (I will do it from github 😊)
      b.	For this group project, a brief outline of the contributions made by each group member. Don’t include micro information, just a brief representation of everyone’s effort. 
  
  (https://github.com/RyanGuinchard/Semester2-Final-Sprint/assets/141525464/d31d11f3-00d5-4113-a37d-6dfb79f041b9)
  
