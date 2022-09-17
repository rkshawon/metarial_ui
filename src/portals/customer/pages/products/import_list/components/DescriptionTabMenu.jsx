import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";

export default function DescriptionTabMenu() {
  return (
    <>
      <Editor
        textareaName="Description"
        initialValue="<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        similique voluptatibus fugit explicabo optio porro, omnis provident
        autem exercitationem minus hic impedit amet ex. Expedita labore
        voluptate debitis velit ut!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta similique voluptatibus fugit explicabo optio
        porro, omnis provident autem exercitationem minus hic impedit amet ex.
        Expedita labore voluptate debitis velit ut!
      </p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div style={{ textAlign: "right" }}>
        <Button sx={{ width: "auto" }} variant="lightblue">
          Save
        </Button>
      </div>
    </>
  );
}
