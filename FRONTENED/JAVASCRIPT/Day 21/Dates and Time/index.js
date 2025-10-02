

    function findDay(){
        const dateValue = document.getElementById("dateInput").value;
        const date = new Date(dateValue);

        const days = ["Sunday " , "Monday" , " Tuesday" , "Wednessday" , "Thursday" , "Friday" , "Saturday" ];
        const dayName = days[date.getDay()];

        document.getElementById("output").innerText = "The Day is : " + dayName;

    }