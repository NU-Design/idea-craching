import MarkdownViewer from '../../markdown_viewer/MarkdownViewer';
import MonacoEditor from '../../monaco_editor/MonacoEditor';
import './editor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import ResponsiveAppBar from '../../navbar/ResponsiveAppBar';
import { FloatButton } from 'antd';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useNavigate } from 'react-router-dom';

import { addIdea, getAncestorByIdeaId, updateIdeaByIdeaId } from "../../../common/services/db/ideas";
import { GetUserRole } from '../../../common/services/db/users';
import { auth } from '../../../common/services/db/auth';

const Editor = (props) => {
  const [viewCode, setViewCode] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [media, setMedia] = useState("https://i.imgur.com/3xhQ54s.jpeg");
  const [userId, setUserId] = useState("");
  const [parentId, setParentId] = useState("");
  const [ancestorId, setAncestorId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setUserId(auth.currentUser.uid);
      if (props.parent != null && props.parent.length > 0) {
        const tmp = props.parent;
        console.log("Parent tmp", tmp);
        setAncestorId(getAncestorByIdeaId(tmp));
      }
    }
    
    fetchData();
  }, []);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const onConfirm = async (e) => {
    const data = {
      title: title,
      brief: brief,
      media: {
        name: "_media",
        type: "image",
        source: {
          url: media,
        }
      },
      author: userId,
      parent: "_PARENT",
      ancestor: "_ANCESTOR",
      likes: 0,
      reposts: 0
    };

    const role = await GetUserRole(userId);
    // console.log("data", data);
    // console.log("role", role);

    const ideaRef = await addIdea(data, viewCode, role);
    console.log("Idea id: ", ideaRef.id);
    
    const rel = {};
    if (parentId == null || parentId.length === 0) {
      rel["parent"] = ideaRef.id;
    } else {
      rel["parent"] = parentId;
    }

    console.log("GGG", ancestorId.length, ancestorId, ideaRef.id);

    if (ancestorId == null || ancestorId.length === 0) {
      rel["ancestor"] = ideaRef.id;
    } else {
      rel["ancestor"] = ancestorId;
    }
        
    const tmp = await updateIdeaByIdeaId(ideaRef.id, rel);
    // console.log("rel", rel, tmp);

    navigate('/home');
  }


  return (
    <>
    <div>
      <ResponsiveAppBar />
      
      <div>
        <h2 className="notes">
          Embrace your creativity and unleash your ideas on paper, the
          possibilities are endless!
        </h2>
      </div>

      <Row>
        <Col span={14} push={10}>
          <MarkdownViewer markdown={viewCode} />
        </Col>

        <Col span={10} pull={14}>
          <MonacoEditor setViewCode={setViewCode} />
        </Col>
      </Row>

      <FloatButton
        description="Post"
        shape="square"
        onClick={showModal}
      /> 
    </div>

    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>Submission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label>Title:  
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
            
            {/* //TODO: enable overflow */}
          <label>Brief Introduction (max 200 chars):  
            <input type="text" value={brief} onChange={(e) => setBrief(e.target.value)} />
          </label>
          
          <label>Media Url:  
            <input type="text" value={media} onChange={(e) => setMedia(e.target.value)} />
          </label>
          
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={hideModal}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </Modal.Footer>
      </Modal>  
      
    </>
  );
};

export default Editor;
