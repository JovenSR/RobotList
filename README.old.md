# robot_list_assignment #

The task is to develop a single page application using ReactJS with Redux. The application is for an imaginary customer, Robot Inc. 

Robot Inc. would like a dashboard to help their employees view and interact with their fleet of robots.

The dashboard application shall implement the following user stories by interacting with Robot Inc's API:

As an employee of Robot Inc,

1. I would like to to see a scrollable list of all robots in the fleet
1. I would like to be able to easily determine whether each robot in the list is offline vs online based on the 'status' field
1. I would like to be able to enable filter to show only robots with offline and only robots with online status in the list, as an alternative to the default of seeing all robots
1. When I click on any robot in the list, I expect to be be presented with a list of the robot 'attributes', name and value
1. I expect to be able to return to the robot list after I am done viewing the attributes

**BONUS** stories (if you have time):

As an employee of Robot Inc,

1. While in the attributes view, I would like to be able to add a new attribute
1. While in the attributes view, I would like to be able to edit an added attribute by clicking it. Note, the original attributes 'customerId' and 'robotId' can not be edited.

All robot information is stored in a database that can be parsed fromthe Robot Inc. API's JSON output (see bottom of this document)

## How ##

1. Fork this repository.
    - All implementation should go into your private fork.
1. Submit the completed deliverables by a Pull Request against the original repository.

## Deliverables ##

A React JS + Redux application implementing the above stories, executable by running the npm commands listed below from the root of the repository and connecting to the node server from a web browser.
```
npm install
npm start
```

## Robot Inc. Information API ##

To get the entire list of robots (JSON format), make an HTTP GET request to the following address:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots

To get information on a single robot, make an HTTP GET request to the following address, replacing `<name>` with the name of the robot:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/<name>

### Examples ###

Getting the list of robots and render nicely in the terminal:

        curl https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots | json_pp

Getting the information for the robot named *determined_booth*:

        curl https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/determined_booth | json_pp

## Robot Inc. Editing API ##

The "attributes" field for each robot can be modified via an HTTP PUT request. The request can be made to the following address, replacing `<name>` with the name of the robot:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/<name>

NOTE: The original attributes 'robotId' and 'customerId' can not be modified.

#### Examples ####

Modify the attribute "test" to have the value "onetwo" for the robot named *determined_booth*:

        curl -H 'Content-Type: application/json' -X PUT -d '{ "attributes" : { "test" : "onetwo" } }' https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/determined_booth | json_pp
