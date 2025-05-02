const name = 'John Doe'
// ประกาศตัวแปร name แบบค่าคงที่ (const) โดยให้ค่าเป็น 'John Doe'
// TypeScript จะเดาว่า name เป็นชนิด string (ชนิดข้อความ)

let location = 'Thailand'
// ประกาศตัวแปร location แบบเปลี่ยนค่าได้ (let) โดยให้ค่าเริ่มต้นเป็น 'Thailand'
// TypeScript จะเดาว่า location เป็นชนิด string

let age = 20
// ประกาศตัวแปร age แบบเปลี่ยนค่าได้ (let) โดยให้ค่าเริ่มต้นเป็น 20
// TypeScript จะเดาว่า age เป็นชนิด number (ตัวเลข)

age = 19
// เปลี่ยนค่า age เป็น 19 (ถูกต้อง เพราะเป็นตัวเลขเหมือนเดิม)

age++
// เพิ่มค่า age ทีละ 1 (ถูกต้อง เพราะ age เป็นตัวเลข)

age = '21'
// พยายามเปลี่ยนค่า age เป็น '21' (string) ซึ่งผิด เพราะ age ต้องเป็น number เท่านั้น
// TypeScript จะฟ้อง error

let product: string = 'Book'
// ประกาศตัวแปร product โดยระบุชนิดข้อมูลชัดเจนว่าเป็น string และให้ค่าเริ่มต้นเป็น 'Book'

let cost: number = 10
// ประกาศตัวแปร cost โดยระบุชนิดข้อมูลชัดเจนว่าเป็น number และให้ค่าเริ่มต้นเป็น 10

let inStock: boolean = true
// ประกาศตัวแปร inStock โดยระบุชนิดข้อมูลชัดเจนว่าเป็น boolean (จริง/เท็จ) และให้ค่าเริ่มต้นเป็น true

cost = 25
// เปลี่ยนค่า cost เป็น 25 (ถูกต้อง เพราะเป็นตัวเลข)

cost *= 0.7
// นำค่า cost คูณด้วย 0.7 (ถูกต้อง เพราะเป็นตัวเลข)

cost = '289'
// พยายามเปลี่ยนค่า cost เป็น '289' (string) ซึ่งผิด เพราะ cost ต้องเป็น number เท่านั้น
// TypeScript จะฟ้อง error