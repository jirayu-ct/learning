const data: any = ['whatever', 123, true, [false, '123'], { date: new Date() }]
// ประกาศตัวแปร data โดยระบุชนิดข้อมูลเป็น any (คืออะไรก็ได้)
// ข้อมูลใน array นี้มีทั้ง string, number, boolean, array, และ object

const nameA: string = 'John Doe'
// ประกาศตัวแปร name โดยระบุชนิดข้อมูลเป็น string (ข้อความ)

const ageA: number = 18
// ประกาศตัวแปร age โดยระบุชนิดข้อมูลเป็น number (ตัวเลข)

const active: boolean = true
// ประกาศตัวแปร active โดยระบุชนิดข้อมูลเป็น boolean (จริง/เท็จ)

const birthDate: Date = new Date('1998-01-01')
// ประกาศตัวแปร birthDate โดยระบุชนิดข้อมูลเป็น Date (วันเวลา)

const classrooms: string[] = ['A1', 'B2', 'C3']
// ประกาศตัวแปร classrooms โดยระบุชนิดข้อมูลเป็น array ของ string

const subjectList: { subject: string; score: number }[] = [
// ประกาศตัวแปร subjectList เป็น array ของ object ที่มี property ชื่อ subject (string) และ score (number)
  { subject: 'Math', score: 80 },
  { subject: 'English', score: 75 },
]

const getSubjectScore1: ((subject: string) => number) = (subject) => {
  return subjectList.find((item) => item.subject === subject)?.score ?? -1
}
// ประกาศตัวแปร getSubjectScore1 เป็นฟังก์ชันที่รับ string แล้วคืนค่าเป็น number
// ใช้หา score ของวิชาตามชื่อ ถ้าไม่เจอจะคืนค่า -1

const getSubjectScore15 = (subject: string): number => {
    return subjectList.find((item) => item.subject === subject )?.score ?? -1
}

function getSubjectScore2(subject: string): number {
  return subjectList.find((item) => item.subject === subject)?.score ?? -1
}
// ประกาศฟังก์ชัน getSubjectScore2 รับ string แล้วคืนค่าเป็น number
// ทำงานเหมือน getSubjectScore1

// function showName(name: string): void {
//   console.log(name)
// }

// ประกาศฟังก์ชัน showName รับ string แล้วไม่คืนค่าอะไร (void)
// แค่แสดงชื่อใน console

console.log(getSubjectScore15('Math'))
