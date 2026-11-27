<p align="center"> <img src="frontend/src/assets/soundsmile-logo.png" alt="Sound Smile" width="260" /> </p> <h1 align="center">Sound Smile 🎵</h1> <p align="center"> แพลตฟอร์มแชร์และดาวน์โหลดเพลง/เสียงประกอบ ที่ผู้ใช้อัปโหลดผลงานของตัวเอง ค้นหาเพลงตามอารมณ์ และดาวน์โหลดไปใช้ได้ </p> <p align="center"> <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/Socket.io-realtime-010101?logo=socket.io" /> </p> <p align="center"> 🔗 <b>Demo:</b> <a href="https://YOUR-FRONTEND.vercel.app">https://YOUR-FRONTEND.vercel.app</a> &nbsp;·&nbsp; 📚 <b>API Docs:</b> <a href="https://YOUR-BACKEND.onrender.com/api-docs">Swagger</a> </p>
📸 ภาพตัวอย่าง
<!-- ใส่ภาพหน้าจอ: สร้างโฟลเดอร์ docs/screenshots แล้วเปลี่ยน path ด้านล่าง -->
หน้าแรก	รายละเอียดเพลง	แผงผู้ดูแล
Home	Song	Admin
✨ ฟีเจอร์หลัก

ผู้ใช้ทั่วไป

🔐 สมัครสมาชิก / เข้าสู่ระบบด้วยอีเมล หรือ Google Login
🎧 ฟังเพลงตัวอย่าง ค้นหา และกรองตาม แท็กอารมณ์ (Calm, Romantic, Confident ฯลฯ)
⬆️ อัปโหลดเพลงพร้อมภาพปก
⬇️ ดาวน์โหลดเพลง (มีโควตาการดาวน์โหลด/อัปโหลดต่อผู้ใช้)
❤️ กดถูกใจและดูรายการเพลงโปรด
🏆 จัดอันดับเพลงยอดนิยมตามยอดไลก์และยอดดาวน์โหลด และแนะนำเพลง
👤 โปรไฟล์ส่วนตัว แก้ไขรูป, bio และลิงก์โซเชียล (TikTok / Instagram / Facebook)
💎 Premium แลกโค้ด (Redeem Code) เพื่อเพิ่มสิทธิ์
📊 แดชบอร์ดสถิติส่วนตัว
🔔 แจ้งเตือนแบบ real-time ด้วย Socket.io

ผู้ดูแลระบบ (Admin)

จัดการผู้ใช้ (เปลี่ยนสิทธิ์ / ลบ)
จัดการเพลง (แก้ไข / ลบ)
สร้างโค้ด Premium และดูประวัติการใช้โค้ด
ดูกราฟวิเคราะห์ เช่น การเติบโตของผู้ใช้ ยอดอัปโหลด/ดาวน์โหลด และเพลงยอดนิยม
🛠️ เทคโนโลยีที่ใช้
ส่วน	เทคโนโลยี
Frontend	React 18, Vite, React Router, Axios, Chart.js / Recharts, SweetAlert2, Socket.io-client
Backend	Node.js, Express, Mongoose, Multer (อัปโหลดไฟล์), JWT, Passport (Google OAuth), Socket.io, node-cron, Swagger
Database	MongoDB (Atlas)
Deploy	Vercel (frontend), Render (backend), MongoDB Atlas
📁 โครงสร้างโปรเจค
Sound-Smile/
├── backend/
│   ├── server.js          # API หลัก, Auth, Socket.io
│   ├── swagger.js         # เอกสาร API (/api-docs)
│   ├── models/            # Mongoose models
│   ├── routes/
│   └── uploads/           # ไฟล์เพลง / ปก / รูปโปรไฟล์ที่อัปโหลด
└── frontend/
    └── src/
        ├── home/          # รายการเพลง, รายละเอียดเพลง
        ├── upload/        # หน้าอัปโหลด
        ├── Profiles/      # โปรไฟล์, เพลงโปรด, ประวัติดาวน์โหลด
        ├── Primium/       # หน้า Premium / แลกโค้ด
        ├── admin/         # แผงผู้ดูแลระบบ
        ├── analytic/      # แดชบอร์ดผู้ใช้
        ├── help/          # About, Contact, Q&A
        └── config.js      # URL ของ backend
🚀 วิธีรันในเครื่อง

สิ่งที่ต้องมี: Node.js 18 ขึ้นไป และ MongoDB (ใช้ในเครื่อง หรือใช้ Atlas ก็ได้)

bash
git clone https://github.com/Soracha1/Sound-Smile.git
cd Sound-Smile

1) Backend

bash
cd backend
cp .env.example .env     # แล้วใส่ค่า MONGO_URL, JWT_SECRET ฯลฯ
npm install
npm run dev              # http://localhost:5000

2) Frontend (เปิดอีก terminal)

bash
cd frontend
npm install
npm run dev              # http://localhost:5173
Environment Variables
ไฟล์	ตัวแปร	คำอธิบาย
backend/.env	MONGO_URL	connection string ของ MongoDB
	JWT_SECRET	ค่าลับสำหรับเซ็น token
	BACKEND_URL / FRONTEND_URL	URL ของแต่ละฝั่ง (ใช้กับ CORS และ Google Login)
	GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET	ไม่บังคับ ใส่เมื่อจะใช้ Google Login
frontend/.env	VITE_API_URL	URL ของ backend
