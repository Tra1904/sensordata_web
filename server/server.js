const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

// Tạo máy chủ HTTP
const server = http.createServer((req, res) => {
  // Đọc tệp index.html và gửi nó cho client
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
});

// Kết nối máy chủ WebSocket với máy chủ HTTP
const io = socketio(server);

// Sự kiện khi một client kết nối
io.on('connection', (socket) => {
  console.log('A client connected.');

  // Sự kiện khi máy chủ nhận được dữ liệu từ Raspberry Pi
  socket.on('raspberryPiData', (data) => {
    console.log('Data from Raspberry Pi:', data);
    // Xử lý dữ liệu ở đây nếu cần

    // Gửi dữ liệu nhiệt độ, độ ẩm, nhiệt độ DS18B20, EC, Salinity (ppm), và Salinity (g/L) đến client
    io.emit('sensorData', {
      temperature: data.temperature,
      humidity: data.humidity,
      tempDs18b20: data.tempDs18b20,
      ec: data.EC,
      salinity_ppm: data.salinity_ppm,
      salinity_gl: data.salinity_gl
    });
  });

  // Sự kiện khi một client ngắt kết nối
  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });
});

// Lắng nghe các kết nối đến cổng 8000
server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
