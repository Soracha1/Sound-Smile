<p align="center">
  <img src="frontend/src/assets/logo.png" alt="Sound Smile" width="200" />
</p>

<h1 align="center">Sound Smile 🎵</h1>

<p align="center">
  แพลตฟอร์มแชร์และดาวน์โหลดเพลง ให้ผู้ใช้อัปโหลดผลงานของตัวเอง ค้นหาเพลงตามอารมณ์ และดาวน์โหลดไปใช้ได้
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-Realtime-010101?logo=socket.io" />
</p>

---

## ✨ ฟีเจอร์

### 👤 ผู้ใช้ทั่วไป

- สมัครสมาชิก / เข้าสู่ระบบด้วยอีเมล หรือ Google Login
- ฟังเพลงตัวอย่าง ค้นหา และกรองตามแท็กอารมณ์ เช่น Calm, Romantic, Confident
- อัปโหลดเพลงพร้อมภาพปก
- ดาวน์โหลดเพลง (มีโควตาอัปโหลด/ดาวน์โหลดต่อผู้ใช้)
- กดถูกใจและดูรายการเพลงโปรด
- ดูเพลงยอดนิยมตามยอดไลก์และยอดดาวน์โหลด
- แก้ไขโปรไฟล์ รูป bio และลิงก์โซเชียล
- แลกโค้ด Premium เพื่อเพิ่มสิทธิ์
- แดชบอร์ดสถิติส่วนตัว
- แจ้งเตือนแบบ real-time

### 🛡️ ผู้ดูแลระบบ (Admin)

- จัดการผู้ใช้และเพลง
- สร้างโค้ด Premium และดูประวัติการใช้โค้ด
- ดูกราฟวิเคราะห์ผู้ใช้ ยอดอัปโหลด/ดาวน์โหลด และเพลงยอดนิยม

---

## 🛠️ เทคโนโลยีที่ใช้

| ส่วน | เทคโนโลยี |
| --- | --- |
| Frontend | React, Vite, React Router, Axios, Chart.js, Recharts, SweetAlert2 |
| Backend | Node.js, Express, Mongoose, Multer, JWT, Passport (Google OAuth), Socket.io |
| Database | MongoDB |
| API Docs | Swagger |

---

## 📁 โครงสร้างโปรเจค

```
Sound-Smile/
├── backend/
│   ├── server.js        # API หลัก
│   ├── swagger.js       # เอกสาร API
│   ├── models/          # Mongoose models
│   ├── routes/
│   └── uploads/         # ไฟล์เพลง ปก และรูปโปรไฟล์
│
└── frontend/
    └── src/
        ├── home/        # หน้ารายการเพลง / รายละเอียดเพลง
        ├── upload/      # หน้าอัปโหลด
        ├── Profiles/    # โปรไฟล์ เพลงโปรด ประวัติดาวน์โหลด
        ├── Primium/     # หน้า Premium
        ├── admin/       # หน้าผู้ดูแลระบบ
        ├── analytic/    # แดชบอร์ดผู้ใช้
        └── help/        # About / Contact / Q&A
```

---

## 🚀 วิธีรันโปรเจค

> ต้องมี **Node.js 18+** และ **MongoDB**

### 1. Clone โปรเจค

```bash
git clone https://github.com/Soracha1/Sound-Smile.git
cd Sound-Smile
```

### 2. รัน Backend

สร้างไฟล์ `backend/.env`

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

จากนั้นรัน

```bash
cd backend
npm install
npm run dev
```

Backend จะรันที่ `http://localhost:5000`

### 3. รัน Frontend (เปิดอีก terminal)

```bash
cd frontend
npm install
npm run dev
```

เปิดเว็บที่ `http://localhost:5173`

---

## 📚 เอกสาร API

หลังรัน backend แล้ว เปิด **http://localhost:5000/api-docs** เพื่อดู API ทั้งหมดผ่าน Swagger

---

## 👥 ผู้จัดทำ

| ชื่อ | GitHub |
| --- | --- |
| ชื่อ-นามสกุล | [@kanokpornkan](https://github.com/kanokpornkan) |
| ชื่อ-นามสกุล | [@Soracha1](https://github.com/Soracha1) |
| ชื่อ-นามสกุล | [@ing1847](https://github.com/ing1847) |
| ชื่อ-นามสกุล | [@pakapolsut](https://github.com/pakapolsut) |

---

<p align="center">Made with 🎶 by Sound Smile Team</p>
