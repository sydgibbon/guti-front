export interface ModalCustomProps {
  children?: React.ReactNode;
  state: boolean;
  handleClose: any;
  title?: string
  titleClassName?: string
  crossClassName?: string
  content?: any
  contentClassName?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonHandle?: () => void
  secondaryButtonHandle?: () => void
}
