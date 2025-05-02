//Type Alias
type UserName = string | string[]
type UserAge = number
const name1: UserName = 'John Doe'
const name2: UserName = ['John Doe', 'Jane Doe']
const age1: UserAge = 18
const age2: UserAge = 19


//Composing Literal

// Union
const bill1: number | number[] = 390
const bill2: number | number[] = [290, 250, 300, 1290]
const bill3: (number | string)[] = [290, 250, 300, '1,290']

// Intersection (Composing)
type ProductInfo = { name: string; price: number; }
type ProductComputerDetail = { os: 'Windows' | 'macOS'; cpu: string; ram: number; }
type ProductSmartphoneDetail = { os: 'Android' | 'iOS', cpu: string; ram: number; }
type Computer = ProductInfo & ProductComputerDetail
type Smartphone = ProductInfo & ProductSmartphoneDetail
const pc: Computer = { name: 'Good Laptop', price: 29000, os: 'Windows', cpu: 'Intel', ram: 8 }
const mac: Computer = { name: 'Great Laptop', price: 39000, os: 'macOS', cpu: 'Apple', ram: 16 }
const phone: Smartphone = { name: 'iPhone 13', price: 26000, os: 'iOS', cpu: 'Apple', ram: 8 }

// Tuple
const coordinate: [number, number] = [13.918840204972751, 100.60899506117163]

// Literal
type Position = 'left' | 'right' | 'center' | undefined
const position1: Position = 'left'
const position2: Position = 'center'
let position3: Position


