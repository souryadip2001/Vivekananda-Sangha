function getDOB() {
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }  

    const dob = new Date(dobInput);
    const cd = new Date(currentDateInput);

    let d1=dob.getDate();
    let m1=dob.getMonth()+1;
    let y1=dob.getFullYear();

    let d2=cd.getDate();
    let m2=cd.getMonth()+1;
    let y2=cd.getFullYear();

    let d3,m3,y3;

        y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1;
    }
    else
    {
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1)
    {
        d3=d2-d1;
    }
    else
    {
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;
    }
    if(m3<0)
    {
        m3=11;
        y3--;
    }

    function getDaysInMonth(year,month)
    {
        return new Date(year,month,0).getDate();
    }
 
    document.getElementById('currentAge').textContent = `বয়স - ${y3} বছর ${m3} মাস ${d3} দিন`;
    var age=y3;

      if(age<5)
       document.getElementById('currentAge2').textContent = `বিভাগ - শিশু`;
           
		   else if(age>=5 && age<=7)
            document.getElementById('currentAge2').textContent = `বিভাগ - ক`;
           
            else if(age>7 && age<=9)
           document.getElementById('currentAge2').textContent = `বিভাগ - খ`;
           
            else if(age>9 && age<=12)
            document.getElementById('currentAge2').textContent = `বিভাগ - গ`;
           
            else if(age>12 && age<=15)
            document.getElementById('currentAge2').textContent = `বিভাগ - ঘ`;
           
            else
            document.getElementById('currentAge2').textContent = `অনুপযোগী`;
}
