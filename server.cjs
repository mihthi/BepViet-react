const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
// const router = jsonServer.router('db.json');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware tạo độ trễ 1.5 giây và tỷ lệ lỗi 30%
server.use((req, res, next) => {
  setTimeout(() => {
    // Chỉ tạo lỗi với các thao tác Thêm, Sửa, Xóa
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
      if (Math.random() < 0.3) {
        return res.status(500).json({ error: "Lỗi mạng giả lập để test Rollback!" });
      }
    }
    next();
  }, 1500); 
});

server.use(router);
server.listen(4000, () => {
  console.log('JSON Server đang chạy tại http://localhost:4000');
});