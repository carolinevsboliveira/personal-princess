import { Modal, Button, Icon } from 'semantic-ui-react'
import { ModalPhotoBox } from './Styles/MainStyle'

interface iProps {
  setModalOpened: Function, 
  modalOpened: boolean,
  selectedImage: string
}
function PhotoModal(props: iProps) {
  return (
    <Modal
      basic
      onClose={() => props.setModalOpened(false)}
      onOpen={() => props.setModalOpened(true)}
      open={props.modalOpened}
      size='small'
      actions={false}
    >
      <Modal.Content>
       <ModalPhotoBox>
         <img src={props.selectedImage} alt=""/>
       <Button color='red' inverted onClick={() => props.setModalOpened(false)}>
          <Icon name='remove' /> close
        </Button>
       </ModalPhotoBox>

      </Modal.Content>
    </Modal>
  )
}

export default PhotoModal
