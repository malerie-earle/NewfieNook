<h1>Newfie Nook</h1>
(Mock E-Commerce Website)<br />
Website to order your favorite Newfoundland products right to your door!<br />
[Netlify Status](https://api.netlify.com/api/v1/badges/809087d0-52b1-462a-ad02-4ae65c773aee/deploy-status)](https://app.netlify.com/sites/newfie-nook/deploys)
<br />
Group Project:<br />
Malerie Earle - (Home Page, Nav, Banner, Categories, Product List, Product Filter/Sorting)<br />
Ryan Guinchard - (Shopping Cart, Add to Cart, Shopping Cart Context, Tests for 3 components)<br />
Justin Whelan - (Shopping Cart, Checkout, Checkout Form, Checkout Page, Set Quantities, Go to Checkout)<br />
Christopher Cormier - (Product Details)<br />
<br />
Professor Remarks:<br />
"This is a very good effort. Your design overall is quite impressive. A very good project. 10/10" - Noman Atique
<br />
<br />
Assignment Instructions:<br />
<br />
  Project Requirements:<br />
  <ol>
    <li>
      Have a Figma design done up for your project following the design principles that Levin taught you in UI/UX. (Generally speaking – a reasonable user experience, with some thought given to the aesthetics of the page)
    </li>
    <li>
      Implement the project in React
    </li>
    <li>
      Use proper Semantic HTML tags where applicable
    </li>
    <li>
      Comment your code for clear representation of its purpose
    </li>
    <li>
      CSS and React code that approximates the design in the Figma mockup.
    </li>
     <li>
      Must use:
        <ul>
        <li>
         a.	React Router (A minimum of 4 pages/components)
        </li>
        <li>
         b. Units test for minimum of 3 components
        </li>
        <li>
         c. Either use a free API for testing (like reqres.in, api.github.com/users etc.) OR set up your own Json server and try to show basic CRUD operations. (as we did in our class codes).
        </li>
        <li>
         d.	Create a custom hook for fetching data from Json server or any API endpoint.
       </li>
        </ul>
    </li>
    <li>
      Upload the finished project to GitHub
    </li>
  </ol>
  
  The following should serve as a reference for minimum requirements:

  For this project, we're going to make a simple e-commerce website with features like product listing, product details, shopping cart, and checkout. Also, implement a fake API or use a mock server to simulate data interactions. Moreover, write tests to ensure the proper functioning of the shopping cart, product list, and product details components.
  The design can follow inspiration from any ecommerce app/website of your choosing as many of them follow the same philosophies (you may find inspiration looking at amazon, eBay, Alibaba etc.). The canonical version of this app has at least four screens/pages/components, described below:

  <ol>
    <li>
      ProductList.jsx
      - This component will display a list of products after getting it from the mock API or Json Server (your choice).
    </li>
    <li>
      ProductDetails.jsx
      -	This component will display the details of a selected product again after getting it from mock API.
    </li>
    <li>
      ShoppingCart.jsx
      - This component will display the items added to the shopping cart by getting it from the context file “ShoppingCartContext”.
    </li>
    <li>
      Checkout.jsx
      - This component will handle the checkout process by using the context file.
    </li>
  </ol>

  The following are the supportive files required to make it work properly: <br />
    a.	api.js or JSON server<br />
    b.	ShoppingCartContext<br />
      	- Create a context to manage the shopping cart state and actions. This might include returning of “cartItems, addToCart(), and removeFromCart()”.<br />
    c.  Have a __test__ folder somewhere in your submission that has at least 3 unit tests for any of the given components.<br />

  Submission: <br />
    Submit only the github link to your project, with following two extra objects:<br />
      a.	Video: include a “ONE MINUTE” video, just showing the demo run of your project – no need show or explain the code. (I will do it from github 😊)<br />
      b.	For this group project, a brief outline of the contributions made by each group member. Don’t include micro information, just a brief representation of everyone’s effort. <br />
  <br />
  (https://github.com/RyanGuinchard/Semester2-Final-Sprint/assets/141525464/d31d11f3-00d5-4113-a37d-6dfb79f041b9)
  
