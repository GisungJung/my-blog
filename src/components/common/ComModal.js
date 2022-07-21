import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ComModal() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>초기화</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>초기화 하시겠습니까?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">취소</Button>
        <Button variant="primary">초기화</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ComModal;