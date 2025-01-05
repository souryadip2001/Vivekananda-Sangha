function getDOB() {

    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    var age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

  
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
     if(age<5)
      document.getElementById('currentAge').textContent = `Age- ${age} years (Bivag - Child)`;
           
		   else if(age>=5 && age<=7)
           document.getElementById('currentAge').textContent = `Age- ${age} years (Bivag - A)`;
           
           else if(age>7 && age<=9)
           document.getElementById('currentAge').textContent = `Age- ${age} years (Bivag - B)`;
           
           else if(age>9 && age<=12)
           document.getElementById('currentAge').textContent = `Age- ${age} years (Bivag - C)`;
           
           else if(age>12 && age<=15)
           document.getElementById('currentAge').textContent = `Age- ${age} years (Bivag - D)`;
           
           else
           document.getElementById('currentAge').textContent = `Age- ${age} years (Not Eligible)`;
}