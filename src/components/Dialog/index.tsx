"use client";
import React from "react";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean
};

export default function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled
}: DialogProps) {
  if (!isVisible) return;
  function handleClose(){
    if(disabled) return
    onCancel()
  }
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50" onClick={handleClose}>
      <div
        className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30"
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        onClick={e => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-center text-xl font-bold">
          {title}
        </h3>
        <p id="dialog-content" className="text-justify">
          {content}
        </p>
        <div className="flex items-center justify-around">
          <button
            className="cursor-pointer flex items-center justify-center bg-slate-300 hover:bg-slate-400 transition text-slate-950 py-2 px-4 rounded-lg disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed"
            autoFocus
            onClick={handleClose}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer flex items-center justify-center bg-blue-400 hover:bg-blue-500 transition text-blue-50 py-2 px-4 rounded-lg disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed"
            onClick={onConfirm}
            disabled={disabled}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
