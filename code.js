$(document).ready(function() {
            $("button#addStudent").click(addStudent);
            $("button#sortName").click(sortNameButton);
            $("button#sortGrade").click(sortGradeButton);
            drawTable();
        });

    let studentArray = [];

    function drawTable()
    {
        let theTable = $("tbody");

        theTable.empty();

        const start = 0;
        const stop = studentArray.length;
        for(let i = start; i < stop; i++)
        {
            let anItem = studentArray[i];

            let tableRow = $("<tr>");

            theTable.append(tableRow);

            let nameCell = $("<td>");
            tableRow.append(nameCell);
            nameCell.text(anItem.name);

            let gradeCell = $("<td>");
            tableRow.append(gradeCell);
            gradeCell.text(anItem.percent);
        }
    }

    function addStudent(event)
    {
        event.preventDefault();

        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let earnedPoints = $("#pointsEarned").val();
        let possiblePoints = $("#pointsPossible").val();

        let student = {};
            student.first = firstName;
            student.last = lastName;
            student.name = lastName + ", " + firstName;
            student.earned = earnedPoints;
            student.possible = possiblePoints;
            student.percent = Math.round(student.earned / student.possible * 100);

        studentArray.push(student);

        drawTable();
    }

    function sortByName(a, b)
    {
        if (a.name < b.name)
            return -1;
        else if (a.name > b.name)
            return 1;
        else
            return 0;
    }

    function sortByGrade(a, b) {
        if (a.percent < b.percent)
            return -1;
        else if (a.percent > b.percent)
            return 1;
        else
            return 0;

    }

    function sortNameButton()
    {
        studentArray.sort(sortByName);
        drawTable();
    }

    function sortGradeButton()
    {
        studentArray.sort(sortByGrade);
        drawTable();
    }


    //     function submitGrade(event) {
    //         event.preventDefault();
    //
    //         let firstName = $("#firstName").val();
    //         let lastName = $("#lastName").val();
    //         let earnedPoints = $("#pointsEarned").val();
    //         let possiblePoints = $("#pointsPossible").val();
    //
    //         let student = {};
    //         student.first = firstName;
    //         student.last = lastName;
    //         student.earned = earnedPoints;
    //         student.possible = possiblePoints;
    //         student.percent = Math.round(student.earned / student.possible * 100);
    //
    //         let letterGrade = "";
    //
    //         if (student.percent <= 100 && student.percent >= 90) {
    //             letterGrade = "A";
    //         }
    //         else if (student.percent < 90 && student.percent >= 80) {
    //             letterGrade = "B";
    //         }
    //         else if (student.percent < 80 && student.percent >= 70) {
    //             letterGrade = "C";
    //         }
    //         else if (student.percent < 70 && student.percent >= 60) {
    //             letterGrade = "D";
    //         }
    //         else if (student.percent < 60 && student.percent >= 0) {
    //             letterGrade = "F";
    //         }
    //         else {
    //             (alert("Please input valid number!"));
    //             return;
    //         }
    //
    //
    //         $("p#output").append(`${student.first} ${student.last} ${student.percent}`);
    //         $("p#letterGrade").text(`Your grade is a(n) ${letterGrade}`);
    //     }
    //