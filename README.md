# Algorithm Benchmarks

[![Build Status](https://travis-ci.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms.svg?branch=master)](https://travis-ci.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Narshe1412_Code-Institute-Interactive-Frontend-Algorithms&metric=alert_status)](https://sonarcloud.io/dashboard?id=Narshe1412_Code-Institute-Interactive-Frontend-Algorithms)

As a programmer you need to always leverage between several possible different solutions the one that would be most efficient. One common problem is the sorting, inserting or accessing data. To solve this problem, along programming history, several algorithms have been created. This project attempts to help a fellow programmer to choose which algorithm shall be used by providing a benchmarking operationg and plotting the results in a variety of graphs.

## UX

The intended user of this website is a programmer of any level who wants to pick an algorithm for its desired implementation. It will primarily focus in low complexity algorithms like the ones one would study in Computer Science undergraduate courses.

A base benchmark will be provided but the user would be able to generate them based on personalized data provided. A randomized dataset can also be generated on demand, providing the user with different options in terms of size and data type, as well as option to generate best-case and worst-case scenarios.

On the first iteration only sorting algorithms will be provided, leaving the project open for extension for other types of algorithms.

It is also expected that the website will be desktop-first, as the main audience of this project will primarily be researching this while working on a project on the side, and it's unreasonable to think this will be done on a mobile. It will be however be designed with a responsive approach for those who decide to use a smaller screen size while using this website.

### User Stories

- As a user, I want to be able to see different tables of algorithm efficiency, so I can pick the best suited to my project.
- As a user, I want to be able to run different benchmarks for predefined algorithms, so I can be certain that the results adjust to my specific use case.
- As a user, I would like to be able to use my very own data sets or algorithms so I can compare with the predefined ones and have a clearer picture of my options.

### Wireframes

Basic Wireframe Setup for Mobile view and Desktop View
![Desktop first design](docs/img/Desktop.png 'Desktop design')
![Mobile design](docs/img/Mobile.png 'Mobile design')

## Features

### Existing Features

- Benchmark Statistics: Plot the statistics of previous runs in charts so it's easy to compare between different algorithm results.
- Run Algorithms: Allow the user to run different algorithms in their own computer in order to obtain more realistic benchmarks.
- Setup: Allow the user to change the settings of specific portions of the application like colours, the type of graphs, etc...

### Features For Future Revisions of the Project

- Other type of algorithms (accessors, indexing, data structures, etc...)
- Option to run the algorithms out of the browser using the full capabilities of the computer's processors.
- Option to run algorithms in a VM on a cloud provider, to obtain a best-case computer setups.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- This project was scaffolded by [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.
- Project organization and task management provided by [GitHub and GitHub Projects](https://github.com)

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
   1. Go to the "Contact Us" page
   2. Try to submit the empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content

- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media

- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project while assisting some students I tutor through GrindsCentre.

- Algorithm Implementations: https://khan4019.github.io/front-end-Interview-Questions/sort.html
- https://dev.to/wangonya/sorting-algorithms-with-javascript-part-1-4aca
- https://dev.to/wangonya/sorting-algorithms-with-javascript-part-2-3g51
- http://bigocheatsheet.com/
- https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-6.php
- https://github.com/arnorhs/js-introsort
- https://stackoverflow.com/a/52236574/5866637
- https://github.com/LXSMNSYC/TimSort
- https://stackoverflow.com/a/2450976/5866637
