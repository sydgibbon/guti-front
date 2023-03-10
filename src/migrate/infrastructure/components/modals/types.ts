export interface ModalCustomProps {
  children?: React.ReactNode;
  state: boolean;
  handleClose: () => void;
  title?: string
  titleClassName?: string
  crossClassName?: string
  content?: string
  contentClassName?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonHandle?: () => void
  secondaryButtonHandle?: () => void
}
