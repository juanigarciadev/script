# DevBoost

## Project description:

DevBoost was born from the growth of the world of programming, seeking to be a competent online learning academy both in level and in prices. The project has a functional purchasing system with stock subtraction in real time.

<p align="center">
══════════════════════════════════════════════════════
</p>

## Fast Repository Cloning:

To quickly clone the repository, use your preferred console (Powershell, Git Bash, etc.) to locate the folder where you want the entire project to be cloned. Once located, copy and paste the following command into the console and press ENTER.

```
git clone https://github.com/juanigarciadev/DevBoost
```

<p align="center">
══════════════════════════════════════════════════════
</p>

## Dependencies used in the project:

- [Material UI](https://mui.com/) (used for quick application of components such as a dropdown for the FAQS section or for form fields)

- [Firebase](https://firebase.google.com/) (used for e-commerce database)

- [Formik](https://formik.org/) (used for creating forms)

- [Yup](https://www.npmjs.com/package/yup) (used for form validation)

- [React Icons](https://react-icons.github.io/react-icons) (used to add the icons needed in the project)

- [React Countup](https://www.npmjs.com/package/react-countup) (used to count users, courses and completion percentage)

- [Toastify](https://apvarun.github.io/toastify-js/) (used to notify the user when something was added to the cart)

- [SASS](https://sass-lang.com/) (used to style with CSS in a more comfortable and sectored way, also allowing the nesting of styles)

### Installing dependencies and starting the project:

To install these dependencies and for the project to work correctly, place in your preferred console, located in the root folder of the project:
```
npm install
```

Once all dependencies are installed, copy and paste the following command into your preferred console, located in the root folder of the project:

```
npm start
```

<p align="center">
══════════════════════════════════════════════════════
</p>

### To use this project with your own products, you need environment variables. To do this, you must create the .env file in the root path of the project and assign the following to it:

- REACT_APP_APIKEY=
- REACT_APP_AUTHDOMAIN=
- REACT_APP_PROJECTID=
- REACT_APP_STORAGEBUCKET=
- REACT_APP_MESSAGINGSENDERID=
- REACT_APP_APPID=

<p align="center">
══════════════════════════════════════════════════════
</p>

### Syntax for correct product creation:

The products must contain the following properties by creating them in Firebase within a collection called "products". The ID of the document (product) within the collection has to be automatically generated by Firebase.

- title: (string, product name, capital letters supported).
- category: (string, frontend or backend, capitalization is not supported).
- img: (string, url of the product photo, preferably uploaded to [Cloudinary](https://cloudinary.com/)).
- description: (string, official product description).
- shortDescription: (string, same description as the first but shortened for viewing in the cart).
- contains: (array, minimum and maximum 5 themes or product characteristics).
- new: (boolean, in true a "New" label would appear on the product card, in false nothing would appear).
- price: (number, product price)
- stock: (number, available stock of the product)
  
<p align="center">
 <img width="50px" src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png" alt="BEYOND IMAGINATION Logo Mini"/>
</p>
