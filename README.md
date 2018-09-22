This Robot app does the following things:
* Displays a list of robots and their statuses taken from an API
* Gives the ability to filter the list of robots based on status (online / offline) and display all robots
* Gives the ability to click on a robot and view robot details

This app is a single page React app.

This app has been written with React without the usage of Redux for the following reasons:
* This is a simple app with only 2 presentation components.
* There is no need for shared state between the two components, because the app can be designed with a unidirectional data flow from the Home component to the Robot component.

Generally speaking, Redux need not be used unless the app is huge with a lot of components which have significant shared application state. See [this article](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) recommended on Redux's webpage for more details.

Additionally, one of the benifits of using React framework is having disentangled, independent components that share information through unidirectional data flow without needing shared state. In most cases, IMHO, shared state can make code harder to read, understand, and debug.