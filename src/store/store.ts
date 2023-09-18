import { proxy, useSnapshot } from "valtio";

export type DialogType = "Create" | "Confirm Delete" | "Gallery";
export type DialogState = {
  showFn: (() => void) | undefined;
  closeFn: (() => void) | undefined;
  type?: DialogType;
  callback?: VoidFunction;
};

export const initialDialogState: DialogState = {
  showFn: undefined,
  closeFn: undefined,
  type: undefined,
  callback: () => {},
};

export const dialogProxy = proxy<DialogState>(initialDialogState);
export const useDialogStore = () => useSnapshot(dialogProxy);

export const bindDialogControls = (
  show: DialogState["showFn"],
  close: DialogState["closeFn"]
) => {
  dialogProxy.showFn = show;
  dialogProxy.closeFn = close;
};

export const openDialog = (
  dialogType: DialogType,
  callback?: DialogState["callback"]
) => {
  dialogProxy.type = dialogType;
  dialogProxy.showFn?.();
  if (callback) {
    dialogProxy.callback = callback;
  }
};

export const closeDialog = () => {
  if (!dialogProxy) return;

  dialogProxy.type = initialDialogState.type;
  dialogProxy.closeFn?.();
  dialogProxy.callback = initialDialogState.callback;
};
