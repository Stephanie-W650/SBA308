const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// https://plainenglish.io/blog/how-to-get-distinct-values-from-an-array-of-objects-in-javascript

const uniqueStudent = [...new Set(LearnerSubmissions.map((item) => item.learner_id))]
console.log(uniqueStudent) // [ 125, 132 ]

let allStudents = [];
for (let i = 0; i < uniqueStudent.length; i++) {
  const learnerID = uniqueStudent[i]
  console.log(learnerID)

  let studentProjects = []

  for (let j = 0; j < LearnerSubmissions.length; j++) {

    if (LearnerSubmissions[j].learner_id === learnerID) {
      studentProjects.push(LearnerSubmissions[j])
    }
  }


  console.log(studentProjects)

  console.log("studentProjects")
  //allStudents = [...studentProjects] //does not work
  //allStudents = [studentProjects[1], studentProjects[2]];
  //allStudents.push(studentProjects)
  let students = { learner_id: learnerID, projects: studentProjects, scores: {} }
  allStudents.push(students)

}

//let allStudents = {};
//allStudents = [...studentProjects]
console.log(allStudents)

//----------------------------------------
//https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/
//https://stackoverflow.com/questions/8085004/iterate-through-nested-javascript-objects

function calculate(allStudents, AssignmentGroup) {
  for (let i = 0; i < allStudents.length; i++) {
    let student = allStudents[i]
    let totalScores = 0;
    let totalPoints = 0;
    for (let j = 0; j < student.projects.length; j++) {
      let project = student.projects[j];

      let assignment;
      //let totalScores = 0;
      //let totalAssignment = 0; 
      //let totalPoints = 0;
      for (let k = 0; k < AssignmentGroup.assignments.length; k++) {
        assignment = AssignmentGroup.assignments[k];
        //continue;
        //break;
        if (assignment.id === project.assignment_id) {
          //let percentage = (project.submission.score / assignment.points_possible)
          // student.scores{0}


          //https://www.freecodecamp.org/news/javascript-date-comparison-how-to-compare-dates-in-js/
          //https://www.geeksforgeeks.org/compare-two-dates-using-javascript/
          const dueDate = new Date(assignment.due_at)
          const submittedDate = new Date(project.submission.submitted_at)//reference error when outside of function
          //https://stackoverflow.com/questions/7479520/javascript-cannot-set-property-of-undefined
          //terminal:student.scores[project.assignment_id] = percentage;
          //TypeError: Cannot set properties of undefined (setting '1')

          //totalPoints += assignment.points_possible;

          let isLate = true;
          let finalScore = project.submission.score;

          if (submittedDate > dueDate) {

            isLate = true;
            finalScore = finalScore * 0.9

          } else {
            isLate = false;

          }
          // student.scores= {}
          student.scores[project.assignment_id] = finalScore / assignment.points_possible;

          totalScores += finalScore
          totalPoints += assignment.points_possible;
          console.log(isLate)
          break;

        }
      }
    }
    student.average = totalScores / totalPoints;
     

        }
      return allStudents;
      //console.log(allStudents)//does not work here
    }

    allStudents = calculate(allStudents, AssignmentGroup);
    // console.log(allStudents)

    // ----------------------------------------------
    function getLearnerData(course, ag, submissions) {
      const result = [];

      for (let i = 0; i < allStudents.length; i++) {
        let aStudent = allStudents[i]
        let finalStudent = {
          id: aStudent.learner_id,
          avg: aStudent.average
        }
        for (let assignmentId in aStudent.scores) {
          finalStudent[assignmentId] = aStudent.scores[assignmentId]
        }
        result.push(finalStudent)
      } return result;
    }

    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

    console.log(result);

    try {
      
    if (result.length == 0) {
     throw "Error"
    }
      
    } catch (err) {
      console.log(err);
    } finally {
      console.log(result.length );
    }

