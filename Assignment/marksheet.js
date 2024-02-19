//document.write("<tr><th>Subjects</th><th>Marks</th><th>Out of</th></tr>");
let rollno= 56;
let name="Hina";
let tname="Miss Hina Imtiaz";
let cla="8th";
let emarks=parseInt(prompt("Enter English's marks out of 100:"));
let umarks=89;
let pmarks=78;
let cmarks=58;
let imarks=90;
let total= emarks+umarks+pmarks+cmarks+imarks;
let per= total/500*100;
let grade;
if(per<=100 && per>=89)//90-100
        {grade="A+";}
else if(per<=90 && per>=80)//80-89
    {grade="A";}
else if(per<=80 && per>=70)//70-79
    {grade="B";}
else if(per<=70 && per>=60)//60-69
    {grade="C";}
else if(per<=60 && per>=50)//50-59
    {grade="D";}
else{(grade="U");}
//now create marksheet
document.write("<h3 style='color:red;text-decoration:underline;'>MARKSHEET</h3>");
document.write("Roll NO:",rollno);
document.write("<br>Name:",name);
document.write("<br>Class:",cla);
document.write("<br>Teacher Name:",tname,"<br>");
document.write("<br><table border=4>");
document.write("<tr><th>Subjects</th><th>Marks Obtained</th><th>Out Of</th></tr>");
document.write("<tr><td>English</td><td>",emarks,"</td><td>100</td>");
document.write("<tr><td>Urdu</td><td>",umarks,"</td><td>100</td>");
document.write("<tr><td>Pakistan Studies</td><td>",pmarks,"</td><td>100</td>");
document.write("<tr><td>Computer Studies</td><td>",cmarks,"</td><td>100</td>");
document.write("<tr><td>Islamiyat</td><td>",imarks,"</td><td>100</td>");
document.write("<tr><td>Total</td><td>",total,"</td><td>500</td>");
document.write("<tr><td>Percentage</td><td>",per,"</td><td></td>");
document.write("<tr><td>Grade</td><td>",grade,"</td><td></td>");


 