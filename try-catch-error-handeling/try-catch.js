function CheckAge() {
    const ageField = document.getElementById("age");
    const ageText = ageField.value;
    const errorTag = document.getElementById("error");
    try {
        const age = parseInt(ageText);
        if(isNaN(age)) {
            throw new Error("Age is not a number");
        }
        else if(age < 18) {
            throw new Error("Age is less than 18");
        }
        else {
            errorTag.innerHTML = "Age is valid";
        }
        errorTag.innerHTML = " ";
       
    } catch (err) {
        console.log(err);
        errorTag.innerHTML = "something went wrong";
    }
    finally {
        console.log("finally block");
    }
    console.log(11111);
}