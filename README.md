# Zcrum - Agile Project Management Tool 🚀

Zcrum is a project management application based on the **Scrum methodology**, designed to help teams organize and manage their projects more efficiently. With a user-friendly interface and powerful features, you can easily plan, track, and successfully complete your projects. 🎯

---

![Uygulama Ekran Görüntüsü](https://raw.githubusercontent.com/enesmetek/zcrum/refs/heads/main/screenshots/1.png)

## ✨ Features

✅ **Task Management** – Create, prioritize, and track tasks effortlessly. 📌

✅ **Kanban Board** – Manage your workflow visually with an intuitive drag-and-drop interface. 🏗️

✅ **Real-Time Updates** – Stay in sync with your team and track project changes instantly. 🔄

✅ **Customizable Workflows** – Adapt work processes to fit your team's specific needs. ⚙️

✅ **Responsive Design** – Enjoy a seamless experience on both desktop and mobile devices. 📱💻

## Screenshots

![Uygulama Ekran Görüntüsü](https://raw.githubusercontent.com/enesmetek/zcrum/refs/heads/main/screenshots/2.png)

![Uygulama Ekran Görüntüsü](https://raw.githubusercontent.com/enesmetek/zcrum/refs/heads/main/screenshots/3.png)

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS 🎨
- **Backend:** Prisma, PostgreSQL 🗄️
- **Authentication:** Clerk 🔑
- **UI Components:** Shadcn UI, Lucide Icons 🎭
- **State Management:** React Hook Form, Zod 🔍
- **Drag & Drop:** @hello-pangea/dnd 🖱️
- **Markdown Editor:** @uiw/react-md-editor 📝

📸 _Screenshot Placeholder: Task Details Page_

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/enesmetek/zcrum.git
cd zcrum
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4️⃣ Run Database Migrations
```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. 🌍

📸 _Screenshot Placeholder: Dashboard_

---

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

1. **Fork** the repository 🍴
2. **Create a new branch** (`git checkout -b feature-name`) 🌿
3. **Commit your changes** (`git commit -m 'Added feature: X'`) 🔧
4. **Push the branch** (`git push origin feature-name`) 🚀
5. **Open a Pull Request** 🔄

📸 _Screenshot Placeholder: Contribution Guide_

---

## 📜 License

This project is licensed under the **MIT License**. 📄

---

🎯 **Manage your projects more effectively with Zcrum and boost your team’s productivity!** 🚀

