import { Checkbox } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function MailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="mailList">
      <div class="mailList__settings">
        <div class="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div class="mailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div class="mailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div class="mailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
        <EmailRow
          subject="Hello, streamer"
          title="Twitch"
          description="This message is for you"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default MailList;
