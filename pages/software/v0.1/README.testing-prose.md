1. Query parameters
    1. If a user supplies no query parameters,
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If a user supplies query parameters but not for all 4 principles of FAIR,
        1. the app should show a banner prompting the user to supply all 4 principles, or no principles at all
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If a user supplies query parameters for all 4 principles of FAIR but one value has too many elements,
        1. the app should show a banner telling the user how many elements are expected for the errorneous principle
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If a user supplies query parameters for all 4 principles of FAIR but one value has an out of range value (there aren't that many answers on the associated question),
        1. the app should show a banner telling the user which element on which principle is out of range
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If a user supplies query parameters for all 4 principles of FAIR but one value has an unexpected character,
        1. the app should show a banner telling the user which element on which principle has an unexpected character
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If multiple errors TODO
        1. the app should show a banner with all the error messages combined
        1. the app should render with the first answer enabled on every question
        1. the app should render with 0 progress on any of the FAIR principles
    1. If a user supplies valid values for the FAIR query parameters but also supplies additional parameters, 
        1. TODO
    1. If a user supplies valid values for the FAIR query parameters but with repeated parameters, 
        1. TODO
    1. If a user supplies a valid set of query parameter values,
        1. the app should render with the correct answers selected for each question
        1. the app should render the correct progress values for each principle
        1. the overall compliance state should have the correct values
        1. the app should remove the query parameters from the URL
1. Version handling
    1. If there is a newer version of the topic,
        1. the app should show a banner telling the user there is a newer version available
1. Clickables
    1. If the user clicks on the _Go to Badge_ button
        1. the app should scroll to the Badges section
        1. the app should disable the _Go to Badge_ button
    1. If the user clicks on the Home button,
        1. the app should navigate to the home page
    1. If the user clicks on the GitHub button,
        1. the app should navigate to the "new issue" page of the repository on GitHub
    1. If the user clicks on the "data" link,
        1. the app should navigate to the latest version of the data app
    1. If a user clicks on a non-zero-points answer to a question,
        1. the progress percentage for the corresponding principle should go up
        1. the progress percentage for the corresponding principle should go up by the correct amount
        1. the overall progress percentage should go up
        1. the overall progress percentage should go up by the correct amount
        1. the answer that was clicked should get the 'selected' state
        1. all other answers to that question should not have the 'selected' state
    1. If a user has 100% on all principles, and then clicks on a zero-points answer to a question, 
        1. the progress percentage for the corresponding principle should go down
        1. the progress percentage for the corresponding principle should go down by the correct amount
        1. the overall progress percentage should go down
        1. the overall progress percentage should go down by the correct amount
        1. the answer that was clicked should get the 'selected' state
        1. all other answers to that question should not have the 'selected' state
    1. If a user clicks on the "Copy Markdown snippet" button,
        1. TODO
    1. If a user clicks on the "Copy ReStructured Text snippet" button,
        1. TODO
    1. If a user clicks on the "Copy HTML snippet" button,
        1. TODO
    1. If a user clicks on the eScience Center logo, 
        1. the app should navigate to https://esciencecenter.nl
    1. If a user clicks on the ARDC logo, 
        1. the app should navigate to https://ardc.edu.au
1. State
    1. If one element of the compliance state is incremented from code,
        1. the progress percentage for the corresponding principle should go up
        1. the progress percentage for the corresponding principle should go up by the correct amount
        1. the overall progress percentage should go up
        1. the overall progress percentage should go up by the correct amount
        1. the newly selected answer on the incremented question should get the 'selected' state
        1. all other answers to that question should not have the 'selected' state
    1. If one element of the compliance state is decremented from code,
        1. the progress percentage for the corresponding principle should go down
        1. the progress percentage for the corresponding principle should go down by the correct amount
        1. the overall progress percentage should go down
        1. the overall progress percentage should go down by the correct amount
        1. the newly selected answer on the decremented question should get the 'selected' state
        1. all other answers to that question should not have the 'selected' state
