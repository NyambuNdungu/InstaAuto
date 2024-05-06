Feature: Login to app

Scenario: user logs in to the application
Given use has valid credentials and is on apps homepage
When user enters email and password and clicks Login
Then user should be redirected to homepage