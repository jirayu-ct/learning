# TypeScript Learning Project

## 📋 เกี่ยวกับโปรเจค
โปรเจคนี้เป็นส่วนหนึ่งของการเรียนรู้ TypeScript โดยใช้ Node.js และ pnpm เป็น package manager

## 🚀 การติดตั้งและเริ่มต้นโปรเจค

### การติดตั้ง
1. เริ่มต้นโปรเจค
```bash
pnpm init
pnpm i -D typescript
```

2. สร้างไฟล์ tsconfig.json
```bash
tsc --init
```

### การตั้งค่า TypeScript
1. เพิ่มคำสั่ง build ใน package.json
```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

2. ตั้งค่า output directory ใน tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

3. รันคำสั่ง build
```bash
pnpm build
```

## 📁 โครงสร้างโปรเจค

### การตั้งค่า rootDir
- สร้างโฟลเดอร์ `src` สำหรับเก็บไฟล์ TypeScript
- ตั้งค่า rootDir ใน tsconfig.json
```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

### การตั้งค่า include/exclude
- ตั้งค่า include ใน tsconfig.json เพื่อระบุไฟล์ที่จะ compile
```json
{
  "include": ["src/**/*"]
}
```

- ตั้งค่า exclude ใน tsconfig.json เพื่อระบุไฟล์ที่ไม่ต้องการ compile
```json
{
  "exclude": ["node_modules", "dist"]
}
```

## ⚙️ การตั้งค่า TypeScript เพิ่มเติม

### การตั้งค่าที่สำคัญ
1. เปิดใช้งานการ import ไฟล์ JSON
```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

2. เปิดใช้งานการตรวจสอบพารามิเตอร์ที่ไม่ได้ใช้งาน
```json
{
  "compilerOptions": {
    "noUnusedParameters": true
  }
}
```

3. เปิดใช้งานการตรวจสอบ optional properties แบบเข้มงวด
```json
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true
  }
}
```

## 📝 คำอธิบายเพิ่มเติม
- `src/**/*` หมายถึง ไฟล์ทั้งหมดในโฟลเดอร์ src และโฟลเดอร์ย่อยทั้งหมด
- `dist` คือโฟลเดอร์ที่เก็บไฟล์ JavaScript ที่ถูก compile จาก TypeScript
- `node_modules` คือโฟลเดอร์ที่เก็บ dependencies ทั้งหมดของโปรเจค
- `resolveJsonModule` ช่วยให้สามารถ import ไฟล์ JSON ได้โดยตรง
- `noUnusedParameters` ช่วยตรวจสอบพารามิเตอร์ที่ไม่ได้ใช้งานในฟังก์ชัน
- `exactOptionalPropertyTypes` ช่วยให้การตรวจสอบ optional properties แม่นยำมากขึ้น

## 🔧 การใช้งาน
1. เขียนโค้ด TypeScript ในโฟลเดอร์ `src`
2. รันคำสั่ง `pnpm build` เพื่อ compile เป็น JavaScript
3. ไฟล์ที่ถูก compile จะถูกเก็บไว้ในโฟลเดอร์ `dist`