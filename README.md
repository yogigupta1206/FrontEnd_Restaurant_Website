# FrontEnd_BootStrap

## Installing Node
To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.

Note: On Windows machines, you may need to configure your PATH environmental variable in case you forgot to turn on the add to PATH during the installation steps.

## Verifying the Node Installation:
Open a terminal window on your machine. If you are using a Windows machine, open a cmd window or PowerShell window with admin privileges.
To ensure that your NodeJS setup is working correctly, type the following at the command prompt to check for the version of Node and NPM

```sh
node -v
npm -v
```

## Initializing package.json
At the command prompt in your git-test folder, type

```sh
npm init
```

Follow along the prompts and answer the questions as follows: accept the default values for most of the entries, except set the entry point to index.html
This should create a package.json file in your git-test folder.


## Installing an NPM Module

Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files. To do this, type the following at the prompt:

```sh
npm install lite-server --save-dev
```

## Downloading Bootstrap
You will use npm to fetch the Bootstrap files for use within your project. Thereafter you need to install JQuery and Popper.js as shown below since Bootstrap 4 depends on these two. At the prompt, type the following to fetch Bootstrap files to your project folder:

```sh
npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save
```

## Using Icon Fonts and Other CSS classes
One of the most popular icon font toolkit is Font Awesome. Go to its website http://fontawesome.io/ to check out more details about this icon font. You can get Font Awesome using npm by typing the following at the prompt:

```sh
npm install font-awesome@4.7.0 --save
````

Another module that we install is Bootstrap Social that enables the addition of Social buttons to our site. You can find more information about it at https://lipis.github.io/bootstrap-social/. To install it using npm, type the following at the prompt:

```sh
npm install bootstrap-social@5.1.1 --save
```

# Next, start the development server by typing the following at the prompt:

```sh
npm start
```
