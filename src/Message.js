import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { forwardRef } from "react";
import "./Messages.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div
      ref={ref}
      className={`message ${isUser && "message__user"} `} //same code as
      //   card classname just different way of writing
      // *you can comment this one out and it'll still work*
    >
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"} 🐱 :`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
