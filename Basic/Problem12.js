{
  /*  
        Problem => Write a JavaScript Program to convert days to years, weeks and days.
        
        example : 1329 days = 3 years 36 weeks 2 days
      
        Output sould be like :
        Year : <YOUR ANSWER>
        Week : <YOUR ANSWER>
        Days : <YOUR ANSWER>
  
        Hint => 1 year = 365 days
        Hint => 1 week = 7 days

        exersice => Do google how to convert days to years, weeks and days.
      
                  */
}

function Count(Totaldays) {
  let year, week, days;
  year = Totaldays / 365;
  week = (Totaldays % 365) / 7;
  days = (Totaldays % 365) % 7;
  console.log("Year :", Math.floor(year));
  console.log("Week :", Math.floor(week));
  console.log("Days :", Math.floor(days));
  return year, week, days;
}

/*let Totaldays = 1392;*/
Count(373);

/*const years = Totaldays / 365;
  const weeks = (Totaldays - 365 * years) / 7;
  const Days = Totaldays - 365 * years - 7 * weeks;
  console.log("Year :", years);
  console.log("Week :", weeks);
  console.log("Days :", Days);

  return { years, weeks, Days };

}
Count(1329)

*/
