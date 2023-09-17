import { PropsWithChildren, useCallback } from "react";
import { bindDialogControls, closeDialog } from "../../store/store";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {} & PropsWithChildren;

export default function DialogWrapper({ children }: Props) {
  const refCallback = useCallback((ref: HTMLDialogElement | null) => {
    bindDialogControls(ref?.showModal.bind(ref), ref?.close.bind(ref));
  }, []);

  return (
    <dialog
      onClose={() => {
        closeDialog();
      }}
      ref={refCallback}
      className="modal"
    >
      <form method="dialog" className="modal-box">
        {children}
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
