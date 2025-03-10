requirements: 
The requirements listed here are absolute minimums. Ensure that your application meets these requirements before attempting to further expand your features.
Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.
Declare variables properly using let and const where appropriate.
Use operators to perform calculations on variables and literals.
Use strings, numbers, and Boolean values cached within variables.
Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
Utilize at least two different types of loops.
Utilize at least one loop control keyword such as break or continue.
Create and/or manipulate arrays and objects.
Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
Use functions to handle repeated tasks.
Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
Commit frequently to the git repository.
Include a README file that contains a description of your application.

Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}


My steps:
1. get distingtive IDs for students, and gather all data and assignments for them
2. process due date, average scores, total points, the average score
3. push everything to result []
4. try catch errors