import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

function EmailRow({ id, title, description, subject, time }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/mail")} className="emailRow">
      <div class="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div class="emailRow__message">
        <h4>
          {subject} <span class="emailRow__description"> - {description}</span>
        </h4>
      </div>

      <p class="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
