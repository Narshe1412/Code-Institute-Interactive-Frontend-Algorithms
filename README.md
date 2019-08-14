# Algorithm Benchmarks

[![Build Status](https://travis-ci.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms.svg?branch=master)](https://travis-ci.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Narshe1412_Code-Institute-Interactive-Frontend-Algorithms&metric=alert_status)](https://sonarcloud.io/dashboard?id=Narshe1412_Code-Institute-Interactive-Frontend-Algorithms) [![Project Version](https://img.shields.io/github/package-json/v/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms?color=gree)](https://github.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms)
[![License](https://img.shields.io/github/license/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms?color=g)](https://github.com/Narshe1412/Code-Institute-Interactive-Frontend-Algorithms/blob/master/LICENSE)

As a programmer you need to always leverage between several possible different solutions the one that would be most efficient. One common problem is the sorting, inserting or accessing data. To solve this problem, along programming history, several algorithms have been created. This project attempts to help a fellow programmer to choose which algorithm shall be used by providing a benchmarking operationg and plotting the results in a variety of graphs.

## UX

The intended user of this website is a programmer of any level who wants to pick an algorithm for its desired implementation. It will primarily focus in low complexity algorithms like the ones one would study in Computer Science undergraduate courses.

A base benchmark will be provided but the user would be able to generate them based on personalized data provided. A randomized dataset can also be generated on demand, providing the user with different options in terms of size and data type, as well as option to generate best-case and worst-case scenarios.

On the first iteration only sorting algorithms will be provided, leaving the project open for extension for other types of algorithms.

It is also expected that the website will be desktop-first, as the main audience of this project will primarily be researching this while working on a project on the side, and it's unreasonable to think this will be done on a mobile. It will be however be designed with a responsive approach for those who decide to use a smaller screen size while using this website.

### User Stories

- As a user, I want to be able to see different tables of algorithm efficiency, so I can pick the best suited to my project.
- As a user, I want to be able to run different benchmarks for predefined algorithms, so I can be certain that the results adjust to my specific use case.

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
- Option to be able to use my very own data sets or algorithms.

## Technologies Used

### Libraries

- This project was scaffolded by [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2 which installs the following technologies (among others):
  - [rxjs](https://github.com/ReactiveX/rxjs): Introduces the concept of reactive programming and observables with the ReactiveX library.
  - [Typescript](https://www.npmjs.com/package/typescript): Adds typing and additional constructs not present on the JavaScript language but common to other languages to increase resilience to your code.
  - [Jasmine](https://jasmine.github.io/) and [Karma](https://www.npmjs.com/package/karma) for testing
  - The angular cli tooling itself which provides compilation, bundling and minification of the JavaScript code, as well as support to older browsers via Polyfills.
- [Bootstrap 4](https://getbootstrap.com/) was used for styling and providing page structure and responsiveness
- [Highcharts](https://www.highcharts.com/) library for generating graphs and plotting data.
- [Highlight.js](https://highlightjs.org/) library to convert preformatted text into code with syntax highlighting.

### Other tools

- This project has been created using [Visual Studio Code](https://code.visualstudio.com/) IDE in a [Node v.10.13](https://nodejs.org/en/) environment
- Project organization and task management provided by [GitHub and GitHub Projects](https://github.com).
  - All feature branchs within a sprint are squashed and merged into their respective sprint. Each sprint is Squashed and Merged into the master branch. Each Github issue and pull request still retain the history of commits against the branch or feature. Non-sprint branches are deleted after merge.
- Continuous Integration/Development automation provided by [Travis CI](http://travis-ci.com)
- Code quality and analysis provided by [SonarQube](https://www.sonarqube.org/) via its cloud service [SonarCloud](https://sonarcloud.io/)
- [Snyk](https://snyk.io/) is used to analyze vulnerabilities within dependencies.

Click on the badges at the top of this file to check the build status and quality metrics.

## Testing

The services and algoritms implementations have been automated and can be run by following the instructions below. The UI interaction is not automated, please follow the Test Cases described in the appropriate section.

### Running automated unit tests

Run `npm run test` to obtain a report of the tests with the no-watch option enabled.

The command `ng test` is also available just to execute the unit tests via [Karma](https://karma-runner.github.io) with the watch option enabled, useful for development purposes.

A Code Coverage report is also available in [SonarCloud](https://sonarcloud.io/component_measures?id=Narshe1412_Code-Institute-Interactive-Frontend-Algorithms&metric=coverage&view=list)

### Manual Test Plan

1. **Running Benchmarks**:
   1. Go to the "Benchmarks" page
   2. Click on the "Run Benchmark" button below the graph
   3. Verify a spinning icon appears and the previous chart gets unloaded
   4. Verify that after a few seconds it will start populating data points
   5. Verify that when the spinning icon stops, all data points have been drawn and made a line per algorithm out of them
2. **Run Benchmark button**:
   1. Go to the "Benchmarks" page
   2. Try to click on the "Run Benchmark" button on the navigation bar.
   3. Verify this button is not available on the Benchmarks page (greyed out).
   4. Nagivate to "Setup" or "Resources"
   5. Verify than clicking the button the steps from Test 1 execute
3. **Resetting the chart**:
   1. Go to the "Benchmarks" page
   2. Verify that clicking the "Reset Chart" button resets the chart
   3. Click on "Run Benchmark"
   4. Verify that the "Reset Chart" button is not available while the simulation is executing.
4. **Benchmark configuration**:
   1. **List of Algorithms**:
      1. Go to "Setup" page
      2. Modify the list of algorithms
      3. Click on Run Benchmark
      4. Verify that only the marked algorithms are running by checking the chart legend and results
   2. **Collection Size**:
      1. Go to "Setup" page
      2. Add or delete items from the collection list
      3. Click on Run Benchmark
      4. Verify that there's a data point per algorithm and item in the collection list drawn on the chart
   3. **List of Repetitions**:
      1. Go to "Setup" page
      2. Modify the number of repetitions to a bigger number
      3. Click on Run Benchmark
      4. Verify that the simulation takes longer and the numbers are more accurate than previous runs.
   4. **Sad path testing**:
      1. Go to "Setup" page
      2. Delete all items on the simulation list
      3. Click on Run Benchmark
      4. Verify that no results are displayed.
      5. Refresh the page
      6. Uncheck all algorithms from the list
      7. Click on Run Benchmark
      8. Verify no results are displayed
      9. Refresh the page
      10. Verify that no input below 1 can be entered in the Repetitions field
5. **Responsiveness**:
   1. Pages Resources and Home are static and fully responsive but no test case is necessary
   2. Nagivate to any of the routes "Home", "Benchmarks", "Setup", "Resources"
   3. Verify by using different devices or your browser sizing feature that all pages are responsive and redimension correctly for different sizes

### Browser Compatibility

The application should be compatible with the latest versions in all browsers thanks to the use of polyfills. Due to memory limitations, the Benchmark runner may block the UI in Internet Explorer or mobile browsers.

| Vendor            | Version       | Compatibility status                                                     |
| ----------------- | ------------- | ------------------------------------------------------------------------ |
| Google Chrome     | 76.0.3809.100 | Full                                                                     |
| Mozilla Firefox   | 68.0          | Full                                                                     |
| Microsoft Edge    | 42.17134.1.0  | Full                                                                     |
| Opera             | 52.0          | Full                                                                     |
| Internet Explorer | 11.885.17134  | Not Recommended: Blocks the UI while running big simulations. Very slow. |

## Deployment

This project was created using the Angular CLI which implements webpack under the hood to bundle all the files and create several JS files that contain the whole project structure.

I used TravisCI to automate the deployment process. On each push and pull request, Travis will create a container where it will do a fresh deployment of my app, run all the tests, create a production build and deploy it to the gh-pages branch. This is all configured on the file `.travis.yml`.

As no environment variables are needed there's no need to host this project in a SaaS provider like Heroku.

### Local Deployment

In order to run your project locally, assuming you have the latest version of Node or NPM just do:

`npm install`

`npm start`

This will run the project in **development mode**. To get a production build after `npm install` run:

`npm run build`

Further configuration can be done in terms of building and deploying. See the [Angular Documentation](https://angular.io/) for more details.

## Credits

### Content

- The algorithm implementations in Javascript was obtained from the following articles:
  - [JS: Interview Questions by thatJSDude](https://khan4019.github.io/front-end-Interview-Questions/sort.html)
  - Sorting Algorithms with Javascript by Kinyanjui Wangonya
    - <https://dev.to/wangonya/sorting-algorithms-with-javascript-part-1-4aca>
    - <https://dev.to/wangonya/sorting-algorithms-with-javascript-part-2-3g51>
  - [JavaScript exercises for Shell Sort by W3Resource](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-6.php)
  - [Radix Sort implementation by Lior Elrom (Stackoverflow)](https://stackoverflow.com/a/52236574/5866637)
  - [Fisher-Yates shuffle algorithm posted by CoolAJ86 in Stackoverflow](https://stackoverflow.com/a/2450976/5866637)
- I have also used the following libraries to implement Introsort and Timsort into the application:
  - [Javascript Introsort by Arnohs](https://github.com/arnorhs/js-introsort)
  - [TimSort implementation by LXSMNSYC](https://github.com/LXSMNSYC/TimSort)

### Media

- Home and Favicon Icons made by Good Ware from www.flaticon.com under CC 3.0 BY license

### Acknowledgements

- I received inspiration for this project while assisting some students I tutor through GrindsCentre and the research and resources found in [BigOCheatsheet page](http://bigocheatsheet.com/)
