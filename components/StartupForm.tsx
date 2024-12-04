"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const isPending = false;
  return (
    <form action={() => {}} className="startup-form">
      {/* Title */}
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />

        {errors.title && <p className="startup-form_errors">{errors.title}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_errors">{errors.description}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (ex. Texh, Health, Education...)"
        />

        {errors.category && (
          <p className="startup-form_errors">{errors.category}</p>
        )}
      </div>

      {/* Image */}
      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.link && <p className="startup-form_errors">{errors.link}</p>}
      </div>

      {/* Pitch */}
      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="startup-form_errors">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Startup"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
