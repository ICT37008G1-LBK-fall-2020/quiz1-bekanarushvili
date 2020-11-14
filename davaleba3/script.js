// დაწერეთ ფუნქცია რომელიც ღებულობს სტუდენტების 2 მასივს
// (თითო სტუდენტი წარმოდგენილია ობიექტით შემდეგი ველებით
//     {id: number, name: string, gpa: number}) და დააბრუნებს
// უდიდესი gpa-ს მქონე 5 სტუდენტს მასივის სახით. თუ რამდენიმე
// სტუდენტი არის ერთნაირი gpa-თი და შედის ტოპ 5 gpa-ებში უნდა
// დააბრუნოს ყველა ასეთი სტუდენტი (მაგალითად თუ სტუდენტებს შემდეგი
//     gpa აქვთ: [2, 2, 3.5, 3.5 4, 4, 4, 4] ფუნქციამ უნდა დააბრუნოს
//     შემდეგი gpa-ს მქონე სტუდენტი: [3.5, 3.5 4, 4, 4, 4] მიუხედავად
// იმსია რომ 5-ზე მეტი იქნება)
// function getTopStudents(studentsArray1, studentsArray2){ }

let studentsArray1 =
[
    {id: 1, name: 'nika', gpa: 4},
    {id: 2, name: 'luka', gpa: 3.5},
    {id: 3, name: 'davit', gpa: 2},
    {id: 4, name: 'usaxelo', gpa: 1}
];
let studentsArray2 =
[
    {id: 1, name: 'ana', gpa: 4},
    {id: 2, name: 'nino', gpa: 2.5},
    {id: 3, name: 'natia', gpa: 2.5},
    {id: 4, name: 'mariam', gpa: 3},
    {id: 5, name: 'tata', gpa: 1}
];

function getTopStudents(studentsArray1, studentsArray2)
{
    let allStudents = studentsArray1.concat(studentsArray2);
    allStudents.sort((a, b) => a.gpa - b.gpa);

    let result = [];


    for (let i=allStudents.length-5; i<allStudents.length; i++)
    {
        result.push(allStudents[i]);
    }

    let lastStudentIndex = allStudents.length - 5;

    for (let i=lastStudentIndex-1; allStudents[i].gpa == allStudents[lastStudentIndex].gpa; i--)
    {
        result.push(allStudents[i]);
    }

    
    result.sort((a, b) => a.gpa - b.gpa);

    return result;
}

let answer = getTopStudents(studentsArray1, studentsArray2);
alert (answer.map(c => c.name));
