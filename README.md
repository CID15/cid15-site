# CID 15 Site

A Gatsby based site deploying to S3.

## Developing

`gatsby develop`

## Deploying

`npm run deploy`

The deploy script deploys to S3.  Before being able to run deploy you must have the 
following environment variables:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

You can define these locally in a `.env` file at the project root.  The `.env` file 
should NOT be added to SCM.
