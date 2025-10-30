"use client";
import React from "react";
import ButtonComponent from "../Button";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export default function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled,
}: DialogProps) {
  if (!isVisible) return;
  function handleClose() {
    if (disabled) return;
    onCancel();
  }
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30"
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-center text-xl font-bold">
          {title}
        </h3>
        <p id="dialog-content" className="text-justify">
          {content}
        </p>
        <div className="flex items-center justify-around">
          <ButtonComponent variant="ghost" autoFocus onClick={handleClose} disabled={disabled}>
            Cancelar
          </ButtonComponent>
          <ButtonComponent variant="default" onClick={onConfirm} disabled={disabled}>
            OK
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
