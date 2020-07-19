import Echo from "laravel-echo";
import io from "socket.io-client";

window.io = io;

export const echo = new Echo({
  broadcaster: "socket.io",
  host: "http://localhost:6001",
});
