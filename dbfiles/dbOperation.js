var config = require("./dbConfig");
const sql = require("mssql/msnodesqlv8");

sql.on("error", (err) => {
  console.log(err.message);
});

module.exports.getAdmins = async (userName, passWord) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `select * from admin_ where Username='${userName}' and Pass='${passWord}'`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getTrainees = async (userName, passWord) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `select * from trainee where Username='${userName}' and Pass='${passWord}'`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getInstructors = async (userName, passWord) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool
      .request()
      .query(
        `select * from instructor where Username='${userName}' and Pass='${passWord}'`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getGrade = async (Tr_ID, C_ID, As_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(
      `select  Grade  from submit_assignment as sa
      where  sa.A_ID=${As_ID} and sa.T_ID=${Tr_ID} and sa.C_ID='${C_ID}'`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllCourses = async (Tr_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select distinct C_Name,e.Course_ID from course_ as c, 
    trainee as t, enrolled_in as e where  e.Course_ID=c.Course_ID and e.Trainee_ID=${Tr_ID}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCourseTrainees = async (roundNo, c_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`
    select t.ArName,t.trainee_id from trainee as t , enrolled_in as e , course_round as cr
    where cr.RoundNo=e.RoundNo 
    and cr.Course_ID=e.Course_ID
    and t.trainee_id=e.Trainee_ID
    and cr.RoundNo=${roundNo}
    and cr.Course_ID='${c_ID}'
    `);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getContent = async (C_ID, Tr_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`
    select Content  from course_round as cr ,course_ as c,enrolled_in as e 
    where cr.Course_ID=c.Course_ID and e.Course_ID=c.Course_ID and e.RoundNo=cr.RoundNo and e.Course_ID='${C_ID}' and e.Trainee_ID=${Tr_ID}
    `);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.SubmitAssign = async (T_ID, A_ID, C_ID, link) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(
      `insert into submit_assignment
      values(${T_ID},${A_ID},null,'${link}','${C_ID}');`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createAdmin = async (admin) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`insert into admin_ values
    ('${admin.Username}','${admin.pass}',1)
    `);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllAssign = async (Tr_ID, C_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select distinct A_ID  from course_ as c,course_round as cr, trainee as t, 
      enrolled_in as e,assigment_in_course as a
    where  e.Course_ID=c.Course_ID and  e.RoundNo=a.RoundNo   and a.Course_ID='${C_ID}' and 
    e.Trainee_ID=${Tr_ID}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getYearlyPlans = async () => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(`select * from yearlyplan`);
    // console.log(result.recordset);

    return result;
  } catch (error) {
    console.log(error.message);
  }
}; //
module.exports.createTrainee = async (trainee) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`insert into trainee  values
    ('${trainee.userName}','${trainee.email}','${trainee.phoneNo}','${trainee.pass}',N'${trainee.jobGroup}',N'${trainee.job}',N'${trainee.arabicName}','${trainee.englishName}',1,N'${trainee.gender}')
    `);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createInstructor = async (instructor) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`insert into instructor  values
    ('${instructor.userName}','${instructor.pass}','')
    `);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getFeedbacks = async () => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select F_date,feedback_txt,ArName,C_Name,feedback.T_ID from feedback,trainee,course_,course_round
    where feedback.C_ID=course_.Course_ID and feedback.T_ID=trainee.trainee_id and course_round.RoundNo=feedback.Round_No and
    course_round.Course_ID=course_.Course_ID`);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllCoursesAdmin = async () => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`select * from course_`);
    // console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllInstructorsAdmin = async () => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request().query(`select * from instructor`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//   try {
//     let pool = await sql.connect(config);

//     let result1 = await pool.request()
//       .query(`select RoundNo from  enrolled_in as e
//     where e.Course_ID='${C_ID}' and e.Trainee_ID=${T_ID}`);
//     let RoundNo = result1.recordset[0].RoundNo;
//     let result = await pool.request()
//       .query(`INSERT INTO feedback (F_date, T_ID, feedback_txt,C_ID,Round_No)
//     VALUES ('${datee}', ${T_ID}, '${fbTxt}','${C_ID}',${RoundNo});`);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
module.exports.SubmitFeedback = async (T_ID, C_ID, fbTxt, datee) => {
  try {
    let pool = await sql.connect(config);

    let result1 = await pool.request()
      .query(`select RoundNo from  enrolled_in as e
    where e.Course_ID='${C_ID}' and e.Trainee_ID=${T_ID}`);
    let RoundNo = result1.recordset[0].RoundNo;
    let result = await pool.request()
      .query(`INSERT INTO feedback (F_date, T_ID, feedback_txt,C_ID,Round_No)
    VALUES ('${datee}', ${T_ID}, '${fbTxt}','${C_ID}',${RoundNo});`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetPlanCourses = async (date, id) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select c_name from course_plan as cp,course_ as c,course_round as cr
      where cp.td_id='${id}' and cp.startdate = '${date}'
      and cp.c_id=cr.course_id 
      and cp.roundno=cr.roundno 
      and c.course_id =cr.course_id`);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createNewPlan = async (sy, ey, TD) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `insert into yearlyplan values(${TD},'${sy}-01-01','${ey}-01-01')`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCourseRoundNo = async (c_id) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select max(RoundNo) as maxR from  course_ as c, course_round as cr
      where c.Course_ID='${c_id}' and c.Course_ID=cr.Course_ID`);
    // console.log(result);
    return result.recordset;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createCourseRound = async (c_id, roundNo) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `insert into course_round values('${c_id}',${roundNo},'','','',1,'')`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.deleteCourse = async (courseID) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(`DELETE FROM course_ WHERE Course_ID='${courseID}'`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCourseRounds = async (courseID) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(`SELECT
      roundno from course_round where course_id='${courseID}' and EndDate>CAST(GETDATE() AS DATE)`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCourseRounds2 = async (courseID) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(`SELECT
      roundno from course_round where course_id='${courseID}' and EndDate<CAST(GETDATE() AS DATE)`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.insertCourse = async (Name, ID, Brief) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(`insert into course_ values('${ID}',N'${Name}',N'${Brief}')`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createPlanCourses = async (c_id, roundNo, sy, TD) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `insert into course_plan values('${c_id}',${roundNo},${TD},'${sy}')`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.updateCourseRound = async (
  att,
  attributeName,
  C_ID,
  roundNo
) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `UPDATE course_round
        SET ${attributeName} = N'${att}'
        WHERE Course_ID = '${C_ID}' and RoundNo=${roundNo}`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCertificateData = async (c_ID, t_ID, roundNo) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select td.td_name,t.arname,c.c_name,cr.startdate,cr.enddate
      from trainee as t,course_round as cr,enrolled_in 
      as e,training_department as td,course_ as c,course_plan as cp
      where cr.RoundNo=e.RoundNo 
      and cr.Course_ID=e.Course_ID
      and cr.Course_ID=c.Course_ID
      and t.trainee_id=e.Trainee_ID
      and cr.Course_ID=cp.C_ID
      and cr.RoundNo=cp.RoundNo
      and cp.TD_ID=td.td_id
      and cr.RoundNo=${roundNo}
      and cr.Course_ID='${c_ID}'
      and t.trainee_id=${t_ID}`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getReportData = async (c_ID, t_ID, roundNo) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select td.td_name,td.Phone_No,td.MG_name,t.arname,c.c_name,cr.startdate,cr.enddate
      from trainee as t,course_round as cr,enrolled_in 
      as e,training_department as td,course_ as c,course_plan as cp
      where cr.RoundNo=e.RoundNo 
      and cr.Course_ID=e.Course_ID
      and cr.Course_ID=c.Course_ID
      and t.trainee_id=e.Trainee_ID
      and cr.Course_ID=cp.C_ID
      and cr.RoundNo=cp.RoundNo
      and cp.TD_ID=td.td_id
      and cr.RoundNo=${roundNo}
      and cr.Course_ID='${c_ID}'
      and t.trainee_id=${t_ID}`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.GetCoursesInfo = async (Instructor_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select c_name, startdate, enddate, c.course_id,roundno,cr.instructor_id from course_round as cr,course_ as c
    where c.course_id=cr.course_id and cr.instructor_id=${Instructor_ID}`);
    console.log(result);
    // sql.close();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetTraineesInfo = async (Course_ID, RoundNo) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select t.trainee_id,ArName,PhoneNo,Email from enrolled_in as e ,trainee as t
      where course_id='${Course_ID}' and roundno=${RoundNo} and t.trainee_id=e.Trainee_ID`);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllInstCourses = async (Instructor_ID) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select distinct C_Name,c.Course_ID from course_ as c, course_round as cr
      where c.Course_ID=cr.Course_ID and cr.Instructor_ID=${Instructor_ID}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.InsertContent = async (Instructor_ID, link, maxR) => {
  try {
    let pool = await sql.connect(config);
    // let maxR = await this.getMaxRound(Instructor_ID, C_ID);
    let result = pool.request().query(`UPDATE course_round
    SET content = '${link}'
    WHERE Instructor_ID=${Instructor_ID} and RoundNo=${maxR}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetAllAssignments = async (Course_ID, maxR) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select a.Deadline,a.A_ID from assignment as a ,assigment_in_course as ac 
      where ac.RoundNo=${maxR} and ac.Course_ID='${Course_ID}' and a.A_ID=ac.A_ID`);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.AddAssign = async (
  Desc,
  Deadline,
  date,
  C_ID,
  Instructor_ID
) => {
  try {
    let pool = await sql.connect(config);

    let result1 = await pool
      .request()
      .query(
        `insert into assignment (deadline,Description_,A_date) values('${Deadline}','${Desc}','${date}')`
      );
    let maxR = await this.getMaxRound(Instructor_ID, C_ID);
    let A_ID = await pool
      .request()
      .query(`select max(A_ID) as maxassignment from assignment`);
    let result = await pool.request()
      .query(`insert into assigment_in_course(Course_ID,RoundNo,A_ID) 
    values('${C_ID}',${maxR[0].maxroundno},${A_ID.recordset[0].maxassignment})`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetSubLink = async (Tr_ID, C_ID, As_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select submitionLink from submit_assignment as sa
    where sa.C_ID='${C_ID}' and sa.T_ID=${Tr_ID} and sa.A_ID=${As_ID}`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetAssignIDs = async (Course_ID, maxR) => {
  try {
    let pool = await sql.connect(config);
    // let maxR = await this.getMaxRound(Instructor_ID, Course_ID);
    let result = await pool.request()
      .query(`select sa.A_ID from submit_assignment as sa ,course_round as cr
      where  sa.C_ID ='${Course_ID}' and sa.Grade is  NULL and cr.RoundNo=${maxR}  and cr.Course_ID=sa.C_ID`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.AddGrade = async (Grade, T_ID, A_ID, C_ID) => {
  try {
    let pool = await sql.connect(config);
    // let maxR = await this.getMaxRound(Instructor_ID, C_ID);
    let result = pool.request().query(`update submit_assignment 
    set Grade=${Grade}
    where T_ID=${T_ID} and A_ID=${A_ID} and C_ID='${C_ID}'`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetAllCourseDates = async (Course_ID, maxR) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select resDate from course_round_room as crr 
      where crr.C_ID='${Course_ID}' and crr.round_No=${maxR}`);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetRoomID = async (resDate, C_ID, maxR) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select room_ID from course_round_room as crr 
      where crr.C_ID='${C_ID}' and crr.round_No=${maxR}  and resDate='${resDate}'`);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.AddQuiz = async (Topics, Qdate, C_ID, Instructor_ID) => {
  try {
    let pool = await sql.connect(config);

    let maxR = await this.getMaxRound(Instructor_ID, C_ID);
    let result = await pool
      .request()
      .query(
        `insert into quiz values('${Qdate}','${C_ID}',${maxR[0].maxroundno},'${Topics}')`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetQuizesInfo = async (Tr_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select distinct Topics_,Quiz_date,C_Name,room_ID,grade
      from quiz,course_ ,course_round_room,enrolled_in,trainee_quiz,course_round
      where Quiz_date< CAST(GETDATE() AS DATE)
      and quiz.C_ID=course_round.Course_ID
      and quiz.RoundNo=course_round.RoundNo
      and course_round_room.C_ID=course_round.Course_ID
      and course_round_room.round_No=course_round.RoundNo
      and course_round.Course_ID=course_.Course_ID
      and enrolled_in.Course_ID=course_round.Course_ID
      and quiz.Quiz_ID=trainee_quiz.Quiz_ID
      and enrolled_in.Trainee_ID=trainee_quiz.Trainee_ID
      and trainee_quiz.Trainee_ID=${Tr_ID}
      and resDate=Quiz_date`);
    console.log(result);
    // sql.close();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetNextQuizesInfo = async (Tr_ID) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool.request()
      .query(`select distinct Topics_,Quiz_date,C_Name,room_ID
      from quiz,course_ ,course_round_room,enrolled_in,trainee_quiz,course_round
      where Quiz_date>= CAST(GETDATE() AS DATE)
      and quiz.C_ID=course_round.Course_ID
      and quiz.RoundNo=course_round.RoundNo
      and course_round_room.C_ID=course_round.Course_ID
      and course_round_room.round_No=course_round.RoundNo
      and course_round.Course_ID=course_.Course_ID
      and enrolled_in.Course_ID=course_round.Course_ID
      and quiz.Quiz_ID=trainee_quiz.Quiz_ID
      and trainee_quiz.Trainee_ID=${Tr_ID}
      and resDate=Quiz_date`);
    console.log(result);
    // sql.close();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetAllQuizTopics = async (Course_ID, maxR) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select distinct Topics_ from quiz where  
      C_ID='${Course_ID}' and RoundNo=${maxR} `);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetThisQuizID = async (topics, C_ID, maxR) => {
  try {
    let pool = await sql.connect(config);

    let result = await pool
      .request()
      .query(
        `select Quiz_ID from quiz where Topics_='${topics}' and quiz.C_ID='${C_ID}' and RoundNo=${maxR}`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.AddTraineeQuiz = async (Tr_ID, Grade, topics, C_ID, maxR) => {
  try {
    let pool = await sql.connect(config);
    let Quiz_ID = await pool
      .request()
      .query(
        `select Quiz_ID from quiz where Topics_='${topics}' and quiz.C_ID='${C_ID}' and RoundNo=${maxR}`
      );
    // console.log(Quiz_ID.recordset[0].Quiz_ID);
    let result = await pool
      .request()
      .query(
        `insert into trainee_quiz values(${Tr_ID},${Quiz_ID.recordset[0].Quiz_ID},${Grade})`
      );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.CheckUsernameAd = async (Username) => {
  try {
    let pool = await sql.connect(config);

    let resultAd = await pool
      .request()
      .query(`select * from admin_ where Username='${Username}'`);

    return resultAd;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.CheckUsernameIns = async (Username) => {
  try {
    let pool = await sql.connect(config);

    let resultIns = await pool
      .request()
      .query(`select * from instructor where Username='${Username}'`);

    return resultIns;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.CheckUsernameTr = async (Username) => {
  try {
    let pool = await sql.connect(config);
    let resultTr = await pool
      .request()
      .query(`select * from trainee where Username='${Username}'`);
    return resultTr;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getMaxRound = async (Instructor_ID, C_ID) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select max( RoundNo) as maxroundno from  course_ as c, course_round as cr
      where cr.Instructor_ID=${Instructor_ID} and c.Course_ID=cr.Course_ID and c.Course_ID='${C_ID}'`
    );
    // console.log(result);
    return result.recordset;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.GetAvailRooms = async (resDate, C_ID, maxR, from, to) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .query(`select room_id from rooms  where room_id not in
      (select distinct crr.room_id from course_round_room as crr , course_round as cr
      where 
      ( (crr.resDate=  '${resDate}'  and crr.starttime>='${from}' and  crr.endtime>='${to}' )
       or( crr.resDate='${resDate}'  and crr.starttime<='${from}' and crr.endtime >='${to}' )
       or (crr.resDate='${resDate}'  and crr.starttime<='${from}' and  crr.endtime<='${to}' )
      or (  crr.resDate='${resDate}'  and crr.starttime>='${from}' and  crr.endtime<='${to}' ))
     )
      `);

    console.log(result);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.ReserveRoom = async (
  C_ID,
  ResDate,
  maxR,
  stDate,
  endDate,
  Room_ID
) => {
  try {
    let pool = await sql.connect(config);

    let result1 = await pool
      .request()
      .query(
        `  insert into course_round_room values (${Room_ID},'${C_ID}',${maxR},'${ResDate}','${stDate}','${endDate}');`
      );
    console.log(result1);

    return result1;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.Check = async (C_ID, ResDate, maxR) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(
        `select room_id from course_round_room as crr where crr.C_ID='${C_ID}' and crr.resDate='${ResDate}' and crr.round_No=${maxR}`
      );
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//Statistical Queries
module.exports.countCoursesWithinPeriod = async (td_id, sdate, edate) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select count(*) as countC from course_plan as cp , course_round as cr
      where cp.td_id=${td_id} 
      and cr.startdate between '${sdate}' and '${edate}'
      and cr.EndDate between '${sdate}' and '${edate}' 
      and cr.Course_ID=cp.C_ID and cr.RoundNo=cp.RoundNo`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.countTraineesinCoursesWithinPeriod = async (
  td_id,
  sdate,
  edate
) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select count(*) as countT from trainee as t , enrolled_in as e , course_plan as cp, course_round as cr
      where cr.RoundNo=e.RoundNo and cr.Course_ID=e.Course_ID and
      cp.td_id=${td_id} 
      and cr.startdate between '${sdate}' and '${edate}'
      and cr.EndDate between '${sdate}' and '${edate}'
      and cr.StartDate<cr.EndDate
      and cr.Course_ID=cp.C_ID and cr.RoundNo=cp.RoundNo
      and t.trainee_id=e.Trainee_ID`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.countTraineesByType = async (td_id, sdate, edate, jG) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select count(*) as traineebyjobgroup from trainee as t , enrolled_in as e , course_plan as cp, course_round as cr
      where cr.RoundNo=e.RoundNo and cr.Course_ID=e.Course_ID and
      cp.td_id=${td_id} 
      and cr.startdate between '${sdate}' and '${edate}'
      and cr.EndDate between '${sdate}' and '${edate}' 
      and cr.StartDate<cr.EndDate
      and cr.Course_ID=cp.C_ID and cr.RoundNo=cp.RoundNo
      and t.trainee_id=e.Trainee_ID and t.Jobgroup='${jG}'`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.countTraineesByArea = async (td_id, sdate, edate, area) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select count(*) as traineebyarea from trainee as t , enrolled_in as e , course_plan as cp, course_round as cr, trainee_company as tc
      where cr.RoundNo=e.RoundNo and cr.Course_ID=e.Course_ID and
      cp.td_id=${td_id} 
      and cr.startdate between '${sdate}' and '${edate}'
      and cr.EndDate between '${sdate}' and '${edate}' 
      and cr.StartDate<cr.EndDate
      and cr.Course_ID=cp.C_ID and cr.RoundNo=cp.RoundNo
      and t.trainee_id=e.Trainee_ID and t.Comp_ID=tc.tc_id and tc.Area='${area}'`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.countTraineesByGender = async (td_id, sdate, edate, gender) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(
      `select count(*)  as traineebygender from trainee as t , enrolled_in as e , course_plan as cp, course_round as cr
      where cr.RoundNo=e.RoundNo and cr.Course_ID=e.Course_ID and
      cp.td_id=${td_id}
      and cr.startdate between '${sdate}' and '${edate}'
      and cr.EndDate between '${sdate}' and '${edate}' 
      and cr.StartDate<cr.EndDate
      and cr.Course_ID=cp.C_ID and cr.RoundNo=cp.RoundNo
      and t.trainee_id=e.Trainee_ID and t.gender='${gender}'`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
