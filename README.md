# robot_list_assignment #

The task is to develop a ReactJS interface to:

1. Display a scrollable list of robots
1. Select and change the attribute a robot
1. Filter robots by offline/online status

All robot information is stored in a database that can be accessed via Amazon's API Gateway using JSON format.

## Getting Started ##

1. Fork this repository.
    - All implementation should go into your private fork.
1. Run the simple example:
    - TODO

## Deliverables ##

TODO

## Getting Robot Information ##

To get the entire list of robots (JSON format), make an HTTP GET request to the following address:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots

To get information on a single robot, make an HTTP GET request to the following address, replacing `<name>` with the name of the robot:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/<name>

### Examples ###

Getting the list of robots and render nicely in the terminal:

        curl https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots | json_pp

Getting the information for the robot named *determined_booth*:

        curl https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/determined_booth | json_pp

## Modifying Robot Information ##

The "attributes" field for each robot can be modified via an HTTP PUT request. The request can be made to the following address, replacing `<name>` with the name of the robot:

        https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/<name>


#### Examples ####

Modify the attribute "test" to have the value "onetwo" for the robot named *determined_booth*:

        curl -H 'Content-Type: application/json' -X PUT -d '{ "attributes" : { "test" : "onetwo" } }' https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/determined_booth | json_pp
