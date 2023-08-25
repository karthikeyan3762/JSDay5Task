let resume = `{
    "name": "Karthikeyan M",
    "title": "Software Developer",
    "contact": {
      "email": "karthikeya3762@gmail.com",
      "phone": "9345064663",
      "location": "Madurai"
    },
    
    "skills": ["HTML", "CSS", "JavaScript"],
    "experience": 
      {
        "position": "Officer",
        "company": "Royal Sundaram General insurance",
        "startDate": " 18-Sep-2020",
        "endDate":  " 26-Dec-2022",
        "description": "Handling VIR approval process  handling calls received from various regions across India through a landline system, ensuring professional and responsible responses."
      },
      
    
    "education": 
      {
        "degree": "Bachelor of Engineering in Mechanical Engineering",
        "graduationYear": "2019"
        
        
      }
    
  }`;


  let jsonObj = JSON.parse(resume);


  let array = Object.keys(jsonObj);
  for (let key of array) {
    console.log(key,jsonObj[key]);
  }
  

