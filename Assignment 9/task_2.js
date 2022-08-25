function Student() {
    this.name = "abc";
    this.section = 1;
    this.id = 2;
    this.roll_number = 3;
    this.number_of_subjects = 4;
    this.Total_marks = 20;
    this.marks = 20;
    this.student_details = function () {
      return "Name_of_student : " + this.name +"   "+
        "   Student_section : " + this.section+"   "+
       "   Student_id : " + this.id+"   "+
        "   Student_roll_number : " + this.roll_number+"   "+
       "   Student_preferred_subjects : " + this.number_of_subjects+"   "+
        "   Total_marks : " + this.Total_marks+"   "+
         "   Marks_obtained : " + this.marks;
    };
  }
  var student_object = new Student();
  console.log(student_object.student_details());