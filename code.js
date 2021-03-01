$(document).ready(function () {
        // add event listener
        $("form#gradebook").submit(submitGrade);

        // add workable function
        function submitGrade(event) {
            event.preventDefault();

            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let earnedPoints = $("#pointsEarned").val();
            let possiblePoints = $("#pointsPossible").val();

            let student = {};
            student.first = firstName;
            student.last = lastName;
            student.earned = earnedPoints;
            student.possible = possiblePoints;
            student.percent = Math.round(student.earned / student.possible * 100);

            let letterGrade = "";

            if (student.percent <= 100 && student.percent >= 90) {
                letterGrade = "A";
            }
            else if (student.percent < 90 && student.percent >= 80) {
                letterGrade = "B";
            }
            else if (student.percent < 80 && student.percent >= 70) {
                letterGrade = "C";
            }
            else if (student.percent < 70 && student.percent >= 60) {
                letterGrade = "D";
            }
            else if (student.percent < 60 && student.percent >= 0) {
                letterGrade = "F";
            }
            else {
                (alert("Please input valid number!"));
                return;
            }


            $("p#output").append(`${student.first} ${student.last} ${student.percent}`);
            $("p#letterGrade").text(`Your grade is a(n) ${letterGrade}`);
        }

    }
);